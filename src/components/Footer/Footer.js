import React from 'react';

import {
  Row,
  Col,
  Input,
} from 'reactstrap';

export function Footer() {
  return (
    <div>
      <Row >
        <Col sm="4" md="3" lg="3" xs="6">
          <h6>Dịch vụ chăm sóc sắc đẹp Miu Miu Beauty</h6>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <h6 className="text-left">Thông tin liên hệ</h6>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <h6 className="text-left">Dịch vụ của Miu Miu Beauty</h6>

        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <h6>Đăng ký nhận tin khuyến mãi</h6>
        </Col>
      </Row>
      <Row>
        <Col sm="4" md="3" lg="3" xs="6">
          <div className="footer__logo m-auto">Cái logo ở đây</div>
          <div className="footer__list-social-network text-center">
            <i class="footer__list-social-network--item fab fa-facebook-square"></i>
            <i class="footer__list-social-network--item fab fa-instagram"></i>
            <i class="footer__list-social-network--item fab fa-google-plus-square"></i>
            <i class="footer__list-social-network--item fab fa-twitter-square"></i>
          </div>
        </Col>
        <Col sm="4" md="3" lg="3" xs="6">
          <ul className="footer__list-info">
            <li className="footer__list-info__item text-left">Địa chỉ: Số 21 Lý Tự Trọng, Quận Ninh Kiều, TP Cần Thơ</li>
            <li className="footer__list-info__item text-left">Email: vannguyen98@gmail.com</li>
            <li className="footer__list-info__item text-left">Số điện thoại: 0939787901</li>
            <li className="footer__list-info__item text-left">Hotline: 0939114676</li>
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
          <Input placeholder="Nhập email của bạn tại đây" />
        </Col>
      </Row>
    </div>
  )
}