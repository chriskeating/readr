import React from 'react';

const ListItem = (props) => (
  <div>
    <div>{ props.item.name }</div>
    <div>{ props.item.abv }</div>
    <div>{ props.item.ibu }</div>
    <div>{ props.item.description }</div>
  </div>
)

export default ListItem;