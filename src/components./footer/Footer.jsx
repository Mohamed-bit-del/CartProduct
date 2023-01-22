import React from 'react';
// RouteLink
import { Link } from "react-router-dom";
// CSS Files
import Styles from './Footer.module.css';
import Custem from '../../layOut/app.module.css';
// Img
import LogoFooter from '../../image/logo/footer-logo.png';
import FaceBook from '../../image/social/faceBook.png';
import LinkedIn from '../../image/social/likenIn.png';
import Insta from '../../image/social/insta.png';
import Twitter from '../../image/social/twitter.png';
import Cash from '../../image/pay/cash.png';
import Visa from '../../image/pay/visa.png';
import Card from '../../image/pay/card.png';
import Nasnav from '../../image/logo/nasnav-logo.png'


const Footer = ( props ) => {
    const { Desc1, Desc2, Desc3,
            Subscrip, Btn,
            About, Contact, Order, Terms, Privacy, Sell, Shipping,
            Scial, CopyRight, Powered
    } = props;
    return (
        <footer>
            <div className={Custem.container}>
                <div className={Styles.footerParent}>
                    <div className={Styles.footerTop}>
                        <div className={Styles.footerDesc}>
                            <div className={Styles.footerDescLogo}>
                                <img src={LogoFooter} alt='LogoFooter' />
                            </div>
                            <div className={Styles.footerDescText}>
                                <p>{Desc1} </p>
                                <p>{Desc2}</p>
                                <p>{Desc3}</p>
                            </div>
                        </div>

                        <div className={Styles.footerdetiles}>
                            <h3 className={Styles.footerdetilesTitle}>{Subscrip}</h3>
                            <div className={Styles.footerSendMail}>
                                <input type='mail' placeholder='Enter YOur Mail' className={Styles.footerInput} />
                                <button className={`${Styles.footerSendMailAction} ${Custem.btn}`}>{Btn}</button>
                            </div>

                            <div className={Styles.footerdetileslinks}>
                                <ul className={Styles.collectionLink}>
                                    <Link className={Styles.collectionItem}>{About}</Link>
                                    <Link className={Styles.collectionItem}>{Contact}</Link>
                                    <Link className={Styles.collectionItem}>{Order}</Link>
                                    <Link className={Styles.collectionItem}>{Terms}</Link>
                                    <Link className={Styles.collectionItem}>{Privacy}</Link>
                                    <Link className={Styles.collectionItem}>{Sell}</Link>
                                    <Link className={Styles.collectionItem}>{Shipping}</Link>
                                </ul>
                                <ul className={Styles.collectionSocile}>
                                    <Link className={Styles.collectionSocileLink}>
                                        <img src={FaceBook} alt='FaceBook Icon' />
                                        <span>{Scial}</span>
                                    </Link>
                                    <Link className={Styles.collectionSocileLink}>
                                        <img src={LinkedIn} alt='LinkedIn Icon' />
                                        <span>{Scial}</span>
                                    </Link>
                                    <Link className={Styles.collectionSocileLink}>
                                        <img src={Insta} alt='Insta Icon' />
                                        <span>{Scial}</span>
                                    </Link>
                                    <Link className={Styles.collectionSocileLink}>
                                        <img src={Twitter} alt='Twitter Icon' />
                                        <span>{Scial}</span>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.footerBottom}>
                        <p className={Styles.footerCopyrith}>&copy;{CopyRight}</p>
                        <ul className={Styles.footerPsys}>
                            <li><img src={Cash} alt='' /></li>
                            <li><img src={Visa} alt='' /></li>
                            <li><img src={Card} alt='' /></li>
                        </ul>
                        <div className={Styles.footerPowered}>
                            <span>{Powered}</span>
                            <img src={Nasnav} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;