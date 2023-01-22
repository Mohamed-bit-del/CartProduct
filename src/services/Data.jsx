import React from 'react';
import Header from '../components./header/Header';
import Breadcrumbs from '../components./breadcrumbs/Breadcrumbs';
import DetailsProduct from '../components./detailsProduct/DetailsProduct';
import Products from '../components./products/Products';
import Footer from '../components./footer/Footer';

const Data = () => {
    return (
        <>
            <Header 
                Desc='Valentine’s Day Offers! Buy Two Get One Free Shop Now'
                Contact='contact us'
                Track='track order'
                store='find a store'
                Shoping='shop now'
            />

            <Breadcrumbs 
                Men='men'
                Clothing='clothing'
                Tops='tops'
                Adidas='adidas'
                Shirt='adidas black t-shirt'
            />

            <DetailsProduct
                Desc='Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                Type='men'
                RateNum='4.9 of 5'
                Rate='22 rate'
                PriceNum='9,999'
                Cash = 'le'
                PriceOld='251'
                Offer='30% off'
                Size='size'
                SizeSm='smail'
                SizeMd='medium'
                SizeLg='large'
                SizeXl='x-large'
                SizeXxl='xx-large'
                Color='color'
                Quantity='Quantity'
                Add='add to card'
                Pockup='pockup from store'
            />

            <Products 
                Title='similar products'
                Desc='you may like these products also'
            />

            <Footer
                Desc1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet'
                Desc2='Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut'
                Desc3='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore'
                Subscrip='subscribe to our newsletter'
                Btn='subscrip'
                About='about us'
                Contact='contact us'
                Order='track order'
                Terms='terms & conditions'
                Privacy='privacy policy'
                Sell='sell with us'
                Shipping='shipping and returns'
                Scial='/yeshtery'
                CopyRight='2021 yeshtery, all rights reserved.'
                Powered='powered by'
            />
        </>
    )
}

export default Data;