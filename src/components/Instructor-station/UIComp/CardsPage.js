import { Input } from 'antd'
import React from 'react'
import MainCard from './MainCard'
import { CardData } from '../../assets/SampleData/CardData'

export default function CardsPage({title,data}) {
  return (
    <div className='CardPage'>
        <section className='search-div'>
            <h2>{title}</h2>
            <Input placeholder='Search' className='search-input'/>
        </section>
        <section className='cards-wrapper'>
            {/* {cards?.map((item, index)=>
                <RecentCard index={index} data={item} key={index}/>
            )} */} 
{
     
    data?.map((item,index)=>{

        return(
            <div key={index}>
                <MainCard data={item} />
            </div>
        )
    })   
}
        </section>
    </div>
  )
}
