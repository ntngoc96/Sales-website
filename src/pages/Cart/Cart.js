import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts';
import { CartItem } from '../../components/CartItem';
import { Link } from 'react-router-dom';


const propTypes = {

};


export class Cart extends Component {

  checkEmptyCart = (CartItems) => {
    if (CartItems.length === 0) {
      return <div>Hiện không có sản phẩm nào trong giỏ hàng, tiến hành 
        <Link to="/"> đặt dịch vụ ngay!!</Link>
      </div>
    } else {
      return CartItems.map((value, index) => {
        return <CartItem {...value} key={index}/>;
      }
      )
    }
  }

  render() {
    return (
      <AppContext.Consumer>{
        ({ CartItems }) => (
          <div>{this.checkEmptyCart(CartItems)}</div>
        )}
      </AppContext.Consumer>
    );
  }
}


Cart.propTypes = propTypes;


export default Cart;
