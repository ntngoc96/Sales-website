import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';


const propTypes = {
  
};


export class Admin extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn-primary btn" to="/api/add-product">
          Thêm dịch vụ
        </NavLink>
        <NavLink className="btn-primary btn" to="/api/add-product">
          Sửa/ Xóa dịch vụ
        </NavLink>
        <NavLink className="btn-primary btn" to="/api/add-product">
          Thống kê doanh thu
        </NavLink>
      </div>
    );
  }
}


Admin.propTypes = propTypes;


export default Admin;
