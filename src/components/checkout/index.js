import React from 'react'
import IranPayment from './iranpayment';
import injectSheet from 'react-jss'
import styles from './assets/stylesheets'
const CheckOut = (props) => {    
    const {iranPayment, classes} = props
    return(
        <div className={classes.cardWrapper}>
            {iranPayment.isAvailable && <IranPayment {...iranPayment}/>}
        </div>
    )
}
export default injectSheet(styles)(CheckOut)