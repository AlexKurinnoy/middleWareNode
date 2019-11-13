const Sequelize = require("sequelize");

const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'article',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article:{
            type: Sequelize.STRING
        },
        author:{
            type: Sequelize.STRING
        },
        section:{
            type: Sequelize.STRING
        },
        tag:{
            type: Sequelize.STRING
        },
        title:{
            type: Sequelize.STRING
        },
        data_time:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    },
    {
        timestamps: false
    }
)