###  1. 本地调试

#### backend
cd backend && npm i
npm start

接口访问地址：127.0.0.1:7000

#### front
cd front && npm i
npm start
前端页面访问地址：127.0.0.1:7001


### 2. 项目介绍
#### backend
koa + sequelize + mysql2

#### front
react + react-router + aixos

#### db
mysql -h localhost -u root -p123456
create database testgood;
use testgood;
source testgood.sql;