# SOPTube-backend
`킹갓제너럴 아웅....... 그냥 우리가 짱이다!!!!....... 섭팟솝튜브레포`


## 🫶🏻 서버 역할 분담
- [`차기 서팟장 임승하`](https://github.com/seunghaLim) : 영상 디테일뷰 조회, 댓글 생성 / 초기세팅 및 interface 생성 
- [`킹갓 리드 서호영`](https://github.com/tkarndbrtk) : 카테고리 별 영상 리스트 조회, 댓글 생성 / MongoDB 세팅
- [`감자 클라 김루희`](https://github.com/heerucan) : 추천 영상 리스트 조회, 댓글 생성 / AWS PM2 배포
 


## 🫶🏻 API 명세서
API 명세서를 보려면 [Click](https://www.notion.so/q-bit/API-1a00599db67d43afbf1553a09bf2ca57) 해주세요!
  

## 🫶🏻 깃 브랜치 전략
- `develop` : default 브랜치
- `dev_이름` : 각자 맡은 기능들을 개발하는 브랜치 
- 기능 구현 후 PR을 날리고 팀원들의 코드리뷰를 받고 develop 브랜치에 병합합니다.



## 🫶🏻 커밋 컨벤션
- `[ADD]` : 새로운 기능이 추가됐어요.
- `[UPDATE]` : 기능이 업데이트 됐어요.
- `[FIX]` : 버그가 수정됐어요.
- `[DOCS]` : README, wiki 문서를 수정했어요
- `[STYLE]` : 코드 변경 없이 스타일 변경했어요.
- `[CHORE]` : 기타 사항이에요. (주석 추가 등등)


## 🫶🏻 코드 컨벤션
- 코드 컨벤션은 기본적으로 에어비앤비의 스타일가이드를 따랐습니다.
- 자세히 보고 싶다면 [Click](https://q-bit.notion.site/dd304e71deac4c3dab8e58ae3024ac52)해주세요!


## 🫶🏻 프로젝트 폴더링

```
💟 config                    
 ┗  index.ts

💟 controllers               
 ┣  index.ts
 ┣  RecommendVideoController.ts
 ┣  VideoController.ts
 ┗  CategoryController.ts

💟 interface              
 ┗ 💟 common
 ┃ ┣  CommonVideoFields.ts
 ┃ ┗  JwtPayloadInfo.ts
 ┃
 ┗ 💟 recommends
   ┣  RecommendVideoCreateDto.ts
   ┣  RecommendVideoInfo.ts
   ┗  RecommendVideoResponseDto.ts
   💟 user
   ┗  UserInfo.ts
   💟 video
   ┣  CommentCreateDto.ts
   ┣  VideoCommentCreateDto.ts
   ┗  VideoInfo.ts

💟 loaders                   
 ┗  db.ts

💟 models                   
 ┣  RecommendVideo.ts
 ┣  User.ts
 ┗  Video.ts

💟 modules  
 ┣  jwtHandler.ts
 ┣  responseMessage.ts
 ┣  statusCode.ts
 ┗  utils.ts

💟 routes                    
 ┣  RecommendVideoRouter.ts
 ┣  VideoRouter.ts
 ┣  CategoryRouter.ts
 ┗  index.ts

💟 services                  
 ┣  RecommendVideoService.ts
 ┣  VideoService.ts
 ┣  CategoryService.ts
 ┗  index.ts
```
