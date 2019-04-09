import React from 'react';
import Comment from './Comment.jsx';
import CommentBox from './CommentBox.jsx';
import $ from 'jquery';

/*const Article = (props) => (
  <div>
  	<div className="title"><b>Title: </b> <a href={props.article.link} style={{cursor: 'pointer'}} target="_blank"> { JSON.stringify(props.article.title) } - </a><img onClick={props.addUpvote(props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ props.article.upvotes } - </p1><img onClick={props.addDownvote(props.article.id)} src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ props.article.downvotes }</p1></div>
  	<div className="username"><b>Username: </b> { props.article.username }</div>
  	<div className="category"><b>Category: </b> { props.article.category }</div>
  	<div className="description"><b>Description: </b> { props.article.description }</div>
  	<div className="id"><b>ID: </b>{ props.article.id }</div>
  	<button type="button" onClick={props.returnComments(props.article.id)} style={{cursor: 'pointer'}}>Make Comments Appear!</button>
	<Comment key={props.article.id} articleId={props.article.id} comments={props.comments} />
  </div>
)

// <div className="title"><b>Title: </b> <a href={props.article.link} style={{cursor: 'pointer'}}> { JSON.stringify(props.article.title) } - </a><img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="30" height="30" /><p1>{ props.article.upvotes } - </p1><img src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="30" height="30" /><p1>{ props.article.downvotes } these votes don't work</p1></div>

export default Article;*/

// Add these to space
  	// {props.comments.slice(0).reverse().map(comment => <Comment key={comment.id} article={comment} />)}



  	// react component extend, set state, component did update

 class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	upvotes: this.props.article.upvotes,
    	downvotes: this.props.article.downvotes, 
    	comments: [],
    	commentUsername: '',
      commentText: ''
    }
    this.returnComments = this.returnComments.bind(this)
    this.addComment = this.addComment.bind(this)
    // this.addUpvote = this.addUpvote.bind(this)
    // this.addDownvote = this.addDownvote.bind(this)
  }

  returnComments (articleId) {
	  var getObj = {
	    'articleId': articleId
	  } 
	  $.ajax({
	    type: 'GET',
	    url: '/comments', 
	    data: getObj,
	    success: (data) => {
	      this.setState({comments: data})
	    },
	    error: (err) => {
	      console.log('ERROR: ', err)
	    }
	  });
  }

  addComment (articleId, username, text) {
  	console.log('heres some stuff' + articleId + username + text)
    // return function() {
      var postObj = {
      	'articleId': articleId,
        'username': username,
        'text': text
      } 
      $.ajax({
        type: 'POST',
        url: '/addcomment',
        data: postObj,
        success: (data => {
          console.log('POST DATA: ', data);
        }),
        error: (err) => {
          console.log('POST ERROR: ', err)
        }
      })
    // }
  }


  addUpvote (articleId) {
    var postObj = {
      'articleId': articleId,
      'increment': 1
    } 
    $.ajax({
      type: 'POST',
      url: '/addupvote',
      data: postObj,
      success: (data => {
        this.setState({
          upvotes: this.state.upvotes + 1
        })
      }),
      error: (err) => {
        console.log('POST ERROR: ', err)
      }
    })
  }

  addDownvote (articleId) {
    var postObj = {
      'articleId': articleId,
      'increment': 1
    } 
    $.ajax({
      type: 'POST',
      url: '/adddownvote',
      data: postObj,
      success: (data => {
        this.setState({
          downvotes: this.state.downvotes + 1
        })
      }),
      error: (err) => {
        console.log('POST ERROR: ', err)
      }
    })
  }

  handleUsernameChange(e) {
    this.setState({
      commentUsername: e.target.value
    })
  }

  handleCommentChange(e) {
    this.setState({
      commentText: e.target.value
    })
  }

  componentDidMount () {this.returnComments(this.props.article.id)}

  render() {
    return (
    <div>
	  	<div className="title"><b>Title: </b> <a href={this.props.article.link} style={{cursor: 'pointer'}} target="_blank"> { JSON.stringify(this.props.article.title) } - </a><img onClick={() => this.addUpvote(this.props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ this.state.upvotes } - </p1><img onClick={() => this.addDownvote(this.props.article.id)} src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="30" height="30" style={{cursor: 'pointer'}} /><p1>{ this.state.downvotes }</p1></div>
	  	<div className="username"><b>Username: </b> {this.props.article.username}</div>
	  	<div className="category"><b>Category: </b> {this.props.article.category}</div>
	  	<div className="description"><b>Description: </b> {this.props.article.description}</div>
	  	<div className="id"><b>ID: </b>{this.props.article.id}</div>
	  	<form action="" className="submit-form">
        <input type="text" name="commentUsername" placeholder="Username Here" value={this.state.commentUsername} onChange={this.handleUsernameChange.bind(this)} id='username'></input>
        <input type="text" name="commentText" placeholder="Comment Here" value={this.state.commentText} onChange={this.handleCommentChange.bind(this)} id='comment'></input>
        <button type="submit" className="post-button" onClick={() => { this.addComment(this.props.article.id, this.state.commentUsername, this.state.commentText)}} style={{cursor: 'pointer'}}>Comment!</button>
      </form>
		{this.state.comments.slice(0).reverse().map(comment => <Comment key={comment.comment_id} comment={comment} />)}
		<div className="space">-</div>
	</div>
    )
  }
}


		// <Comment key={this.props.article.id} articleId={this.props.article.id} comments={this.props.comments} />
export default Article;