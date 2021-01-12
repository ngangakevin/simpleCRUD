const { Model, DataTypes, Sequelize } = require("sequelize");
const Car = require("./car.model");
const {sequelize} = require('../app');
//
//
class Driver extends Model{}
Driver.init({
    driver: {
        type:DataTypes.UUIDV4,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4 
    },
    name: DataTypes.STRING(50),
    address: DataTypes.STRING(40),
    contact : DataTypes.STRING(50),
    id_no: DataTypes.INTEGER(8),
    createdAt : DataTypes.TIME(6),
    modifiedAt: DataTypes.TIME(6)
}, {sequelize: new Sequelize({
    host: 'localhost',
    port: 3306,
    database: 'driveAPI',
    dialect: 'mysql',
    username: 'simpleCRUD',
    password: 'Mnbvcxz123!',
  }), modelName: 'drivers'})
Driver.belongsToMany(Car, {through: 'car_drivers'});
module.exports = Driver;
