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


  const getPriceAfterDiscount = (oldPrice, discount) => {
    console.log(`discount: ${discount}`);

    oldPrice = parseInt(oldPrice);
    discount = parseInt(discount);
    return oldPrice - oldPrice * (discount / 100);
  }

  return (
    <Card className={classNames('new__item--card', { [`${visible} noselect`]: typeof visible !== 'undefined' })}>
      {/*<CardImg top width="65" src={props.image || 'http://dummyimage.com/300x300.png/5fa2dd/ffffff'} alt={props.name} />*/}
      <CardImg top width="65" className="new__item--cardimg" src={props.image} alt={props.name} />
      <CardBody className="px-0">
        <CardTitle>{props.name}</CardTitle>
        <AppContext.Consumer>
          {({ DiscountAll }) => {
            if (parseInt(DiscountAll) === 0) {
              return <div className=" item__price">
                <CardSubtitle className={classNames("u-text-decoration-linethough text-muted u-font-size-small",{ invisible: props.discount === 0})}>{format_curency(props.price)} VNĐ</CardSubtitle>
                <CardSubtitle className="text-primary">{(format_curency(getPriceAfterDiscount(props.price, props.discount)))} VNĐ</CardSubtitle>
              </div>
            } else {
              return <CardSubtitle className="text-primary">{(format_curency(getPriceAfterDiscount(props.price, parseInt(DiscountAll))))} VNĐ</CardSubtitle>
            }
          }
          }

        </AppContext.Consumer>
        <div className="group__button d-flex">
          <button className="group__button--font group__button--button new__item--button">Chi tiết</button>
          <AppContext.Consumer>
            {({ addToCart }) => (
              <button className="group__button--font group__button--button new__item--button"
                onClick={(e) => { addToCart(props); props.addItem(e,props.cart,props.image)}}>
                Đặt ngay
              </button>
            )}
          </AppContext.Consumer>

        </div>
      </CardBody>
      {props.discount !== 0 && <div className="new__item-discount"> Giảm -{props.discount}%</div>}
    </Card>
  )
}


// export class Item extends React.Component {


//   constructor(){
//     super();

//     this.ImageRef = React.createRef();
//   }
//   getPriceAfterDiscount = (oldPrice, discount) => {
//   console.log(`discount: ${discount}`);

//   oldPrice = parseInt(oldPrice);
//   discount = parseInt(discount);
//   return oldPrice - oldPrice * (discount / 100);
// }
// render(){
//   const { visible } = this.props;
//   return (
//     <Card className={classNames('new__item--card', { [`${visible} noselect`]: typeof visible !== 'undefined' })}>
//       {/*<CardImg top width="65" src={this.props.image || 'http://dummyimage.com/300x300.png/5fa2dd/ffffff'} alt={this.props.name} />*/}
//       <CardImg top width="65" className="new__item--cardimg" src={Image} alt={this.props.name} ref={(img) => { this.ImageRef = img; }}/>
//       <CardBody className="px-0">
//         <CardTitle>{this.props.name}</CardTitle>
//         <AppContext.Consumer>
//           {({ DiscountAll }) => {
//             if (parseInt(DiscountAll) === 0) {
//               return <div className=" item__price">
//                 <CardSubtitle className={classNames("u-text-decoration-linethough text-muted u-font-size-small", { invisible: this.props.discount === 0 })}>{format_curency(this.props.price)} VNĐ</CardSubtitle>
//                 <CardSubtitle className="text-primary">{(format_curency(this.getPriceAfterDiscount(this.props.price, this.props.discount)))} VNĐ</CardSubtitle>
//               </div>
//             } else {
//               return <CardSubtitle className="text-primary">{(format_curency(this.getPriceAfterDiscount(this.props.price, parseInt(DiscountAll))))} VNĐ</CardSubtitle>
//             }
//           }
//           }

//         </AppContext.Consumer>
//         <div className="group__button d-flex">
//           <button className="group__button--font group__button--button new__item--button">Chi tiết</button>
//           <AppContext.Consumer>
//             {({ addToCart }) => (
//               <button className="group__button--font group__button--button new__item--button"
//                 onClick={(e) => { addToCart(this.props); this.props.addItem(e, this.props.cart, this.ImageRef) }}>
//                 Đặt ngay
//                 </button>
//             )}
//           </AppContext.Consumer>

//         </div>
//       </CardBody>
//       {this.props.discount !== 0 && <div className="new__item-discount"> Giảm -{this.props.discount}%</div>}
//     </Card>
//   )
// }
// }
