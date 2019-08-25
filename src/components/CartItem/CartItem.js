import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
const getPriceAfterDiscount = (oldPrice,discount = 10) => {
  oldPrice = parseInt(oldPrice);
  return oldPrice - oldPrice*(discount/100);
}

export class CartItem extends Component {
  
  render() {
    return (
      <div className="cart-item">
        <Card className="cart-item__img">
          <CardImg top src={Image} alt="Card image cap" />
        </Card>
        <Card className="cart-item__content">
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle className="u-text-decoration-linethough text-muted u-font-size-small">{format_curency(this.props.price)}</CardSubtitle>
            <CardSubtitle>{(format_curency(getPriceAfterDiscount(this.props.price),this.props.discount))} VNĐ</CardSubtitle>
            
            <AppContext.Consumer>
              {({ deleteFormCart }) => (
                <Button className="u-margin-top-small cart-item__button u-font-size-small btn-danger" onClick={() => deleteFormCart(this.props)}>Xóa</Button>

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
