import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ShoplistSchema = new Schema({
  item: String,
  
});

export default mongoose.model('shoplist', ShoplistSchema);