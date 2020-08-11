import React, { Component } from 'react';
import PropTypes from 'prop-types';
import product_image_placeholder from '../assets/product_image_placeholder.png';
import './Product.css';

class Product extends Component {
  state = {
    img: product_image_placeholder,
  };

  render() {
    return (
      <div>
        <h3>{this.props.productName}</h3>
        <img src={this.state.img} alt={this.props.productName}></img>
        <div className="productBottom">
          {this.props.price}
          <button onClick={() => this.props.onAddToCart()}>add to cart</button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default Product;
