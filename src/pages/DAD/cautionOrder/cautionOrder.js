import React, { useEffect, useState } from "react";
import classes from "./cautionOrder.module.css";
import { useDADStore } from "../store";
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";

export const tableHeaders = [
  "S. No.",
  "Section",
  "Kilometer",
  "Speed",
  "Cause",
  "Date Imposition",
  "From",
  "To",
  "From",
  "To",
];

const CautionOrder = () => {
  const { setScreen } = useDADStore();
  const [cautionOrder, setCautionOrder] = useState();

  useEffect(() => {
    const callback = (event) => {
      setCautionOrder(event);
    };
    websocket.subscribe(topics.CAUTION_ORDER, callback);
    return () => {
      websocket.unsubscribeTopic(topics.CAUTION_ORDER);
    };
  }, []);

  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <div className={classes.table}>
          <div className={classes.tableTop}>
            <span>Section</span>
            <span>सतर्कता आदेश</span>
            <span>Form No</span>
            <span>{cautionOrder?.section}</span>
            <span>CAUTION ORDER</span>
            <span>{cautionOrder?.form_no}</span>
            <span>गाडी क्रं / Train No.</span>
            <span>South Eastern Railway</span>
            <span>दिनांक / DATE</span>
            <span>{cautionOrder?.train_no}</span>
            <span></span>
            <span>{cautionOrder?.date}</span>
            <span>{cautionOrder?.note}</span>
            <span>SHARP LOOKOUT + LONG WHISTLE ON SEEING ANY MOVEMENT OF MIGRANT LABOUR ON TRACK & REPORT AT STATION AHEAD</span>
          </div>
          <div className={classes.tablehHeader}>
            {tableHeaders?.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
         
          <div className={classes.tableData}>
            {cautionOrder?.Caution_order?.map((item, index) => {
              return (
                <div className={classes.tableRow} key={index}>
                  <span>{item?.sno}</span>
                  <span>{item?.station_from}</span>
                  <span>{item?.station_to}</span>
                  <span>{item?.location_from}</span>
                  <span>{item?.location_to}</span>
                  <span>{item?.speed_limit}</span>
                  <span>{item?.cause}</span>
                  <span>{item?.date_imposition}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.tableFooter}>
            <div>
            <div>
            <span>चालक के हस्ताक्षर</span>
            <span>Signature of Driver</span>
            </div>
            </div>
          
            <div>
            <div>
            <span>गार्ड के हस्ताक्षर</span>
            <span>Signature of Guard</span>
            </div>
            </div>
           
            <div>
            <div>
            <span>उपस्टेशनमास्टर के हस्ताक्षर</span>           
            <span>Signature of SM & Station</span>             
            </div>
              
            </div>
           
          </div>
        </div>
        <button
          className={classes.closeButton}
          onClick={() => {
            setScreen("main");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default React.memo(CautionOrder);
