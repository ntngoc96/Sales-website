import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts';
import { CartItem } from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { format } from 'path';


const propTypes = {

};

function format_curency(a) {
  return String(a).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
export class Cart extends Component {

  checkEmptyAndRenderCart = (CartItems, AmountItems,Discount) => {
    if (CartItems.length === 0) {
      return <div>Hiện không có sản phẩm nào trong giỏ hàng, tiến hành
        <Link to="/"> đặt dịch vụ ngay!!</Link>
      </div>
    } else {
      return CartItems.map((value, index) => {
        return <CartItem {...value} amount={AmountItems[index]} key={index} />;
      }
      )
    }
  }

  renderTotalBill = (CartItems,AmountItems,Discount) => {
    Discount = parseInt(Discount);
    
    return CartItems.map((value,index) => <tr>
        <td>{value.name}</td>
        <td>{AmountItems[index]}</td>
        <td>{ format_curency(parseInt(value.price)*AmountItems[index] - parseInt(value.price)*AmountItems[index]*(value.discount/100))}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <AppContext.Consumer>{
          ({ CartItems, TotalPrice, AmountItems,Discount }) => (
            <div className="cart__container">
              <div className="cart__left"> {this.checkEmptyAndRenderCart(CartItems, AmountItems,Discount)}</div>
              <div className="cart__right">
                <div className="text-left u-margin-bottom-small">Chi tiết giá</div>
                <Table size="sm" hover responsive>
                  <thead>
                    <tr>
                      <th>Tên dịch vụ</th>
                      <th>Số lượng</th>
                      <th>Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTotalBill(CartItems,AmountItems,Discount)}
                  </tbody>
                </Table>
                <div className="text-right u-margin-top-medium">Tổng cộng: {format_curency(TotalPrice)}</div>
              </div>
            </div>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}


Cart.propTypes = propTypes;


export default Cart;
