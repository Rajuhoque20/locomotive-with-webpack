import React, { useState } from 'react'
import './ExcercisePanelCautionOrders.css'
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect'
import { DropdownById } from '../../../../../../components/Instructor-station/UIComp/DropDownMenu'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp'
import { Icons } from '#framework'
export const ExcercisePanelCautionOrders = () => {
    const {deleted_file_icon,add_icon} = Icons.ISIcons
    const headers = [
        {
            id: 1,
            key: 'slno',
            lable: 'S.No',
            width: '5%'
        },
        {
            id: 2,
            key: 'from',
            lable: 'From',
            width: '15%'
        },
        {
            id: 3,
            key: 'to',
            lable: 'To',
            width: '15%'
        },
        {
            id: 4,
            key: 'speed',
            lable: 'Speed',
            width: '15%'
        },
        {
            id: 5,
            key: 'distance',
            lable: 'Distance',
            width: '15%'
        },
        {
            id: 6,
            key: 'cause',
            lable: 'Cause',
            width: '35%'
        }
    ]
    const [data, setData] = useState([])
    const add = () => {
        const emptyData = {
            id:data.length+1,
            from:'',
            to:'',
            speed:'',
            distance:'',
            cause:''
        }
        setData([...data,emptyData])
    }
    const removeById = (idToRemove) => {
        setData(prevData => prevData.filter(item => item.id !== idToRemove));
      };

    return (
        <div className='epco_container'>
            <div className='epco_inner_container'>
                <div className='epco_table_header'>
                    <div className='epco_table_header_row'>
                        {
                            headers.map((x) => {
                                return (
                                    <div style={{ width: x.width }} className='epco_table_header_cell'>
                                        {x.lable}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='epco_table_data'>
                     {
                        data.map((x,index) => {
                            return(
                                <div className='epco_table_data_row'>
                                <div style={{ width: '5%' }} className='epco_table_data_row_cell'>{index+1}</div>
                                <div style={{ width: '15%', paddingLeft: '1%' }} className='epco_table_data_row_cell'><input className='epco_table_data_input' /></div>
                                <div style={{ width: '15%', paddingLeft: '1%' }} className='epco_table_data_row_cell'><input className='epco_table_data_input' /></div>
                                <div style={{ width: '15%', paddingLeft: '1%' }} className='epco_table_data_row_cell'>
                                    <InputSelect style={{ width: '80%', height: '70%', background: 'var(--Windows-Glass,rgba(8, 4, 37, 0.34))', 'box-shadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.271)' }} />
                                </div>
                                <div style={{ width: '15%', paddingLeft: '1%' }} className='epco_table_data_row_cell'>{`0 km`}</div>
                                <div style={{ width: '30%', paddingLeft: '1%' }} className='epco_table_data_row_cell'>
                                    <DropdownById options={[]} style={{ width: '100%' }} dropdownStyle={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '5%', paddingLeft: '1%' }} className='epco_table_data_row_cell'>
                                  <ButtonComp onClick={() => removeById(x.id)} prefixIcon={deleted_file_icon} bntStyle={{width:'3vw',background:'none'}}/>
                                </div>
                            </div>
                            )
                        })
                     }

                </div>
                <div onClick={() => add()} className='epco_addCautionRow'>
                     <div className='epco_addCautionRow_button'>
                        <div style={{height:'70%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <img style={{height:'80%',width:'100%'}} src={add_icon}/> 
                        </div>
                       <div style={{height:'20%',width:'100%',color:'white',fontSize:'1.5vh',textAlign:'center',fontWeight:'500'}}>
                            New Caution
                       </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

