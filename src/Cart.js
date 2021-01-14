import React from 'react';
import CartItem from './CartItem'



class Cart extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products:[
                {   price:11999,
                    title:'OnePlus 5',
                    qty:1,
                    img:'',
                    id:1
                },
                {   price:999,
                    title:'fasttrack',
                    qty:1,
                    img:'',
                    id:2
                },
                {   price:1150,
                    title:'jeans',
                    qty:1,
                    img:'',
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

   
    render() {
        const {products} = this.state
        return(
        <div className="Cart">
        {products.map((product) =>{
            return (
            <CartItem 
            product={product} 
            key={product.id}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            />
            )
        })}
        
        </div>
        )
    }
}
export default Cart;