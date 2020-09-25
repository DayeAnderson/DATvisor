const express = require('express');
const router = express.Router();
const locationIDCtrl = require('../controllers/locationID');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, locationIDCtrl.getAttractionsForLocationName);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
/*---------- Auth Checker ----------*/

module.exports = router;