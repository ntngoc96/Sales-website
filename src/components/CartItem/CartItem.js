import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { AppContext } from '../../contexts';

import Image from '../../image/cat-logo.jpg';


const propTypes = {

};

function format_curency(a) {
  return String(a).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
const getPriceAfterDiscount = (oldPrice, discount) => {
  oldPrice = parseInt(oldPrice);
  discount = parseInt(discount);
  return oldPrice - oldPrice * (discount / 100);
}

export class CartItem extends Component {

  render() {
    return (
      <div className="cart-item u-margin-bottom-small">
        <Card className="cart-item__img">
          <CardImg top src={Image} alt="Card image cap" />
        </Card>
        <Card className="cart-item__content">
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle className={classNames("u-text-decoration-linethough text-muted u-font-size-small",{ invisible: this.props.discount === 0})}>{format_curency(this.props.price)}</CardSubtitle>
            <CardSubtitle>{(format_curency(getPriceAfterDiscount(this.props.price, this.props.discount)))} VNĐ</CardSubtitle>
            <AppContext.Consumer>
              {({ increaseAmount, decreaseAmount }) => (
                <div className="cart-item__group">
                  <div>Số lượng:</div>
                  <button className="cart-item__group--button cart-item__group--button-left"
                    onClick={() => decreaseAmount(this.props._id)}>
                    -
                  </button>
                  <span className="cart-item__group--span">{this.props.amount}</span>
                  <button className="cart-item__group--button cart-item__group--button-right"
                    onClick={() => increaseAmount(this.props._id)}>
                    +
                  </button>
                </div>
              )}
            </AppContext.Consumer>
            <AppContext.Consumer>
              {({ deleteFormCart }) => (
                <Button className="u-margin-top-small cart-item--button u-font-size-small btn-danger" onClick={() => deleteFormCart(this.props)}>Xóa</Button>

              )}
            </AppContext.Consumer>

          </CardBody>
        </Card>
      </div>
    );
  }
}


CartItem.propTypes = propTypes;


export default CartItem;
