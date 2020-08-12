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
  };

  ProductGrid = (brand) => {
    return (
      <div>
        <h2 className="category">{brand.name}</h2>
        <div className="productsGrid">
          {this.state.products
            .filter((item) => item.category === brand.name)
            .map((item) => (
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
  };

  render() {
    return (
      <div>
        <div className="storeTop">
          <h1>Store</h1>
          <div className="cart">
            <span>🛒</span>
            <div id="cartCount"> {this.state.count} </div>
          </div>
        </div>
        <this.ProductGrid name="iPhone"></this.ProductGrid>
        <this.ProductGrid name="HUAWEI"></this.ProductGrid>
      </div>
    );
  }
}

export default Store;
