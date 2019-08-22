import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Slide_1 from '../../image/featured_1.jpg';
import Slide_2 from '../../image/featured_2.jpg';
import Slide_3 from '../../image/featured_3.jpg';
import Slide_4 from '../../image/featured_4.jpg';
import Slide_5 from '../../image/featured_5.jpg';

const items = [
  {
    src: Slide_1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: Slide_2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: Slide_3 ,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: Slide_4 ,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: Slide_5 ,
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
];

class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} className="u-width-800px-height-300px" alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl className="text-secondary" direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export { Featured };