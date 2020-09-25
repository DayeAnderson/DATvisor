const router = require('express').Router();
const preCtrl = require('../controllers/preArrival');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.get('/', checkAuth, preCtrl.index);
router.post('/:id', checkAuth, preCtrl.create);
router.delete('/:id', checkAuth, preCtrl.delete);
router.put('/:id', checkAuth, preCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

  module.exports = router;