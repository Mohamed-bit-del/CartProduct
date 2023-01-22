import React from 'react'
// CSS Files
import Styles from './detailsProduct.module.css';
import Custem from '../../layOut/app.module.css';
// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Image
import Prand from '../../image/product/prand-product.png';
import  blackShart from '../../image/product/black-shart.png'
import  redShart from '../../image/product/red-shart.png';
// Components   
import Carousel from '../carousel/Carousel';

const DetailsProduct = ( props ) => {
    const {Desc, Type, RateNum, Rate, PriceNum, Cash, PriceOld, Offer,
            Size, SizeSm, SizeMd, SizeLg, SizeXl, SizeXxl,
            Color, Quantity,
            Add, Pockup} = props;

            function btnAdd () {
                
            }

            let counter = 0;
            let counterNum = ([]);
            console.log(counterNum);

            let onIncrement = (e) => {
                counter += 1;
                console.log(counter);
            }

            
            let onDecrement = (e) => {
                if (counter > 0) {
                    counter -= 1 ;
                    console.log(counter);
                } else {
                    return 0;
                }
            }

    return (
        <section className={Styles.detailsProduct}>
            <div className={Custem.container}>
                <div className={Styles.detailsProductPArent}>
                    <div className={Styles.sliderProduct}>
                        <Carousel />
                    </div>
                    <div className={Styles.detailItem}>
                        <div className={Styles.textPrice}>
                            <div className={Styles.textPriceLogo}>
                                <img src={Prand} alt='Logo Prand'/>
                            </div>

                            <p className={Styles.textPrice}>
                                {Desc}
                            </p>

                            <p className={Styles.textPriceType}>{Type}</p>

                            <div className={Custem.textPriceRates}>
                                <ul className={Custem.colectionRate}>
                                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                                    <li className={Custem.iconStar}><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                                <span className={Custem.textPriceRatesNum}>{RateNum}</span>
                                <span className={Styles.textPriceRate}>{Rate}</span>
                            </div>

                            <ul className={Custem.sectionPrice}>
                                <li className={Custem.sectionPriceNum}>{PriceNum} <sub>{Cash}</sub></li>
                                <li className={Custem.sectionPriceOld}>{PriceOld} <span>{Cash}</span></li>
                                <li className={Custem.sectionPriceOffer}>{Offer}</li>
                            </ul>
                        </div>

                        <div className={Styles.productSize}>
                            <h4 className={Styles.titleProduct}>{Size}</h4>
                            <ul className={Styles.coloctionSize}>
                                <li className={Styles.coloctionSizeItem}>{SizeSm}</li>
                                <li className={Styles.coloctionSizeItem}>{SizeMd}</li>
                                <li className={Styles.coloctionSizeItem}>{SizeLg}</li>
                                <li className={Styles.coloctionSizeItem}>{SizeXl}</li>
                                <li className={Styles.coloctionSizeItem}>{SizeXxl}</li>
                            </ul>
                        </div>

                        <ul className={Styles.productColor}>
                        <h4 className={Styles.titleProduct}>{Color}</h4>
                            <ul className={Styles.coloctionColor}>
                                <li className={Styles.coloctionColorItem}>
                                    <img src={blackShart} alt=''/>
                                </li>

                                <li className={Styles.coloctionColorItem}>
                                    <img src={redShart} alt='' />
                                </li>
                            </ul>
                        </ul>

                        <div className={Styles.productQuantity}>
                            <h4 className={Styles.titleProduct}>{Quantity}</h4>
                            <div className={Styles.counter}>
                                <button className={`${Styles.counterDecrease} ${Styles.btnAction}`} onClick={() => onDecrement()} type='button'>-</button>
                                    <span className={Styles.counterNum}>{counter}</span>
                                <button className={`${Styles.counterIncrease} ${Styles.btnAction}`} onClick={() => onIncrement()} type='button'>+</button>
                            </div>
                            {/* <>
                                <Counter Counter={Counter}/>
                            </> */}
                        </div>

                        <div className={Styles.ActionProduct}>
                            <button className={`${Styles.btnAdd} ${Custem.btn}`} onClick={() => btnAdd()}>{Add} {props.Counter}</button>
                            <button className={`${Styles.btnPokup} ${Custem.btn}`}>{Pockup}</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsProduct;