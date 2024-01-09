import axios from 'axios';
import React, { useState } from 'react'

function AddComment({articleName,onArticleUpdated}) {
    const[name,setName]=useState("");
    const[comment,setComment]=useState("");
   const  addComment=async()=>{
        try{
        const response=await axios.post("/api/comments",{
        "postName":articleName,
        "postedBy":name,
        "comment":comment
        });
        console.log("asdfkalf");
        const updatedArticle=response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setComment('');
    }catch(e){
        console.log(e);
    }
    }
  return (
    <div id="add-comment-form">
    <h3>Add a comment</h3>
    <label>Name: 
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
    </label>
    <label>Comment: 
        <textarea type="text" value={comment} onChange={(event)=>setComment(event.target.value)} rows="4" cols="50" />
    </label>
    <button onClick={addComment}>Submit</button>
    </div>
  )
}

export default AddComment