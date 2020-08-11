import React, { Component } from 'react';
import Product from './Product';
import './Store.css';

class Store extends Component {
  state = {
    products: [
      { name: 'iPhone11', price: 5999 },
      { name: 'iPhoneXS', price: 5399 },
      { name: 'iPhoneSE', price: 3599 },
      { name: 'HUAWEI P40 Pro+', price: 7999 },
      { name: 'HUAWEI Mate 30', price: 5000 },
      { name: 'HUAWEI NOVA 7', price: 4000 },
    ],
    count: 0,
  };

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
