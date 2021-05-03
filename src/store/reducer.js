import * as actionType from "./action";

const initialState = {
  ingredient: {
    salad: 0,
    chees: 0,
    meat: 0,
  },
  totalPrice: 20,
};

 const price = {
   salad: 30,
   chees: 50,
   meat: 80,
 };

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionType.ADD:
        return {
          ...state,
          ingredient: {
            ...state.ingredient,
            [action.ingredientName]:
              state.ingredient[action.ingredientName] + 1,
          },
          totalPrice: state.totalPrice+price[action.ingredientName]
        };
      case actionType.LESS:
        return {
          ...state,
          ingredient: {
            ...state.ingredient,
            [action.ingredientName]:
              state.ingredient[action.ingredientName] - 1,
          },
          totalPrice: state.totalPrice + price[action.ingredientName],
        };
      default:
        return state;
    }
}

export default reducer;