import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
const propTypes = {
  
};


export class SpaService extends Component {
  render() {
    return (
      <div className="service__item">
        <div className="service__item--img position-relative u-margin-bottom-medium">
          <img src={this.props.img} alt="cover" />
          <div className="service__item--description position-absolute">
            <div className="service__item--description-text position-absolute">
              {this.props.description}
              <div>
                <NavLink to="/product">Xem thêm</NavLink>
              </div>
            </div>
          </div>
        </div>
        <h3>{this.props.header}</h3>
      </div>
    );
  }
}


SpaService.propTypes = propTypes;


export default SpaService;
