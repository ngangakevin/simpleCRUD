const {Driver, findByPk} = require('../models/driver.model');
class DriversRepository{
    async addDriver(name, address, contact, id_no, license){
        return await Driver.create({name, address, contact, id_no,license})
    }
    async deleteDriver(driver_id){
        await Driver.destroy(driver_id)
        return {delete:successful}
    }
    async updateDriverDetails(driverId, updateDetails){
        const driver = await Driver.findByPk(driverId);
        switch(updateDetails){
            case (updateDetails.name):
                driver.name = updateDetails.name;
                return await driver.save();
            case(updateDetails.address):
                driver.address = updateDetails.address;
                return await driver.save();
            case(updateDetails.contact):
                driver.contact = updateDetails.contact;
                return await driver.save();
            default:
                throw new Error('faulty update request');
        }
    }
    async findDriver(driverId){
        return await Driver.findByPk(driverId)
    }
}