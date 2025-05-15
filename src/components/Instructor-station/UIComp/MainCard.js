import React, { useState } from "react";
import classes from "./MainCard.module.css";
import moment from "moment";
import { Dropdown, Popover, Tooltip } from "antd";
import { DeleteOutlined, DownloadOutlined, EditOutlined } from '@ant-design/icons';

export default function MainCard({ data }) {
  const[openPop, setOpenPop]=useState(false);

      const PopContent=({data,onClick})=>{
        return(
          <div className='pop-content' >
          {data?.map((item,id)=>{

            return(
              <div onClick={()=>{onClick(item)}} key={id}>
               {item?.icon && <img src={item.icon} />}
                <span>{item?.lable}</span>
              </div>
            )
          })}
       
      </div>
        )
      }
    
  return (
    <div className={classes.mainCard}>
      <div style={{ color: "white" }}>{data?.title}</div>
      <div style={{ color: "white" }}>
        Last run: {moment(data.lastRunDate).fromNow()}
      </div>
      <img className={classes.mainImg} src={data?.icon} />

      <div className={classes.buttonContainer}>
        {data?.button?.map((item, id) => {
          console.log(item?.buttonType)
          if (item?.buttonType === "text") {
            return (
              <div className={classes.textButton}>
              <button
                key={id}
                onClick={item.actionOnclick}
                
              >
                {item?.title}
              </button>
              </div>
            );
          } 
          else if (item?.buttonType === "icon") {
            return (
              <div key={id} className={classes.iconButton} style={{display:'flex',justifyContent:'center'}}>
              <Tooltip title="Edit Exercise" placement='bottom' color='#545372'>   
              <img src={item?.icon} />
              </Tooltip>
               
              </div>
            );
          } 
          else if (item?.buttonType === "dropDown") {
            console.log('geting item',item)
            return (
              <div  key={id} className={classes.dropDownButton} >
              <Popover content={<PopContent data={item?.dropDownItem} onClick={item?.actionOnclick} />}
             placement='top'
                trigger={['click']}
               overlayClassName='pop-bg'
                open={openPop}
                onOpenChange={()=>{
                    setOpenPop(!openPop);
                }} 
                >
                    <Tooltip title="More" placement='bottom' color="#545372">
                            <div  className='card-more-icon' onClick={()=>{setOpenPop(true)}}>
                            <img src={item?.icon} />
                            </div>   
                    </Tooltip>
                </Popover>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
