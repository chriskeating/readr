import React from 'react';

const Article = (props) => (
  <div>
  	<div className="title"><b>Title: </b> <a href={props.article.link} style={{cursor: 'pointer'}}> { JSON.stringify(props.article.title) }</a></div>
  	<div className="username"><b>Username: </b> { props.article.username }</div>
  	<div className="category"><b>Category: </b> { props.article.category }</div>
  	<div className="category"><b>Description: </b> { props.article.description }</div>
  	<div className="space">-</div>
  </div>
)


export default Article;