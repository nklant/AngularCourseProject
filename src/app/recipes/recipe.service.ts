import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tacos',
                   'Mexican classic',
                   // tslint:disable-next-line:max-line-length
                   'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
                    [
                        new Ingredient('Mince', 1),
                        new Ingredient('Salad', 20),
                        new Ingredient('Mushrooms', 5),
                        new Ingredient('Tomatoes', 5)
                    ]),
        new Recipe('Meat with salad',
                   'Made wtih a new recipe',
                   // tslint:disable-next-line:max-line-length
                   'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/1/26/0/Simple-Asian_Salmon_s3x4.jpg.rend.hgtvcom.616.462.suffix/1358484192681.jpeg',
                    [
                        new Ingredient('Meat', 2),
                        new Ingredient('Salad', 1),
                        new Ingredient('Carrots', 3),
                        new Ingredient('Cabbage', 2)
                    ])
    ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
