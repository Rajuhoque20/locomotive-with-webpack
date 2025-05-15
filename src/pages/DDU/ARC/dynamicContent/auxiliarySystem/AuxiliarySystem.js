import { useData } from "../../../../../components/useData";
import { topics } from "../../../../../constant/topic";
import MenuScreenComp from "./MenuScreenComp";

export const AuxiliarySystem=()=>{
     const {data}=useData(topics.ARCAUXILIARYSYSTEM);
     const auxiliarySystemData=[
      {
          name:"AUXILIARY VOLTAGE",
          value:[data?.auxiliaryVoltage||"OFF"],
      },
      {
          name:"BUR 1,2,3 STATUS",
          value:Array.from({length:3},(_, index)=>data?.BUR123Status?.[index]||0),
      },
      {
          name:"COMPRESSOR 1,2",
          value:Array.from({length:2},(_, index)=>data?.compressor12?.[index]||0),
      },
      {
          name:"OCB 1,2",
          value:Array.from({length:2},(_, index)=>data?.ocb12?.[index]||0),
      },
      {
          name:"SR OIL PUMP 1,2",
          value:Array.from({length:2},(_, index)=>data?.sroilPump12?.[index]||0),
      },
      {
          name:"TFP OIL PUMP 1,2",
          value:Array.from({length:2},(_, index)=>data?.tfpoilPump12?.[index]||0),
      },
      {
          name:"TM BLOWER 1,2",
          value:Array.from({length:2},(_, index)=>data?.tmBlower12?.[index]||0),
      },
      {
          name:"MR BLOWER 1,2",
          value:Array.from({length:2},(_, index)=>data?.mrBlower12?.[index]||0),
      },
  ];
  
    return(
       <MenuScreenComp title={"AUXILIARY SYSTEM"} data={auxiliarySystemData}/>
    )
}