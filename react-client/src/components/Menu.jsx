import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import $ from 'jquery';

  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
class Article extends React.Component {

  }
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
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Poster
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem value="Nina" onClick={handleClose}>Nina</MenuItem>
          <MenuItem value="Ted" onClick={handleClose}>Ted</MenuItem>
          <MenuItem value="Kyleigh" onClick={handleClose}>Kyleigh</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;