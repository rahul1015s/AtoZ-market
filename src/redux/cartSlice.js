import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },

    reducers: {
        addItems(state, action) {
            state.items.push(action.payload);
            state.totalQuantity++;
        },

        removeItems(state, action) {
            state.items = state.item.filter(item => item.id !== action.payload);
            state.totalQuantity--;
        }

    },


});

export const {addItems, removeItems} = cartSlice.actions;
export default cartSlice.reducer;