import React from 'react';
// Slider Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//  Style
import Styles from './Slider.module.css';
// Img
import Product from '../../image/product/Group 583@2x.png';
import Product1 from '../../image/product/Group 329.png';
import Product2 from '../../image/product/Group 331.png';
import Product3 from '../../image/product/Group 333.png';
import Product4 from '../../image/product/Group 335.png';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        arrows: true,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <div className={Styles.carousel}>
            <div>
                <img src={Product} alt='Product' />
            </div>
            <Slider {...settings}>
                <div className={Styles.innerCrousel}>
                    <div> <img src={Product1} alt='Product' /> </div>
                    <div> <img src={Product2} alt='Product' /> </div>
                    <div> <img src={Product3} alt='Product' /> </div>
                    <div> <img src={Product4} alt='Product' /> </div>
                    <div> <img src={Product1} alt='Product' /> </div>
                    <div> <img src={Product2} alt='Product' /> </div>
                    <div> <img src={Product3} alt='Product' /> </div>
                    <div> <img src={Product4} alt='Product' /> </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel