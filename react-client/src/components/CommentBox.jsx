import React from 'react';

const CommentBox = (props) => (
  <div style={{padding: '0px 0px 40px 50px'}}>
  Comment here
    <div className="username"><b>Username </b>{props.comment.username}</div>
    <div className="username"><b>Username </b>{props.comment.text}</div>
    <div className="username"><b>Username </b>{props.comment.timestamp}</div>
    <div className="comment"><b>Here is a comment</b>Chris</div>
  </div>
)

export default CommentBox;