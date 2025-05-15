// import React, { useEffect, useState } from 'react'
// import './SimulationEventLog.css'
// import { useSimulatorStore } from '../../simulator-store';
// export default function SimulationEventLog({ drag }) {
//     const { tabs, activeTab } = useSimulatorStore(state => state);
//     const activedata = tabs?.find(x => x.path === activeTab);
//     const logdata = activedata?.content?.eventLog || []
//     const [eventlogdata, setEventLogdata] = useState([])
//     const uniqueRows = new Set(eventlogdata.map((row) => row.timestamp));

//     useEffect(() => {
//         if (Array.isArray(logdata)) {
//             const newEntries = logdata.filter((row) => !uniqueRows.has(row.timestamp));
//             if (newEntries.length > 0) {
//                 setEventLogdata((prevData) => {
//                     const updatedData = [...newEntries, ...prevData]; // Prepend new data
//                     // Update the unique rows set
//                     newEntries.forEach((row) => uniqueRows.add(row.timestamp));
//                     return updatedData;
//                 });
//             }
//         } else {
//             console.error('logdata is not an array:', logdata);
//         }
//     }, [logdata]);
//     return (
//         <div className='event-log-container' style={drag ? { height: '73vh' } : {}}>
//             <div className="table-container">
//                 <table className='log-table'>
//                     <tbody>
//                         {eventlogdata?.map((row, index) => (
//                             <tr key={index} className="table-row">
//                                 <td className='log-td '>{row.timestamp}</td>
//                                 <td className='log-td '>{`${row?.message?.location} meters`}</td>
//                                 <td className='log-td '>{
//                                     <td className="log-td">
//                                         {
//                                             Object.entries(row?.message).map(([key, value]) => (
//                                                 <span
//                                                     key={key}
//                                                     style={{ display: 'inline-block', marginRight: '1vw' }}
//                                                 >
//                                                     <strong style={{ fontSize: '2.5vh' }}>{key}:</strong>
//                                                     <span style={{ color: '#d6d6d6ab' }}>{value?.toString()}</span>
//                                                 </span>
//                                             ))
//                                         }
//                                     </td>
//                                 }</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// ---------------------------------------------------------------------


import React, { useEffect, useState, useCallback, useRef } from 'react';
import './SimulationEventLog.css';
import { useSimulatorStore } from '../../simulator-store';

const LogRow = React.memo(({ row }) => {
    const messageEntries = Object.entries(row?.message).map(([key, value]) => (
        <span
            key={key}
            style={{ display: 'inline-block', marginRight: '1vw' }}
        >
            <strong style={{ fontSize: '2.5vh' }}>{key}:</strong>
            <span style={{ color: '#d6d6d6ab' }}>{value?.toString()}</span>
        </span>
    ));

    return (
        <tr className="table-row">
            <td className='log-td'>{row.timestamp}</td>
            <td className='log-td'>{`${row?.message?.location} meters`}</td>
            <td className='log-td'>
                <div className="log-td">{messageEntries}</div>
            </td>
        </tr>
    );
});

export default function SimulationEventLog({ drag }) {
    const { tabs, activeTab } = useSimulatorStore(state => state);
    const activedata = tabs?.find(x => x.path === activeTab);
    const logdata = activedata?.content?.eventLog || [];

    const [eventlogdata, setEventLogdata] = useState([]);
    const uniqueRows = useRef(new Set());

    // Memoize the eventlog processing
    const processEventLog = useCallback(() => {
        if (Array.isArray(logdata)) {
            const newEntries = logdata.filter((row) => !uniqueRows.current.has(row.timestamp));
            if (newEntries.length > 0) {
                setEventLogdata((prevData) => {
                    const updatedData = [...newEntries, ...prevData];
                    newEntries.forEach((row) => uniqueRows.current.add(row.timestamp));
                    return updatedData;
                });
            }
        } else {
            console.error('logdata is not an array:', logdata);
        }
    }, [logdata]);

    useEffect(() => {
        processEventLog();
    }, [processEventLog]);

    return (
        <div className='event-log-container' style={drag ? { height: '73vh' } : {}}>
            <div className="table-container">
                <table className='log-table'>
                    <tbody>
                        {eventlogdata?.map((row, index) => (
                            <LogRow key={index} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


