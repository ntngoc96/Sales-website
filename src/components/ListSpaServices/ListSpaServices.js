import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { responsiveForSpaService } from '../../config';
import { SpaService } from '../SpaService';


import Image from '../../image/cat-logo.jpg';

const Items = [
  {
    header: "Nâng cơ trẻ hóa da",
    img: Image,
    description: "Tiêm botox là phương pháp phẫu thuật thẩm mỹ không dùng dao kéo hỗ trợ ngăn ngừa các nếp nhăn, điều trị bệnh đổ mồ hôi, giúp chị em phụ nữ có một làn da trẻ trung, khỏe mạnh như mơ ước."
  },
  {
    header: "Tiêm filler căn mọng",
    img: Image,
    description: "Tiêm botox là phương pháp phẫu thuật thẩm mỹ không dùng dao kéo hỗ trợ ngăn ngừa các nếp nhăn, điều trị bệnh đổ mồ hôi, giúp chị em phụ nữ có một làn da trẻ trung, khỏe mạnh như mơ ước.",
  },
  {
    header: "Botox thon gọn hàm",
    img: Image,
    description: "Tiêm botox là phương pháp phẫu thuật thẩm mỹ không dùng dao kéo hỗ trợ ngăn ngừa các nếp nhăn, điều trị bệnh đổ mồ hôi, giúp chị em phụ nữ có một làn da trẻ trung, khỏe mạnh như mơ ước.",
  },
  {
    header: "Truyền trắng tinh khôi",
    img: Image,
    description: "Tiêm botox là phương pháp phẫu thuật thẩm mỹ không dùng dao kéo hỗ trợ ngăn ngừa các nếp nhăn, điều trị bệnh đổ mồ hôi, giúp chị em phụ nữ có một làn da trẻ trung, khỏe mạnh như mơ ước.",
  },
  {
    header: "Tiêm tan mỡ đa liệu trình",
    img: Image,
    description: "Tiêm botox là phương pháp phẫu thuật thẩm mỹ không dùng dao kéo hỗ trợ ngăn ngừa các nếp nhăn, điều trị bệnh đổ mồ hôi, giúp chị em phụ nữ có một làn da trẻ trung, khỏe mạnh như mơ ước.",
  },
]


class ListSpaServices extends Component {

  constructor() {
    super();

    this.processItemsToChildren = this.processItemsToChildren.bind(this);
  }

  processItemsToChildren(Items = []) {
    return Items.map((value, index) =>
      <SpaService {...value} key={index} />
    )
  }
  
  render() {

    if (1 === 0) {
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
          responsive={responsiveForSpaService}
          showDots
          renderDotsOutside
          sliderClass=""
          slidesToSlide={1}
          swipeable
          className="service__list"

        >
          {this.processItemsToChildren(Items)}
        </Carousel>
      )
    }
  }
}

ListSpaServices.propTypes = {

};

export default ListSpaServices;