import { configureStore } from '@reduxjs/toolkit';
import producReducer from './productsSlice';

export const store = configureStore({
    reducer: {
        products: producReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
