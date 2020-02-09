import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li>{this.props.todo.name}</li>
    );
  }
}

export default Item;
