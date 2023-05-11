function getRandom() {
    let randBaseMeal = Math.floor(Math.random() * baseMeal.length - 1);
    let randMealAddition = Math.floor(Math.random() * mealAddition);
    let randomDrink = Math.floor(Math.random() * 4);
}

let randomMeal = {
    baseMeal: ['bacon', 'oats', 'tuna', 'toast'],
    sideMeal: ['strawberry', 'ice cream', 'tomato', 'potatoes'],
    drink: ['orange juice', 'cola', 'water', 'tea']
}