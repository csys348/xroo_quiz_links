function normalizeAnswer(str) {
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function isCorrect(userAnswer, validAnswers) {
  const normalized = normalizeAnswer(userAnswer);
  return validAnswers.some((a) => normalizeAnswer(a) === normalized);
}

function getMissionIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('m') || '';
}

function renderQuiz(mission) {
  const themeClass = `theme-${mission.theme}`;
  document.body.classList.add(themeClass);

  const container = document.getElementById('quiz-root');
  if (!container) return;

  const timeCoordHtml = mission.showTimeCoordinate
    ? `<div class="time-coordinate">[20 <span class="damaged">□□</span> . <span class="damaged">□</span> . <span class="damaged">□</span>]</div>
       <p style="text-align:center;color:var(--text-muted);font-size:0.9rem;margin-bottom:1.5rem;">손상된 시간 좌표를 복원하세요!</p>`
    : '';

  const questionsHtml = mission.questions
    .map((q, i) => {
      const label = q.label ? `<div class="q-label">${q.label}</div>` : '';
      const text = q.text.replace(/\n/g, '<br>');
      return `
        <div class="question-block" data-index="${i}">
          ${label}
          <div class="q-text">${text}</div>
          <div class="input-group">
            <input type="text" class="quiz-input" id="answer-${i}" placeholder="정답을 입력하세요" autocomplete="off" />
          </div>
        </div>`;
    })
    .join('');

  container.innerHTML = `
    <div class="quiz-panel">
      <div class="mission-label">${mission.missionNum}</div>
      <h2>${mission.title}</h2>
      ${timeCoordHtml}
      <form id="quiz-form">
        ${questionsHtml}
        <button type="submit" class="btn btn-primary">기억 복원하기</button>
      </form>
      <div id="feedback" class="feedback"></div>
    </div>
  `;

  document.title = `${mission.title} | 철길숲 기억 복원`;

  const form = document.getElementById('quiz-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswers(mission);
  });

  const firstInput = document.getElementById('answer-0');
  if (firstInput) firstInput.focus();
}

function checkAnswers(mission) {
  const feedback = document.getElementById('feedback');
  let allCorrect = true;

  mission.questions.forEach((q, i) => {
    const input = document.getElementById(`answer-${i}`);
    const userAnswer = input.value;

    if (!isCorrect(userAnswer, q.answers)) {
      allCorrect = false;
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 500);
    } else {
      input.classList.remove('error');
    }
  });

  feedback.classList.remove('success', 'error', 'show');

  if (allCorrect) {
    feedback.className = 'feedback success show';
    const msg = mission.successMessage.replace(/\n/g, '<br>');
    const btnHtml = mission.nextUrl
      ? `<a href="${mission.nextUrl}" class="btn btn-next" target="_blank" rel="noopener noreferrer">다음 장소로 이동 →</a>`
      : '';
    feedback.innerHTML = msg + btnHtml;
    mission.questions.forEach((_, i) => {
      const input = document.getElementById(`answer-${i}`);
      input.disabled = true;
    });
    document.querySelector('.btn-primary').disabled = true;
    document.querySelector('.btn-primary').textContent = '복원 완료';
  } else {
    feedback.className = 'feedback error show';
    feedback.textContent = mission.errorMessage;
  }
}

function initQuizPage() {
  const missionId = getMissionIdFromUrl();
  const mission = MISSIONS[missionId];

  if (!mission) {
    document.getElementById('quiz-root').innerHTML = `
      <div class="quiz-panel">
        <h2>미션을 찾을 수 없습니다</h2>
        <p style="color:var(--text-muted);margin-top:1rem;">올바른 미션 링크를 확인해 주세요.</p>
        <a href="index.html" class="btn btn-secondary" style="display:inline-flex;margin-top:1.5rem;">처음으로</a>
      </div>`;
    return;
  }

  renderQuiz(mission);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quiz-root')) initQuizPage();
});
