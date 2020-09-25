const PreArrival = require('../models/preArrival')

module.exports = {
    index,
    create,
    update,
    delete: deleteOne
};

function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.myTrip = req.params.id
    req.body.toDo = req.body.toDo.split(',')
    PreArrival.create(req.body)
    .then(preArrival => {res.json(preArrival)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    PreArrival.find({addedBy: req.user._id})
    .populate('addedBy')
    .then((pre) => res.json(pre))
    .catch(err => {res.json(err)})
  }

  function deleteOne(req, res) {
    PreArrival.findByIdAndDelete(req.params.id)
    .then(preArrival => {res.json(preArrival)})
    .catch(err => {res.json(err)})
  }

  function update(req, res) {
    PreArrival.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate('addedBy')
    .then(preArrival => {res.json(preArrival)})
    .catch(err => {res.json(err)})
  }