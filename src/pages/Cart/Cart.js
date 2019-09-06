import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts';
import { CartItem } from '../../components/CartItem';
import { Link } from 'react-router-dom';


const propTypes = {

};

function format_curency(a) {
  return String(a).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
export class Cart extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   totalPrice: 0
    // }

  }

  checkEmptyCart = (CartItems) => {
    if (CartItems.length === 0) {
      return <div>Hiện không có sản phẩm nào trong giỏ hàng, tiến hành
        <Link to="/"> đặt dịch vụ ngay!!</Link>
      </div>
    } else {
      return CartItems.map((value, index) => {
        return <CartItem {...value} discount="10" key={index} />;
      }
      )
    }
  }

  render() {
    return (
      <div>
        <AppContext.Consumer>{
          ({ CartItems,TotalPrice }) => (
            <div className="cart__container">
              <div className="cart__left"> {this.checkEmptyCart(CartItems)}</div>
              <div className="cart__right">{TotalPrice}</div>
            </div>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}


Cart.propTypes = propTypes;


export default Cart;
