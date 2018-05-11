import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipieSchema = new Schema({
  name: String,
  ingredients: String,
  method: String,
});

export default mongoose.model('Recipie', RecipieSchema);