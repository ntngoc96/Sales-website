import React from 'react';
import Logo_main from '../../image/logo_miumiu_spa_main.png';

import {
  Row,
  Col,
  Input,
} from 'reactstrap';

export function Footer() {
  return (
    <div >
      <Row >
        <Col sm="4" md="3" lg="3" xs="6">
          <div className=" footer__header"><div>Dịch vụ chăm sóc sắc đẹp Miu Miu Beauty</div>

            <i className="fas fa-paw footer__header--border-image"></i>
            <div className="footer__header--border-color"></div>
          </div>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="text-left footer__header">
            <div>Thông tin liên hệ</div>
            <i className="fas fa-paw footer__header--border-image"></i>
            <div className="footer__header--border-color"></div>
          </div>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="text-left footer__header">
          <div>Dịch vụ của Miu Miu Beauty</div>
          <i className="fas fa-paw footer__header--border-image"></i>
          <div className="footer__header--border-color"></div>
          </div>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="footer__header ">
          <div>Đăng ký nhận tin khuyến mãi</div>
          <i className="fas fa-paw footer__header--border-image"></i>
          <div className="footer__header--border-color"></div>
          </div>
        </Col>
      </Row>
      <Row className="u-margin-top-medium">
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="footer__logo mx-auto">
            <img width="100%" src={Logo_main} alt="logo" />
          </div>
          <div className="footer__list-social-network text-center">
            <i className="footer__list-social-network--item fab fa-facebook-square u-color-facebook"></i>
            <i className="footer__list-social-network--item fab fa-instagram u-color-instagram"></i>
            <i className="footer__list-social-network--item fab fa-google-plus-square u-color-google-plus"></i>
            <i className="footer__list-social-network--item fab fa-twitter-square u-color-twitter"></i>
          </div>
        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <ul className="footer__list-info">
            <li className="footer__list-info__item text-left">Hotline: 0939114676</li>
            <li className="footer__list-info__item text-left">Số điện thoại: 0939787901</li>
            <li className="footer__list-info__item text-left">Email: vannguyen98@gmail.com</li>
            <li className="footer__list-info__item text-left">Địa chỉ: Số 21 Lý Tự Trọng, Quận Ninh Kiều, TP Cần Thơ</li>
          </ul>
        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <ul className="footer__list-info">
            <li className="footer__list-info__item text-left">Tiêm filler</li>
            <li className="footer__list-info__item text-left">Botox</li>
            <li className="footer__list-info__item text-left">Căng bóng da</li>
            <li className="footer__list-info__item text-left">Truyền trắng</li>
          </ul>
        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="u-margin-top-medium">
            <Input placeholder="Nhập email của bạn tại đây" />
          </div>
        </Col>
      </Row>
    </div>
  )
}