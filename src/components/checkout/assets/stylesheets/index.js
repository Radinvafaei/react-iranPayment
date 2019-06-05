const styles = {
    '@global': {
        'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':{
            WebkitAppearance : 'none'
        }
    },
    cardWrapper: {
        width: "95%",
        padding: "20px 0",
        margin: "10px auto",
        backgroundColor: "#1f1f28",
        borderRadius: "10px",
        WebkitBoxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)",
        MozBoxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)",
        boxShadow: "-1px -1px 20px 3px rgba(0,0,0,0.63)"
    }
}
export default styles