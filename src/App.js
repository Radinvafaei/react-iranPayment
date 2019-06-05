import React, { Component } from 'react';
import CheckOut from './components/checkout'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkoutConfig : {
                iranPayment : {
                    isAvailable : true,
                    amount : {
                        totalPrice : 0
                    }
                }
            }
        }
    }
    render(){
        const { checkoutConfig } = this.state
        return (
            <div className="App">
                <CheckOut {...checkoutConfig}/>
            </div>
        );
    }
}

export default App;
