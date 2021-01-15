import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
  
  constructor() {
    super();
    this.state = {
        products:[
            {   price:11999,
                title:'OnePlus 5',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDk0feWMuv3PA1HNivDwUAa9-zyNmhbL9WVmAdvzo-h0FLpahc0ivbNypyg&usqp=CAc',
                id:1
            },
            {   price:999,
                title:'fasttrack',
                qty:1,
                img:"https://staticimg.titan.co.in/Fastrack/Catalog/3072SL06_2.jpg?pView=pdp",
                id:2
            },
            {   price:1150,
                title:'jeans',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4eMIgXD4xihMPtE1UEEIXG8i1IMsbZyA3w&usqp=CAU',
                id:3
            }
        ]
    }
}


/* to increase the quantity of product in your cart using the plus symbol  */

handleIncreaseQuantity=(product)=>{
    console.log('increase qty of product',product)
    const {products} = this.state
    const index=products.indexOf(product)
    products[index].qty+=1
    this.setState({
        products  //this work same as products:products
    })
}


/* to decrease the quantity of product in your cart using the minus symbol  */

handleDecreaseQuantity=(product)=>{
    console.log('decrease the  qty of product',product)
    const{products} = this.state
    const index=products.indexOf(product)
    if(products[index].qty===1){
    this.handleDeleteProduct(products[index].id)
       return;
       
    }
    products[index].qty-=1
    this.setState({
        products
    })
}
/* to delete the product from your cart using the x or delete symbol  */

handleDeleteProduct=(id) =>{
    // console.log('delete product',product)
    const {products} = this.state
    const items= products.filter((item)=>item.id!==id)
    this.setState({
        products:items
    })
}



getCount=()=>{

  const {products} = this.state;
  let count=0;

  products.forEach((product)=>{
    count += product.qty;
  })

  return count;
}

cartTotal=()=>{
  const {products} = this.state;
  let total=0;
  products.forEach((product)=>{
      total=total + product.qty * product.price;
  })

  return total;
}

  render() {
const count=this.getCount();
const total=this.cartTotal();
    return (
      <div className="App">
      <Navbar
        count={count}
      />
      <Cart
      products={this.state.products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{padding:10, fontSize:25}}>Total: {total}</div>
      </div>
      );
    }
    }

export default App;
