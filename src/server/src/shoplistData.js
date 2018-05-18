import shoplistModel from '../api/shoplist/shoplistModel';

const shoplists = [
  {
    'item': 'eggs',
    
  },

];

export const loadShoplist = () => {
  shoplistModel.find({}).remove(() => {
    shoplists.forEach((shoplist)=>{
                shoplistModel.create(shoplist, (err, docs)=>{
                if (err) {
                    console.log(`failed to Load shoplist Data: ${err}`);
                }
                }
              );
});
    console.info(`${shoplists.length} shoplist were successfully stored.`);
});
};