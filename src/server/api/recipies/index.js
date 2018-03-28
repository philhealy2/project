
import express from 'express';
import Recipie from './recipieModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// Get all recipies, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const recipies = await Recipie.find();
    res.status(200).json(recipies);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a contact, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const recipie = await Recipie.create(req.body);
  res.status(201).json(recipie);
}));

// Update a contact
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const recipie = await Recipie.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!recipie) return res.sendStatus(404);
  return res.json(200, recipie);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
  const recipie = await Recipie.findById(req.params.id);
  if (!recipie) return res.send(404);
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