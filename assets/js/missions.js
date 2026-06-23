const MISSIONS = {
  'mission1-1': {
    id: 'mission1-1',
    theme: 'rail',
    missionNum: '미션 1 · 1/3',
    title: '철로의 기억을 복원하라',
    questions: [
      {
        text: '첫번째 조형물을 찾아 이름을 입력하세요.',
        answers: [
          '내일로',
          '<Do·Do Project>-내일로',
          '<Do·Do Project> - 내일로',
          'Do·Do Project',
        ],
      },
    ],
    successMessage:
      '정답입니다!\n다음 장소로 넘어가는 버튼은 조형물 주변에 있습니다. 버튼을 클릭하여 다음 장소로 이동하세요!',
    errorMessage: '정답을 다시 입력하세요.',
  },

  'mission1-2': {
    id: 'mission1-2',
    theme: 'rail',
    missionNum: '미션 1 · 2/3',
    title: '철로의 기억을 복원하라',
    questions: [
      {
        text: '두번째 조형물을 찾아 이름을 입력하세요.',
        answers: ['자연을 보다', 'See Nature', 'see nature', 'See nature'],
      },
    ],
    successMessage:
      '정답입니다!\n다음 장소로 넘어가는 버튼은 조형물 주변에 있습니다. 버튼을 클릭하여 다음 장소로 이동하세요!',
    errorMessage: '정답을 다시 입력하세요.',
  },

  'mission1-3': {
    id: 'mission1-3',
    theme: 'rail',
    missionNum: '미션 1 · 3/3',
    title: '철로의 기억을 복원하라',
    questions: [
      {
        text: '세번째 조형물을 찾아 이름을 입력하세요.',
        answers: ['고려청자', '고려 청자'],
      },
    ],
    successMessage:
      '철로의 기억이 복원되었습니다!\n다음 미션으로 넘어가는 버튼은 빨간 원 안에 숨어 있습니다. 버튼을 클릭하여 다음 장소로 이동하세요!',
    errorMessage: '정답을 다시 입력하세요.',
  },

  'mission2': {
    id: 'mission2',
    theme: 'ember',
    missionNum: '미션 2',
    title: '불꽃의 기억을 복원하라',
    questions: [
      {
        label: 'Q 1',
        text: '어디서부터 시작되었는가?',
        answers: ['지하 200m', '지하200m', '200m', '200미터', '지하 200미터'],
      },
      {
        label: 'Q 2',
        text: '얼마나 오랫동안 타올랐는가?',
        answers: ['7년 6개월', '7년6개월', '7년 반', '7년반'],
      },
      {
        label: 'Q 3',
        text: '왜 잠들게 되었는가?',
        answers: ['천연가스 고갈', '천연 가스 고갈', '가스 고갈', '천연가스 소진'],
      },
    ],
    successMessage:
      '불꽃의 기억이 복원되었습니다!\n가장 높은 아파트 상단을 클릭하면 마지막 미션으로 이동할 수 있습니다.',
    errorMessage: '정답을 다시 입력하세요.',
  },

  'mission3': {
    id: 'mission3',
    theme: 'time',
    missionNum: '미션 3',
    title: '시간의 기억을 복원하라',
    showTimeCoordinate: true,
    questions: [
      {
        label: 'Q 1',
        text: '포항 철도 역사의 시작 연도 4자리를 다 더한 값은 몇인가?',
        answers: ['19'],
      },
      {
        label: 'Q 2',
        text: '미션 진행 중 화면에 크게 등장하는 기관사 철이는 총 몇 번 나타나는가?\n(힌트로 등장하는 철이와 이미지 속 철이는 제외)',
        answers: ['5'],
      },
      {
        label: 'Q 3',
        text: '1918 전시객차 내부 전시 존 개수는 몇 개인가?',
        answers: ['4'],
      },
    ],
    successMessage:
      '시간의 기억이 복원되었습니다!\n\n최종 시간 좌표는 2019. 5. 4, 바로 철길숲이 준공된 날입니다.\n\n이제 마지막 장소로 이동할 차례입니다. 1918 전시객차를 자세히 살펴보세요. 객차를 장식하고 있는 별들 사이에 비밀 버튼이 숨어 있습니다!',
    errorMessage: '정답을 다시 입력하세요.',
  },
};

const HUB_MISSIONS = [
  {
    id: 'mission1-1',
    num: '01',
    title: '철로의 기억 — 1번째 조형물',
    desc: '첫번째 조형물의 이름을 찾아 입력하세요.',
    theme: 'rail',
  },
  {
    id: 'mission1-2',
    num: '02',
    title: '철로의 기억 — 2번째 조형물',
    desc: '두번째 조형물의 이름을 찾아 입력하세요.',
    theme: 'rail',
  },
  {
    id: 'mission1-3',
    num: '03',
    title: '철로의 기억 — 3번째 조형물',
    desc: '세번째 조형물의 이름을 찾아 입력하세요.',
    theme: 'rail',
  },
  {
    id: 'mission2',
    num: '04',
    title: '불꽃의 기억을 복원하라',
    desc: '불꽃의 시작, 시간, 잠든 이유를 복원하세요.',
    theme: 'ember',
  },
  {
    id: 'mission3',
    num: '05',
    title: '시간의 기억을 복원하라',
    desc: '손상된 시간 좌표를 복원하세요.',
    theme: 'time',
  },
];
