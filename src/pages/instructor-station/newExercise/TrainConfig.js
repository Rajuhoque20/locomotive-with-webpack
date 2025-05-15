import React, { useState } from 'react'
import classes from './exercise.module.css';
// import HeadingLabel from '../../components/Instructor-station/UIComp/HeadingLabel';
import HeadingLabel from '../../../components/Instructor-station/UIComp/HeadingLabel';

import ImageLabelCard from '../../../components/Instructor-station/UIComp/ImageLabelCard';
import { CustomSwitch } from '../panels/LiveSimulator/SimulatorPage/Simulation/LiveSimulationManagement';
import RangePicker from '../../../components/Instructor-station/UIComp/RangePicker';
import InputSelect from '../../../components/Instructor-station/UIComp/InputSelect';
import { Icons } from '#framework';
export default function TrainConfig() {
    const {train1,train2,train3,frieght,passanger} = Icons.ISIcons
    const sampleData=[
        {
            id:1,
            title:'Broken Window',
            subTitle:"Damaged front window of locomotivd",
            enable:true,
        },
        {
            id:2,
            title:'Headlight',
            subTitle:"Manage the operation of headlight ",
            enable:false,
        },
        {
            id:3,
            title:'Wiper',
            subTitle:"operate and  adjust wiper" ,
           enable:true,
        },
    ]
    const LocoData=[
        {
            id:1,
            label:'WAP-7',
            icon:train1,
        },
        {
            id:2,
            label:'WAP-5',
            icon:train2,
        },
        {
            id:1,
            label:'WAG-9',
            icon:train3,
        },
    ]
    const LocoTypeData=[
        {
            id:1,
            label:'Passanger',
            icon:passanger,
        },
        {
            id:2,
            label:'Freight',
            icon:frieght,
        },
        
    ]
    const [data,setData]=useState(sampleData)
    const handleSwitch=(id,checked)=>{

        let newData=data?.map((item)=>{
            if(item?.id===id){
                return {...item,enable:checked}
            }
            return item
        })
        setData(newData)
    }

  return (
    <div>
    <div className={classes.headingText}>Train Configuration</div>
     <div className={classes.gridContainer}>
            <div className={classes.grid1}>
            </div>
            <div className={classes.grid2}>
               <HeadingLabel title={"Select Locomotive"} />
               <div style={{display:'flex',gap:'1rem'}}>
                        {LocoData?.map((item,id)=>{
                            return(
                                <ImageLabelCard id={item.id} label={item.label} icon={item.icon} />
                                
                            )
                        })}
                    </div>
               <HeadingLabel title={"Select Train Type"}  />
               <div style={{display:'flex',gap:'1rem'}}>
                        {LocoTypeData?.map((item,id)=>{
                            return(
                                <ImageLabelCard id={item.id} label={item.label} icon={item.icon} />
                                
                            )
                        })}
                    </div>

               <div className={classes.cardContainer}>
                {data?.map((item,id)=>{

                    return(
                        <SwitchCard data={item} onChange={handleSwitch} />
                    )
                })}
               </div>

            </div>
        </div>
    </div>
  )
}

export const SwitchCard=({data,onChange,img,managementProps,style})=>{
    const {sun_glare_icon} = Icons.ISIcons
    return( 
        <div style={style} className={classes.SwitchCard}>
            <div className={classes.SwitchCardLeft} style={data?.components?.length>0?{width:'40%'}:{}}>
            <div className={classes.cardicon}>
             <img src={img?img:sun_glare_icon}/>
            </div>
            <div className={classes.SwitchCardTitles}>
                <div className={classes.SwitchCardTitle}>{data?.title}</div>
                <div className={classes.SwitchCardSubTitle}>{data?.subTitle}</div>
            </div>
            </div>
            {
                 data?.components?.length>0?
                 <div className={classes.SwitchCardRight} style={{width:'60%'}}>
                 {
                    data?.components.map(x => {
                        if(x.type === 'range')
                        {
                          return (
                            <div style={{ width: "13.25vw", marginLeft: "7.32vw" }}>
                            <RangePicker minRange={0} maxRange={100} defaultValue={0} value={managementProps?.[data?.key]} onChange={(val)=>{
                                console.log("rangepicker",val)
                                onChange(data?.key,val)

                            }}/>
                          </div>
                          )
                        }
                        if(x.type === 'inputselect'){
                          return(
                            <div style={{ width: "7.02vw", marginLeft: "0.87vw" }}>
                            <InputSelect guage={x.guage} propValue={managementProps?.[data?.key]}  handleValue={(val)=>{
                                onChange(data?.key,val)

                            }} />
                          </div>
                          )
                        }
                    })
                 }
                 </div>:
                <div className={classes.SwitchCardRight}>
                {/* <span style={{ color: "#FFFFFF",fontSize:"2vh" }}>On</span> */}
                    <CustomSwitch checked={data.enable} onChange={(val)=>{onChange(data?.key,val)}}/>
                </div>
            }

        </div>
    )
}
