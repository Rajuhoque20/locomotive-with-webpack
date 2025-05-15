import React from 'react'
import { Button1 } from '../../operations/dynamicContent/relatedInfo/energy/energy';
export default function IsolateSS({title, onYes, onNo}) {
  return (
    <div className='d-flex align-center justify-center flex-col gx-5 fc-6 fs-4'>
        <span style={{border:"var(--border-primary)", padding:"3vh"}}>{title}</span>
        <div className='d-flex align-center gy-2'>
            <Button1 title={"YES"} onClick={onYes}/>
            <Button1 title={"NO"} onClick={onNo}/>
        </div>
    </div>
  )
}
