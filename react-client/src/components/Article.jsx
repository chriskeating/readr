import React from 'react';
import Comment from './Comment.jsx';
import CommentBox from './CommentBox.jsx';
import $ from 'jquery';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



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
        this.setState({
          commentUsername: '',
          commentText: ''
        })
        this.returnComments(articleId);
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
            <Typography variant="h5" className="title article-block">
              <a href={this.props.article.link} style={{cursor: 'pointer'}} target="_blank"> { this.props.article.title }</a><img onClick={() => this.addUpvote(this.props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-512.png" width="15" height="15" style={{cursor: 'pointer'}} className="margin-left"/> <p1>{ this.state.upvotes }</p1><img onClick={() => this.addDownvote(this.props.article.id)} src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-down-circle-red-512.png" width="15" height="15" style={{cursor: 'pointer'}} className="margin-left"/> <p1>{ this.state.downvotes }</p1>
            </Typography>
            <Typography variant="body2" className="username article-block">
              <b>Username: </b> {this.props.article.username}
            </Typography>
            <Typography variant="body2" className="category article-block">
              <b>Category: </b> {this.props.article.category}
            </Typography>
            {this.props.article.description != '' && <Typography variant="body2" className="description article-block"><b>Description: </b> {this.props.article.description}</Typography>}

      		{this.state.comments.map(comment => <Comment key={comment.comment_id} comment={comment} />)}
             <Grid container spacing={2} className="col-11 blank-pic">
              <Grid item xs={12} sm={3}>
              <TextField
                  variant="outlined"
                  
                  required
                  fullWidth
                  id="commentUsername"
                  label="Your Name"
                  name="commentUsername"
                  autoComplete="text"
                  autoFocus
                  value={this.state.commentUsername}
                  onChange={this.handleUsernameChange.bind(this)}
                />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  // className="formControl-comment-text"
                  id="comment"
                  label="Comment Here"
                  name="comment"
                  autoComplete="text"
                  autoFocus
                  value={this.state.commentText} 
                  onChange={this.handleCommentChange.bind(this)}
                />
              </Grid>
              <Grid item xs={12} sm={2} className="vert">
                <Button className="divider" variant="contained" color="primary" type="submit" onClick={() => { this.addComment(this.props.article.id, this.state.commentUsername, this.state.commentText); this.returnComments(this.props.article.id)}} style={{cursor: 'pointer'}} >Comment</Button>
              </Grid>
              </Grid>
      	</div>
      </div>
      <Divider className="divider"/>
    </div>
    )
  }
}

              // <Grid item xs={12} sm={3}>
              // <FormControl variant="outlined" className="formControl">
              //   <InputLabel ref={null} htmlFor="outlined-age-simple">
              //     Commenter
              //   </InputLabel>
              //   <Select
              //     value={this.state.commentUsername}
              //     onChange={this.handleUsernameChange.bind(this)}
              //     fullWidth
              //     className=""
              //     input={<OutlinedInput name="commenter" id="outlined-commenter-simple" />}
              //   >
              //     <MenuItem value="Kyleigh">Kyleigh</MenuItem>
              //     <MenuItem value="Anthony">Anthony</MenuItem>
              //     <MenuItem value="Matthew">Matthew</MenuItem>
              //     <MenuItem value="Candice">Candice</MenuItem>
              //     <MenuItem value="Mike">Mike</MenuItem>
              //     <MenuItem value="Carol">Carol</MenuItem>
              //     <MenuItem value="Tony">Tony</MenuItem>
              //     <MenuItem value="Ted">Ted</MenuItem>
              //     <MenuItem value="Nina">Nina</MenuItem>
              //     <MenuItem value="Kiwi">Kiwi</MenuItem>
              //     <MenuItem value="Chris">Chris</MenuItem>
              //     <MenuItem value="Guest">I'm a Guest!</MenuItem>
              //   </Select>
              // </FormControl>
              // </Grid>

export default Article;