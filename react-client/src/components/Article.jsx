import React from 'react';

const Article = (props) => (
  <div>
  	<div className="title"><b>Title: </b> { JSON.stringify(props.article.title) } <i>Link: </i> { props.article.link } </div>
  	<div className="poster"><b>Username: </b> { props.article.username }</div>
  	<div className="category"><b>Category: </b> { props.article.category }</div>
  	<div className="space">-</div>
  </div>
)

export default Article;

    // <div className="link"><b>Link</b>{ props.submitted[2] }</div>
    // <div className="poster"><b>Poster: </b>{ props.submitted[3] }</div>
    // <div className="title"><b>Article Title: </b>{ JSON.stringify(props)}</div>



   //  <div className="link"><b>Link: </b> { props.item }</div>
  	// <div className="poster"><b>Poster: </b> { props.item.poster }</div>