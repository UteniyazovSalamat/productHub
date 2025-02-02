import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types/types';
import { products, updateThemeByTime } from '../utils/dataUtils';

interface ProductsState {
    items: IProduct[];
    theme: boolean;
    isCartEmpty: boolean;
}

const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items') ?? '') : products;

const initialState: ProductsState = {
    items,
    theme: updateThemeByTime(),
    isCartEmpty: !items.find((item: IProduct) => item.quantity > 0),
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increaseQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item));
        },
        resetQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.map((item) => (item.id === action.payload ? { ...item, quantity: 0 } : item));
        },
        toggleTheme: (state) => {
            state.theme = !state.theme;
        },
        updateIsCartEmpty: (state) => {
            state.isCartEmpty = !state.items.find((item) => item.quantity > 0);
        },
    },
});

export const { increaseQuantity, resetQuantity, toggleTheme, updateIsCartEmpty } = productsSlice.actions;
export default productsSlice.reducer;
