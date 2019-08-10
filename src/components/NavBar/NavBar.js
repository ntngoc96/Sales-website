import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink as NavLinkReactStrap } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';

export class NavBar extends React.Component {
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
                <NavLinkReactStrap>
                  <NavLink to="/">Trang chủ</NavLink>
                </NavLinkReactStrap>
              </NavItem>
              <NavItem>
                <NavLinkReactStrap>
                  <NavLink to="/introduction">Giới thiệu</NavLink>
                </NavLinkReactStrap>
              </NavItem>
              <NavItem>
                <NavLinkReactStrap>
                  <NavLink to="/product">Sản phẩm</NavLink>
                </NavLinkReactStrap>
              </NavItem>
              <NavItem>
                <NavLinkReactStrap>
                  <NavLink to="/news">Tin tức</NavLink>
                </NavLinkReactStrap>
              </NavItem>
              <NavItem>
                <NavLinkReactStrap>
                  <NavLink to="/promotion">Khuyến mãi</NavLink>
                </NavLinkReactStrap>
              </NavItem>
              <NavItem>
                <NavLinkReactStrap>
                  <NavLink to="/contact">Liên hệ</NavLink>
                </NavLinkReactStrap>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}