import { configureStore } from "@reduxjs/toolkit";
import tSlice from "./TodoSlice"
const StoreT = configureStore({
    reducer:{
        t:tSlice
    }
})
export default StoreT