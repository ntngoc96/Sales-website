import React, { Component } from "react";

export const AppContext = React.createContext();

export class CartContext extends Component {
  constructor() {
    super();

    this.state = {
      CartItems: [],
      AmountItems: [],
      TotalPrice: 0,
      DiscountAll: 0 //discount for all product, it will replace old discount of each product
    };

    this.addToCart = this.addToCart.bind(this);
    this.deleteFormCart = this.deleteFormCart.bind(this);
    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
  }

  addToCart(newItem) {
    let CartItems, AmountItems;
    let Price = 0;
    let indexExist;

    //because i dont know why i can't use indexOf func with Item
    //so i must filter by id to get the index
    indexExist = this.state.CartItems.findIndex((value, index) => {
      return value._id === newItem._id;
    });

    console.log(indexExist);



    if (indexExist === -1) {
      CartItems = this.state.CartItems.concat(newItem);
      AmountItems = this.state.AmountItems.concat(1);

      if( this.state.DiscountAll <= newItem.discount){
        Price = newItem.price - newItem.price*(parseInt(newItem.discount)/100);
      } else {
        Price = newItem.price - newItem.price*(parseInt(this.state.DiscountAll)/100);
      }

      this.setState((state, props) => {
        return {
          CartItems,
          AmountItems,
          TotalPrice: state.TotalPrice + Price,
        }
      });

    } else {
      AmountItems = this.state.AmountItems.slice(0);

      if( this.state.DiscountAll <= newItem.discount){
        Price = newItem.price - newItem.price*(parseInt(newItem.discount)/100);
      } else {
        Price = newItem.price - newItem.price*(parseInt(this.state.DiscountAll)/100);
      }

      AmountItems.splice(indexExist, 1, parseInt(AmountItems[indexExist]) + 1);

      this.setState((state, props) => {
        return {
          AmountItems,
          TotalPrice: state.TotalPrice + Price,
        }
      });
    }
  }

  deleteFormCart(Item) {

    let { CartItems, AmountItems } = this.state;
    let numberOfItems = 0;
    let oldPrice = Item.price;
    let arrayAfterFilter = [];
    let index = 0;

    if( this.state.DiscountAll <= Item.discount){
      oldPrice = Item.price - Item.price*(parseInt(Item.discount)/100);
    } else {
      oldPrice = Item.price - Item.price*(parseInt(this.state.DiscountAll)/100);
    }

    //because i dont know why i can't use indexOf func with Item
    //so i must filter by id to get the index
    arrayAfterFilter = CartItems.filter((value, index) => {
      return value._id === Item._id;
    });

    if (arrayAfterFilter.length === 0) return;


    index = CartItems.indexOf(arrayAfterFilter[0]);

    CartItems = [
      ...CartItems.slice(0, index),
      ...CartItems.slice(index + 1)
    ]
    numberOfItems = AmountItems[index];

    AmountItems = [
      ...AmountItems.slice(0, index),
      ...AmountItems.slice(index + 1)
    ]


    this.setState((state) => { return { CartItems, AmountItems, TotalPrice: state.TotalPrice - numberOfItems*parseInt(oldPrice) } });

  }

  increaseAmount(_id) {
    let AmountItems;

    let indexExist = this.state.CartItems.findIndex((value, index) => {
      return value._id === _id;
    });

    if (indexExist === -1) {
      return;
    } else {
      AmountItems = [
        ...this.state.AmountItems.slice(0, indexExist),
        this.state.AmountItems[indexExist] + 1,
        ...this.state.AmountItems.slice(indexExist + 1)
      ]

      this.setState((state, props) => { return { AmountItems }});
    }
  }

  decreaseAmount(_id) {
    let AmountItems;

    let indexExist = this.state.CartItems.findIndex((value, index) => {
      return value._id === _id;
    });
    
    if (indexExist === -1) {
      return;
    } else {
      AmountItems = [
        ...this.state.AmountItems.slice(0, indexExist),
        this.state.AmountItems[indexExist] - 1,
        ...this.state.AmountItems.slice(indexExist + 1)
      ]

      this.setState((state, props) => { return { AmountItems }});
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          CartItems: this.state.CartItems,
          AmountItems: this.state.AmountItems,
          TotalPrice: this.state.TotalPrice,
          addToCart: this.addToCart,
          deleteFormCart: this.deleteFormCart,
          increaseAmount: this.increaseAmount,
          decreaseAmount: this.decreaseAmount,
          DiscountAll: this.state.DiscountAll,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
