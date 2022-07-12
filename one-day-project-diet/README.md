# NodeJS, Express, React FullStack Project
* NodeJS, Express 프로젝트를 생성하기 위한 도구 설치 : `npm install -g express-21c`
* NodeJS, Express 프로젝트 생성 : `express-21c myproject1`
* myproject 폴더에서 react client 프로젝트 생성 : `create-react-app client`
* NodeJS 프로젝트와 react 관련 파일들의 이름이 혼동이 될 수 있으므로 파일 이름 변경
* 기타 파일 import 부분에 오류가 있는지 검사하고 변경 완료
* React Client Build : `yarn build`
* client/build 폴더 생성확인

# nodejs 서버와 react client 연동
* node 서버에 app.js 파일을 열어서 static 설정을 `./client/build`로 변경
* node 서버의 실행 웹 화면을 새로고침하여 react화면이 나타나는지 확인

# NodeJS와 MongoDB 연동
* mongoDB는 local에 서버를 설치하여 사용할 수도 있고 mongodb.com에
* 회원가입을 하여 무료 cloud 서비스를 이용할 수 있다.
* Nodejs와 mongoDB를 연동하기 위하여 Dependency를 설치하기
 mongoose를 설치하여 NoSQL을 DBMS Schema 처럼 사용을 한다
 `npm i mongoose`