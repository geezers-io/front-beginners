# Front Beginners
영화 정보 웹사이트

---

## 구성
📌 Open API - [TMDB](https://developer.themoviedb.org/docs/getting-started)<br/>
📌 Stacks - React18, Chakra-ui, emotion, Axios<br/>
📌 Rules - ESLint, Prettier

1. 모바일 베이스, max-width 1024px
2. 페이지 구성 - Home, Detail, About
    1. Home
        1. 영화 포스터 grid
    2. Detail: 영화 상세 정보
        1. 포스터
        2. 트레일러
        3. 제목
        4. 평점
        5. 줄거리
        6. 등장인물
        7. 리뷰 (있으면)
    3. About
        1. 개발자 프로필
        2. 깃허브 레포 주소
3. 공용 레이아웃 - Nav, Main, Footer
4. 컬러셋 - 넷플릭스 (https://brand.netflix.com/en/assets/logos/)


## Git branching model

<aside>
📌 **Base 브랜치(upstream)의 종류**

- `main` - 릴리즈
- `develop` - 개발

**Local 브랜치의 종류**

- `feature/{ticket|name}` - 계획된 피쳐 개발(T1)
- `fix/{ticket|name}` - 계획된 패치 적용(T2)
- `hotfix/{ticket|name}` - 계획되지 않은 긴급 수정(T3)
</aside>

## Commit guide

- `feat:` - 새로운 기능에 대한 커밋
- `fix:` - 버그 수정에 대한 커밋
- `build:` - 빌드 관련 파일 수정에 대한 커밋
- `chore:` - 그 외 자잘한 수정에 대한 커밋
- `docs:` - 문서 수정에 대한 커밋
- `style:` - 코드 스타일 혹은 포맷 등에 관한 커밋
- `refactor:` - 코드 리팩토링에 대한 커밋
- `test:` - 테스트 코드 수정에 대한 커밋

## Code review guide

필요한 경우 아래의 말머리를 사용해 주세요.

- [질문] - 단순 질문. 해결되지 않아도 머지 가능
- [의견] - 단순 간단 의견. 해결되지 않아도 머지 가능
- [변경요청] - 동작하지 않는 부분이나 잘못된 부분이 있을 때(반드시 수정 필요)
