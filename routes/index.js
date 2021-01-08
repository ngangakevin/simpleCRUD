var express = require('express');
var router = express.Router();
var Driver = require('../driving/driver');
var Cars = require('../driving/car');
var Engine = require('../driving/engine');
// import {Cars} from '../driving/car';
// import {Engine} from '../driving/engine';

/* GET home page. */
router.get('', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nicole', (req, res, next)=>{
  res.render('index', {title: 'Nicole'});
});

router.get('/Nairobi', (req, res, next)=>{
  res.render('index', {title: 'Nairobi'});
});

router.get('/self-driving', (req, res, next)=>{
  const myEngine = new Engine();
  const truckEngine = new Engine();
  const carsOWned = [
    new Cars('black', true, 'mazda', 'KDA', myEngine),
    new Cars('black', true, 'Actros', 'KDB', truckEngine)
  ];
  const d = new Driver(90877, 'mlambez', 5, carsOWned, {
    handbrake: 'released',
    fuelTank: 'optimal',
    safetyBelt: true  
  });
  res.status(200).send(d.drive());
});

module.exports = router;
