import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Prompt } from 'react-router-dom';
import Axios from 'axios';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      formIsHalfFilledOut: false,
      aid: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',

    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState(() => { return { submitted: true } });

    let { aid, password } = this.state;
    let content = '';
    content += ' aid ' + aid;
    content += ' pwd ' + password;

    
    if (!(aid && password)) {
      return;
    }
    
    this.setState({ loading: true });

    let data = {
      aid: aid,
      password: password,
    }

    Axios.post('/auth/login', data).then(res => {
      let { data } = res; 
      console.log(res);
      
      if(data.token){
        this.setState(() => { return { loading: false, formIsHalfFilledOut: false }});
        data.authData = window.btoa(data.authData);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user',data.authData);

        const { from } = this.props.location.state || { from: { pathname: "/" } };
        this.props.history.push(from);
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

    },err =>{
      this.setState({ err, loading: false })
    })


  }
  onInputChange = (e) => {
    let { value, name } = e.target;
    this.setState((state, props) => { return { [name]: value, formIsHalfFilledOut: true } });
  }

  render() {
    const { aid, password, submitted, loading } = this.state;
    return (
      <div>
        <Prompt
          when={this.state.formIsHalfFilledOut}
          message="Are you sure you want to leave?"
        />
        <Form onSubmit={(e) => this.onSubmit(e)}>
          <FormGroup className={(submitted && !aid ? ' has-error' : '')}>
            <Label for="aid">Tên tài khoản</Label>
            <Input type="text" name="aid" id="aid" placeholder=""
              onChange={e => this.onInputChange(e)}
              value={aid}
            />
            {
              submitted && !aid &&
              <div className="help-block">Vui lòng nhập tên đăng nhập</div>

            }
          </FormGroup>
          <FormGroup className={(submitted && !password ? ' has-error' : '')}>
            <Label for="password">Mật khẩu</Label>
            <Input type="password" name="password" id="password" placeholder=""
              onChange={e => this.onInputChange(e)}
              value={password} />
            {
              submitted && !password &&
              <div className="help-block">Vui lòng nhập mật khẩu</div>

            }
          </FormGroup>
          <FormGroup>
            <Button>Submit</Button>
            {loading &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAA
              AMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGx
              vYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmD
              EwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlF
              UYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8p
              ByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAA
              AABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAA
              AIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6Tw
              fwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojE
              MBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nF
              wlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMy
              CLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" 
              alt="loading..." />
            }
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const propTypes = {
  aid: PropTypes.string,
  password: PropTypes.string,
};


Login.propTypes = propTypes;

export { Login };