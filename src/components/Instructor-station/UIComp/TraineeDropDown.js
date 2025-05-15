import React, { useState } from "react";
import './CustomDropDown.css'
import { Icons } from "#framework";
import { Popover } from "antd";

export const TraineeDropDownCont = ({ data = [], onSelect, closePopover }) => {
    const { niki, searchsvg } = Icons.ISIcons;
    const [searchValue, setSearchValue] = useState("");

    let resultedData = searchValue
        ? data?.filter((item) => item.name.includes(searchValue))
        : data;

    return (
        <div className="searchDropdown">
            <input
                className="searchpoint"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="listsdiv">
                {resultedData?.map((item) => (
                    <div
                        key={item.id}
                        className="trainesslist"
                        onClick={() => {
                            onSelect(item); // Update selected trainee
                            closePopover(); // Close the dropdown
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="traineeimg">
                            <img src={niki} alt={item.name} />
                        </div>
                        <div className="traineeInfo">
                            <div className="traineeName">{item.name}</div>
                            <div className="traineestates">
                                {`${item.hqname} | ${item.divisionName} | ${item.railwayName}`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TraineeDropdown = ({ options }) => {
    const { dropdown_icon,niki } = Icons.ISIcons;
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [open, setOpen] = useState(false); // State to control popover
    // id: 1,
    // name: 'James Hunt',
    // hqname: 'HQ Name',
    // divisionName: 'Division Name',
    // railwayName: 'Railway Name'
    return (
        <div className="customDDiv">
            <Popover
                className="popoverinner"
                placement="bottom"
                trigger="click"
                open={open}
                onOpenChange={setOpen}
                content={
                    <TraineeDropDownCont
                        data={options || []}
                        onSelect={setSelectedTrainee}
                        closePopover={() => setOpen(false)} // Close popover on selection
                    />
                }
            >
                <div style={{ width: '50vh' }} className="searchHeader" onClick={() => setOpen(!open)}>
                    {
                        !selectedTrainee && <span style={{ fontSize: '2vh', fontWeight: '500' }}>
                            Select
                        </span>

                    }
                    {
                        selectedTrainee&&
                        <div
                        key={selectedTrainee.id}
                        className="trainesslist"
                        style={{ cursor: "pointer",height:'100%',width:'100%',padding:'0' }}
                    >
                        <div style={{height:'5vh',width:'5vh',borderRadius:'1.2vh'}} className="traineeimg">
                            <img  src={niki} alt={selectedTrainee.name} />
                        </div>
                        <div className="traineeInfo">
                            <div style={{fontSize:'2vh'}} className="traineeName">{selectedTrainee.name}</div>
                            <div style={{fontSize:'1.5vh'}} className="traineestates">
                                {`${selectedTrainee.hqname} | ${selectedTrainee.divisionName} | ${selectedTrainee.railwayName}`}
                            </div>
                        </div>
                    </div>

                    }
                    <img src={dropdown_icon} alt="Dropdown Icon" />
                </div>
            </Popover>
        </div>
    );
};

export default TraineeDropdown;
