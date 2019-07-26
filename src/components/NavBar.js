import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../image/logo.png';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row className="py-3 ">
          <Col>
            <Nav>
              <NavItem>
                <img src={logo} width="65" alt="logo" />
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" className="font-weight-bold">
            <Nav>
              <NavItem>
                <NavLink href="#">Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Giới thiệu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sản phẩm</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tin tức</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Liên hệ</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}