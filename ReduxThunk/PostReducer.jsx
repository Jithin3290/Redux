import React from 'react'

const initialState = {
    post : [],
    error : null,
    loading:false
}
const PostReducer = (state = initialState,action)=>{
    switch(action.type){
        case "fetch" : return ( { ...state,loading:true})
        case "success": return({...state,post:action.payload,error:null,loading:false})
        case "failed" : return ({...state,post:[],error:action.payload,loading:false})
        default : return state // without this redux might return undefined
    }
}
export default PostReducer