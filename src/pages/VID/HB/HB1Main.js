import React from 'react'
import HB from './HB'

export default function HB1Main({data, type}) {
  return (
    <svg width={"100%"} height={"100%"} preserveAspectRatio='none' viewBox='0 0 1000 700'>
      <foreignObject x="230" y="0" width={530} height={700}>
        <HB data={data} type={type}/>
      </foreignObject>
      <text x={130} y={70} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={130} dy={0}>41 -Fuse auxiliary </tspan>
        <tspan x={130} dy={18}> 415/110 V</tspan>
       </text>

       <g>
        <path
        d="M180 75H257"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M252 68L257 75L252 82"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={50} y={120} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={50} dy={0}>47.2 -Contactor, </tspan>
        <tspan x={50} dy={18}> main compressor </tspan>
       </text>

       <g>
        <path
        d="M100 125H315"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M310 118L315 125L310 132"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={137} y={197} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={140} dy={0}>52.3/4-Auxiliary </tspan>
        <tspan x={137} dy={18}>contactor to item 52 </tspan>
       </text>

       <g>
        <path
        d="M200 200H460V175"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M453 180L460 175L467 180"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={60} y={580} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={60} dy={0}>52/4-Contactor </tspan>
        <tspan x={60} dy={18}>auxiliaries</tspan>
       </text>
       <g>
        <path
        d="M110 585H315"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M310 577L315 585L310 592"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={950} y={580} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={950} dy={0}>52/5-Contactor </tspan>
        <tspan x={950} dy={18}>auxiliaries</tspan>
       </text>

       <g>
        <path
        d="M610 580H905"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M615 573L610 580L615 587"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={850} y={200} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={850} dy={0}>52.3/5-Auxiliary</tspan>
        <tspan x={850} dy={18}>contactor to item 52</tspan>
       </text>

       <g>
        <path
        d="M550 175V200H785"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M543 180L550 175L557 180"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

    </svg>
  )
}
