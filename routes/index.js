const e = require('express');
var express = require('express');
const Driver = require('../models/driver.model');
const DriversRepository = require('../repository/drivers.repository');
var router = express.Router();
// import {Cars} from '../driving/car';
// import {Engine} from '../driving/engine';

/* GET home page. */
router.get('', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nicole', (req, res, next)=>{

  // return jina
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

router.post('/driver',async(req,res,next)=>{
  const name = req.body.name;
  const id_no = req.body.identification_number;
  const contact = req.body.phone_number;
  const address = req.body.email;
  const license = req.body.license;
  const driver = await DriversRepository.prototype.addDriver(name,address, contact, id_no, license);
  res.status(201).send(driver);
})

module.exports = router;
