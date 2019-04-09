import React from 'react';

const Comment = (props) => (
  <div style={{padding: '0px 0px 40px 50px'}}>
    <div className="username"><b>Comment by {props.comment.username}</b> ({props.comment.comment_id})</div>
    <div className="username"><i>{props.comment.text}</i></div>
  </div>
)

// { props.comment.name }
export default Comment;

// <div className="username"><b>Username </b>{props.comment.username}</div>
//     <div className="username"><b>Username </b>{props.comment.text}</div>
//     <div className="username"><b>Username </b>{props.comment.timestamp}</div>