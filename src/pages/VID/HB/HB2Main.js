import React from 'react'
import HB from './HB'

export default function HB2Main({data, type}) {
  return (
    <svg width={"100%"} height={"100%"} preserveAspectRatio='none' viewBox='0 0 1000 700'>
      <foreignObject x="230" y="0" width={530} height={700}>
        <HB data={data} type={type}/>
      </foreignObject>
    
       <text x={50} y={120} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={50} dy={0}>47.2/2-Contactor,  </tspan>
        <tspan x={50} dy={18}> main compressor </tspan>
       </text>

       <g>
        <path
        d="M100 125H270"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M265 118L270 125L265 132"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={140} y={220} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={140} dy={0}>52.6/1-Auxiliary </tspan>
        <tspan x={140} dy={18}>contactor to item 52.4</tspan>
       </text>

       <g>
        <path
        d="M200 220H430V175"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M423 180L430 175L437 180"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={130} y={490} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={130} dy={0}>52.4/2-Contactor </tspan>
        <tspan x={130} dy={18}>Scavenge Blower </tspan>
       </text>

       <g>
        <path
        d="M190 490H410V530"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M403 525L410 530L417 525"
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
        <tspan x={60} dy={0}>52.4/1-Contactor </tspan>
        <tspan x={60} dy={18}>Scavenge Blower </tspan>
       </text>
       <g>
        <path
        d="M110 585H250"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M245 577L250 585L245 592"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={870} y={580} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={870} dy={0}>52.5/2-Contactor  </tspan>
        <tspan x={870} dy={18}>  oil pumps</tspan>
       </text>

       <g>
        <path
        d="M710 580H805"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M715 573L710 580L715 587"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={870} y={490} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={870} dy={0}>52.5/1-Contactor </tspan>
        <tspan x={870} dy={18}>   oil pumps </tspan>
       </text>

       <g>
        <path
        d="M540 530V490H805"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M533 525L540 530L547 525"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={850} y={220} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={850} dy={0}>52.6/2-Auxiliary  </tspan>
        <tspan x={850} dy={18}> contactor to item 52.5</tspan>
       </text>

       <g>
        <path
        d="M530 175V220H785"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M523 180L530 175L537 180"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

    </svg>
  )
}
