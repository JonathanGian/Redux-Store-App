import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../Types/cart.types";

const initialState: CartState ={
    items: [],
    isOpen: false,
    
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            }else{
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
            
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
});

export const { toggleCart, removeFromCart, addToCart} = cartSlice.actions;

export default cartSlice.reducer;


/* Empty Slice */