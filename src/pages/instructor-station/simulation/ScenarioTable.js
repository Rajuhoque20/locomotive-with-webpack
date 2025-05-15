import React from "react";
import "./scenarioTableStyles.css";
import TextViewComp from './../../components/Instructor-station/UIComp/TextViewComp';

const ScenarioTableComponent = () => {
    const columns = [
        { id: 1, title: "Name", key: "name" },
        { id: 2, title: "Trigger", key: "trigger" },
        { id: 3, title: "Type", key: "type" },
        { id: 4, title: "Status", key: "status" },
        { id: 5, title: "Location", key: "location", textview: true }
    ];

    const dummydata = [
        {
            name: "All right signals from Loco of TN",
            trigger: "CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)",
            type: "Scenario",
            status: "Done",
            location: "1250 M"
        },
        {
            name: "All right signals from Loco of TN",
            trigger: "CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)",
            type: "Scenario",
            status: "Done",
            location: "1250 M"
        },
        {
            name: "All right signals from Loco of TN",
            trigger: "CD is on BPA 1581 at 572.0 m (Active when the Condition becomes met)",
            type: "Scenario",
            status: "Done",
            location: "1250 M"
        },

    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.id}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dummydata.map((data, index) => (
                        <tr key={index}>
                            {columns.map((column) => {
                                if (column.textview) {
                                    return (
                                        (
                                            <td key={column.id}><TextViewComp text={data[column.key]} /></td>
                                        )
                                    )
                                } else {
                                    return (
                                        (
                                            <td key={column.id}>{data[column.key]}</td>
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

export default ScenarioTableComponent;
