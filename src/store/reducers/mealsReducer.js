import { MEALS } from '../../data/data';
import { TOGGLE_FAVORITE } from '../actions/mealsActions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

// executes initialState on first run due to undefined
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        let updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        let addMeal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(addMeal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
