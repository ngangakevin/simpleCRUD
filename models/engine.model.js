const { Model, DataTypes, Sequelize } = require("sequelize/types");
const {connection} = require('../app');

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
}, {sequelize: connection, modelName: 'engines'});
module.export = Engine;