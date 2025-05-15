import React, { useEffect, useState } from 'react';
import './inputselectStyles.css';
import increase_icon from '../../../assets/Instructor-station/Icons/increase_icon.svg';
import decrease_icon from '../../../assets/Instructor-station/Icons/decrease_icon.svg';

const InputSelect = ({guage,handleValue=()=>{},propValue,style}) => {
    console.log("propValue",propValue)
    const [value, setValue] = useState(0); 

useEffect(()=>{
    if(propValue)
  setValue(propValue)
},[propValue])
 

    const handleIncrease = () => {
        setValue(prev => prev + 1);
        handleValue(value+1)
       
    };

    const handleDecrease = () => {
        if (value > 0) {
            setValue(prev => prev - 1);
            handleValue(value-1)
        }else{
            handleValue(0)
        }
    };

//     useEffect(()=>{
//         handleValue(value)
// },[value])

    return (
        <div style={style} className='selectdiv'>
            <div className='input'>
                <span className='value-display'>{value}</span> <div className='km'>{guage?guage:null}</div>
            </div>
            <div className='buttonsdiv'>
                <div className='add'>
                    <button type="button" className="add-button" onClick={handleIncrease}>
                        <div className='button-img'>
                            <img src={increase_icon} alt="Increase" />
                        </div>
                    </button>
                </div>
                <div className='minus'>
                    <button type='button' className='minus-button' onClick={handleDecrease}>
                        <div className='button-img'>
                            <img src={decrease_icon} alt="Decrease" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputSelect;
