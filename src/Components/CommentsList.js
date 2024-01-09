import React from 'react'

function CommentsList({comments}) {
  return (
    <>

        <h1>Comments</h1>
        {comments.map(comment=>(
            <div className="comment" key={comment.user +' '+comment.text}>
            <h4>{comment.user}</h4>
            <p>{comment.text}</p>
            </div>
        ))
}</>
  )
}

export default CommentsList