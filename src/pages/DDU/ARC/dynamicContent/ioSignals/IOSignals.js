import React from 'react'
import classes from './IOSignals.module.css';
import { useARCStore } from '../../store';
import AnalogSignal from './analogSignal/AnalogSignal';
import FLGCompo from './analogSignal/FLGCompo/FLGCompo';
import DigitalSignal from './digitalSignal/DigitalSignal';
import GroupComp from './digitalSignal/groupComp/GroupComp';
import HBBComp from './digitalSignal/HBBCompo/HBBComp';
export const IOHome=({data})=>{
    const {ioScreenPointer}=useARCStore();
    return(
        <div className={classes.ioHome}>
            {data?.map((item, index)=>{
                return(
                    
                    <span className={classes.type1} key={index} style={{color:ioScreenPointer===index?"var(--color-yellow)":""}}>{item}</span>
                )
            })}
        </div>
    )
}
export default function IOSignals() {
    const {ioSignalPage}=useARCStore();
    const biselection_data1=["ANALOG SIGNALS", "DIGITAL SIGNALS"];
    const biselection_data2=["INPUT SIGNALS", "OUTPUT SIGNALS"];
    const pageTitles=[
        'I/O SIGNALS',  
        'ANALOG SIGNALS',
        'ANALOG SIGNALS-FLG-1',
        'ANALOG SIGNALS-FLG-2',
        'ANALOG SIGNALS-SLG-1(INPUTS)',  
        'ANALOG SIGNALS-SLG-2(INPUTS)',
        'DIGITAL SIGNALS',
        'HBB - 1',
        'HBB - 1',
        'HBB - 1',
        'HBB - 1',
        'HBB - 2',
        'HBB - 2',
        'HBB - 2',
        'HBB - 2',
        'HBB - 2',
        'HBB - 2',
        'STB - 1',
        'STB - 1',
        'STB - 1',
        'STB - 1',
        'STB - 1',
        'STB - 2',
        'STB - 2',
        'STB - 2',
        'STB - 2',
        'STB - 2',
        'SLG - 1 DIGITAL SIGNALS',
        'SLG - 1 DIGITAL SIGNALS',
        'SLG - 1 DIGITAL SIGNALS',
        'SLG - 2 DIGITAL SIGNALS',
        'SLG - 2 DIGITAL SIGNALS',
        'SLG - 2 DIGITAL SIGNALS',
    ];
    const FLGData1={
        title:["FLG-1 INPUT SIGNALS","FLG-1 OUTPUT SIGNALS"],
        columns:[
            "SIGNAL DESCRIPTION",
            "SIGNAL NAME IN FUPLA",
            "CHANNEL/ SLOT: CONNECTOR:PIN",],
        content:[
            [
                {
                    title:"Angle transmitter",
                    value:[ 
                         "0101-xAngTrans",
                        "12/eA05",
                    ],
                },
                {
                    title: "pressure auto brake",
                    value:[
                         "0101-xPrAutoBkLn",
                        "6/EC01"
                    ],
                },
            ],
            [
                {
                    title:"TE/BE Meter Bogie-1",
                    value:[
                        "0201-XMeterT/B1",
                        "2/EG01",
                    ],
                },
                {
                    title:"TE/BE Meter Bogie-2",
                    value:[
                         "0201-XMeterT/B2",
                         "4/EI01"
                    ],
                },
            ]       
        ],
    };
    const FLGData2={
        title:["FLG-2 INPUT SIGNALS","FLG-2 OUTPUT SIGNALS"],
        columns:[
            "SIGNAL DESCRIPTION",
            "SIGNAL NAME IN FUPLA",
            "CHANNEL/ SLOT: CONNECTOR:PIN",],
        content:[
            [
                {
                    title:"Angle transmitter",
                    value:[ 
                         "0101-xAngTrans",
                        "12/eA05",
                    ],
                },
                {
                    title: "pressure auto brake",
                    value:[
                         "0101-xPrAutoBkLn",
                        "6/EC01"
                    ],
                },
            ],
            [
                {
                    title:"TE/BE Meter Bogie-1",
                    value:[
                        "0201-XMeterT/B1",
                        "2/EG01",
                    ],
                },
                {
                    title:"TE/BE Meter Bogie-2",
                    value:[
                         "0201-XMeterT/B2",
                         "4/EI01"
                    ],
                },
            ]       
        ],
    };
   
    const SLG1Data={
        title:["SLG1 ANALOG SIGNALS"],
        columns:[
            "SIGNAL DESCRIPTION",
            "SIGNAL NAME IN FUPLA",
            "CHANNEL/ SLOT: CONNECTOR:PIN",],
        content:[
           [
                {
                    title:"Primary Current",
                    value:["0104-XAIpr", "1/AA06"],
                },
                {
                    title:"Total BUR Current",
                    value:["0104-XAIBUR", "2/AC06"],
                },
                {
                    title:"Filter Current",
                    value:["0104-XAIFilts", "3/AE06"],
                },
                {
                    title:"Pressure TFP Oil",
                    value:["0106-XADruckTR","8/AI06"],
                },
                {
                    title:"Pressure SR Oil",
                    value:["0106-XADruckSR","12/DK07"],
                },
                {
                    title:"Temperature 1 TFP Oil",
                    value:["0106-XATmp1OelTR","11/DI05:09"],
                },
           ]
        ],
    };
    const SLG2Data={
        title:["SLG2 ANALOG SIGNALS"],
        columns:[
            "SIGNAL DESCRIPTION",
            "SIGNAL NAME IN FUPLA",
            "CHANNEL/ SLOT: CONNECTOR:PIN",],
        content:[
           [
                {
                    title:"Primary Current",
                    value:["0104-XAIpr", "1/AA06"],
                },
                {
                    title:"Total BUR Current",
                    value:["0104-XAIBUR", "2/AC06"],
                },
                {
                    title:"Filter Current",
                    value:["0104-XAIFilts", "3/AE06"],
                },
                {
                    title:"Pressure TFP Oil",
                    value:["0106-XADruckTR","8/AI06"],
                },
                {
                    title:"Pressure SR Oil",
                    value:["0106-XADruckSR","12/DK07"],
                },
                {
                    title:"Temperature 1 TFP Oil",
                    value:["0106-XATmp1OelTR","11/DI05:09"],
                },
           ]
        ],
    };
    const HBBColumns=[
        "SIGNAL DESCRIPTION",
        "SIGNAL NAME IN FUPLA",
        "CHANNEL/ SLOT: CONNECTOR:PIN",
    ];
    const HBB_1_inputs_group_1_data=[
        {
            name:"Emergency Stop",
            value:["0101-LEmgStop", "3/OA02"],
        },
        {
            name:"MR Blower OK",
            value:["0101-MMRBlowerOk", "4/OA10"],
        },
        {
            name:"Max TE Limit",
            value:["0101-LMaxTELimit", "5/OA03"],
        },
        {
            name:"Banking Operation",
            value:["0101-LSwBankOp", "6/OA11"],
        },
        {
            name:"Compressor ON",
            value:["0101-LSwComprOff", "7/OA04"],
        },
        {
            name:"Compressor Direct",
            value:["0101-LSwComprDir", "8/OA12"],
        },
    ];
    const HBB_1_outputs_group_1_data=[
        {
            name:"Fault Indication Lamp",
            value:["0201-MLampFInd", "1/OG19"],
        },
        {
            name:"Fault Status Lamp",
            value:["0201-MLampFault", "2/OG20"],
        },
        {
            name:"Buzzer Black",
            value:["0201-BBuzzBlack", "8/OG03"],
        },
        {
            name:"Command Self MCE",
            value:["0201-BSelfMCE", "12/OJ03"],
        },
        {
            name:"Contactor Compressor 1",
            value:["0201-BContCP1", "14/OJ09"],
        },
        {
            name:"Buzzer Red",
            value:["0201-BBuzzRed", "16/OG14"],
        },
    ];
    const HBB_1_outputs_group_2_data=[
        {
            name:"VCBON Command (EFDJ)",
            value:["0202-BVCBOnPulse", "7/QJ06"],
        },
        {
            name:"Contactor Self Hold",
            value:["0202-BContSelfH", "12/QJ03"],
        },
        {
            name:"VCBON Command (MTDJ)",
            value:["0202-BVCBOn", "13/QJ12"],
        },
        {
            name:"Contactor VCB Disable",
            value:["0202-BVCBDisable", "14/QJ09"],
        },
    ];
    const HBB_2_inputs_group_1_data=[
        {
            name:"MCB Compressor 2",
            value:["0101-MMCBCompr2", "1/OA01"],
        },
        {
            name:"Emergency Stop",
            value:["0101-LEmgStop", "3/OA02"],
        },
        {
            name:"MR Blower OK",
            value:["0101-MMRBlowerOk", "4/OA10"],
        },
        {
            name:"Max TE Limit Switch",
            value:["0101-LMaxTELimit", "5/OA03"],
        },
        {
            name:"Switch Banking Operation",
            value:["0101-LSwBankOp", "6/OA11"],
        },
        {
            name:"Switch Compressor OFF",
            value:["0101-LSwComprOff", "7/OA04"],
        },
    ];
    const HBB_2_inputs_group_2_data=[
        {
            name:"Pressure Switch Pan1",
            value:["0102-MPrSwPan1", "1/QA01"],
        },
        {
            name:"Pressure Switch Pan2",
            value:["0102-MPrSwPan2", "2/QA09"],
        },
        {
            name:"Pressure Switch Park Brake",
            value:["0102-MPrSwParkBk", "3/QA02"],
        },
        {
            name:"Brake Electronics OK",
            value:["0102-MBrakElecOK", "4/QA10"],
        },
        {
            name:"Cock Brake Control",
            value:["0102-LCockBkCon", "5/QA03"],
        },
        {
            name:"Emergency Brake Out",
            value:["0102-LEmgBkOut", "6/QA11"],
        },
    ];
    const HBB_2_outputs_group_1_data=[
        {
            name:"Fault Indication Lamp",
            value:["0201-MLampFInd", "1/OG19"],
        },
        {
            name:"Fault Status Lamp",
            value:["0201-MLampFault", "2/OG20"],
        },
        {
            name:"EP Valve Auto Brake Out",
            value:["0201-BEPAutBkOut", "4/OG07"],
        },
        {
            name:"Buzzer Black",
            value:["0201-BBuzzBlack", "8/OG03"],
        },
        {
            name:"EP Valve Anti Spin 2",
            value:["0201-BEPAntSpin2", "12/OJ03"],
        },
        {
            name:"Vigilance Reset",
            value:["0201-BVigReset", "13/OJ12"],
        },
    ];
    const HBB_2_outputs_group_2_data=[
        {
            name:"EP Valve sanding 1-3",
            value:["0202-BEPSand13", "9/QG17"],
        },
        {
            name:"EP Valve Panto1",
            value:["0202-BEPPan1", "10/QG23"],
        },
        {
            name:"EP Valve Sanding 2-4",
            value:["0202-BEPSand24", "11/QG12"],
        },
        {
            name:"Contactor Compressor 2",
            value:["0202-BContCompr2", "12/QJ10"],
        },
        {
            name:"Panto Disable",
            value:["0202-BPanDisable", "14/QJ09"],
        },

        {
            name:"EP Valve Parking Brake",
            value:["0202-BEPApplyPBk", "15/QG22"],
        },
    ];
    const STB_1_inputs_group_1_data=[
        {
            name:"MCB Status Compressor 1",
            value:["0101-MMCBCompr1", "1/JA01"],
        },
        {
            name:"Apply Parking Brake",
            value:["0101-LParkBrake", "2/JA09"],
        },
        {
            name:"Hotel Load Contactor Status",
            value:["0101-LHotelOn", "4/JA10"],
        },
        {
            name:"Constant Speed Button",
            value:["0101-LConstSpeed", "7/JA04"],
        },
        {
            name:"Hotel Load Off",
            value:["0101-LHotelOff", "8/JA12"],
        },
        {
            name:"Foot Switch Sanding",
            value:["0101-LFootSwSand", "9/JD01"],
        },
    ];
    const STB_1_inputs_group_2_data=[
        {
            name:"Cutout Switch Bogie-1",
            value:["0102-LSwBogOut1", "2/LA09"],
        },
        {
            name:"Cutout Switch Bogie-2",
            value:["0102-LSwBogOut2", "3/LA02"],
        },
        {
            name:"Switch Configuration",
            value:["0102-LSwConfig", "4/LA10"],
        },
        {
            name:"Switch Fail Mode",
            value:["0102-LSwFailMode", "5/LA03"],
        },
        {
            name:"Relay MCE On",
            value:["0102-MRelMCEOn", "6/LA11"],
        },
        {
            name:"Command VCB On",
            value:["0102-LVCBOn", "10/LD09"],
        },
    ];
    const STB_1_outputs_group_1_data=[
        {
            name:"Lamp Constant Speed",
            value:["0201-MLampCSpeed", "2/JG20"],
        },
        {
            name:"Lamp Parking Brake",
            value:["0201-MLampParkBk", "6/JG18"],
        },
        {
            name:"Lamp Hotel Load",
            value:["0201-MLampHotel", "10/JG23"],
        },
        {
            name:"Air Drier Release Valve",
            value:["0201-BAirDryer", "12/JJ03"],
        },
        {
            name:"EP Valve Anti Spin 1",
            value:["0201-BEPAntSpin1", "13/JJ12"],
        },
        {
            name:"Contactor Hotel Load",
            value:["0201-BContHotel", "14/JJ09"],
        },
    ];
    const STB_1_outputs_group_2_data=[
        {
            name:"Relay MCE Off",
            value:["0202-BRelMCEOff", "1/LG07"],
        },
        {
            name:"Contactor Self MCE",
            value:["0202-BSelfMCE", "6/LG18"],
        },
        {
            name:"Lamp Configuration",
            value:["0202-MLampConfig", "8/LG03"],
        },
        {
            name:"Lamp Test",
            value:["0202-BLampTest", "9/LG17"],
        },
        {
            name:"VCB On Command (MTDJ)",
            value:["0202-BVCBOn", "10/LG23"],
        },
        {
            name:"VCB On Pulse (EFDJ)",
            value:["0202-BVCBOnPulse", "11/LG24"],
        },
    ];
    const STB_2_inputs_group_1_data=[
        {
            name:"Apply Parking Brake",
            value:["0101-LParkBrake", "2/JA09"],
        },
        {
            name:"Hotel Load On",
            value:["0101-LHotelOn", "4/JA10"],
        },
        {
            name:"Constant Speed Button On",
            value:["0101-LConstSpeed", "7/JA04"],
        },
        {
            name:"Hotel Load Off",
            value:["0101-LHotelOff", "8/JA12"],
        },
        {
            name:"Foot Switch Sanding",
            value:["0101-LFootSwSand", "9/JD01"],
        },
        {
            name:"Direction Forward",
            value:["0101-LTrvDirFor", "10/JD09"],
        },
    ];
    const STB_2_inputs_group_2_data=[
        {
            name:"MCB Oil Cooling Blower",
            value:["0102-MMCBBloCT2", "1/LA01"],
        },
        {
            name:"MCB MR2 Blower",
            value:["0102-MMCBBloMR2", "2/LA09"],
        },
        {
            name:"MCB Scavenge MR",
            value:["0102-MMCBMScBlo2", "3/LA02"],
        },
        {
            name:"MCB Oil Pump SR2",
            value:["0102-MMCBPumpC2", "4/LA10"],
        },
        {
            name:"MCB Oil Pump2 TFP",
            value:["0102-MMCBPumpT2", "5/LA03"],
        },
        {
            name:"MCB TM Blower 2",
            value:["0102-MMCBBloTM2", "6/LA11"],
        },
    ];
    const STB_2_outputs_group_1_data=[
        {
            name:"Lamp Wheel Slip",
            value:["0201-MLampWSlip", "1/JG19"],
        },
        {
            name:"Lamp Constant Speed",
            value:["0201-MLampCSpeed", "2/JG20"],
        },
        {
            name:"Lamp Park Brake",
            value:["0201-MLampParkBk", "6/JG18"],
        },
        {
            name:"Lamp Test Output",
            value:["0201-BLampTest", "7/JJ13"],
        },
        {
            name:"Lamp Hotel Load",
            value:["0201-MLampHotel", "10/JG23"],
        },
        {
            name:"Contactor Compressor 2",
            value:["0201-BContCompr2", "13/JJ12"],
        },
    ];
    const STB_2_outputs_group_2_data=[
        {
            name:"EP Valve Loco Brake Out",
            value:["0202-BEPLBkOut", "12/LJ03"],
        },
        {
            name:"EPValveCompressorUnload",
            value:["0202-BEPCPUnload", "13/LJ12"],
        },
        {
            name:"EP Valve Panto 2",
            value:["0202-BEPPan2", "14/LJ09"],
        },
    ];

    
    const SLG_1_inputs_data=[
        {
            name:"Input Contactor",
            value:["0103-MLdSEin", "9/WD01"],
        },
        {
            name:"Filter Discharge Contactor",
            value:["0103-MFiltDhcOn", "10/WD09"],
        },
        {
            name:"Filter Contactor",
            value:["0103-MFiltOn", "11/WD02"],
        },
        {
            name:"Filter Adaptation Contactor",
            value:["0103-MFiltAdpOn", "12/WD10"],
        },
        {
            name:"Protective Shutdown Wire",
            value:["0103-MHS-HalteKr", "13/WD03"],
        },
        {
            name:"Pre-Charging Contactor",
            value:["0103-MSRSEin", "15/WD04"],
        },
    ];
    const SLG_1_outputs_data=[
        {
            name:"Filter Contactor",
            value:["8501-BFiltOn", "1/WG19:07"],
        },
        {
            name:"Filter Adaptation Contactor",
            value:["8501-BFiltAdpOn", "2/WG20:07"],
        },
        {
            name:"Filter Discharge Contactor",
            value:["8501-BFiltDhcOn", "3/WG08:07"],
        },
        {
            name:"Pre-Charging Contactor",
            value:["8702-BSRSEin", "4/WG02"],
        },
        {
            name:"Input Contactor",
            value:["8701-BLdSEin", "5/WG24:12"],
        },
        {
            name:"Protective Turn Off Wire",
            value:["0870-BExtRLabtr", "6/WG21:09"],
        },
    ];
    
  return (
    <div className={classes.container}>
        <label>{pageTitles[ioSignalPage]}</label>
            {ioSignalPage===0&&<IOHome data={biselection_data1}/>}
            {ioSignalPage===1&&<AnalogSignal/>}
            {ioSignalPage===2&&<FLGCompo data={FLGData1}/>}
            {ioSignalPage===3&&<FLGCompo data={FLGData2}/>}
            {ioSignalPage===4&&<FLGCompo data={SLG1Data} rows={8}/>}
            {ioSignalPage===5&&<FLGCompo data={SLG2Data} rows={8}/>}
            {ioSignalPage===6&&<DigitalSignal/>}
            {ioSignalPage===7&&<GroupComp/>}
            {ioSignalPage===8&&
            <HBBComp 
            title={"HBB-1 DIGITAL INPUTS GROUP-1"}
            columns={HBBColumns}
            data={HBB_1_inputs_group_1_data}
            />}
            {ioSignalPage===9&&
            <HBBComp 
            title={"HBB-1 DIGITAL INPUTS GROUP-2"}
            columns={HBBColumns}
            data={HBB_1_inputs_group_1_data}
            />}
            {ioSignalPage===10&&
            <HBBComp 
            title={"HBB-1 DIGITAL OUTPUTS GROUP-1"}
            columns={HBBColumns}
            data={HBB_1_outputs_group_1_data}
            />}
             {ioSignalPage===11&&
            <HBBComp 
            title={"HBB-1 DIGITAL OUTPUTS GROUP-2"}
            columns={HBBColumns}
            data={HBB_1_outputs_group_2_data}
            />}
            {ioSignalPage===12&&<GroupComp/>}
            {ioSignalPage===13&&
            <HBBComp 
            title={"HBB-2 DIGITAL INPUTS GROUP-1"}
            columns={HBBColumns}
            data={HBB_2_inputs_group_1_data}
            />}
            {ioSignalPage===14&&
            <HBBComp 
            title={"HBB-2 DIGITAL INPUTS GROUP-2"}
            columns={HBBColumns}
            data={HBB_2_inputs_group_2_data}
            />}
            {ioSignalPage===15&&
            <HBBComp 
            title={"HBB-2 DIGITAL OUTPUTS GROUP-1"}
            columns={HBBColumns}
            data={HBB_2_outputs_group_1_data}
            />}
             {ioSignalPage===16&&
            <HBBComp 
            title={"HBB-2 DIGITAL OUTPUTS GROUP-2"}
            columns={HBBColumns}
            data={HBB_2_outputs_group_2_data}
            />}
              {ioSignalPage===17&&<GroupComp/>}
              {ioSignalPage===18&&
            <HBBComp 
            title={"STB-1 DIGITAL INPUTS GROUP-1"}
            columns={HBBColumns}
            data={STB_1_inputs_group_1_data}
            />}
            {ioSignalPage===19&&
            <HBBComp 
            title={"STB-1 DIGITAL INPUTS GROUP-2"}
            columns={HBBColumns}
            data={STB_1_inputs_group_2_data}
            />}
            {ioSignalPage===20&&
            <HBBComp 
            title={"STB-1 DIGITAL OUTPUTS GROUP-1"}
            columns={HBBColumns}
            data={STB_1_outputs_group_1_data}
            />}
             {ioSignalPage===21&&
            <HBBComp 
            title={"STB-1 DIGITAL OUTPUTS GROUP-2"}
            columns={HBBColumns}
            data={STB_1_outputs_group_2_data}
            />}
             {ioSignalPage===22&&<GroupComp/>}
              {ioSignalPage===23&&
            <HBBComp 
            title={"STB-2 DIGITAL INPUTS GROUP-1"}
            columns={HBBColumns}
            data={STB_2_inputs_group_1_data}
            />}
            {ioSignalPage===24&&
            <HBBComp 
            title={"STB-2 DIGITAL INPUTS GROUP-2"}
            columns={HBBColumns}
            data={STB_2_inputs_group_2_data}
            />}
            {ioSignalPage===25&&
            <HBBComp 
            title={"STB-2 DIGITAL OUTPUTS GROUP-1"}
            columns={HBBColumns}
            data={STB_2_outputs_group_1_data}
            />}
             {ioSignalPage===26&&
            <HBBComp 
            title={"STB-2 DIGITAL OUTPUTS GROUP-2"}
            columns={HBBColumns}
            data={STB_2_outputs_group_2_data}
            />}
            {ioSignalPage===27&&<IOHome data={biselection_data2}/>}
              {ioSignalPage===28&&
            <HBBComp 
            title={"SLG-1 DIGITAL INPUTS"}
            columns={HBBColumns}
            data={SLG_1_inputs_data}
            />}
            {ioSignalPage===29&&
            <HBBComp 
            title={"SLG-1 DIGITAL OUTPUTS"}
            columns={HBBColumns}
            data={SLG_1_outputs_data}
            />}
              {ioSignalPage===30&&<IOHome data={biselection_data2}/>}
              {ioSignalPage===31&&
            <HBBComp 
            title={"SLG-2 DIGITAL INPUTS"}
            columns={HBBColumns}
            data={SLG_1_inputs_data}
            />}
          
            {ioSignalPage===32&&
            <HBBComp 
            title={"SLG-2 DIGITAL OUTPUTS"}
            columns={HBBColumns}
            data={SLG_1_outputs_data}
            />}
    </div>
  )
}
