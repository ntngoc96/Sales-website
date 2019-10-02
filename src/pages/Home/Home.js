import React from 'react';
import Axios from 'axios';
import ReactLoading from 'react-loading';


import { FeaturedMain } from '../../components/Featured';
// import { Featured } from '../../components/Featured';
import { New } from '../../components/New';
import { ListItems } from '../../components/ListItems';
import { Story } from '../../components/Story';


import certificate from "../../image/certificate.jpg";
import ListSpaServices from '../../components/ListSpaServices/ListSpaServices';

let cartRef;
export class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      Items: [],
    }
  }

  componentDidMount() {
    cartRef = document.getElementById("cart");

    Axios.get('/api/all').then(response => {
      const { data: Items } = response;
      this.setState(() => ({
        Items,
      }))
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }

  render() {
    const { Items } = this.state;
    return (
      <div>
        <section className="section-banner">
          <FeaturedMain />
        </section>
        <section className="section-new-product">
          <h1 className="u-margin-bottom-big u-text-transform-uppercase">Dịch vụ mới</h1>
          { Items.length === 0 && <ReactLoading type="spinningBubbles" className="mx-auto" color="#ffd772"  /> }
          { Items.length !== 0 && <New Items={Items} cart={cartRef}/> }
        </section>
        <section className="section-service">
          <h1 className="u-margin-bottom-big u-text-transform-uppercase">Dịch vụ tại MiuMiu Beauty </h1>
          <ListSpaServices />
        </section>
        <section className="section-certificate u-margin-top-medium">
          <h1 className="u-margin-bottom-medium u-text-transform-uppercase">Chứng chỉ</h1>
          <img src={certificate} width="50%" alt="certificate" />
        </section>
        <section className="section-stories">
          <h1 className="u-text-transform-uppercase">Cảm nhận khách hàng</h1>
          <div className="u-margin-bottom-big">Cảm nhận khách hàng sau khi sử dụng dịch vụ của MiuMiu Beauty </div>
          <Story />
        </section>
      </div>
    )
  }
}