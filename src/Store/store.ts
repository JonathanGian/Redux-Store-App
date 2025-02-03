import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import recipeReducer from "./recipeSlice";
import cartReducer from "./cartSlice";
// Creates a store that merges all slices together
export const store = configureStore({
    reducer: {
        products: productsReducer,
        recipes: recipeReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

// Type for the Action
export type AppDispatch = typeof store.dispatch;