const randomMeal = {
    baseMeal: ['bacon', 'oats', 'tuna', 'toast'],
    sideMeal: ['strawberry', 'ice cream', 'tomato', 'potatoes'],
    drink: ['orange juice', 'cola', 'water', 'tea'],
    getRandomBaseMeal: function() { //This is to get random base meal.
        randomBase = Math.floor(Math.random() * this.baseMeal.length);
        return this.baseMeal[randomBase];
    }, //This is to get random side meal.
    getRandomSideMeal: function() {
        randomSide = Math.floor(Math.random() * this.sideMeal.length);
        return this.sideMeal[randomSide];
    }, //This is to get random drink.
    getRandomDrink: function() {
        randomDrink = Math.floor(Math.random() * this.drink.length);
        return this.drink[randomDrink];
    }
}


console.log('I am going to have ' + randomMeal.getRandomBaseMeal() + ' with a side of ' + randomMeal.getRandomSideMeal() + ' and a nice cold glass of ' + randomMeal.getRandomDrink());