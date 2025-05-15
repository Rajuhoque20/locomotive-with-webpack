import React from 'react'
import './inputCardStyles.css'
import ButtonComp from './ButtonComp';
const InputCard = ({ lable, button, buttonIcon, buttonTitle, btnStyles, formStyles, placeholder, drag,value }) => {
    let formStyle = formStyles ? formStyles : {}
    const buttonStyle = {
        "width": "100%",
        "height": "5vh",
        "padding": "0px 4vh",
        "gap": "1.6vh",
        "borderRadius": "1vh",
        "backgroundBlendMode": "color-dodge",
        "background": "#9b9b9bd1",
        "color": "white",
    }
    if (button) {

        if (drag) {
            formStyle['height'] = '17vh'
        } else {
            formStyle['height'] = '18vh'
        }
    }
    if(!button && drag){
        formStyle['height'] = '11vh'
    }
    if(drag){
       formStyle['padding'] = '0.5vh 3.2vh 0.5vh 3.2vh'
    }
    return (
        <div className='form' style={formStyle}>
            <label class="form-label">{lable}</label>
            <input value={value} type="text" class="input_lable" placeholder={placeholder ? placeholder : "Enter Here"} style={drag?{height:'6vh'}:{}} />
            {button ? <ButtonComp title={buttonTitle} prefixIcon={buttonIcon} bntStyle={btnStyles ? btnStyles : buttonStyle} /> : ''}
        </div>

    )
}

export default InputCard;
