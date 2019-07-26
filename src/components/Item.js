import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import classNames from 'classnames';
export default function Item(props) {
  const { visible } = props;
  return (
    <Card className={classNames({ [`${visible} noselect`]: typeof visible !== 'undefined' })}>
      <CardImg top width="65" src={props.image || 'http://dummyimage.com/300x300.png/5fa2dd/ffffff'} alt={props.name} />
      <CardBody className="px-0">
        <CardSubtitle className="u-text-decoration-linethough">{props.price}</CardSubtitle>
        <CardSubtitle>{props.price}</CardSubtitle>
        <CardTitle>{props.name}</CardTitle>
        <div className="group__button d-flex">
          <button className="group__button--font group__button--button">Chi tiết</button>
          <button className="group__button--font group__button--button">Đặt ngay</button>
        </div>
      </CardBody>
    </Card>
  )
}