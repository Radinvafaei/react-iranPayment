const index = {
    '@global': {
        'input[name="expDateByM"]:-moz-placeholder, input[name="expDateByY"]:-moz-placeholder': {
            textAlign: 'right',
            color: 'black'
        },
        'input[name="expDateByM"]:-ms-input-placeholder, input[name="expDateByY"]:-ms-input-placeholder': {
            textAlign: 'right',
            color: 'black'
        },
        'input[name="expDateByM"]::-webkit-input-placeholder, input[name="expDateByY"]::-webkit-input-placeholder': {
            textAlign: 'right',
            color: 'black'
        },
        '#inp4': {
            display: 'none'
        },
        '#cvv': {
            width: '35px'
        }
    },
    card: {
        width: "400px",
        height: "210px",
        border: "0.5px solid #3b3b7c",
        borderRadius: "10px",
        padding: "10px",
        WebkitBoxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)",
        MozBoxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)",
        boxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)",
        margin: "auto",
        transition: "background-color .5s ease-in",
        fontWeight: "bold",
        color: "white",
        '& input': {
            width: "50px",
            height: "30px",
            margin: "5px",
            backgroundColor: "#98a5c5",
            borderRadius: "5px",
            borderStyle: "none",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "12px"
        }
    },
    id: {
        textAlign: 'center',
        margin: {
            top: 0,
            right: 'auto',
            bottom: 0,
            left: 'auto'
        }
    },
    cardName: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
        '& label' : {
            display: 'inline-block',
            margin: {
                top : '35px',
                bottom : '10px'
            }
        }
    },
    shetab: {
        float: 'left',
        width: '40px',
        display: 'inline'
    },
    logo: {
        float: 'right',
        width: '40px',
        display: 'inline'
    },
    cardInfo: {
        padding: '7.5px',
        '& input': {
            width: '30px',
            height: '30px'
        }
    },
    submit: {
        textAlign: "center",
        backgroundColor: "#8692be",
        width: "200px",
        margin: "15px auto",
        borderRadius: "10px",
        transition: "opacity .5s ease-in",
        WebkitBoxShadow: "0px 0px 10px 1px rgba(255,255,255,1)",
        MozBoxShadow: "0px 0px 10px 1px rgba(255,255,255,1)",
        boxShadow: "0px 0px 10px 1px rgba(255,255,255,1)",
        '& input[type="password"]': {
            backgroundColor: "#98a5c5",
            display: "block",
            margin: "10px auto",
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "5px"
        },
        '& input[type="submit"]': {
            backgroundColor: "#404fa1",
            color: "whitesmoke",
            border: "1px solid #3b3b7c",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer"
        },
        '& input[type="submit"]:disabled': {
            backgroundColor: 'rgba(75, 90, 247, 0.18)',
            cursor: 'not-allowed'
        }
    },
    '@media only screen and (max-width: 500px)': {
        card: {
            width: '180px',
            height: '100px',
            fontSize: '10px',
            '& input': {
                width: '30px',
                height: '10px',
                margin: '2px',
                fontWeight: 'normal',
                borderRadius: '2px'
            }
        },
        cardInfo :{
            '& input':{
                width: '30px',
                height: '10px',
                margin: '2px',
                fontWeight: 'normal',
                borderRadius: '2px',
                marginTop: '5px',
                padding: '1px'
            }
        },
        shetab: {
            width: '20px'
        },
        logo: {
            width: '20px'
        },
        cardName :{
            '& label': {
                margin:{
                    top: '15px',
                    bottom: '5px'
                }
            }
        }
    }
}
export default index