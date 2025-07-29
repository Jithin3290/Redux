import React from "react";
import { useSelector,useDispatch } from "react-redux";
import FetchingData from "./FetchingData";
import { useEffect } from "react";
const PostList = ()=>{
const post = useSelector((state) => state.post);
const loading = useSelector((state) => state.loading);

const error = useSelector((state) => state.error);
 const dispatch = useDispatch()
 useEffect(()=>{
    dispatch(FetchingData())
 },[dispatch])
 if (error){return(<p>Error: {error}</p>)}
   if (loading) return <p>Loading...</p>;

   return (
    <div>
      <h2>Posts</h2>
      {post.slice(0, 5).map(p => (
        <div key={p.id}>
          <strong>{p.title}</strong>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
  }
  export default PostList