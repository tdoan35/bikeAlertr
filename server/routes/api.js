const express = require('express');
const { stat } = require('fs');
const { nextTick } = require('process');

const stationController = require('../controllers/stationController');
const userController = require('../controllers/userController');

const router = express.Router();


// ----------------- STATION CONTROLLER ----------------------------------------------------------

router.get('/addStationInfo', 
  stationController.addStationInfo, (err, res, req) => {
    res.status(200).json('Successfully got the station info!');
  }
);

router.get('/test',
  (err, res, req) => {
    console.log('asyncronous!');
    res.status(200).json('Successfully got the asyncronous call!');
  }
);

router.get('/updateStation', stationController.updateStations, 
  (err, res, req) => {
    res.status(200).json('Successfully updated the SQL Table!')
  }
);

router.get('/refreshStation', stationController.updateStations, 
  (err, res, req) => {
    res.status(200).json('Successfully refreshed the SQL Table!')
  }
);

// -----------------------------------------------------------------------------------------------

// ----------------------------------- USER CONTROLLERS ----------------------------------------------//

// Add new user to database (signup)
router.post('/signup', 
  userController.signUp,
  (err, res, req) => {
    res.status(200).send('Successfully signed up new user');
  }
);

router.post('/login', userController.login,
(err, res, req) => {
  res.status(200).send(res.locals);
}
);

// Verify user info from db to login

// Verify if user is logged in

// Delete cookies when user logsout (signout)

// ---------------------------------------------------------------------------------------------------


module.exports = router;