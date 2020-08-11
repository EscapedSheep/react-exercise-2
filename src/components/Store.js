import React, { Component } from 'react';
import Product from './Product';
import './Store.css';
import fetchData from './fetchData';

class Store extends Component {
  state = {
    products: [],
    count: 0,
  };

  componentDidMount() {
    fetchData(URL)
      .then((result) => {
        this.setState({
          products: result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onAddToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div className="storeTop">
          <h1>Store</h1>
          <div className="cart">
            <span>🛒</span>
            <span id="cartCount">{this.state.count}</span>
          </div>
        </div>
        <div className="productsGrid">
          {this.state.products.map((item) => (
            <Product
              productName={item.name}
              price={item.price}
              key={item.name}
              onAddToCart={this.onAddToCart}
            ></Product>
          ))}
        </div>
      </div>
    );
  }
}

export default Store;
