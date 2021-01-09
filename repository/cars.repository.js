const Driver = require("../driving/driver");
const Car = require("../models/car.model");

class CarRepository {
    async addCar(color, registration, model, engine){
        return await Car.create({color, registration, engine, model})
    }
    async changeEngine(carId, engine){
        const car = await Car.findByPk(carId);
        car.engine = engine;
        await car.save();
    }

    async findCar(carId) {
        return await Car.findByPk(carId);
    }

    async findCarsForDriver(driverId){
        return await Car.findAll({
            include: Driver,
            where: {
                driver: driverId 
            }
        })
    }
    
    async sellCar(carId){
        await Car.destroy(carId);
        return {success: true}
    }
}
