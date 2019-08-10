import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Item } from '../Item/index';

import { responsive } from '../../config';

export class New extends React.Component {
  constructor() {
    super();

    this.processItemsToChildren = this.processItemsToChildren.bind(this);
  }

  processItemsToChildren(Items = []) {
    return Items.map((value, index) =>
      <Item {...value} key={index} />
    )
  }
  

  render() {

    const { Items } = this.props;

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
          {this.processItemsToChildren(Items)}
        </Carousel>
      )
    }
  }
}