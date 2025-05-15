import React from 'react'
import SB1 from './SB1'

export default function SB1Main({data}) {
  return (
    <svg width={"100%"} height={"100%"} preserveAspectRatio='none' viewBox='0 0 1000 700'>
      <foreignObject x="230" y="0" width={530} height={700}>
        <SB1 data={data}/>
      </foreignObject>
      <text x={60} y={400} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={60} dy={0}>89.7 Relay earth</tspan>
        <tspan x={60} dy={18}>  fault Control circuit</tspan>
       </text>

       <g>
        <path
        d="M120 410H265"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M260 403L265 410L260 417"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={60} y={600} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={60} dy={0}>338 Contactor</tspan>
        <tspan x={60} dy={18}>Head light</tspan>
       </text>

       <g>
        <path
        d="M110 610H265"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M260 603L265 610L260 617"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={950} y={200} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={950} dy={0}>78 Relay Maximum</tspan>
        <tspan x={950} dy={18}>current</tspan>
       </text>

       <g>
        <path
        d="M710 210H905"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M715 203L710 210L715 217"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>
    </svg>
  )
}
