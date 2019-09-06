import React, { Component } from "react";

export const AppContext = React.createContext();

export class CartContext extends Component {
  constructor() {
    super();

    this.state = {
      CartItems: [],
      TotalPrice: 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.deleteFormCart = this.deleteFormCart.bind(this);
  }

  addToCart(newItem) {
    console.log(this.state.CartItems.indexOf(newItem));
    

    this.setState((state, props) => { return { 
      CartItems: this.state.CartItems.concat(newItem),
      TotalPrice: state.TotalPrice + parseInt(newItem.price),
     }});
    

  }

  incre

  deleteFormCart(Item) {

    let { CartItems } = this.state;

    //because i dont know why i can't use indexOf func with Item
    //so i must filter by id to get the index
    let arrayAfterFilter = CartItems.filter((value, index) => {
      return value._id === Item._id;
    });

    if (arrayAfterFilter.length === 0) return;


    let index = CartItems.indexOf(arrayAfterFilter[0]);

    CartItems = [
      ...CartItems.slice(0, index),
      ...CartItems.slice(index + 1)
    ]

    this.setState((state) => { return { CartItems,TotalPrice: state.TotalPrice - parseInt(Item.price) }});
    
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          CartItems: this.state.CartItems,
          TotalPrice: this.state.TotalPrice,
          addToCart: this.addToCart,
          deleteFormCart: this.deleteFormCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
