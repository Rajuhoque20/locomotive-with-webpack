import React from 'react'
import FilterCubical from './filterCubical'

export default function FilterCubicleMain({data}) {
  return (
    <svg width={"100%"} height={"100%"} preserveAspectRatio='none' viewBox='0 0 1000 700'>
      <foreignObject x="330" y="0" width={330} height={700}>
        <FilterCubical data={data}/>
      </foreignObject>
      <text x={200} y={120} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
       8.1 Contactor filter adaption
       </text>

       <g>
        <path
        d="M290 120H413"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M408 113L413 120L408 127"
         stroke='#fff'
         strokeWidth={2}
          fill='none'
        />
       </g>

       <text x={200} y={280} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
        <tspan x={200} dy={0}>8.41 Contactor for </tspan>
        <tspan x={200} dy={18}> discharging resistor</tspan>
       </text>

       <g>
        <path
        d="M270 285H393"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M388 278L393 285L388 292"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>

       <text x={800} y={120} 
      alignmentBaseline='middle'
      textAnchor='middle'
      fill='#fff'
      fontSize={12}
      >
      8.2 Contactor filter "ON"/ "OFF" 
       </text>

       <g>
        <path
        d="M575 120H700"
        stroke='#fff'
        strokeWidth={2}
         fill='none'
        />
        <path
         d="M580 113L575 120L580 127"
         stroke='#fff'
         strokeWidth={2}
         fill='none'
        />
       </g>
    </svg>
  )
}
