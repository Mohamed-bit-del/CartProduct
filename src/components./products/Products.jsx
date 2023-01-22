import React from 'react'
// CSS Files
import Styles from './Products.module.css';
import Custem from '../../layOut/app.module.css';
// Componenets
import CardData from '../../services/CardData';

const Products = ( props ) => {
    const { Title, Desc } = props;
    return (
        <section className={Styles.products}>
            <div className={Custem.container}>
                <div className={Styles.productParent}>
                    <div className={Styles.productTitles}>
                        <h2 className={`${Styles.productHeading} ${Styles.productTitlesStyle}`}>{Title}</h2>
                        <p className={`${Styles.productdesc} ${Styles.productTitlesStyle}`}>{Desc}</p>
                    </div>

                    <div className={Styles.productCards}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                        <CardData />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products