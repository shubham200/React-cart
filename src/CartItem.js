import React from 'react';

const CartItem =(props)=> {


        
        const {price,title,qty,img} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props
        return (

         <div className="cart-item">
         <div className="left-block">
            <img style={styles.image} src={img} />
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
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1610735838~hmac=6b9f9c9b00d120554ba145f6849779c3"
            onClick={() =>onIncreaseQuantity(product)}
            />
            <img 
            className="action-icons" 
            alt="-"
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1610735912~hmac=c273db7734e852a0c9bc011d55a6b7d4"
            onClick={()=>onDecreaseQuantity(product)}
            />
            <img 
            className="action-icons" 
            alt="x" 
            src="https://www.flaticon.com/svg/vstatic/svg/3964/3964085.svg?token=exp=1610735963~hmac=8e1c21379752018237c6ee0973fcf881"
            onClick={() =>onDeleteProduct(product.id)}
            />
            </div>
         </div>
         </div>   
        );
    
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