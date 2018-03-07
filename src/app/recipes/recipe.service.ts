import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('A Test Recipe', 'This is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Another Test Recipe', 'This is a test', 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/1/26/0/Simple-Asian_Salmon_s3x4.jpg.rend.hgtvcom.616.462.suffix/1358484192681.jpeg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
