import React from 'react';
import Axios from 'axios';


import { Featured } from '../../components/Featured';
import { New } from '../../components/New';
import { ListItems } from '../../components/ListItems';
import { Story } from '../../components/Story';


import certificate from "../../image/certificate.jpg";

export class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      Items: [],
    }
  }

  componentDidMount() {
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
          <Featured />
        </section>
        <section className="section-new-product">
          <h1 >Dịch vụ mới</h1>
          <New Items={Items} />
        </section>
        <section className="section-all-product">
          <h1 >Tất cả dịch vụ </h1>
          <ListItems Items={Items} />
        </section>
        <section className="section-certificate">
          <h1>Chứng chỉ</h1>
          <img src={certificate} width="40%" alt="certificate" />
          <img src={certificate} width="40%" alt="certificate" />
        </section>
        <section className="section-stories">
          <h1>Cảm nhận khách hàng</h1>
          <div className="u-margin-bottom-big">Cảm nhận khách hàng sau khi sử dụng dịch vụ của MiuMiu Beauty </div>
          <Story />
        </section>
      </div>
    )
  }
}