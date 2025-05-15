import { useRef, useState } from 'react';
import ButtonComp from '../../../../components/Instructor-station/UIComp/ButtonComp'
import { usePTIStore } from '../PT_Instructor/PTI-store';
import './PTResults.css'
import { useNavigate } from 'react-router-dom';
import { Icons } from '#framework';
import { ReportCard, ReportTable } from './Results';
import { DropDownContent, NormalContent } from '../ExercisePanel/Page/ExercisePanelPages/ExcercisePanelEvaluation';
import html2pdf from "html2pdf.js";
export const PTResults = ({ type }) => {
  const { setActiveTab } = usePTIStore(state => state);
  const [view, setview] = useState('reportview');
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/pti-home')
    setActiveTab('/pti-home')
  }

  return (
    <div className='ptr-container'>
      <div className='ptr-content'>
        {
          view === 'reportview' &&
          <div className='ptr-content-view'>

            <div className='pcv-section1'>
              <ReportViewPage setview={setview} navigate={navigate} setActiveTab={setActiveTab}  type={type}/>
            </div>
            <div className='pcv-section2'>
              <LogsView />
            </div>

          </div>
        }
        {
          view === 'download' &&
          <ReportDownloadView setview={setview} />
        }
      </div>
      {
        type == 'trainee' &&
        <div className='ptr-footer'>
          <ButtonComp onClick={() => { handleHome() }} title={'Home'} bntStyle={{ color: 'white', fontSize: '2vh', fontWeight: '500', height: '4.5vh', width: '12vh', background: ' rgba(255, 255, 255, 0.407)', 'backdrop-filter': 'blur(10vh)' }} />
        </div>
      }

    </div>
  )
}

const ReportViewPage = ({ setview, navigate, setActiveTab,type }) => {
  const infoarray = [
    {
      lable: 'Instructor',
      info: 'Raj Rao'
    },
    {
      lable: 'Trainees',
      info: 'Rama Varma'
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
  const handleClose = () => {
    navigate('/pti-history')
    setActiveTab('/pti-history')
  }
  return (
    <div style={{ padding: '0' }} className='result_left_content'>
      <div className='section_a'>
        <div style={{ border: '0.1vh solid rgba(255, 255, 255, 0.407)', background: 'rgba(255, 255, 255, 0.12)' }} className="section_a_userInfo">
          <div className="simulationInfo">
            <div className="simulationInfoTitle">
              Simulation 111
            </div>
            <div className="simulationInfoSubTitle">
              Howrah Junction to Sealdah
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
        <div style={{ border: '0.1vh solid rgba(255, 255, 255, 0.407)', background: 'rgba(255, 255, 255, 0.12)' }} className="section_a_reportInfo">
          <div className="report_header ">Report</div>
          <div className="report_table">
            <ReportTable />
          </div>
          <div className="report_overview">
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
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="report_action">
            <ButtonComp onClick={() => setview('download')} title={'View Detailed Report'} bntStyle={{ height: '5vh', width: '12vw', color: 'white', background: '#fcfcfc4d', borderRadius: '12vh' }} />
            {
              (type && type != 'pttresult') &&
              <ButtonComp onClick={() => { handleClose() }} title={'Close'} bntStyle={{ height: '5vh', width: '6vw', color: 'white', background: '#fcfcfc4d', borderRadius: '12vh' }} />

            }
          </div>
        </div>
      </div>
    </div>
  )
}

const LogsView = () => {
  const { arrow_frame_icon } = Icons.ISIcons
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
  return (
    <div style={{ height: '100%', width: '100%', background: 'rgba(255, 255, 255, 0.12)' }} className="replay_logs">

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
  )
}

const ReportDownloadView = ({ setview }) => {
  const { left_arrow } = Icons.ISIcons
  const reportRef = useRef(null);
  const [dp, setdp] = useState('Download')
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
  const [resultdropDowndiv, resultsetdropDowndiv] = useState('')
  const handleDropClick = (div) => {
    resultsetdropDowndiv(div)
  }
  const downloadPDF = async () => {

    if (!reportRef.current) return;
    try {
      setdp('Downloading...')
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

      setdp('Download')
    } finally {
      setdp('Download')

    }

  };
  return (
    <div className="result_left_content" >
      <div className="downloadview">
        <div style={{ width: '100%', height: '8%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5vh' }}>
          <ButtonComp onClick={() => setview('reportview')} prefixIcon={left_arrow} title={'Back'} bntStyle={{ height: '5vh', width: '10vh', background: 'none', 'backdrop-filter': 'blur(10vh)', color: 'white', fontSize: '2vh', borderRadius: '3vh' }} />
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
          <ButtonComp onClick={() => { (downloadPDF()) }} title={dp} bntStyle={{ height: '5vh', width: '14vh', borderRadius: '1.5vh', color: 'white', fontWeight: '700', background: 'none', 'backdrop-filter': 'blur(10vh)' }} />
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
        {
          <div style={{ display: "none" }}>
            <ReportCard ref={reportRef} student={null} />
          </div>
        }
      </div>
    </div>
  )
}