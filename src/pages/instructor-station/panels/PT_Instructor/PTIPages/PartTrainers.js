import { useState } from 'react';
import { PtCard } from '../../../../../components/Instructor-station/UIComp/PTActionCards'
import './PartTrainers.css'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp';
import { Icons } from '#framework';
import { DropdownById } from '../../../../../components/Instructor-station/UIComp/DropDownMenu';
import TraineeDropdown from '../../../../../components/Instructor-station/UIComp/TraineeDropDown';
import { CustomSwitch } from '../../LiveSimulator/SimulatorPage/Simulation/LiveSimulationManagement';
import moment from 'moment';
export const PartTrainers = () => {
    const [page, setPage] = useState(0);
    const [openedPage, setOpenedPage] = useState({});

    // Mapping pages to components for better scalability
    const components = {
        0: <PartTrainersOverView setOpnedpage={setOpenedPage} setPage={setPage} />,
        1: <TrainingComponent title={openedPage.cardName} setPage={setPage} pageData={openedPage} />,
        2: <TrainingStartComponent pagedata={openedPage} setPage={setPage}/>
    };

    return <>{components[page] || <PartTrainersOverView />}</>;
};

const PartTrainersOverView = ({ setOpnedpage, setPage }) => {
    const cards = [
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1',
            motion: {
                seat: true
            }

        },
        {
            id: 2,
            status: 'Allocated',
            trainee: '',
            cardName: 'Part Trainer 2'
        },
        {
            id: 1,
            status: 'Running',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        },
        {
            id: 1,
            status: 'Empty',
            trainee: '',
            cardName: 'Part Trainer 1'
        }
    ]
    const handleopen = (payload) => {
        setOpnedpage(payload)
        setPage(1)
    }
    return (
        <div className="ptMainDiv">
            <div className='ptheader'>
                <div style={{ fontSize: '3vh', fontWeight: '700', color: 'white' }}>
                    Welcome to the Part trainer Live Simulator
                </div>
                <div style={{ fontSize: '2vh', fontWeight: '700', color: 'rgba(255, 255, 255, 0.49)' }}>
                    Real-time driver training with active monitoring and control
                </div>
            </div>
            <div className='ptactionCards'>
                {
                    cards.map(x => {
                        return (
                            <PtCard onClick={() => handleopen(x)} title={x.cardName} status={x.status} trainee={x.trainee} />
                        )
                    })
                }
            </div>
        </div>
    )
}


const TrainingComponent = ({ title, setPage, pageData }) => {
    const { play_icon } = Icons.ISIcons
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleTraineeSelect = (trainee) => {
        setSelectedTrainee(trainee);
    };

    const handleExerciseSelect = (exercise) => {
        setSelectedExercise(exercise);
    };
    const excercisesoptions = [
        { id: 1, label: 'CNB2BPU_P_24_13TK02022024' },
        { id: 2, label: 'CNB2BPU_P_24_13TK02022024' },
        { id: 3, label: 'CNB2BPU_P_24_13TK02022024' }
    ];
    const trainees = [
        {
            id: 1,
            name: 'James Hunt',
            hqname: 'HQ Name',
            divisionName: 'Division Name',
            railwayName: 'Railway Name'
        },
        {
            id: 1,
            name: 'Niki Lauda',
            hqname: 'HQ Name',
            divisionName: 'Division Name',
            railwayName: 'Railway Name'
        },
        {
            id: 1,
            name: 'James Hunt',
            hqname: 'HQ Name',
            divisionName: 'Division Name',
            railwayName: 'Railway Name'
        },
        {
            id: 1,
            name: 'Niki Lauda',
            hqname: 'HQ Name',
            divisionName: 'Division Name',
            railwayName: 'Railway Name'
        }
    ]

    return (
        <div className="training-container">
            <div className="training-header">
                <h1>{title}</h1>
            </div>
            <div className='training-actions' style={pageData.motion ? { height: '30%' } : {}}>
                <div className='training-actions-view' style={pageData.motion ? { height: '33.33%' } : {}} >
                    <div>
                        Select Trainee
                    </div>
                    <div>
                        <TraineeDropdown options={trainees} />
                    </div>
                </div>
                <div className='training-actions-view' style={pageData.motion ? { height: '33.33%' } : {}}>
                    <div>
                        Select Exercise
                    </div>
                    <div>
                        <DropdownById
                            options={excercisesoptions}
                            selected={selectedExercise}
                            onSelect={setSelectedExercise}
                            defaultcontent="Select"
                            style={{ width: '50vh' }}
                            dropdownStyle={{ width: '50vh' }}
                        />
                    </div>
                </div>
                {
                    pageData.motion && <div className='training-actions-view' style={pageData.motion ? { height: '33.33%' } : {}}>
                        <div>Motion seats</div>
                        <div><CustomSwitch /></div>
                    </div>
                }
            </div>
            <div className='training-actions-buttons'>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>
                    <ButtonComp title={'Save Changes'} bntStyle={{ height: '4.5vh', width: '15vh' }} />
                    <ButtonComp onClick={() => { setPage(0) }} title={'Close'} bntStyle={{ height: '4.5vh', width: '12vh', background: 'none', 'backdrop-filter': 'blur(10vh)', color: 'white' }} />
                </div>
                <div className='tcb-right'>
                    <ButtonComp onClick={() => { setPage(2) }} prefixIcon={play_icon} title={'Start'} bntStyle={{ width: '13vh', height: '4.5vh' }} />
                </div>
            </div>
        </div>
    );
};


const TrainingStartComponent = ({ pagedata,setPage }) => {
    const { clockIcon,stop_icon } = Icons.ISIcons
    return (
        <div className='trainingStart-container'>
            <div className='tsc-header'>
                {pagedata.cardName}
            </div>

            <div className='tcs-trainer-info'>
                <div style={{ height: '100%', width: '40%' }}>
                    <TraineeView />
                </div>
                <div style={{ height: '100%', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                    <div className='tcs-score'>
                        <div style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5vh', fontWeight: '700' }}>
                            495
                        </div>
                        <div style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ' rgba(255, 255, 255, 0.44)', fontSize: '2vh', fontWeight: '700' }}>
                            score
                        </div>
                    </div>
                </div>
            </div>

            <div className='tcs-progress'>
                <div className='tcs-progress-info'>
                    <div style={{ color: 'white' }}>
                        Exercise :
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.44)' }}>
                        CNB2BPU_P_24_13TK02022024
                    </div>
                </div>
                <div className='tcs-progress-view'>
                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${30}%` }}
                        ></div>
                    </div>
                </div>
                <div className='tcs-timer'>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh', color: 'rgba(255, 255, 255, 0.57)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                style={{ height: '2.5vh', width: '2.5vh' }}
                                src={clockIcon} />
                        </div>
                        <div style={{fontSize:'2.5vh'}}>
                        01:00:00
                        </div>
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.57)', fontSize: '2.5vh' }}>
                        {`${32}%`}
                    </div>
                </div>
            </div>


            {
                pagedata.motion &&
                pagedata.motion && <div className='training-actions-view' style={{ height: '10%' }}>
                    <div>Motion seats</div>
                    <div><CustomSwitch /></div>
                </div>
            }

            <div className='training-actions-buttons'>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>
                    <ButtonComp title={'Save Changes'} bntStyle={{ height: '4.5vh', width: '15vh' }} />
                    <ButtonComp onClick={() => { setPage(0) }} title={'Close'} bntStyle={{ height: '4.5vh', width: '12vh', background: 'none', 'backdrop-filter': 'blur(10vh)', color: 'white' }} />
                </div>
                <div className='tcb-right'>
                    <ButtonComp onClick={() => { setPage(2) }} prefixIcon={stop_icon}  title={'Stop'} bntStyle={{ width: '13vh', height: '4.5vh',color:'white',background:'none','backdrop-filter':'blur(10vh)' }} />
                </div>
            </div>
        </div>
    )
}

export const TraineeView = ({ pagedata }) => {
    const { niki } = Icons.ISIcons
    return (
        <div className='tv-main'>
            <div className='tv-image-div'>
                <img style={{ height: '100%', width: '80%', borderRadius: '50%' }} src={niki} />
            </div>
            <div className='tv-info-div'>
                <div style={{ width: '100%', height: '50%', color: 'white', fontSize: '2.5vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left' }}>
                    Raju Kumar
                </div>
                <div style={{ width: '100%', height: '50%', color: ' rgba(255, 255, 255, 0.44)', fontSize: '2.5vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left' }}>
                    {`${'HQ Name'} | ${'Division Name'} | ${'Railway Name'}`}
                </div>
            </div>
        </div>
    )
}
