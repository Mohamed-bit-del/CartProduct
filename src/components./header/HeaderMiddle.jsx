import React from 'react'
// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
// CSS Files
import Styles from './Header.module.css';
import Custem from '../../layOut/app.module.css';
// Image
import Adidas from '../../image/logo/adidas.png';


const HeaderMiddle = ( props ) => {
    const { Cart, Wishlist, List} = props;
    
    return (
        <section className={Styles.headerMiddle}>
            <div className={Custem.container}>
                <div className={Styles.headerMiddleParent}>
                    <div className={Styles.headerMiddleSearch}>
                        <input type='search' placeholder='Search' className={Styles.inputSearch} />
                        <FontAwesomeIcon icon={faMagnifyingGlass}  className={Styles.headerMiddleSearchIcon}/>
                    </div>  

                    <div className={Styles.headerMiddleAdidas}>
                        <img src={Adidas} alt='Adidas Logo' />
                    </div>

                    <ul className={Styles.headerTopCollection}>
                            <li className={Styles.collectionItem}>
                                    <span className={Styles.cart}>{0}</span>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {Cart}
                                </span>
                            </li>
                            <li className={Styles.collectionItem}>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {Wishlist}
                                </span>
                            </li>
                            <li className={Styles.collectionItem}>
                                <span className={Styles.collectionIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className={Styles.collectionText}>
                                    {List}
                                </span>
                            </li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default HeaderMiddle