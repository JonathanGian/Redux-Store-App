import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Types/products.types";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products"); // You dont have to put in the type here
    return response.data;

})


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [] as Product[],
        isLoading: true,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        })
        
    }
})

export default productsSlice.reducer;