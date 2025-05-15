import React from 'react'
import './trackformStyles.css'
import Dropdown from './DropDownMenu'
import InputSelect from './InputSelect'
const TrackForm = ({title,img,selector,options,formStyle,placeholder,inputSelect}) => {
    const data = ['option1','option2']
  return (
    <div className='formdiv' style={formStyle}>
    <div className='formcontent'>
       <img className='formicon' src={img?img:''}></img>
       <div className='formtitle'>
       {title?title:'please provide content'}
       </div>
      </div>
      <div className='formbutton'>
        
        {/* {selector=='inputselector'?<InputSelect/>:<Dropdown options={options?options:data}/>} */}
        {!inputSelect?['inputselector','inputview'].includes(selector)?selector=='inputselector'?<InputSelect/>:<input type="text" class="input_lable" placeholder={placeholder?placeholder:"Enter Here"}/>:<Dropdown options={options?options:data}/>:inputSelect}
      </div>
    </div>

  )
}

export default TrackForm
