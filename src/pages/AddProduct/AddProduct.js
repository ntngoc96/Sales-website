import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Prompt } from 'react-router-dom';

class AddProduct extends Component {
  constructor() {
    super();

    this.state = {
      formIsHalfFilledOut: false,
      name: '',
      price: '',
      discount: '',
      type: '',
      description: '',
      isFeatured: false,
      image: '',

    }
  }

  format_curency = (a) => {
  	return a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { name, price, discount, type, description, isFeatured, image } = this.state;
    let content = '';
    content += ' Tên sp ' + name;
    content += ' Giá ' + this.format_curency(price);
    content += ' Giảm giá ' + discount;
    content += ' Loại ' + type;
    content += ' Miêu tả ' + description;
    content += ' Nổi bậc ' + isFeatured;
    content += ' Hình ảnh ' + image;

    console.log(content);


  }
  onInputChange = (e) => {
    let { value, name } = e.target;
    this.setState((state, props) => { return { [name]: value,formIsHalfFilledOut: true } });
  }

  onFileChange = (e) => {
    let { files } = e.target;

    this.setState((state, props) => { return { image: files[0].name }});
    
  }
  render() {
    return (
      <Container>
        <Prompt
          when={this.state.formIsHalfFilledOut}
          message="Are you sure you want to leave?"
        />
        <Form onSubmit={(e) => this.onSubmit(e)}>
          <FormGroup>
            <Label for="sname">Tên dịch vụ</Label>
            <Input type="text" name="name" id="sname" placeholder=""
              onChange={e => this.onInputChange(e)}
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Giá</Label>
            <Input type="number" name="price" id="price" placeholder=""
              onChange={e => this.onInputChange(e)}
              value={this.state.price} />
          </FormGroup>
          <FormGroup>
            <Label for="discount">Giảm giá</Label>
            <Input type="number" name="discount" id="discount" placeholder="tỉ lệ phần trăm"
              onChange={e => this.onInputChange(e)}
              value={this.state.discount} />
          </FormGroup>
          <FormGroup>
            <Label for="type">Loại dịch vụ</Label>
            <Input type="select" name="type" id="type" defaultValue={this.state.type || ""}>
              <option value="" disabled hidden>nhấn để chọn</option>
              <option value="filler">Filler</option>
              <option value="botox">Botox</option>
              <option value="truyen-trang">Truyền trắng</option>
              <option value="khac">Khác</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Miêu tả dịch vụ</Label>
            <Input type="textarea" name="description" id="description"
              onChange={e => this.onInputChange(e)}
              value={this.state.description} />
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <p>Dịch vụ nổi bậc</p>
              <Label check>
                <Input type="radio" name="isFeatured" value={true} checked={this.state.isFeatured === true.toString()}
                  onChange={e => this.onInputChange(e)} />{' '}
                Có
                </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="isFeatured" value={false} checked={this.state.isFeatured === false.toString()}
                  onChange={e => this.onInputChange(e)} />{' '}
                Tạm thời chưa
                </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="image">Ảnh minh họa</Label>
            <Input type="file" name="image" id="image" onChange={e => this.onFileChange(e)} />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  isFeatured: PropTypes.bool,
  image: PropTypes.string,
};


AddProduct.propTypes = propTypes;

export { AddProduct };

