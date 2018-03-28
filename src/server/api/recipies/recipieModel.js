import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipieSchema = new Schema({
  name: String,
  address: String,
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  email: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Recipie', RecipieSchema);