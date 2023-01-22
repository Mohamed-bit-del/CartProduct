import React from 'react';
// RouteLink
import { Link } from "react-router-dom";
// CSS Files
import Styles from './Breadcrumbs.module.css';
import Custem from '../../layOut/app.module.css';

const Breadcrumbs = ( props ) => {
    const { Men, Clothing, Tops, Adidas, Shirt } = props;
    return (
        <div className={Styles.breadcrumb}>
            <div className={Custem.container}>
                <ul className={Styles.breadcrumbParent}>
                    <Link className={Styles.breadcrumbItem}>{Men}</Link>
                    <Link className={Styles.breadcrumbItem}>{Clothing}</Link>
                    <Link className={Styles.breadcrumbItem}>{Tops}</Link>
                    <Link className={Styles.breadcrumbItem}>{Adidas}</Link>
                    <span className={Styles.breadcrumbItem}>{Shirt}</span>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumbs