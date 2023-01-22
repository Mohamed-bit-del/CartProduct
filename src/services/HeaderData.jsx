import React from 'react';
import HeaderMiddle from '../components./header/HeaderMiddle';

const HeaderData = () => {
    return (
        <div>
            <HeaderMiddle 
                Cart='cart'
                Wishlist='wishlist'
                List='list'
            />
        </div>
    )
}

export default HeaderData