import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

export  class UserBar extends React.Component {
  render() {
    return (
      <Container>
        <Row className="user-nav__color user-nav__font user-nav__border px-5">
          <Col >
            <Nav>
              <NavItem className="user-nav__item--border-both">
                <NavLink href="#">Liên hệ: 09650xxxxx</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" >
            <Nav>
              <NavItem className="user-nav__item--border-both">
                <NavLink href="#">Kiểm tra đơn hàng</NavLink>
              </NavItem>
              <NavItem className="user-nav__item--border-right">
                <NavLink href="#">Giỏ hàng</NavLink>
              </NavItem>
              <NavItem className="user-nav__item--border-right">
                <NavLink href="#">Đăng nhập</NavLink>
              </NavItem>
              <NavItem className="user-nav__item--border-right">
                <NavLink href="#">Đăng ký</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}