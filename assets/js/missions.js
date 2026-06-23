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
    successMessage: '정답입니다! 버튼을 클릭하여 다음 장소로 이동하세요!',
    nextUrl: 'https://player.xroo.io/space/forail/1?startSceneID=637906',
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
    successMessage: '정답입니다! 버튼을 클릭하여 다음 장소로 이동하세요!',
    nextUrl: 'https://player.xroo.io/space/forail/1?startSceneID=637895',
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
    successMessage: '정답입니다! 버튼을 클릭하여 다음 장소로 이동하세요!',
    nextUrl: 'https://player.xroo.io/space/forail/1?startSceneID=637905',
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
    successMessage: '정답입니다! 버튼을 클릭하여 다음 장소로 이동하세요!',
    nextUrl: 'https://player.xroo.io/space/forail/1?startSceneID=637900',
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
    successMessage: '정답입니다! 버튼을 클릭하여 다음 장소로 이동하세요!',
    nextUrl: 'https://player.xroo.io/space/forail/1?startSceneID=637897',
    errorMessage: '정답을 다시 입력하세요.',
  },
};
