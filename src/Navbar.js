import React from 'react';

const Navbar=(props)=> {
    

        return(
            <div style={styles.nav}>
            
            <div style={styles.cartContainer}>
            
            <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/25/25619.svg?token=exp=1610735735~hmac=6eb660ffdd02948b4451dfa7d19fa09d" alt=" "  />
            <span style={styles.cartCount}>{props.count}</span>
            
            </div>
            
            </div>
            );
        
}

const styles={
    cartIcon:{
        height:32,
        marginRight:20,
    },
    nav:{
        height:50,
        background:'#FFB6C1',
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
       
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9

    }

}

export default Navbar;