const { Model, DataTypes, Sequelize } = require("sequelize/types");
const { sequelize } = require("./car.model");
const Car = require("./car.model");
const {connection} = require('../app');
//
//
class Driver extends Model{}
Driver.init({
    driver: {
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4 
    },
    name: DataTypes.STRING(50),
    address: DataTypes.STRING(40),
    contact : DataTypes.STRING(50),
    id_no: DataTypes.INTEGER(8),
    createdAt : DataTypes.TIME(6),
    modifiedAt: DataTypes.TIME(6)
}, {sequelize: connection, modelName: 'drivers'})
Driver.belongsToMany(Car, {through: 'car_drivers'});
module.exports = Driver;
