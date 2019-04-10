import React from 'react';

const Comment = (props) => (
  <div className="comment">
    <div className="username"><b>{props.comment.username}:</b> <i>{props.comment.text}</i></div>
  </div>
)

export default Comment;