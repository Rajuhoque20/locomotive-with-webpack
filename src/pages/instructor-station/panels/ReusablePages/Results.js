import React, { useRef, useEffect, useState } from "react";
import './Results.css';
import ButtonComp from '../../../../components/Instructor-station/UIComp/ButtonComp';
import { Icons } from '#framework'
import { DropDownContent, NormalContent } from "../ExercisePanel/Page/ExercisePanelPages/ExcercisePanelEvaluation";
import html2pdf from "html2pdf.js";
import { forwardRef } from "react";
import websocket from "../../../../services/Websocket";


// const Results = () => {
//     const {nav_left_icon,nav_right_icon,drag_icon,arrow_frame_icon,white_play_icon,play_icon} = Icons;
//     const [isStart, setIsStart] = useState(true);
//     const handleStartDownload = () => {
//         setIsStart(!isStart);
//     };

//     const infoarray = [
//         {
//             lable: 'Instructor',
//             info: 'Raj Rao'
//         },
//         {
//             lable: 'Trainees',
//             info: 'Rama Varma'
//         },
//         {
//             lable: 'Session Start Date/Time',
//             info: '31/10/2024 15:45:24'
//         },
//         {
//             lable: 'Session End Date/Time',
//             info: '31/10/2024 16:45:24'
//         }
//     ]
//     const navdata = [
//         {
//             id: 'cgi',
//             lable: 'CGI'
//         },
//         {
//             id: 'cabrep',
//             lable: 'Cab Replicate'
//         },
//         {
//             id: 'aux',
//             lable: 'Auxiliary'
//         },
//         {
//             id: 'layout',
//             lable: 'Machine Room Layout'
//         }
//     ]
//     const timelinedata = [
//         {
//             action: 1,
//             time: '00:00',
//             content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
//         },
//         {
//             action: 1,
//             time: '00:15',
//             content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
//         },
//         {
//             action: 1,
//             time: '00:30',
//             content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
//         },
//         {
//             action: 1,
//             time: '00:45',
//             content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
//         },
//         {
//             action: 1,
//             time: '00:60',
//             content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
//         }
//     ]
//     const snaphots = [
//         {
//             lable: '00:45'
//         },
//         {
//             lable: '01:45'
//         },
//         {
//             lable: '02:45'
//         },
//         {
//             lable: '03:45'
//         },
//         {
//             lable: '04:45'
//         },
//         {
//             lable: '05:45'
//         },
//         {
//             lable: '06:45'
//         },
//         {
//             lable: '07:45'
//         },
//         {
//             lable: '08:45'
//         },
//         {
//             lable: '09:45'
//         },
//         {
//             lable: '10:45'
//         },
//         {
//             lable: '07:45'
//         },
//         {
//             lable: '08:45'
//         },
//         {
//             lable: '09:45'
//         },
//         {
//             lable: '10:45'
//         }
//     ]
//     const [tab, setTab] = useState(navdata[0]['id']);
//     const navHandle = (tab) => {
//         setTab(tab)
//     }
//     const startStyle = {
//         height: '5vh',
//         width: '14vh'
//     }
//     const downloadStyle = {
//         'backdrop-filter': 'blur(100px)',
//         'background': 'rgba(255, 255, 255, 0.100)',
//         'width': '10vw',
//         'height': '5vh',
//         'color': 'white',
//     }

//     const activetabstyle = {
//         'border': '0.078vh solid rgba(255, 255, 255, 0.40)',
//         'background': 'radial-gradient(101.08% 100% at 50% 100%, rgba(94, 94, 94, 0.32) 0%, rgba(94, 94, 94, 0.00) 73.85%), radial-gradient(100.02% 100% at 50% 100%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 68.75%), linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.06)',
//         'background-blend-mode': 'color-dodge, normal, color-dodge, lighten',
//         'box-shadow': '0 0.1vh 0.4vh 0 rgba(0, 0, 0, 0.10)',
//         'width': 'auto',
//         'color': 'white',
//         'height': '5.7vh',
//     }
//     return (
//         <div className='view_results_div'>
//             <div className='results_section1'>
//                 <div className='result_left_content'>
//                     <div className='section_a'>
//                         <div className='section_a_a'>
//                             <div className="speed">
//                                 {405}
//                             </div>
//                             <div className='a_a_content_one_button'>
//                                 <ButtonComp prefixIcon={isStart ? play_icon : null} bntStyle={isStart ? startStyle : downloadStyle} title={isStart ? 'Start' : 'Download Report'} onClick={handleStartDownload} />
//                             </div>
//                             <div className='a_a_content_one'>
//                                 <div className='a_a_content_one_indicator'>
//                                     <div className='indicator'>
//                                         <Speedometer maximumRange={500} value={405} />
//                                     </div>

//                                 </div>
//                                 <div className='a_a_content_one_info'>
//                                     <div className='a_a_content_one_info_title'>
//                                         Howrah Junction to Sealdah
//                                     </div>
//                                     <div className='a_a_content_one_info_subtitle'>
//                                         Kolkata Corridor
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='a_a_content_two'>
//                                 <div className='a_a_content_two_titles'>
//                                     <div className='aa_c_t_title'>
//                                         Simulation 111
//                                     </div>
//                                     <div className='aa_c_t_subtitle'>
//                                         Session Code:12345
//                                     </div>
//                                 </div>
//                                 <div className='aa_c_t_content'>
//                                     <div className='content_box'>
//                                         {
//                                             infoarray.map(x => {
//                                                 return (
//                                                     <div className='content_boxform'>
//                                                         <div className='content_boxform_lable'>
//                                                             {`${x.lable} : `}
//                                                         </div>
//                                                         <div className='content_boxform_info'>
//                                                             {`${x.info}`}
//                                                         </div>

//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='section_a_b'>
//                             <div className='divchange_nav'>
//                                 <ButtonComp prefixIcon={drag_icon} bntStyle={{ width: '100%', height: '100%', background: 'none' }} />
//                             </div>
//                         </div>
//                         <div className='section_a_c'>
//                             <div className='section_a_c_nav'>
//                                 <div className='section_a_c_nav_left_icon'>
//                                     <img src={nav_left_icon} />
//                                 </div>
//                                 <div className='section_a_c_nav_middle'>
//                                     {
//                                         navdata?.map(x => {
//                                             return (
//                                                 <ButtonComp onClick={() => navHandle(x.id)} title={x.lable} bntStyle={tab === x.id ? activetabstyle : { width: 'auto', color: 'rgba(255, 255, 255, 0.418)', background: 'none' }} />
//                                             )
//                                         })
//                                     }
//                                 </div>
//                                 <div className='section_a_c_nav_right_icon'>
//                                     <img src={nav_right_icon} />

//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className='section_b'>
//                         <div className='section_b_header'>
//                             <div className='section_b_header_content'>
//                                 Logs
//                             </div>
//                         </div>
//                         <div className='section_b_content'>
//                             {
//                                 timelinedata?.map(x => {
//                                     return (
//                                         <div className='section_b_content_box'>
//                                             <div className='section_b_content_box_header'>
//                                                 <img src={arrow_frame_icon} />
//                                                 <div className='actionName'>
//                                                     {`Action ${x.action}`}
//                                                 </div>
//                                                 <div className='actiontime'>
//                                                     {x.time}
//                                                 </div>
//                                             </div>
//                                             <div className='section_b_content_box_content'>
//                                                 {x.content}
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>

//                 <div className='result_right_content'>
//                     <div className='rightdiv_header'>
//                         Snapshots
//                     </div>
//                     <div className='rightdiv_content'>
//                         {
//                             snaphots.map(x => {
//                                 return (
//                                     <ButtonComp title={x.lable} prefixIcon={white_play_icon} bntStyle={{ background: 'none', height: '6vh', width: '100%', color: 'white', 'border-radius': '0', 'borderBottom': '0.1vh solid rgba(252, 249, 249, 0.374)' }} />
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>



//             </div>



//             <div className='results_section2'>
//                 <VideoProgressBar />
//             </div>


//         </div>
//     )
// }

// export default Results;

// ---------------------------------------------------------------------------------------------------------------------------------------------




const Results = () => {
    const { arrow_frame_icon, white_play_icon, watch_icon, left_arrow } = Icons.ISIcons;
    const [snap, setSnap] = useState('Instructor')
    const [view, setview] = useState('viewdata')
    const [isGeneratingPDF, setIsGeneratingPDF] = useState('Download');
    const handleSnap = (x) => {
        setSnap(x)
    }
    const reportRef = useRef(null);
    const downloadPDF = async () => {
        setIsGeneratingPDF('Downloadng...');

        if (!reportRef.current) return;
        try {

            await html2pdf()
                .set({
                    margin: 5, // 5mm margin
                    filename: `ReportCard.pdf`,
                    image: { type: "png", quality: 1 },
                    html2canvas: { scale: 3, useCORS: true },
                    jsPDF: { format: "a4", orientation: "portrait", unit: "mm", compressPDF: true }
                })
                .from(reportRef.current)
                .toPdf()
                .get('pdf')
                .then((pdf) => {
                    const totalPages = pdf.internal.getNumberOfPages();
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    const margin = 5; // Match the margin set above (5mm)

                    for (let i = 1; i <= totalPages; i++) {
                        pdf.setPage(i);
                        pdf.setDrawColor(0); // Black color
                        pdf.setLineWidth(0.5); // Border line width
                        // Draw a rectangle around the page content area
                        pdf.rect(
                            margin,
                            margin,
                            pageWidth - 2 * margin,
                            pageHeight - 2 * margin,
                            'S' // Stroke the rectangle
                        );
                    }
                })
                .save();
        } catch (error) {

            setIsGeneratingPDF('error');

        } finally {
            setIsGeneratingPDF('Download');

        }

    };

    const [resultdropDowndiv, resultsetdropDowndiv] = useState('')
    const handleDropClick = (div) => {
        resultsetdropDowndiv(div)
    }
    const [resdata, setResData] = useState([])
    useEffect(() => {
        const callback = (event) => {
            if (event) {
                setResData(event);
            }
        };

        websocket.send("BE/FE/EVALUATION_MODEL/REPORT", "subscribe", null);
        websocket.subscribe("BE/FE/EVALUATION_MODEL/REPORT", callback);

        return () => {
            websocket.unsubscribe("BE/FE/EVALUATION_MODEL/REPORT");
        };
    }, []);
    console.log('resdata', resdata)

    const infoarray = [
        {
            lable: 'Instructor',
            info: resdata?.reportDetails?.instructor_name
        },
        {
            lable: 'Trainees',
            info: resdata?.reportDetails?.student_name
        },
        {
            lable: 'Session Start Date/Time',
            info: '31/10/2024 15:45:24'
        },
        {
            lable: 'Session End Date/Time',
            info: '31/10/2024 16:45:24'
        }
    ]

    const timelinedata = [
        {
            action: 1,
            time: '00:00',
            content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
        },
        {
            action: 1,
            time: '00:15',
            content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
        },
        {
            action: 1,
            time: '00:30',
            content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
        },
        {
            action: 1,
            time: '00:45',
            content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
        },
        {
            action: 1,
            time: '00:60',
            content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis varius mollis. Sed magna est, maximus varius rhoncus sed, interdum eget felis. Nunc metus felis, porttitor id augue a, eges `
        }
    ]
    const snaphots = [
        {
            lable: '00:45'
        },
        {
            lable: '01:45'
        },
        {
            lable: '02:45'
        },
        {
            lable: '03:45'
        },
        {
            lable: '04:45'
        },
        {
            lable: '05:45'
        },
        {
            lable: '06:45'
        },
        {
            lable: '07:45'
        },
        {
            lable: '08:45'
        },
        {
            lable: '09:45'
        },
        {
            lable: '10:45'
        },
        {
            lable: '07:45'
        },
        {
            lable: '08:45'
        },
        {
            lable: '09:45'
        },
        {
            lable: '10:45'
        }
    ]
    const resultscontentsdata = [
        {
            id: '1',
            lable: 'Driving Rules'
        },
        {
            id: '2',
            lable: 'SPAD'
        },
        {
            id: '3',
            lable: 'Brake Management '
        }
    ]
    const resultsdropDown_contents = [
        {
            lable: 'Vigilance alarm',
            penalty: 0,
            weightage: 0,

        },
        {
            lable: 'Horn not sounded',
            penalty: 0,
            weightage: 0,

        },
        {
            lable: 'Excess Speed : Sigma Board on app. RED',
            penalty: 0,
            weightage: 0,
        },
        {
            lable: 'Excess Speed : Passing yellow',
            penalty: 0,
            weightage: 0,
        },
        {
            lable: 'Sectional Speed limits',
            penalty: 0,
            weightage: 0,
        },
        {
            lable: 'Obstruction Hit',
            penalty: 0,
            weightage: 0,
        },
        {
            lable: 'Horn not sounded',
            penalty: 0,
            weightage: 0,
        },
        {
            lable: 'Excess Speed : Sigma Board on app. RED',
            penalty: 0,
            weightage: 0,
        }

    ]
    return (
        <div className='view_results_div'>
            <div className='results_section1'>


                {view === 'viewdata' ? <div className='result_left_content'>
                    <div className='section_a'>
                        <div className="section_a_userInfo">
                            <div className="simulationInfo">
                                <div className="simulationInfoTitle">
                                    {/* Simulation 111 */}
                                    {resdata?.reportDetails?.section_name}
                                </div>
                                <div className="simulationInfoSubTitle">
                                    {/* Howrah Junction to Sealdah */}
                                    {resdata?.reportDetails?.exercise_name}
                                </div>
                                <div className="reply_button">
                                    <ButtonComp onClick={() => setview('replay')} bntStyle={{ height: '5vh', width: '14vh', borderRadius: '1vh', fontWeight: '700', fontSize: '2vh' }} title={'Replay'} />
                                </div>
                            </div>
                            <div className="simulationUserInfo">
                                {
                                    infoarray.map(x => {
                                        return (
                                            <div className='content_boxform'>
                                                <div className='content_boxform_lable'>
                                                    {`${x.lable} : `}
                                                </div>
                                                <div className='content_boxform_info'>
                                                    {`${x.info}`}
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="section_a_reportInfo">
                            <div className="report_header ">Report</div>
                            <div className="report_table">
                                <ReportTable data={resdata?.summaryMarks?.map((x, index) => {
                                    return (
                                        {

                                            id: index + 1,
                                            category: x.category,
                                            weightage: x.total,
                                            percentage: x.percentage

                                        }
                                    )
                                })} />
                            </div>
                            <div className="report_overview">
                                <div className="overviewdata">
                                    <div className="overviewdataTitle"> Driving Score </div>
                                    <div className="overviewdataSubTitle">{resdata.totalMarksPercentage} % </div>
                                </div>
                                <div className="overviewdata">
                                    <div className="overviewdataTitle"> Result</div>
                                    <div className="overviewdataSubTitle"> Pass </div>
                                </div>
                                <div className="overviewdata">
                                    <div className="overviewdataTitle">Distance Travelled  </div>
                                    <div className="overviewdataSubTitle">{resdata?.reportDetails?.distance_covered} KM </div>
                                </div>
                            </div>
                            <div className="report_action">
                                <ButtonComp onClick={() => setview('download')} title={'View Detailed Report'} bntStyle={{ height: '5vh', width: '12vw', color: 'white', background: '#fcfcfc4d', borderRadius: '12vh' }} />
                            </div>
                        </div>
                    </div>
                </div> : null}

                {
                    view === 'download' ? <div className="result_left_content" >
                        <div className="downloadview">
                            <div style={{ width: '100%', height: '8%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5vh' }}>
                                <ButtonComp onClick={() => setview('viewdata')} prefixIcon={left_arrow} title={'Back'} bntStyle={{ height: '5vh', width: '10vh', background: 'none', 'backdrop-filter': 'blur(10vh)', color: 'white', fontSize: '2vh', borderRadius: '3vh' }} />
                                <div style={{ color: 'white', fontSize: '2vh', fontWeight: '700' }}>
                                    Summary
                                </div>
                                <div style={{ width: "100%", border: "0.1vh solid rgba(255, 255, 255, 0.512)", height: '0.1vh' }}> </div>
                            </div>
                            <div style={{ width: '100%', height: '8%', display: 'flex', flexDirection: 'row' }}>
                                <div className="overviewdata">
                                    <div className="overviewdataTitle"> Driving Score </div>
                                    <div className="overviewdataSubTitle"> 100% </div>
                                </div>
                                <div className="overviewdata">
                                    <div className="overviewdataTitle"> Result</div>
                                    <div className="overviewdataSubTitle"> Pass </div>
                                </div>
                                <div className="overviewdata">
                                    <div className="overviewdataTitle">Distance Travelled  </div>
                                    <div className="overviewdataSubTitle"> 22.32 KM </div>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '7%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left' }}>
                                <ButtonComp onClick={() => { (downloadPDF()) }} title={isGeneratingPDF} bntStyle={{ height: '5vh', width: '14vh', borderRadius: '1.5vh', color: 'white', fontWeight: '700', background: 'none', 'backdrop-filter': 'blur(10vh)' }} />
                            </div>
                            <div style={{ width: '100%', height: '77%', border: '0.1vh solid rgba(255, 255, 255, 0.283)', borderRadius: '1.2vh', overflow: 'hidden' }}>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <div className='downloadviewtableheader'>
                                        <div style={{ height: '2.2vh', width: '74%' }}>
                                            Assessment Category
                                        </div>
                                        <div style={{ height: '2.2vh', width: '13%' }}>
                                            weightage
                                        </div>
                                        <div style={{ height: '2.2vh', width: '13%' }}>
                                            Penalty per occurrence
                                        </div>
                                    </div>
                                    <div className='block_one_content'>
                                        {
                                            resultscontentsdata.map((x) => {
                                                return (
                                                    resultdropDowndiv === x.id ? <DropDownContent type={'result'} title={x.title} dropDown_contents={resultsdropDown_contents} onClick={() => { handleDropClick('') }} /> : <NormalContent title={x.lable} onClick={() => { handleDropClick(x.id) }} />
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div> : null
                }

                {
                    view === 'replay' ? <div className="result_left_content" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '90%', gap: '2vh' }}>
                            <div className="replay_mimic"></div>
                            <div className="replay_logs">

                                <div className='section_b'>
                                    <div className='section_b_header'>
                                        <div className='section_b_header_content'>
                                            Logs
                                        </div>
                                    </div>
                                    <div className='section_b_content'>
                                        {
                                            timelinedata?.map(x => {
                                                return (
                                                    <div className='section_b_content_box'>
                                                        <div className='section_b_content_box_header'>
                                                            <img src={arrow_frame_icon} />
                                                            <div className='actionName'>
                                                                {`Action ${x.action}`}
                                                            </div>
                                                            <div className='actiontime'>
                                                                {x.time}
                                                            </div>
                                                        </div>
                                                        <div className='section_b_content_box_content'>
                                                            {x.content}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="replay_markers">
                                <div className='result_right_content'>
                                    <div className='rightdiv_header'>
                                        <img src={watch_icon} />
                                        Markers
                                    </div>
                                    <div className="snapButtons">
                                        <ButtonComp onClick={() => { handleSnap('Instructor') }} title={'Instructor'} bntStyle={{ height: '4vh', width: '9vw', color: 'white', background: snap === 'Instructor' ? '#fcfcfc4d' : 'none', borderRadius: '0.5vh' }} />
                                        <ButtonComp onClick={() => { handleSnap('Observer') }} title={'Observer'} bntStyle={{ height: '4vh', width: '9vw', color: 'white', background: snap === 'Observer' ? '#fcfcfc4d' : 'none', borderRadius: '0.5vh' }} />
                                    </div>
                                    <div className='rightdiv_content'>
                                        {
                                            snaphots.map(x => {
                                                return (
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', borderBottom: '0.1vh solid rgba(252, 249, 249, 0.374)' }}>
                                                        <ButtonComp title={x.lable} prefixIcon={white_play_icon} bntStyle={{ background: 'none', height: '6vh', width: '6vw', color: 'white', 'border-radius': '0' }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='results_section2'>
                            <VideoProgressBar />
                        </div>

                    </div> : null
                }

                {
                    <div style={{ display: "none" }}>
                        <ReportCard ref={reportRef} student={null} />
                    </div>
                }

            </div>



        </div>
    )
}

export default Results;







// ---------------------------------------------------------------------------------------------------------------------------------------------


// const Speedometer = (maximumRange, value) => {
//     maximumRange = 500
//     value = value
//     const canvasRef = useRef(null);
//     const [gaugeValue, setGaugeValue] = useState(500);
//     useEffect(() => {
//         drawGauge(maximumRange, gaugeValue);
//     }, [maximumRange, gaugeValue]);
//     const drawGauge = (maximumRange, value) => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const centerX = canvas.width / 2
//         const centerY = canvas.height
//         const radius = canvas.width / 2 - 20;
//         // Clear canvas
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Draw gauge background
//         ctx.beginPath();
//         ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
//         ctx.lineWidth = 40;
//         ctx.strokeStyle = "rgba(27, 27, 73, 0.272)";
//         ctx.setLineDash([]);
//         ctx.stroke();

//         // Create a gradient
//         const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//         const valueIncrement = Math.round(maximumRange / 4);

//         // Define gradient stops based on ranges
//         if (value < valueIncrement) {
//             gradient.addColorStop(0, "#00ff00"); // Green
//             gradient.addColorStop(1, "#00ff00"); // Green
//         } else if (value < valueIncrement * 2) {
//             gradient.addColorStop(0, "#00ff00"); // Green
//             gradient.addColorStop(1, "#66ff33"); // Light Green
//         } else if (value < valueIncrement * 3) {
//             gradient.addColorStop(0, "#66ff33"); // Light Green
//             gradient.addColorStop(0.5, "#ffff00"); // Yellow
//         } else if (value < valueIncrement * 4) {
//             gradient.addColorStop(0, "#66ff33"); // Light Green
//             gradient.addColorStop(0.5, "#ffff00"); // Yellow
//             gradient.addColorStop(1, "#ff0000"); // Light Red
//         } else {
//             gradient.addColorStop(0, "#66ff33"); // Light Green
//             gradient.addColorStop(0.5, "#ffff00"); // Yellow
//             gradient.addColorStop(0.8, "#ff0000"); // Light Red
//             gradient.addColorStop(1, "#ff0000"); // Red
//         }

//         // Draw gauge value
//         const startAngle = Math.PI;
//         const endAngle = (value / maximumRange) * Math.PI + startAngle;
//         ctx.beginPath();
//         ctx.arc(centerX, centerY, radius, startAngle, endAngle);
//         ctx.lineWidth = 35;
//         ctx.setLineDash([1, 1])
//         ctx.strokeStyle = gradient;
//         ctx.stroke();

//     }




//     return (
//         <div className="gauge-container" >
//             <canvas className="gauge_canvas" ref={canvasRef} width="250vw" height="150vh"></canvas>
//         </div>
//     );
// }

const styles = {
    progressBarContainer: {
        flex: 1,
        height: "0.1vh",
        background: "#ddd",
        position: "relative",
        margin: "0 0.1vh",
        cursor: "pointer",
    },
    progress: {
        height: "100%",

    },

    slider: {
        marginLeft: "1vh",
        width: "100%",
        height: '0.5vh',
        color: 'white',
        background: 'red'
    },
};


const VideoProgressBar = ({ totalHours = 1 }) => {
    const { pause_icon_white, white_play_icon } = Icons.ISIcons;
    const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
    const [currentTime, setCurrentTime] = useState(0); // Current time in seconds
    const totalTime = totalHours * 3600; // Total duration in seconds
    const progressBarRef = useRef(null);
    const intervalRef = useRef(null);

    // Format time from seconds to HH:MM:SS
    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs > 0 ? `${hrs}:` : ""}${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    // Update progress while playing
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentTime((prev) => Math.min(prev + 1, totalTime));
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying, totalTime]);

    // Handle slider movement
    const handleSliderChange = (e) => {
        const value = e.target.value;
        setCurrentTime(value);
    };

    // Handle progress bar click
    const handleBarClick = (e) => {
        const rect = progressBarRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * totalTime;
        setCurrentTime(newTime);
    };

    return (
        <div className="player_div">
            <ButtonComp prefixIcon={isPlaying ? pause_icon_white : white_play_icon} onClick={togglePlayPause} bntStyle={{ height: '5vh', width: '2vw', background: 'none' }} />
            <div style={styles.progressBarContainer} onClick={handleBarClick} ref={progressBarRef}>
                <div
                    style={{
                        ...styles.progress,
                        width: `${(currentTime / totalTime) * 100}%`,
                    }}
                ></div>
            </div>
            <input
                type="range"
                min="0"
                max={totalTime}
                value={currentTime}
                onChange={handleSliderChange}
                style={styles.slider}
            />
            <div className="player_time">
                {`${formatTime(currentTime)} / ${formatTime(totalTime)}`}
            </div>
        </div>
    );
};

export const ReportTable = ({ headers, data }) => {
    headers = [
        {
            id: 1,
            label: 'Assessment Category',
            key: 'category'
        },
        {
            id: 2,
            label: 'Weightage',
            key: 'weightage'
        },
        {
            id: 3,
            label: 'Percentage',
            key: 'percentage'
        }
    ]

    // data = [
    //     {
    //         id: 1,
    //         category: 'Driving Rules',
    //         weightage: 100,
    //         percentage: 100
    //     },
    //     {
    //         id: 1,
    //         category: 'Brake Management',
    //         weightage: 100,
    //         percentage: 100
    //     },
    //     {
    //         id: 1,
    //         category: 'Train Management',
    //         weightage: 100,
    //         percentage: 100
    //     },
    //     {
    //         id: 1,
    //         category: 'Performance Management',
    //         weightage: 100,
    //         percentage: 100
    //     }
    // ]

    // data = resdata?.summaryMarks?.map((x,index) => {
    //     return(
    //         {

    //                 id: index+1,
    //                 category: x.category,
    //                 weightage:x.total,
    //                 percentage:x.percentage

    //         }
    //     )
    // })





    return (
        <div className="report_table_container">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr className="report_table_th_tr">
                        {headers.map((header) => (
                            <th
                                key={header.id}
                                className="report_table_th"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="report_table_td_tr"
                        >
                            {headers.map((header) => (
                                <td
                                    key={header.id}
                                    className="report_table_td"
                                >
                                    {row[header.key] || 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const ReportCard = forwardRef(({ student }, ref) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const callback = (event) => {
            if (event) {
                setData(event);
            }
        };

        websocket.send("BE/FE/EVALUATION_MODEL/REPORT", "subscribe", null);
        websocket.subscribe("BE/FE/EVALUATION_MODEL/REPORT", callback);

        return () => {
            websocket.unsubscribe("BE/FE/EVALUATION_MODEL/REPORT");
        };
    }, []);
    console.log('results', data)
    const { reportDetails, summaryMarks, drivingRulesMarks, brakeManagementMarks, trainManagementMarks, performanceManagementMarks, troubleShootingMarks } = data
    const { irpng } = Icons.ISIcons;
    return (
        <div ref={ref} style={{ border: "1px solid #000", margin: "auto" }}>
            <div className="reportborder">

                <div className="reportheader">
                    <div className="reportheaderleft">
                        <img className="reportlogo" src={irpng} />
                    </div>

                    <div className="reportheaderright">
                        <div>MDDTI, CNB. </div>
                        <div>North Central Railway</div>
                    </div>
                </div>

                <div className="page-section">
                    <div className="table1header"> Report card</div>

                    <div className="candidateInfoddiv">
                        <div className="sinfocontainer">
                            <div className="sinfocell sinfoheader">Student Name</div>
                            <div className="sinfocell">{reportDetails?.student_name}</div>
                            <div className="sinfocell sinfoheader">Date of Run</div>
                            <div className="sinfocell">{reportDetails?.dateOfRun}</div>

                            <div className="sinfocell sinfoheader">Instructor Name</div>
                            <div className="sinfocell">{reportDetails?.instructor_name}</div>
                            <div className="sinfocell sinfoheader">Instructor Remark</div>
                            <div className="sinfocell">{reportDetails?.instructor_comments}</div>

                            <div className="sinfocell sinfoheader">Exercise Name</div>
                            <div className="sinfocell">{reportDetails?.exercise_name}</div>
                            <div className="sinfocell sinfoheader">Batch Number</div>
                            <div className="sinfocell">{reportDetails?.batch_number}</div>

                            <div className="sinfocell sinfoheader">Section Name</div>
                            <div className="sinfocell">{reportDetails?.section_name}</div>
                            <div className="sinfocell sinfoheader">Start Km</div>
                            <div className="sinfocell">{reportDetails?.start_km}</div>

                            <div className="sinfocell sinfoheader">Train Type</div>
                            <div className="sinfocell">{reportDetails?.train_type}</div>
                            <div className="sinfocell sinfoheader">End Km</div>
                            <div className="sinfocell">{reportDetails?.end_km}</div>

                            {/* <div className="sinfocell sinfoheader">Weather Conditions</div>
                        <div className="sinfocell"> </div> */}
                            <div className="sinfocell sinfoheader">Total Km</div>
                            <div className="sinfocell">{reportDetails?.total_km}</div>

                            <div className="sinfocell sinfoheader">Headquarter</div>
                            <div className="sinfocell">{reportDetails?.headquarter}</div>
                            <div className="sinfocell sinfoheader">Division</div>
                            <div className="sinfocell">{reportDetails?.division}</div>

                            <div className="sinfocell sinfoheader">Railway</div>
                            <div className="sinfocell">{reportDetails?.railway}</div>
                            <div className="sinfocell sinfoheader"></div>
                            <div className="sinfocell"></div>
                        </div>
                    </div>
                    <div className="blankdiv"></div>
                    <div className="traindatadiv">
                        <table>
                            <tr>
                                <th>Sr. No</th>
                                <th>Number of vehicles</th>
                                <th>Rolling Stock</th>
                                <th>Tare weight (T)</th>
                                <th>Loading Weight (T)</th>
                                <th>Total Load (T)</th>
                            </tr>
                            {
                                reportDetails?.train_composition?.map((val, index) => {
                                    return (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{val?.vehicle_number}</td>
                                            <td>{val?.rolling_stock}</td>
                                            <td>{val?.tare_weight_t}</td>
                                            <td>{val?.loaded_weight_t}</td>
                                            <td>{val?.total_load_t}</td>
                                        </tr>
                                    )
                                })
                            }

                            <tr>
                                <td colSpan="6"></td>
                            </tr>
                            <tr>
                                <td colSpan="3">{`Total Train length in meters ${data?.reportDetails?.total_train_length_m}`}</td>
                                <td colSpan="3">{`Total Train Mass (t) ${data?.reportDetails?.total_train_mass_t}`}</td>
                            </tr>
                            <tr>
                                <th colSpan="6">Train and Track dynamics</th>
                            </tr>
                            <tr>
                                <td>Initial Speed</td>
                                <td colspan="2">{reportDetails?.initial_speed}</td>
                                <td>Gross Mass %</td>
                                <td colspan="2">{reportDetails?.gross_mass}</td>
                            </tr>
                            <tr>
                                <td>Tractive Effort %</td>
                                <td colspan="2">{reportDetails?.tractive_effort}</td>
                                <td>BP leakage Position in meters of train</td>
                                <td colspan="2">{reportDetails?.brake_pipe_leakage}</td>
                            </tr>
                            <tr>
                                <td>Adhesion level %</td>
                                <td colspan="2">{reportDetails?.adhesion}</td>
                                <td>Brake Leakage %</td>
                                <td colspan="2">{reportDetails?.brake_leakage}</td>
                            </tr>
                            <tr>
                                <td>Brake Pipe leakage drop across train %</td>
                                <td colspan="2">{reportDetails?.brake_pipe_leakage}</td>
                                <td>Rolling Resistance %</td>
                                <td colspan="2">{reportDetails?.rolling_resistance}</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <div className="page-section">
                    <div className="sedivheader"> Summary of Exercise</div>
                    <div className="setable-container">
                        <div className="setable-row seheader">
                            <div className="setable-cell">Sr. No</div>
                            <div className="setable-cell">Performance Category</div>
                            <div className="setable-cell">Obtained</div>
                            <div className="setable-cell">Deducted</div>
                            <div className="setable-cell">Percentage</div>
                        </div>


                        {
                            summaryMarks?.map((val, index) => {
                                return (
                                    <div className="setable-row">
                                        <div className="setable-cell">{index}</div>
                                        <div className="setable-cell">{val?.category}</div>
                                        <div className="setable-cell">{val?.obtained}</div>
                                        <div className="setable-cell">{val?.deducted}</div>
                                        <div className="setable-cell">{val?.percentage}</div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="sertable-container">
                        <div className="sertable-row">
                            <div className="sertable-cell">{`Total Distance travel (KM) ${data?.reportDetails?.total_km}`}</div>
                            <div className="sertable-cell">{`Overall driving Score (%) ${data?.totalMarksPercentage}`}</div>
                        </div>

                        <div className="sertable-row">
                            <div className="sertable-cell">{`Maximum Speed kmph achieve ${data?.reportDetails?.maximum_speed}`}</div>
                            <div className="sertable-cell">{`Average speed Kmph ${data?.reportDetails?.average_speed}`}</div>
                        </div>

                        <div className="sertable-row">
                            <div className="sertable-cell"> {`Simulator exercise time ${data?.reportDetails?.exercise_time}`}</div>
                            <div className="sertable-cell">{`Total Score ${data?.totalObtainedMarks}`}</div>
                        </div>
                    </div>
                </div>




                <div className="page-section">
                    <div className="sedivheader"> Detailed Mark Sheet</div>
                    <div className="sedivheader"> Driving Rules</div>

                    <div className="ralltableview">
                        <table>
                            <thead>
                                <tr>
                                    <th>Penalty Name</th>
                                    <th>Location</th>
                                    <th>Penalty Per Occurrence</th>
                                    <th>Max Weight</th>
                                    <th>No of time</th>
                                    <th>Marks Deducted</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    drivingRulesMarks?.map((val, index) => {
                                        return (
                                            <tr>
                                                <td>{val?.penaltyType}</td>
                                                <td>{val?.location}</td>
                                                <td>{val?.penaltyPerOccurrence}</td>
                                                <td>{val?.total}</td>
                                                <td>{val?.deductionCount}</td>
                                                <td>{val?.deducted}</td>
                                            </tr>
                                        )
                                    })
                                }

                                <tr>
                                    <td style={{ fontWeight: 'bold' }}>Total Score</td>
                                    <td>{data.drivingtotalMarks}</td>
                                    <td style={{ fontWeight: 'bold' }}>Remark</td>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}>Total Deducted</td>
                                    <td>{data?.drivingdeductedMarks}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="page-section">
                    <div className="sedivheader"> Brake Management</div>

                    <div className="ralltableview">
                        <table>
                            <thead>
                                <tr>
                                    <th>Penalty Name</th>
                                    <th>Location</th>
                                    <th>Penalty Per Occurrence</th>
                                    <th>Max Weight</th>
                                    <th>No of time</th>
                                    <th>Marks Deducted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    brakeManagementMarks?.map((val, index) => {
                                        return (
                                            <tr>
                                                <td>{val?.penaltyType}</td>
                                                <td>{val?.location}</td>
                                                <td>{val?.penaltyPerOccurrence}</td>
                                                <td>{val?.total}</td>
                                                <td>{val?.deductionCount}</td>
                                                <td>{val?.deducted}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td style={{ fontWeight: 'bold' }}>Total Score</td>
                                    <td>{data?.brakeManagementtotalMarks}</td>
                                    <td style={{ fontWeight: 'bold' }}>Remark</td>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}>Total Deducted</td>
                                    <td>{data?.brakeManagementdeductedMarks}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="page-section">

                    <div className="sedivheader"> Train Management</div>

                    <div className="ralltableview">
                        <table>
                            <thead>
                                <tr>
                                    <th>Penalty Name</th>
                                    <th>Location</th>
                                    <th>Penalty Per Occurrence</th>
                                    <th>Max Weight</th>
                                    <th>No of time</th>
                                    <th>Marks Deducted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    trainManagementMarks?.map((val, index) => {
                                        return (
                                            <tr>
                                                <td>{val?.penaltyType}</td>
                                                <td>{val?.location}</td>
                                                <td>{val?.penaltyPerOccurrence}</td>
                                                <td>{val?.total}</td>
                                                <td>{val?.deductionCount}</td>
                                                <td>{val?.deducted}</td>
                                            </tr>
                                        )
                                    })
                                }

                                <tr>
                                    <td style={{ fontWeight: 'bold' }}>Total Score</td>
                                    <td>{data?.trainManagementtotalMarks}</td>
                                    <td style={{ fontWeight: 'bold' }}>Remark</td>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}>Total Deducted</td>
                                    <td>{data?.trainManagementdeductedMarks}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="page-section">

                    <div className="sedivheader"> Performance Management</div>

                    <div className="ralltableview">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Penalty Name</th>
                                    <th>Max Weight</th>
                                    <th>Ideal run Value</th>
                                    <th>Value</th>
                                    <th>Marks Deducted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    performanceManagementMarks?.map((val, index) => {
                                        return (
                                            <tr>
                                                <td>{val?.penaltyType}</td>
                                                <td>{val?.location}</td>
                                                <td>{val?.penaltyPerOccurrence}</td>
                                                <td>{val?.total}</td>
                                                <td>{val?.deductionCount}</td>
                                                <td>{val?.deducted}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td ></td>
                                    <td style={{ fontWeight: 'bold' }}> Total Score</td>
                                    <td style={{ fontWeight: 'bold' }}>{data?.performanceManagementTotalMarks}</td>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}>Total Deducted</td>
                                    <td>{data?.performanceManagementdeductedMarks}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="page-section">

                    <div className="sedivheader">Troubleshooting Management</div>
                    <div className="ralltableview">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Fault number</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Remove By</th>
                                    <th>Total Time</th>
                                    <th> Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    troubleShootingMarks?.map((val, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{val?.faultnumber}</td>
                                                <td>{val?.starttime}</td>
                                                <td>{val?.endtime}</td>
                                                <td>{val?.removeby}</td>
                                                <td>{val?.totaltime}</td>
                                                <td>{val?.marks}</td>
                                            </tr>
                                        )

                                    })
                                }
                                <tr>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}>Total Score</td>
                                    <td>{data?.troubleShootingtotalMarks}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
});


