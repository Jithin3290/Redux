import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from ".//CounterSlice";

const StoreC = configureStore({
    reducer : {
        counter : CounterReducer
    }
})
export default StoreC