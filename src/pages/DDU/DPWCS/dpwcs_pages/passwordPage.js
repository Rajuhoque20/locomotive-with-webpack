import React, { useState } from "react";
import classes from './passwordPage.module.css'
import { Icons } from "#framework";
const PasswordPage = ({setPage}) => {
    const {gp_enter_icon} = Icons.DDUIcons;
    const [password, setPassword] = useState("");

    const handleButtonClick = (value) => {
        if (value === "C") {
            setPassword(""); // Clear the password
        } else if (value === "E") {
            alert(`Password Entered: ${password}`); 
            setPage('self-test')
        } else {
            setPassword((prev) => prev + value); // Append the number
        }
    };

    const buttons = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        "C", '0', "E",
    ];

    return (
        <div className={classes.passwordPage}>
            <div className={classes.passwordPageContent}>
                <div className={classes.passwordPageHeader}>
                    ENTER PIN TO ACTIVATE DPWCS MODE
                </div>
                <div className={classes.passwordPageTable}>
                    <div className={classes.passwordview}>
                        {password.replace(/./g, "*")}
                    </div>
                    <div className={classes.passwordTable}>

                        <div className={classes.passwordInnerTable}>
                            {
                               buttons.map((x,index) => {return(
                                <div 
                                key={index}
                                className={classes.passwordButton}
                                onClick={() => handleButtonClick(x)}
                                >
                                    {x==='E'?<img src={gp_enter_icon}/>:x}
                                 </div>
                               )}) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordPage;


