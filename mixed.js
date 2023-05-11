const randomMeal = {
    baseMeal: ['bacon', 'oats', 'tuna', 'toast'],
    sideMeal: ['strawberry', 'ice cream', 'tomato', 'potatoes'],
    drink: ['orange juice', 'cola', 'water', 'tea'],
    getRandomBaseMeal: function() {
        randomBase = Math.floor(Math.random() * this.baseMeal.length -1);
        return this.baseMeal[randomBase];
    },
    getRandomSideMeal: function() {
        randomSide = Math.floor(Math.random() * this.sideMeal.length - 1);
        return this.sideMeal[randomSide];
    },
    getRandomDrink: function() {
        randomDrink = Math.floor(Math.random() * this.drink.length - 1);
        return this.drink[randomDrink];
    }
}


console.log('I am going to have ' + randomMeal.getRandomBaseMeal() + ' with a side of ' + randomMeal.getRandomSideMeal() + ' and a nice cold glass of ' + randomMeal.getRandomDrink());