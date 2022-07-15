# 다이어트 도와줘
* 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여
다이어트를 하는데 도와주는 APP

# mySQL 연동하기
`npm i sequelize`
`npm i -g sequelize-cli`
`npm i -g sequelize-auto`
`npm i -g mysql2`

- sequelize 도구를 사용하여 mysql db 연동 정보 자동화하기

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u username -x 'password' -e mysql -l esm

```