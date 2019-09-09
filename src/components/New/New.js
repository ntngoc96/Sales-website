import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Item } from '../Item/index';

import { responsive } from '../../config';

const
  speed = 1200,
  curveDelay = 300,
  position = "fixed"; // or absolute

export class New extends React.Component {
  constructor() {
    super();

    this.processItemsToChildren = this.processItemsToChildren.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  flyToCart() {

  }

  addItem(e, cart, image) {
    let btnY =
      position === "fixed"
        ? e.currentTarget.getBoundingClientRect().top
        : e.currentTarget.offsetTop,
      btnX =
        position === "fixed"
          ? e.currentTarget.getBoundingClientRect().left
          : e.currentTarget.offsetLeft;

    let flyingBtn = document.createElement('img');
    flyingBtn.src = image;




    flyingBtn.classList.add("flyingBtn");
    flyingBtn.style.position = position;
    flyingBtn.style.top = `${btnY - 100}px`;
    flyingBtn.style.left = `${btnX}px`;

    console.log(btnX, " ---- ", btnY);

    flyingBtn.style.opacity = "1";
    flyingBtn.style.height = "10rem";
    flyingBtn.style.width = "10rem";
    flyingBtn.style.transition = `all ${speed / 1000}s ease, top ${(speed +
      curveDelay) /
      1000}s ease, left ${speed / 1000}s ease, transform ${speed /
      1000}s ease ${(speed - 10) / 1000}s`;

    document.body.appendChild(flyingBtn);


    flyingBtn.style.top = `${cart.getBoundingClientRect().top + (cart.offsetHeight / 2)}px`;
    flyingBtn.style.left = `${cart.getBoundingClientRect().left + (cart.offsetWidth / 2)}px`;
    flyingBtn.style.height = "1rem";
    flyingBtn.style.width = "1rem";
    flyingBtn.style.transform = "scale(0)";

    setTimeout(() => {
      flyingBtn.remove();
    }, speed * 1.4);
  }

  processItemsToChildren(Items = [], cart) {
    return Items.map((value, index) =>
      <Item {...value} key={index} addItem={this.addItem} cart={cart} />
    )
  }


  render() {

    const { Items, cart } = this.props;

    console.log(this.props.cart);


    if (Items.length === 0) {
      return <div> Loading...</div>
    } else {
      return (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {this.processItemsToChildren(Items, cart)}
        </Carousel>
      )
    }
  }
}