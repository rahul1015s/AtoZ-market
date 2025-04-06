import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },

    reducers: {
        addItems(state, action) {
           const existingItem = state.items.find(item => item.id === action.payload.id );

           if(existingItem) {
                existingItem.quantity += 1;
           } else {
                state.items.push(action.payload);
           }
           state.totalQuantity++;
        },

        removeItems(state, action) {
           const existingItem = state.items.find(item => item.id === action.payload);

           if(existingItem){
                if(existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !==  action.payload);
                }
                state.totalQuantity--;
           }
        }

    },


});

export const {addItems, removeItems} = cartSlice.actions;
export default cartSlice.reducer;