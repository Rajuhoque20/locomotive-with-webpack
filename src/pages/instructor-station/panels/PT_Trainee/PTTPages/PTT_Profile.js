import { Icons } from '#framework'
import { useState } from 'react'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp'
import './PTT_Profile.css'
import { useNavigate } from 'react-router-dom'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export const PTT_Profile = () => {
    const navigate = useNavigate();
    const { trunicon, tscoreicon } = Icons.ISIcons
    const [active, setactive] = useState('graph')
    const handleswitch = (payload) => {
        setactive(payload)
    }
    const handleHome = () => {
        navigate('/ptt-home')
    }
    const scoreboard = [
        {
            lable: 'Total Score',
            value: '5014',
            icon: tscoreicon
        },
        {
            lable: 'Total Runs',
            value: '11',
            icon: trunicon
        }
    ]

    const progress = [
        {
            label: "Route Learning",
            max: 521,
            actual: 350,
            color: " rgba(66, 133, 244, 0.5)",
        },
        {
            label: "Traction Control",
            max: 521,
            actual: 121,
            color: "rgba(255, 109, 1, 0.5)",
            
        },
        {
            label: "Efficient Braking",
            max: 521,
            actual: 400,
            color: "rgba(234, 67, 53, 0.5)",
        },
        {
            label: "Locomotive Troubleshooting",
            max: 521,
            actual: 90,
            color: "rgba(52, 168, 83, 0.5)",
        },
        {
            label: "Unusual Occurrences",
            max: 521,
            actual: 250,
            color: "rgba(239, 4, 251, 0.5)",
        },
    ];

    const { niki } = Icons.ISIcons
    return (
        <div className='ptt-profile-container'>
            <div className='ptt-profile-mainview'>
                <div className='ptt-c-profile-info'>
                    <div className='ptt-profile-imgdiv'>
                        <img src={niki} />
                    </div>
                    <div className='ptt-profile-brief'>
                        <UserInfoBar
                            firstName="John"
                            lastName="Doe"
                            username="jdoe123"
                            batch="2023"
                            railway="Central"
                            division="Engineering"
                            headquarters="New York"
                        />
                    </div>
                </div>
                <div className='ptt-c-performance-info'>
                    <div className='ptt-fi-header'>
                        {
                            scoreboard.map((x) => {
                                return (
                                    <ScoreTabs icon={x.icon} lable={x.lable} value={x.value} />
                                )
                            })
                        }
                    </div>
                    {
                        active === 'table' &&
                        <div className='ptt-fi-content'>
                            {
                                progress.map((x) => {
                                    return (
                                        <div className='ptt-progrss-bars'>
                                            {
                                                x.label
                                            }
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1vh' }}>
                                                <div style={{ width: '99%' }}>
                                                    <ProgressComponent max={x.max} actual={x.actual} />
                                                </div>
                                                <div >
                                                    {x.actual}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    }
                    {
                        active === 'graph' &&
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position:'relative'}} className='ptt-fi-content'>
                            <DonutChart progress={progress} />
                            <div className='pttchart-info'>
                                {progress.map((x) => {
                                    return(
                                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1vh'}}>
                                           <div style={{height:'1.5vh',width:'1.5vh',borderRadius:'50%',backgroundColor:`${x.color}`}}></div>
                                           <div style={{fontSize:'2vh',color:'white',fontWeight:'590'}}>{x.actual}</div>
                                           <div style={{fontSize:'2vh',color:'rgba(156, 156, 156, 0.74)',fontWeight:'500'}}>{x.label}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    <div className='ptt-fi-footer'>
                        <div className='ptt-fi-footer-button-holder'>
                            <div onClick={() => { handleswitch('graph') }} className={active === 'graph' ? 'pttactive-btn' : 'pttinactive-btn'}>
                                Graph
                            </div>
                            <div onClick={() => { handleswitch('table') }} className={active === 'table' ? 'pttactive-btn' : 'pttinactive-btn'}>
                                Table
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ptt-profile-fotter'>
                <div>
                    <ButtonComp onClick={() => handleHome()} title={'Home'} bntStyle={{ color: 'white', fontWeight: '590', background: 'rgba(156, 156, 156, 0.74)', 'backdrop-filter': 'blur(10vh)', height: '4.5vh', width: '12vh' }} />
                </div>
                <div>
                    <ButtonComp title={'Signout'} bntStyle={{ color: 'white', fontWeight: '590', background: 'rgba(156, 156, 156, 0.74)', 'backdrop-filter': 'blur(10vh)', height: '4.5vh', width: '12vh' }} />
                </div>
            </div>
        </div>
    )
}



const UserInfoBar = ({ firstName, lastName, username, batch, railway, division, headquarters }) => {
    const { hqicon, divisionicon, railwayicon, batchicon } = Icons.ISIcons
    const personal = [
        {
            lable: 'First Name',
            info: 'Nirmal'
        },
        {
            lable: 'Last Name',
            info: 'Bansal'
        },
        {
            lable: 'Username',
            info: 'Nirmal123'
        }
    ]

    const professional = [

        {
            lable: 'Batch',
            info: 'B1453',
            icon: batchicon
        },
        {
            lable: 'Railway',
            info: 'Dabra',
            icon: railwayicon
        },
        {
            lable: 'Division',
            info: 'LMG',
            icon: divisionicon
        },
        {
            lable: 'Headquarters',
            info: 'Gwalior',
            icon: hqicon
        }

    ]
    return (
        <div className='ptt-uic'>
            <div className='ptt-uics1'>
                <div className='uic-header'>
                    Personal Information
                </div>
                <div className='uic-info'>
                    {
                        personal.map((x) => {
                            return (
                                <div style={{ height: '100%', width: `${100 / personal.length}%`, display: 'flex', flexDirection: 'column', justifyContent: 'left', gap: '2vh', padding: '2vh' }}>
                                    <div style={{ fontSize: '2.5vh', color: 'rgba(255, 255, 255, 0.566)' }}>
                                        {x.lable}
                                    </div>
                                    <div style={{ fontSize: '2.5vh', color: 'white' }}>
                                        {
                                            x.info
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='ptt-uics2'>
                <div className='uic-header'>
                    Professional Information
                </div>
                <div className='uic-info'>
                    {
                        professional.map((x) => {
                            return (
                                <div style={{ height: '100%', width: `${100 / personal.length}%`, display: 'flex', flexDirection: 'column', justifyContent: 'left', gap: '2vh', padding: '2vh' }}>
                                    <div style={{ fontSize: '2.5vh', color: 'rgba(255, 255, 255, 0.566)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5vh' }}>
                                        <img style={{ height: '2vh', width: '2vh' }} src={x.icon} />
                                        {x.lable}
                                    </div>
                                    <div style={{ fontSize: '2.5vh', color: 'white' }}>
                                        {
                                            x.info
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const ScoreTabs = ({ icon, lable, value }) => {
    return (
        <div className='ptt-score-bar'>
            <img src={icon} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.5vh', color: 'rgba(201, 194, 194, 0.74)', fontWeight: '500' }}>
                    {lable}
                </div>
                <div style={{ fontSize: '2.5vh', color: 'white', fontWeight: '590' }}>
                    {value}
                </div>
            </div>
        </div>
    )
}

const ProgressComponent = ({ max, actual }) => {
    const percentage = Math.min(100, Math.max(0, (actual / max) * 100));
    return (
        <div className='progessmax'>
            <div style={{ width: `${percentage}%` }} className='progrssactual'>
            </div>
        </div>
    )
}

const DonutChart = ({ progress }) => {
    const data = progress.map((item) => ({
        name: item.label,
        value: item.actual,
        color: item.color,
    }));
    return (
        <div style={{height:'40vh',width:'40vh'}}>
            <ResponsiveContainer  width="100%" height="100%">
                <PieChart >
                    <Pie
                        paddingAngle={2}
                        stroke="#afb3b0"
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={100}
                        dataKey="value"   
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>

    );
};


