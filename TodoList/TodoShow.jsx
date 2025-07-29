import React, { useRef } from "react";
import { useState } from "react";
import {add,remove} from "./TodoSlice"
import { useDispatch, useSelector } from "react-redux";

function TodoShow() {
    const todo = useSelector((state)=>state.t.todo)
    const dispatch = useDispatch()
    const txt = useRef()
    function Handleadd(){
        const data = txt.current.value
        dispatch(add(data))
        txt.current.value=""
        
    }
    function del(i){
        dispatch(remove(i))
    }
    
    
  return (
    <div style={{ backgroundColor:"aliceblue",padding:10}}>
        <h1>Todo List</h1>
        <input type="text" placeholder="add Items" ref={txt}/>
        <button onClick={Handleadd}>add</button>
        <h3>Task are</h3>
        {todo.map((item,i)=>{
            
            return (<li style={{padding:10}} key={i}> {item} <button style={{backgroundColor:"skyblue",borderRadius:10}} onClick={()=>del(i)}>remove</button></li>)
        })}
    </div>
  )
}

export default TodoShow