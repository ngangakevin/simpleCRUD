const { Model, DataTypes, Sequelize } = require("sequelize");
const Engine = require("../driving/engine");
const {connection} = require('../app');

class Car extends Model{}
Car.init({
    car: { type:DataTypes.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
    color: DataTypes.STRING(16),
    cutoff: DataTypes.BOOLEAN,
    model: DataTypes.STRING(32),
    registration: DataTypes.STRING(32),
    createdAt: {
        type: DataTypes.DATE(),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    lastModifiedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
}, { sequelize: connection, modelName: 'cars', paranoid: true });
Car.hasOne(Engine);
module.exports = Car;