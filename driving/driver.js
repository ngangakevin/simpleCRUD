class Driver {
    constructor(ID, License, experience, cars, readyState){
        this.ID = ID;
        this.license = License;
        this.experience = experience;
        this.cars = cars;
        this.readyState = readyState;
        this.toDrive = this.selectCar();

    }
    selectCar(car = undefined){
        if(!car) {
            this.toDrive = this.cars[0];
        }
        else{
            if(this.cars.indexof(car) === -1) {
                throw new Error('Car Not Found');
            }
            else{
                this.toDrive = car;
            }
            return this.toDrive;
        }
    }

    drive(){
        // handbrake is released?
        // Fuel tank level
        // driver/passanger safety belts
        let allowDrive;
        if(this.readyState.handbreak === 'released' 
            && this.readyState.fuelTank === 'optimal' 
            && this.readyState.safetyBelt === true){
            this.toDrive.start();
            allowDrive = true;
            }
        else{
            throw new Error('Can\'t start');
        }
        return allowDrive;

    }
}

module.exports = Driver;
