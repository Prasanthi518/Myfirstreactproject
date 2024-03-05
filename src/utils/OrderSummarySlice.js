import { createSlice } from "@reduxjs/toolkit";

const OrderSummarySlice = createSlice({
    name: 'OrderSummary',
    initialState: {
        items: []
    },
    reducers: {
        addtoOrderSummary: ( state, action ) => {
            state.items.push(action.payload);
        }
    }
})

export const { addtoOrderSummary } = OrderSummarySlice.actions;

export default OrderSummarySlice.reducer;