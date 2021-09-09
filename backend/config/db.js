const { Sequelize } = require('sequelize');
const db={
    database: 'testgood',
    username: 'root',
    password: '123456',
    // host: '127.0.0.1',
    // dialect: 'mysql',
}
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: 'localhost',
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

module.exports = sequelize;