import React from 'react';

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price:11999,
            title:'(refurbished)OnePlus 5',
            qty:1,
            img:''
        }
    }

    increaseQuantity=() => {
         this.state.qty++;
         console.log(this.state.qty)
    }
    render() {
        const {price,title,qty} = this.state;
        return (
         <div className="cart-item">
         <div className="left-block">
            <img style={styles.image} />
         </div>
         <div className="right-block">
         <div style={{fontSize:25}}>{title}</div>
         <div style={{fontSize:18,Color:'#777'}}>Rs{price}</div>
         <div style={{fontSize:18,Color:'#777'}}>Qty:{qty}</div>
         <div className="cart-item-actions">
            {/*buttons*/}
            <img
            className="action-icons" 
            alt="increase" 
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1610490574~hmac=31628f72bcb1cd459806d5c1e50e5501"
            onClick={this.increaseQuantity}
            />
            <img 
            className="action-icons" 
            alt="decrease"
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1610490624~hmac=fa18e511543f971e9f7a3085092d5c51"
            />
            <img 
            className="action-icons" 
            alt="delete" 
            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1610490705~hmac=21f6204e3c121bb16b5b5d8fb0e12f64"
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