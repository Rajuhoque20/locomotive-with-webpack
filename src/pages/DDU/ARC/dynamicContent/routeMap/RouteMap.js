import React from 'react'
import classes from './RouteMap.module.css';
import { Icons } from '#framework';
export default function RouteMap() {
    const {arc_routeMap_icon1}=Icons
  return (
    <div className={classes.container}>
        <label>ROUTE MAP</label>
        <div className={classes.content}>
           
                <img src={arc_routeMap_icon1}/>
            
            <div>
                <div>
                    <span>KM CHAINAGE: ........</span>
                    <span>DISTANCE TO NEXT STATION:.......</span>
                    <span>DISTANCE TO NEXT NEWTRAL SECTION: ........</span>
                    <span>DISTANCE TO NEXT SPEED RESTRICTION:......</span>

                </div>
                <span className='fc-3' style={{marginTop:"1rem"}}>(NOT IMPLEMENTED PRESENTLY)</span>
            </div>
        </div>
    </div>
  )
}
