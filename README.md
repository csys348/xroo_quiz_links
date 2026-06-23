# 철길숲 기억 복원 퀴즈

포항 철길숲 AR 체험용 퀴즈 웹사이트입니다. 미션별로 개별 링크를 공유할 수 있습니다.

## 미션 링크

| 미션 | URL |
|------|-----|
| 미션 1-1 (첫번째 조형물) | `quiz.html?m=mission1-1` |
| 미션 1-2 (두번째 조형물) | `quiz.html?m=mission1-2` |
| 미션 1-3 (세번째 조형물) | `quiz.html?m=mission1-3` |
| 미션 2 (불꽃의 기억) | `quiz.html?m=mission2` |
| 미션 3 (시간의 기억) | `quiz.html?m=mission3` |

## 로컬 미리보기

```bash
python3 -m http.server 8080
```

브라우저에서 http://localhost:8080 접속

## GitHub Pages 배포

1. GitHub에 저장소 생성 후 push
2. 저장소 Settings → Pages → Source: **Deploy from a branch**
3. Branch: **main**, Folder: **/ (root)**
4. 배포 URL: `https://<username>.github.io/<repo-name>/`

또는 GitHub Actions 워크플로(`.github/workflows/deploy.yml`)를 사용할 수도 있습니다.
