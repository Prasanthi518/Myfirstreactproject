import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import wishlistreducer from './wishlistslice';
import ordersummaryreducer from './OrderSummarySlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist : wishlistreducer,
        ordersummary : ordersummaryreducer
    }
});

export default appStore;