import React from 'react';

const Article = (props) => (
  <div>
  	<div className="title"><b>Title: </b> <a href={props.article.link} style={{cursor: 'pointer'}} target="_blank"> { JSON.stringify(props.article.title) } - </a><img onClick={props.addUpvote(props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ props.article.upvotes } - </p1><img onClick={props.addDownvote(props.article.id)} src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ props.article.downvotes }</p1></div>
  	<div className="username"><b>Username: </b> { props.article.username }</div>
  	<div className="category"><b>Category: </b> { props.article.category }</div>
  	<div className="description"><b>Description: </b> { props.article.description }</div>
  	<div className="id"><b>ID: </b>{ props.article.id }</div>
  	<div className="category">-</div>
  	<div className="category">-</div>
  </div>
)

// <div className="title"><b>Title: </b> <a href={props.article.link} style={{cursor: 'pointer'}}> { JSON.stringify(props.article.title) } - </a><img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="30" height="30" /><p1>{ props.article.upvotes } - </p1><img src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="30" height="30" /><p1>{ props.article.downvotes } these votes don't work</p1></div>

export default Article;