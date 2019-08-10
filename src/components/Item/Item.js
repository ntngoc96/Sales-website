import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import classNames from 'classnames';
export function Item(props) {
  const { visible } = props;
  return (
    <Card className={classNames({ [`${visible} noselect`]: typeof visible !== 'undefined' })}>
      <CardImg top width="65" src={props.image || 'http://dummyimage.com/300x300.png/5fa2dd/ffffff'} alt={props.name} />
      <CardBody className="px-0">
        <CardTitle>{props.name}</CardTitle>
        <div className="d-flex item__price">
          <CardSubtitle className="text-primary">{props.price}</CardSubtitle>
          <CardSubtitle className="u-text-decoration-linethough text-muted">{props.price}</CardSubtitle>
        </div>
        <div className="group__button d-flex">
          <button className="group__button--font group__button--button">Chi tiết</button>
          <button className="group__button--font group__button--button">Đặt ngay</button>
        </div>
      </CardBody>
    </Card>
  )
}