import React from 'react'
import './trackContentStyles.css'
import ButtonComp from './ButtonComp';
import DynamicTable from './TableComponent';
const TrackContent = ({title1,tabledata,tablecolumns}) => {
    return (
        <div>
            <div className='trackviewcontent'>
            <div className='tablecontent'>
             <DynamicTable columns={tablecolumns} data={tabledata?tabledata:[]}/>
            </div>
            </div>
            <div className='trackviewaction'>
                <ButtonComp title={title1} bntStyle={{
                    "width": "131px",
                    "height": "40px",
                    "padding": "20px",
                    "gap": "10px",
                    "borderRadius": "12px",
                    "backgroundBlendMode": "color-dodge",
                    "background": "#948d8d",
                    "fontFamily": "'SF Pro', sans-serif",
                    "fontSize": "17px",
                    "fontWeight": "590",
                    "lineHeight": "22px",
                    "textAlign": "center",
                    "color":"#FFFFFF",
                    "whiteSpace": "nowrap",        // Prevent text wrapping
                    "overflow": "hidden",          // Hide overflow text
                    "textOverflow": "ellipsis"  
                }} />
                <ButtonComp title={'Save Changes'} bntStyle={{
                      "width": "158px",
                      "height": "40px",
                      "padding": "20px",
                      "gap": "10px",
                      "borderRadius": "12px",
                      "fontFamily": "'SF Pro', sans-serif",
                      "fontSize": "17px",
                      "fontWeight": "590",
                      "lineHeight": "20.29px",
                      "textAlign": "center",
                      "color": "#1F1F1F"
                }}/>
            </div>
        </div>
    )
}

export default TrackContent;
