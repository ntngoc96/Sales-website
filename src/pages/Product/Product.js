import React, { Component } from 'react';
import Axios from 'axios';
import { Item as EachItem } from '../../components/Item'

class Product extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Items: [],
      loading: true,
    }
  }

  componentDidMount() {
    Axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;
    Axios.get('/api/some').then(res =>{
      this.setState((state, props) => { return { Items: res.data }});
      
    }, err =>{
      console.log(err);
      
    })
  }
  //stop at sanpham page
  
  
  render() {
    const Item = this.state.Items[0];
    const { loading } = this.state;
    console.log(this.state.Items[0]);
    
    return (
      <div>
        {loading &&<EachItem {...Item} index={0}/>}
      {!loading && "loading....."
      }
      </div>
    );
  }
}

export { Product };
