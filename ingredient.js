class Ingredient {
    #ingredientName;
    #ingredientNetWeight;
    #ingredientPrice;
    constructor(ingredientName, ingredientNetWeight, ingredientPrice) {
        this.#ingredientName = ingredientName; 
        this.#ingredientNetWeight = ingredientNetWeight; 
        this.#ingredientPrice = ingredientPrice;
    }

    // Getters
    getIngredientName() {
        return this.#ingredientName;
    }
    getIngredientNetWeight() {
        return this.#ingredientNetWeight;
    }
    getingredientPrice() {
        return this.#ingredientPrice;
    }

    // Setters
    setIngredientName(ingredientName) {
        this.#ingredientName = ingredientName;
    }
    setIngredientNetWeight(ingredientNetWeight) {
        this.#ingredientNetWeight = ingredientNetWeight;
    }
    setIngredientPrice(ingredientPrice) {
        this.#ingredientPrice = ingredientPrice;
    }
}