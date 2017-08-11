import React from 'react';

const ListItem = (props) => (
  <div>
  Your most recent search
    <div className="beer-style"><b>Beer Style: </b>{ props.item.name }</div>
    <div className="abv"><b>Alcohol By Volume: </b>{ props.item.abv }</div>
    <div className="ibu"><b>International Bitterness Units: </b>{ props.item.ibu }</div>
    <div className="description"><b>Description: </b>{ props.item.description }</div>
  </div>
)

export default ListItem;