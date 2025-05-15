import React, { useState, useEffect } from "react";
import './CustomDropDown.css'
import { Icons } from "#framework";
import { Popover } from "antd";

export const DropDownCont = ({ data = [] }) => {
    const { niki, searchsvg } = Icons.ISIcons
    const [searchValue, setSearchValue] = useState("");
    let resultedData = searchValue ?
        data?.filter(item => item.name.includes(searchValue)) :
        data;

    return (
        <div className="searchDropdown">
            {/* <div class="search-container">
                <img src={searchsvg} alt="Search" class="search-icon" /> */}
            <input
                class="searchpoint"
                placeholder="Search"
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
            {/* </div> */}
            <div className="listsdiv">
                {resultedData?.map((item, index) => {
                    return (
                        <div className="trainesslist">
                            <div className="traineeimg">
                                <img src={niki} />
                            </div>
                            <div className="traineeInfo">
                                <div className="traineeName">
                                    {item.name}
                                </div>
                                <div className="traineestates">
                                    {`${item.hqname} | ${item.divisionName} | ${item.railwayName}`}
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

const CustomDropdown = ({ options,defaultoption,defaultoptionstyle}) => {
    const { dropdown_icon } = Icons.ISIcons
    // const data = [
    //     {
    //         id: 1,
    //         name: 'James Hunt',
    //         hqname: 'HQ Name',
    //         divisionName: 'Division Name',
    //         railwayName: 'Railway Name'
    //     },
    //     {
    //         id: 1,
    //         name: 'Niki Lauda',
    //         hqname: 'HQ Name',
    //         divisionName: 'Division Name',
    //         railwayName: 'Railway Name'
    //     },
    //     {
    //         id: 1,
    //         name: 'James Hunt',
    //         hqname: 'HQ Name',
    //         divisionName: 'Division Name',
    //         railwayName: 'Railway Name'
    //     },
    //     {
    //         id: 1,
    //         name: 'Niki Lauda',
    //         hqname: 'HQ Name',
    //         divisionName: 'Division Name',
    //         railwayName: 'Railway Name'
    //     }
    // ]
    return (
        <div className="customDDiv">
            <Popover
                className="popoverinner"
                placement="bottom" trigger={"click"} content={<DropDownCont data={options || []} />} >
                <div className="searchHeader">
                    <span style={defaultoptionstyle}>{defaultoption?defaultoption:'Select Trainee'}</span>
                    <img src={dropdown_icon} />
                </div>
            </Popover>

        </div>
    );
};

export default CustomDropdown;
