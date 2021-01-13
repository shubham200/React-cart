import React from 'react';

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price:11999,
            title:'OnePlus 5',
            qty:1,
            img:''
        }
    }

    increaseQuantity=() => {
         console.log(this.state.qty)
         this.setState((prevState) => {
             return {
                 qty : prevState.qty+1
             }
         })
    }

    decreaseQuantity=() => {
        const {qty} = this.state
        if(qty===0)
        {
            return;
        }
        console.log(this.state.qty)
        this.setState((prevState) => {
            return {
                qty:prevState.qty -1
            }
        })
    }
    render() {
        const {price,title,qty} = this.state;
        return (
         <div className="cart-item">
         <div className="left-block">
            <img style={styles.image} src="https://static.toiimg.com/photo/59267498.cms" />
         </div>
         <div className="right-block">
         <div style={{fontSize:25}}>{title}</div>
         <div style={{fontSize:18,Color:'#777'}}>Rs. {price}</div>
         <div style={{fontSize:18,Color:'#777'}}>Qty: {qty}</div>
         <div className="cart-item-actions">
            {/*buttons*/}
            <img
            className="action-icons" 
            alt="+" 
            src="https://www.flaticon.com/svg/vstatic/svg/159/159690.svg?token=exp=1610500754~hmac=0f2a3d90319f57df5d45608bcf22ec5f"
            onClick={this.increaseQuantity}
            />
            <img 
            className="action-icons" 
            alt="-"
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1610500881~hmac=e88e3934057e245f28e27042ad698f37"
            onClick={this.decreaseQuantity}
            />
            <img 
            className="action-icons" 
            alt="x" 
            src="https://www.flaticon.com/svg/vstatic/svg/3209/3209887.svg?token=exp=1610500957~hmac=dedeb2a886a08871cf7e5cf341084e3f"
            />
            </div>
         </div>
         </div>   
        );
    }
}

const styles = {
    image: {
        height:130,
        width:130,
        borderRadius:6,
        background:'#ccc'
    }
}

export default CartItem;