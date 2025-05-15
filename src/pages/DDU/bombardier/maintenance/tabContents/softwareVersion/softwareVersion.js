import React from 'react'
import classes from './softwareVersion.module.css';

export const SoftWareData=({data})=>{
    return(
        <>
        {data?.map((item, index)=>{
            return(
                <>
                <span>{item.name}</span>
                <span>{item.value}</span>
                </>
            )
        })}
        </>
    )
}
export default function SoftwareVersion() {
    const softWareData=[
        {
            name:"CCUO2",
            value:"1.2.3.0",
        },
        {
            name:"CON2-DCUL",
            value:"1.2.3.0",
        },
        {
            name:"CON2-DCUM1",
            value:"1.2.3.0",
        },
        {
            name:"CON2-DCUM2",
            value:"1.2.3.0",
        },
        {
            name:"CON2-DCUM3",
            value:"1.2.3.0",
        },
        {
            name:"CON2-DCUM3",
            value:"1.2.3.0",
        },
    ];
  return (
    <div className={classes.container}>
        <section>
            <SoftWareData data={softWareData}/>
        </section>
        <section>
            <SoftWareData data={softWareData}/>
        </section>
        <section>
          <SoftWareData data={softWareData}/>
        </section>
    </div>
  )
}
