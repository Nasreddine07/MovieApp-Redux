import { createSlice } from "@reduxjs/toolkit";
import Data from "./Data";


const MovieSlice = createSlice ({
    name : 'movie',
    initialState :{movies:Data} ,
    reducers : {}

})

export default MovieSlice.reducer;
