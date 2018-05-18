import express from 'express';
import shoplist from './shoplistModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//Create a list, using async handler
router.post('/', asyncHandler(async (req, res) => {
  try {
  console.info(`POST REQUEST`);
  console.info(JSON.stringify(req.body, null, 4));
  const shoplist = await item.create(req.body);
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!shoplist) return res.sendStatus(404);
  return res.status(204).send(shoplist);
   } catch (error) {
    handleError(res, error.message);
  }
})
);





// Delete an item
router.delete('/:id', asyncHandler(async (req, res) => {
  console.info(`DELETE REQUEST`);
  console.info(req.params.id);
  const shoplist = await shoplist.findById(req.params.id);
  if (!shoplist) return res.sendStatus(404);
  await shoplistremove();
  return res.status(204).send(shoplist);
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