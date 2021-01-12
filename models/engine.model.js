const { Model, DataTypes, Sequelize } = require("sequelize");
const {sequelize} = require('../app');

class Engine extends Model {}
Engine.init({
    engine:{
        type: DataTypes.UUIDV4,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    model:{
        type: DataTypes.STRING(32, false),
    },
    engineType:DataTypes.STRING,
}, {sequelize: new Sequelize({
    host: 'localhost',
    port: 3306,
    database: 'driveAPI',
    dialect: 'mysql',
    username: 'simpleCRUD',
    password: 'Mnbvcxz123!',
  }), modelName: 'engines'});

module.exports = Engine;
