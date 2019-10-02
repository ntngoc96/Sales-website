import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slide_1 from '../../image/featuredmain_1.jpg';
import Slide_2 from '../../image/featuredmain_2.jpg';
// import Slide_3 from '../../image/featured_3.jpg';
// import Slide_4 from '../../image/featured_4.jpg';
// import Slide_5 from '../../image/featured_5.jpg';

const items = [
  {
    src: Slide_1,
    caption: `tận hưởng trọn vẹn thanh xuân`,
    text: 'Chào mừng đến với MiuMiu Spa, hãy để chúng tôi giúp bạn chăm sóc nét đẹp thanh xuân'
  },
  {
    src: Slide_2,
    caption: `tận hưởng trọn vẹn thanh xuân`,
    text: 'Chào mừng đến với MiuMiu Spa, hãy để chúng tôi giúp bạn chăm sóc nét đẹp thanh xuân'
  },
  // {
  //   src: Slide_3 ,
  //   altText: 'Slide 3',
  //   caption: 'Slide 3'
  // },
  // {
  //   src: Slide_4 ,
  //   altText: 'Slide 4',
  //   caption: 'Slide 4'
  // },
  // {
  //   src: Slide_5 ,
  //   altText: 'Slide 5',
  //   caption: 'Slide 5'
  // }
];

class FeaturedMain extends Component {
  render() {
    return (
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        {items.map((value, index) => {
          return <div className="featured" key={index}>
            <div className="featured__text">
              <div className="featured__text--main featured__carousel-animation">{value.caption}</div>
              <div className="featured__text--sub featured__carousel-animation">{value.text}</div>
              <button className="btn btn-warning featured__button u-margin-top-medium featured__carousel__button-animation px-4 py-2">Xem chi tiết</button>
            </div>
            <div className="featured__image">
              <img src={value.src} width="100%" key={index} alt="featured" />
            </div>
          </div>
        })}
      </Carousel>
    );
  }
}


FeaturedMain.propTypes = {

};


export { FeaturedMain };
