import React from 'react';
// RouteLink
import { Link } from "react-router-dom";
// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPhoneVolume, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// CSS Files
import Styles from './Header.module.css';
import Custem from '../../layOut/app.module.css';
// Image
import logo from '../../image/logo/logoHeader.png'
import NavbarData from '../../services/NavbarData';
import HeaderData from '../../services/HeaderData';
// Components



const Header = ( props ) => {
const { Desc, Contact, Track, store, Shoping } = props;
    return (
        <header>
            <section className={Styles.headerTop}>
                <div className={Custem.container}>
                    <div className={Styles.headerTopParent}>
                        <div className={Styles.headerToplogo}>
                            <img src={logo} alt='Logo'/>
                        </div>

                        <div className={Styles.headerToptextArow}>
                            <FontAwesomeIcon icon={ faAngleLeft } className={Styles.iconArow} />
                            <p className={Styles.headerTopText}>
                                {Desc}
                            <Link className={Styles.headerTopShping}>{Shoping}</Link>
                            </p>
                            <FontAwesomeIcon icon={ faAngleRight } className={Styles.iconArow} />
                        </div>

                        <ul className={Styles.headerTopCollection}>
                            <li className={Styles.collectionItem}>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {Contact}
                                </span>
                            </li>
                            <li className={Styles.collectionItem}>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {Track}
                                </span>
                            </li>
                            <li className={Styles.collectionItem}>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {store}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <HeaderData />
            <NavbarData />
        </header>
    )
}

export default Header;