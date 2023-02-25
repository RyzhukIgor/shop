import React, { Component } from 'react'

export default class ShowFullCard extends Component {
  render() {
    return (
      <div className='full-item'>
       <div>
       <img src={"./img/" + this.props.item.img}
        onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
       </div>
      </div>
    )
  }
}
