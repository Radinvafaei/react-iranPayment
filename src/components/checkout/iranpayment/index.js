import React ,{ Component } from 'react'
import axios from 'axios'
import {Utils} from '../../utils'
import shetab from './assets/icons/svg/Shetab.svg'
import './assets/stylesheets/index.css'
import banks from './banks'
const images = Utils.importAll(require.context('./assets/icons/svg/', true, /\.svg/));
class IranPayment extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor:'#4c4c98',
            color : '#000',
            name : 'شماره کارت را وارد کنید',
            logo : 'Markazi.svg',
            id0 : '',
            id1 : '',
            id2 : '',
            id3 : '',
            id4 : '',
            cvv : '',
            expDateByM : null,
            expDateByY : null,
            pass : null,
            isReadyForSend : false
        }
        this.input = React.createRef()
    }
    _is19Digit = (id) => {
        let is19 = (id.slice(0,6) === '627353') ? true : false
        return is19
    }
    _isPasargad = (id) => {
        let isPasargad = (id.slice(0,6) === '502229') ? true : false
        return isPasargad
    }
    checkBank = () => {
        const { id0, id1, id2, id3, id4 ,cvv,expDateByM,expDateByY} = this.state
        let id = [id0, id1,id2, id3, id4].join(''),
            inp4 = this.input.current,
            bank,
            state
        bank = banks.find(bank => bank.key === id.slice(0, 6))
        if (this._is19Digit(id)) {
            inp4.disabled = false
            inp4.style.display = 'inline'
        } else {
            inp4.disabled = true
            inp4.style.display = 'none'
        }
        (this._isPasargad(id)) ? this.setState({color : '#fff'}) : this.setState({color : '#000'})
        if (id.length >= 6 && bank === undefined) {
            state = {
                color : '#ff1c0a',
                name : 'شماره کارت معتبر نمی باشد',
                isReadyForSend : false
            }
        } else if (bank === undefined){
            state = {
                backgroundColor:'#4c4c98',
                color : '#000',
                name : 'شماره کارت را وارد کنید',
                logo : 'Markazi.svg',
                isReadyForSend : false
            }
        } else {
            let lngth = [id, cvv,expDateByM,expDateByY].join('').length,
                isReady = (lngth >= 23 && lngth <= 27) ? true : false
            state = {...bank,isReadyForSend : isReady}
        }
        return state
    }
    bank = (e) => {
        Utils.focusNext(e)
        this.setState({[e.target.name]:e.target.value}, () => {
            const bankInfo = this.checkBank()
            this.setState(bankInfo)
        })
    }
    pay = (e) => {
        e.preventDefault()
        let url = process.env.REACT_APP_API_URL
        const {id0, id1, id2, id3, id4, cvv, expDateByM , expDateByY , pass} = this.state
        const { amount } = this.props
        axios.post(url,{id0, id1, id2, id3, id4, cvv, expDateByM , expDateByY , pass, amount})
            .then((result) => {
                console.log(result)
            })
    }
    render(){
        const { backgroundColor ,color,logo,name,isReadyForSend} = this.state
        return(
            <form onChange={this.bank} onSubmit={this.pay}>
                <div className='card' style={{backgroundColor : backgroundColor,color:color}}>
                    <div className='cardName'>
                        <img className='shetab' src={shetab} alt='shetab'/>
                        <label htmlFor='inp0'>{name}</label>
                        <img className='logo' src={images[logo]} alt={name}/>
                    </div>
                    <div className='id'>
                        <input name='id0' style={{color : color}} minLength={4} maxLength={4} tabIndex={1} id="inp0" type='number' required/>
                        <input name='id1' style={{color : color}} minLength={4} maxLength={4} tabIndex={2} id="inp1" type='number' required/>
                        <input name='id2' style={{color : color}} minLength={4} maxLength={4} tabIndex={3} id="inp2" type='number' required/>
                        <input name='id3' style={{color : color}} minLength={4} maxLength={4} tabIndex={4} id="inp3" type='number' required/>
                        <input name='id4' style={{color : color}} minLength={3} maxLength={3} tabIndex={5} id="inp4" type='number' disabled ref={this.input}/>
                    </div>
                    <div className='cardInfo'>
                        <div className='date'>
                            <input name='expDateByY' style={{color : color}} minLength={2} maxLength={2} tabIndex={7} id="expByY" type='number' placeholder='سال' required/>
                            /
                            <input name='expDateByM' style={{color : color}} minLength={2} maxLength={2} tabIndex={6} id="expByM" type='number' placeholder='ماه' required/>
                        </div>
                        <div className='cvv2'>
                            <label style={{color : color}} htmlFor='cvv'>cvv2</label>
                            <input name='cvv' style={{color : color}} minLength={3} maxLength={4} tabIndex={8} id="cvv" type='number' required/>
                        </div>
                    </div>
                </div>
                <div className='submit' style={{opacity : (isReadyForSend) ? '1':'.01'}}>
                    <label htmlFor='pass'>رمز دوم</label>
                    <input id='pass' name='pass' minLength={4} maxLength={12} tabIndex={9} type='password' disabled={!isReadyForSend} required/>
                    <input type='submit' value='پرداخت' id='submit' disabled={!isReadyForSend}/>
                </div>
            </form>
        )
    }
}
export default IranPayment
