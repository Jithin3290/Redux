import { increment,decrement,reset } from "./CounterSlice";
import { useSelector,useDispatch } from "react-redux";
import React from "react";
const CounterShow = ()=>{
    const c = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    function add(){
        dispatch(increment())
    }
    return(
        <>
        <div style={{backgroundColor:"skyblue",textAlign:"center",marginTop:10,padding:10}}>
        <h1>Counter</h1>
        <h3>{c}</h3>
        <button onClick={add}>Increment</button>{"       "}
        <button onClick={()=>dispatch(decrement())}>decrement</button>{" "}
        <button onClick={()=>dispatch(reset())}>reset</button>{" "}


        </div>
        
        </>
    )
}
export default CounterShow