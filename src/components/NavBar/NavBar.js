import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/yellow-cat-logo.png';

export class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <Row className="py-3 ">
          <Col>
            <Nav>
              <NavItem>
                <img src={logo} width="100" alt="logo" />
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" className="font-weight-bold">
            <Nav>
              <NavItem>
                
                  <NavLink to="/">Trang chủ</NavLink>
                
              </NavItem>
              <NavItem>
                
                  <NavLink to="/introduction">Giới thiệu</NavLink>
                
              </NavItem>
              <NavItem>
                
                  <NavLink to="/product">Sản phẩm</NavLink>
                
              </NavItem>
              <NavItem>
                
                  <NavLink to="/news">Tin tức</NavLink>
                
              </NavItem>
              <NavItem>
                
                  <NavLink to="/promotion">Khuyến mãi</NavLink>
                
              </NavItem>
              <NavItem>
                
                  <NavLink to="/add-product">Liên hệ</NavLink>
                
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}