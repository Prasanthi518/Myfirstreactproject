import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name: 'Wishlist',
    initialState: {
        items: []
    },
    reducers: {
        addtowishlist: ( state, action ) => {
            state.items.push(action.payload);
        },
        removetowishlist: ( state ) => {
            state.items.pop();
        },
        clearwishlist: ( state ) => {
            state.items.length = 0;
        }
    }
})

export const { addtowishlist, removetowishlist, clearwishlist } = wishlistslice.actions;

export default wishlistslice.reducer;