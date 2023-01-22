import React from 'react';
import Navbar from '../components./header/navbarLinks/Navbar';

const NavbarData = () => {
    return (
        <div>
            <Navbar 
                Men='men'
                Women='women'
                Unisex='unisex'
                Kids='kids'
                Sellers='best sellers'
                Arrival='new arrval'
                Offer='offers'
            />
        </div>
    )
}

export default NavbarData;