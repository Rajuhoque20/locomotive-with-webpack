import React from 'react'
import './ExcercisePanelFault.css'
import ButtonComp from '../../../../../../components/Instructor-station/UIComp/ButtonComp';
import { Icons } from '#framework';
const ExcercisePanelFault = () => {
  const {card_edit_icon,cancel_icon,new_exercise_button_icon} = Icons.ISIcons;
  return (
    <div className='e_p_Faults'>
      <div className='e_p_Faults_header'>
        <ButtonComp title={'Add'} prefixIcon={new_exercise_button_icon} bntStyle={{ "width": "10vw", "height": "6vh","border-radius":"1vh"}} />
        <ButtonComp title={'Delete'} prefixIcon={cancel_icon} bntStyle={{ "width": "9vw", height: "6vh", "background": "rgba(255, 255, 255, 0.348)", color: 'white' }} />
        <ButtonComp title={'Edit'} prefixIcon={card_edit_icon} bntStyle={{ "width": "9vw", height: "6vh", "background": "rgba(255, 255, 255, 0.348)", color: 'white' }} />
      </div>


      <div className='e_p_Faults_Content'>
        <EpFaultTable />
      </div>
    </div>
  )
}

export default ExcercisePanelFault;


const EpFaultTable = ({ headers, data }) => {
  headers = [
    {
      id: 1,
      label: 'Fault Code',
      key: 'faultCode'
    },
    {
      id: 2,
      label: 'Fault Message',
      key: 'faultMessage'
    },
    {
      id: 3,
      label: 'Location',
      key: 'location'
    }
  ]
  data = [
    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },
    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },

    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },

    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },

    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },

    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },

    {
      id: 1,
      faultCode: 20673,
      faultMessage: 'MCC: Mr blower1 mcb open',
      messageCode: '[F1101P2]',
      location: 'BPA1234'
    },


  ]
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>

      <thead>
        <tr>
          {headers?.map((header) => (
            <th key={header.key} className='e_p_f_t_header'>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody >
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}  className='e_p_f_t_row'>
              {headers?.map((header) => (
                <td
                  key={header.key}
                  style={{padding:'0 0 0 2vh',borderBottom:'0.1vh solid  rgba(255, 255, 255, 0.375)'}}
                >
                {header.key==='faultMessage' && <span>{row?.messageCode || ''}</span>}
                <p>{row[header.key]}</p>
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length} style={{ textAlign: 'center', padding: '8px' }}>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

