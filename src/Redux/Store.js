import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './MovieSlice';
const Store = configureStore({
    reducer : {
        MovieReducer

    }
})
export default Store;
