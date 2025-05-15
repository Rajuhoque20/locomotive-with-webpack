import { Route, Routes, useNavigate } from "react-router-dom";
import { PTT_Home } from "./PTTPages/PTT_Home";
import { useEffect } from "react";
import { PTT_Run } from "./PTTPages/PTT_Run";
import { PTTResultsView } from "./PTTPages/PTT_ResultView";
import { PTT_Profile } from "./PTTPages/PTT_Profile";

export default function PTTRoutes() {
      const navigate=useNavigate();
      useEffect(() => {
          navigate('/ptt-home')
      },[])
  return ( 
   <Routes>
             <Route path='/ptt-home' element={<PTT_Home/>} />
             <Route path='/ptt-run' element={<PTT_Run/>} />
             <Route path='/ptt-results' element={<PTTResultsView/>} />
             <Route path='/ptt-profile' element={<PTT_Profile/>} />
   </Routes>
  )
}