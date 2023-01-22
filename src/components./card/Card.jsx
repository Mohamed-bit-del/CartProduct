import React from 'react'
// CSS Files
import Styles from './Card.module.css';
import Custem from '../../layOut/app.module.css';
// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Image
import Img from '../../image/product/img-product.png';
import Product from '../../image/product/product.png';
import Prand from '../../image/product/prand-product.png';

const Card = ( props ) => {
    const { Desc, PriceNum, PriceOld, Cash, Offer, RateNum,
        Centry, CentryF, City, CityT, Time, TimeC
    } = props;
    return (
        <div className={Styles.card}>
            <div className={Styles.cardImgs}>
                <div className={Styles.cardImg}>
                    <img src={Product} alt='Product' />
                </div>

                <div className={Styles.cardImgsIcon}>
                    <img src={Img} alt="logo" />
                </div>
            </div>

            <div className={Styles.cardDetails}>
                <p className={Styles.cardDesc}>{Desc}</p>
                <div className={Styles.cardAmount}>
                    <ul className={`${Styles.cardAmountPrices} ${Custem.sectionPrice}`}>
                        <li className={`${Styles.cardAmountPricesNum} ${Custem.sectionPriceNum}`}>{PriceNum} <span>{Cash}</span></li>
                        <li>
                            <ul className={Styles.cardAmountOffers}>
                                <li className={`${Styles.cardAmountPricesOld} ${Custem.sectionPriceOld}`}>{PriceOld} <span>{Cash}</span></li>
                                <li className={`${Styles.cardAmountPricesOffer} ${Custem.sectionPriceOffer}`}>{Offer}</li>
                            </ul>
                        </li>
                    </ul>
                    <div className={Styles.cardAmountPrand}>
                        <img src={Prand} alt='logo Prang' />
                    </div>
                </div>
            </div>

            <div className={Custem.textPriceRates}>
                <ul className={Custem.colectionRate}>
                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                </ul>
                <span className={Custem.textPriceRatesNum}>{RateNum}</span>
            </div>

            <div className={Styles.cardFrom}>
                <p className={Styles.cardFromCentry}> {Centry} <span>{CentryF}</span></p>
                <p className={Styles.cardFromCity}>{City}<span>{CityT}</span></p>
                <p className={Styles.cardFromTime}>{Time}<span>{TimeC}</span></p>
            </div>
        </div>
    )
}

export default Card