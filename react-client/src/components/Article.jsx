import React from 'react';

const Article = (props) => (
  <div>
  Your most recent search
    <div className="title"><b>Article Title: </b>{ JSON.stringify(props)}</div>
    {console.log('update!')}
  </div>
)

export default Article;

    // <div className="link"><b>Link</b>{ props.submitted[2] }</div>
    // <div className="poster"><b>Poster: </b>{ props.submitted[3] }</div>