import React, { useEffect, useState } from "react";
import "./EventTable.css";
import TextViewComp from "../../../../../../components/Instructor-station/UIComp/TextViewComp";
import { useSimulatorStore } from "../../simulator-store";


const EventTableComponent = ({events =[],setselecteevent,selecteevent}) => {
    const { tabs, activeId, updateTab, } = useSimulatorStore(state => state);
    const activedata = tabs?.find(x => x.id === activeId)
    const [tabledata,settabledata] = useState()
    const handleSelect = (selected) => {
        setselecteevent(prev => (prev && prev.id === selected.id ? null : selected));
    };
    useEffect(() => {
        const tabledata = events?.map((x) => {
            return{
                name:x.eventName,
                location:x.location,
                id:x.id,
                status:x.enabled?'Enabled':'Disabled',
                deleted:x?.deleted
            }
        })
        settabledata(tabledata)
    },[events])

    const columns = [
        { id: 1, title: "Name", key: "name" },
        { id: 2, title: "Location", key: "location" },
        { id: 4, title: "Status", key: "status" },
    ];



    return (
        <div className="table-container">
            <table className="l-s-event-table">
                <thead className="l-s-event-table-header">
                    <tr className="l-s-event-table-tr">
                        {columns.map((column) => (
                            <th className="l-s-event-table-th" key={column.id}>{column.title}</th>
                        ))} 
                    </tr>
                </thead>
                <tbody>
                    {tabledata?.map((data, index) => (
                        <tr onClick={() => {handleSelect(data)}}   className= {selecteevent?.id === data.id?"l-s-event-table-trselected":"l-s-event-table-tr"} key={index}>
                            {columns.map((column) => {
                                if (column.textview) {
                                    return (
                                        (
                                            <td className="l-s-event-table-td" key={column.id}><TextViewComp text={data[column.key]} /></td>
                                        )
                                    )
                                } else {
                                    return (
                                        (
                                            <td  className='l-s-event-table-td' key={column.id}>{data[column.key]}</td>
                                        )
                                    )
                                }

                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTableComponent;
