import React from 'react';
import './style.css';
import Fetch from '../../fetchData';

import Product from './Product/component';

const products = [
  {
    name: 'one',
    description: 'cool thang'
  },
  {
    name: 'two',
    description: 'cool thang'
  },
  {
    name: 'three',
    description: 'cool thang'
  },
  {
    name: 'four',
    description: 'cool thang'
  },
];

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ''
    };
  }

  componentDidMount() {
    Fetch().then(res => {
      this.setState({items: res.items});
    });
  }

  render() {
    const items = this.state.items || [];
    let collection = [];

    for (let [index, item] of items.entries()) {
      collection.push(<Product key={index} name={item.fields.title} desc={item.fields.description} />)
    }

    console.log(collection);

    return (
      <div>
        {collection}
      </div>
    )
  }
}

export default Products;
