import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import Image from '../../image/cat-logo.jpg';

import { AppContext } from '../../contexts';

import classNames from 'classnames';

function format_curency(a) {
  return String(a).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function Item(props) {
  const { visible } = props;

  const getPriceAfterDiscount = (oldPrice,discount = 10) => {
    oldPrice = parseInt(oldPrice);
    return oldPrice - oldPrice*(discount/100);
  }

  return (
    <Card className={classNames('new__item--card', { [`${visible} noselect`]: typeof visible !== 'undefined' })}>
      {/*<CardImg top width="65" src={props.image || 'http://dummyimage.com/300x300.png/5fa2dd/ffffff'} alt={props.name} />*/}
      <CardImg top width="65" className="new__item--cardimg" src={Image} alt={props.name} />
      <CardBody className="px-0">
        <CardTitle>{props.name}</CardTitle>
        <div className=" item__price">
          <CardSubtitle className="u-text-decoration-linethough text-muted u-font-size-small">{format_curency(props.price)} VNĐ</CardSubtitle>
          <CardSubtitle className="text-primary">{(format_curency(getPriceAfterDiscount(props.price),props.discount))} VNĐ</CardSubtitle>
        </div>
        <div className="group__button d-flex">
          <button className="group__button--font group__button--button new__item--button">Chi tiết</button>
          <AppContext.Consumer>
            {({ addToCart }) => (
              <button className="group__button--font group__button--button new__item--button"
                onClick={() => addToCart(props)}>
                Đặt ngay
              </button>
            )}
          </AppContext.Consumer>

        </div>
      </CardBody>
    </Card>
  )
}