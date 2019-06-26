import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const Comment = (props) => (
  <div className="article-block">
	  <Typography variant="body1">
      {props.comment.username}
    </Typography>
    <Typography variant="body2">
      {props.comment.text}
    </Typography>
    <Divider variant="middle" className="divider" />
  </div>
)

export default Comment;