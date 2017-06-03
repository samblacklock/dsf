import React from 'react';
import './style.css';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default Product;
