import recipeModel from '../api/recipies/recipieModel';

const recipies = [
        { name: 'Carbonara',
    ingredients: 'Pasta, Cheese, Eggs, Bacon, Philidelphia Cheese',
    method: 'Boil pasta, mix ingredients. Bake in oven'
  },
  {
    name: 'Asian Stir Fry',
    ingredients:'Noodles, Chicken, Vegetables of choice',
    method: 'Fry the chicken in the wok. Add in the Vegetables. Once Noodles cooked as in and mix together'
  },
  {
    name: 'Chocolate Cake',
    ingredients:'200g Cooking Chocolate, Flour, Eggs, Sugar, Butter',
    method:'Cream the butter and sugar. Melt the Chocolate, add in the eggs to creamed mixture. Bake in the oven for 45mins'
  }
];

   

export const loadRecipies = () => {
  recipeModel.find({}).remove(() => {
    recipeModel.collection.insert(recipies, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Recipe Data: ${err}`);
    } else {
      console.info(`${recipies.length} recipes were successfully stored.`);
    }
  });
});
};