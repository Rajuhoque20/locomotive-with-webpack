import React from 'react'
import TEbe from '../CabReplicate/TEbe'
import Vcat from '../CabReplicate/Vcat'
import Ipri from '../CabReplicate/Ipri'

export default function PartC() {
  return (
    <div style={{display:'grid',gridTemplateColumns:'34% 33% 33%', }}>
         <TEbe />
         <Vcat />
        <Ipri /> 
    </div>
  )
}
