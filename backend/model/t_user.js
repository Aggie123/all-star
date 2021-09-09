module.exports = function (sequelize, DataTypes) {
    const { INTEGER, BIGINT, STRING} = DataTypes;
    return sequelize.define('t_user', {
          // 在这里定义模型属性
          id: {
            type: STRING,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: STRING,
            allowNull: false
          },
          score: {
            type: BIGINT(11)
          },
          datetime: STRING
        }, {
      /**
       * 如果为true，则表示名称和model相同，即user
       * 如果为fasle，mysql创建的表名称会是复数，即users
       * 如果指定的表名称本身就是复数，则形式不变
       */
      freezeTableName: true,
      // 实例对应的表名
    //   tableName: 't_user',
      timestamps: false,
    });
}

// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize();

// class User extends Model {}

// User.init({
//   // 在这里定义模型属性
//   id: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   score: {
//     type: DataTypes.BIGINT(11)
//   },
//   datetime: STRING
// }, {
//   // 这是其他模型参数
//   freezeTableName: true,
//   sequelize, // 我们需要传递连接实例
//   //   modelName: 'User', // 我们需要选择模型名称
//   timestamps: false
//   //   tableName: 'Employees'
// });

// // 定义的模型是类本身
// console.log(User === sequelize.models.User); // true
// export default User;