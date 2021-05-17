import { MEALS } from '../../data/data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

// executes initialState on first run due to undefined
const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
