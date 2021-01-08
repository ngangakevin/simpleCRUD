var engine = require('./engine');
class Cars {
    constructor(color, cutoff, model, registration, myEngine){
        this.color = color;
        this.cutoff = cutoff;
        this.model = model;
        this.registration = registration;
        this.myEngine = myEngine;
    }
    start(){
        if(cuttoff === true){
            this.myEngine.ignite();
        }
        return {started: true}
    }
    inspect(){}
    register(){}
    service(){}

}
module.exports = Cars;
