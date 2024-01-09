import React from 'react'
import ArticleWidget from '../Components/ArticleWidget'
import articles from './article-content'

function ArticleListPage() {
  return (
   <>
   <ArticleWidget articles={articles} />
   </>
  )
}

export default ArticleListPage