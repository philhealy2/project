
import express from 'express';
import Recipie from './recipieModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all recipies, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    console.info(`GET REQUEST`);
    const recipies = await Recipie.find();
    console.info(recipies);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(recipies);
  } catch (error) {
    handleError(res, error.message);
  }
});

//Create a recipie, using async handler
router.post('/', asyncHandler(async (req, res) => {
  try {
  console.info(`POST REQUEST`);
  console.info(JSON.stringify(req.body, null, 4));
  const recipie = await Recipie.create(req.body);
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!recipie) return res.sendStatus(404);
  return res.status(204).send(recipie);
   } catch (error) {
    handleError(res, error.message);
  }
})
);


// Update a recipie
router.put('/:id', asyncHandler(async (req, res) => {
  console.info(`PUT REQUEST`);
  console.info(JSON.stringify(req.body, null, 4));
  if (req.body._id) delete req.body._id;
  const recipie = await Recipie.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!recipie) return res.sendStatus(404);
  return res.json(200, recipie);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
  console.info(`DELETE REQUEST`);
  console.info(req.params.id);
  const recipie = await Recipie.findById(req.params.id);
  if (!recipie) return res.sendStatus(404);
  await recipie.remove();
  return res.status(204).send(recipie);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;