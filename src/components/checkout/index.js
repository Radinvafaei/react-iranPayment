import React from 'react'
import IranPayment from './iranpayment';
import './index.css'

const CheckOut = (props) => {    
    const {iranPayment} = props
    return(
        <div className='card-wrapper'>
            {iranPayment.isAvailable && <IranPayment {...iranPayment}/>}
        </div>
    )
    
}
export default CheckOut