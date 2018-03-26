import _ from 'lodash';


    class StubAPI {

        constructor() {
            this.entries = [
               
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

        }

        delete(k) {
            let elements = _.remove(this.entries, 
                (recipe) => recipe.ingredients === k
            );
            return elements; 
        }

       

        getAll() {
            return this.entries ;
        }

        add(n,i,m) {
            let len = this.entries.length ;
            let newLen = this.entries.push({
                name: n, ingredients: i, method: m }) ;
            return newLen > len ;
        }

        update(key,n,i,m) {
            let index = _.findIndex(this.entries, 
                (recipe) => recipe.method === key
            );      
            if (index !== -1) {
                this.entries.splice(index, 1, 
                    {name: n, ingredients: i, method: m});
                return true ;
            }
            return false ;
        }
    }

    export default (new StubAPI() );