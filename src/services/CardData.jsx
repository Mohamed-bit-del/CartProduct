import React from 'react'
const Card = React.lazy(() => import('../components./card/Card'))


const CardData = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Card 
                    Desc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                    PriceNum='9,999'
                    Cash = 'le'
                    PriceOld='251'
                    Offer='30%'
                    RateNum='4.9 of 5'
                    Centry='from'
                    CentryF='uk'
                    City='to'
                    CityT='egypt'
                    Time='in'
                    TimeC='10'
                />
            </React.Suspense>
        </div>
    )
}

export default CardData;