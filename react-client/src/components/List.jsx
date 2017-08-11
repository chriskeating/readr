import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <div>You have searched <b>{ props.items.length }</b> beers. Please search responsibly.</div>
    <div>{ props.items.slice((props.items.length-1)).map(item => <ListItem key={item} item={item}/>)}</div>
  </div>
)

export default List;