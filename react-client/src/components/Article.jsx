import React from 'react';
import Comment from './Comment.jsx';
import CommentBox from './CommentBox.jsx';
import $ from 'jquery';

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
        <div>
          <div className="article">
      	  	<div className="title"><a href={this.props.article.link} style={{cursor: 'pointer'}} target="_blank"> { this.props.article.title }</a> - <img onClick={() => this.addUpvote(this.props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="15" height="15" style={{cursor: 'pointer'}} /> <p1>{ this.state.upvotes } -- </p1><img onClick={() => this.addDownvote(this.props.article.id)} src="http://www.clipartroo.com/images/8/thumbs-down-clipart-8326.png" width="15" height="15" style={{cursor: 'pointer'}} /> <p1>{ this.state.downvotes }</p1></div>
      	  	<div className="username"><b>Username: </b> {this.props.article.username}</div>
      	  	<div className="category"><b>Category: </b> {this.props.article.category}</div>
      	  	{this.props.article.description != '' && <div className="description"><b>Description: </b> {this.props.article.description}</div>}
      	  	<form action="" className="submit-form">
              <select className="username-dropdown" id='username' onChange={this.handleUsernameChange.bind(this)} value={this.state.commentUsername} required>
                <option value="select">Select Your Name</option>
                <option value="Nina">Nina</option>
                <option value="Ted">Ted</option>
                <option value="Kyleigh">Kyleigh</option>
                <option value="Anthony">Anthony</option>
                <option value="Carol">Carol</option>
                <option value="Tony">Tony</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Chris">Chris</option>
              </select>
              <input className="comment-entry" type="text" name="commentText" placeholder="Comment Here" value={this.state.commentText} onChange={this.handleCommentChange.bind(this)} id='comment' required></input>
              <button type="submit" className="post-button" onClick={() => { this.addComment(this.props.article.id, this.state.commentUsername, this.state.commentText)}} style={{cursor: 'pointer'}}>Comment!</button>
            </form>
      		{this.state.comments.map(comment => <Comment key={comment.comment_id} comment={comment} />)}
      	</div>
      </div>
    </div>
    )
  }
}

export default Article;