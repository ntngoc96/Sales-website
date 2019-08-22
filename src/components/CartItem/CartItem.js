import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { AppContext } from '../../contexts';


const propTypes = {

};


export class CartItem extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <AppContext.Consumer>
                {({ deleteFormCart }) => (
                  <Button onClick={()=> deleteFormCart(this.props)}>Xóa sản phẩm</Button>

                )}
              </AppContext.Consumer>

            </CardBody>
          </Card>
        </Col>
        <Col>
          Nothing
        </Col>
      </Row>
    );
  }
}


CartItem.propTypes = propTypes;


export default CartItem;
