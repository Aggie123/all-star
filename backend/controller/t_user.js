'use strict';
const { DataTypes } = require('sequelize');
const Op = require('sequelize').Op;

// 引入sequelize对象
const sequelizeMe = require('../config/db');

// 引入数据表模型
const userSql = require('../model/t_user')(sequelizeMe, DataTypes);

userSql.sync({ force: false }); //自动创建表

class queryDataController {
    static async getQueryResults(ctx) {
        const { name, score} = ctx.request.body || {};
        if (!name) {
            ctx.body = { code: 0, data: { code: -1, msg: '没有传参' } };
        }

        let intCondition = {
            name: name
        };

        let queryCondition = {};
        if (score) {
            let queryObject = { score: `${score}` };
            queryCondition = Object.assign(intCondition, queryObject);

        };

        const data = await userSql.findAll({
            where: queryCondition,
            order: [['datetime', 'DESC']],
            limit: 5000
        });
        console.log('data', data)
        ctx.body = { code: 0, data: { code: 0, data } };
    }
}
module.exports = queryDataController;