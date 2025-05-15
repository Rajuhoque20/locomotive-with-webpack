import React, { useState } from 'react'
import './ExcercisePanelEvaluation.css'
import InputSelect from '../../../../../../components/Instructor-station/UIComp/InputSelect'
import { Icons } from '#framework'
const ExcercisePanelEvaluation = () => {
    const [dropDowndiv, setdropDowndiv] = useState('')
    const handleDropClick = (div) => {
        setdropDowndiv(div)
    }

    const blockTwo_Data = [
        {

            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        },
        {
            question: 'Driving Rules',
            result: 100
        }

    ]

    const dropDown_contents = [
        {
            lable: 'Vigilance alarm',
            penalty: 0,
            max_weight: 0

        },
        {
            lable: 'Horn not sounded',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Excess Speed : Sigma Board on app. RED',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Excess Speed : Passing yellow',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Sectional Speed limits',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Obstruction Hit',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Horn not sounded',
            penalty: 0,
            max_weight: 0
        },
        {
            lable: 'Excess Speed : Sigma Board on app. RED',
            penalty: 0,
            max_weight: 0
        }

    ]

    const contentsdata = [
        {
            id:'1',
            lable:'Driving Rules'
        },
        {
            id:'2',
            lable:'SPAD'
        },
        {
            id:'3',
            lable:'Brake Management '
        }
    ]
    let result = 0
    return (
        <div className='evalution_div'>
            <div className='evalution_block_one'>
                <div className='block_one_header'>
                    <div style={{ height: '2.2vh', width: '60%' }}>
                        Type
                    </div>
                    <div style={{ height: '2.2vh', width: '20%' }}>
                        Penalty
                    </div>
                    <div style={{ height: '2.2vh', width: '20%' }}>
                        Maximum weightage
                    </div>
                </div>
                <div className='block_one_content'>
                {
                    contentsdata.map((x) => {
                        return(
                            dropDowndiv === x.id?<DropDownContent title={x.title} dropDown_contents={dropDown_contents} onClick={() => {handleDropClick('')}}/>:<NormalContent title={x.lable} onClick={() => {handleDropClick(x.id)}}/>
                        )
                    }) 
                }

                </div>
            </div>
            <div className='evalution_block_two'>
                <div className='question_div'>
                    {blockTwo_Data.map(x => {
                        result = result + x.result
                        return (
                            <div className='result_div'>
                                <div>
                                    {x.question}
                                </div>
                                <div>
                                    {x.result}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='result_div' style={{ 'background': 'rgba(255, 255, 255, 0.254)', 'backdrop-filter': ' blur(100px)','height':'13.3vh' }}>
                    <div>
                        Total
                    </div>
                    <div>
                        {result}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExcercisePanelEvaluation;


export const NormalContent = ({title,onClick}) => {
   
    const {down_dropdown_icon} = Icons.ISIcons
    return (
        <div className='normal_content' onClick={onClick}>
            <img src={down_dropdown_icon} />
            {title ? title : 'Driving Rules'}
        </div>
    )
}

export const DropDownContent = ({ title, dropDown_contents,onClick,type }) => {
    const {down_dropdown_icon} = Icons.ISIcons
    return (

        <div className='dropdown_content' onClick={onClick}>
            <div className='dropdown_content_header'>
                <img src={down_dropdown_icon} />
                {title ? title : 'Driving Rules'}
            </div>
            <div className='dropdown_content_in'>
                {dropDown_contents?.map(x => {
                    return (
                        <div className='dropdown_content_view'>
                            <div style={{ width: '60%' }}>
                                {x.lable}
                            </div>

                                <div > {type === 'result'?x.weightage:<InputSelect />}</div>

                                <div >{ type === 'result'?x.penalty:<InputSelect />}</div>
 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}