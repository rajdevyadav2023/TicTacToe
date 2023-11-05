import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "players",
    initialState: {
        player1: "",
        player2: ""
    },
    reducers: {
        choosePlayers: (state, action) => {
            state.player1 = action.payload.ply1;
            state.player2 = action.payload.ply2;
            // console.log(state.player1, state.player2);
        }
    }
});

export const { choosePlayers } = playerSlice.actions;
export default playerSlice.reducer;