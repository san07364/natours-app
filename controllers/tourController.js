const fs = require('fs');
const path = require('path');

const dataPath = path.join(
  __dirname,
  '..',
  'dev-data',
  'data',
  'tours-simple.json'
);

const tours = JSON.parse(fs.readFileSync(dataPath));

exports.checkId = (req, res, next, val) => {
  if (parseInt(val) > tours.length)
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id',
    });
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: 'fail',
      message: 'missing name or price',
    });
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find((ele) => ele.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find((ele) => ele.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'tour updated',
    },
  });
};

exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find((ele) => ele.id === id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(dataPath, JSON.stringify(tours), (err) => {
    if (err) res.status(400).send('error');
    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  });
};
