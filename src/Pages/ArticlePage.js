import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import CommentsList from '../Components/CommentsList';
import AddComment from '../Components/AddComment';

function ArticlePage() {

    const [articleInfo,setArticleInfo]=useState({comments:[],upvotes:0});
    const [upVoted,setUpVoted]=useState(false);
    const {articleId}=useParams();

    useEffect( ()=>{
        // const{articleId}=useParams();
        async function fetchData(){
            const response=await axios.get(`/api/articles/${articleId}`);
            // console.log(response.data);
            console.log(response.data);

            const newArticleInfo=response.data;
            setArticleInfo(newArticleInfo)
            // console.log(resposne.data);
        }
        fetchData();
        // setArticleInfo({upvotes:3,comments:[]});
    },[])

    const article= articles.find(article=>article.name===articleId);
    
    if(!article){
        return (<NotFoundPage />)
    }
    async function upvote(){
        const response =await axios.post(`/api/articles/${articleId}/upvotes`);
        setArticleInfo({'comments':articleInfo.comments,'upvotes':response.data.upvotes});
        setUpVoted(true);
    }
    return (<>
      <h1>{article.title}</h1>
      <p>This post has {articleInfo.upvotes} upvote(s) </p>
      {upVoted? <p className='ds'>Upvoted!</p>: <button onClick={upvote}>Upvote</button>}
      {
        article.content.map((paragraph,i)=>(
            <p key={i}>{paragraph}</p>
            ))}
            <AddComment articleName={article.name} onArticleUpdated={(updatedArticle)=>setArticleInfo(updatedArticle)}/>
            <CommentsList comments={articleInfo.comments} />
    </>
  )
}

export default ArticlePage