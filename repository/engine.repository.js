const Engine = require("../models/engine.model");

class EngineRepository{
    async addEngine(engineId){
       return await Engine.create(engineId);
    }
    async findEngine(engineId){
        return await Engine.findBypk(engineId);
    }
}