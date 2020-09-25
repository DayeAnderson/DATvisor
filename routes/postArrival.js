const router = require('express').Router()
const postArrivalCtrl = require('../controllers/postArrival')


//public routes



//protected routes
router.use(require('../config/auth'));
router.get('/', checkAuth, postArrivalCtrl.index)
router.post('/:id', checkAuth, postArrivalCtrl.create)
router.put('/:id', checkAuth, postArrivalCtrl.update)
router.delete('/:id', checkAuth, postArrivalCtrl.delete)


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router