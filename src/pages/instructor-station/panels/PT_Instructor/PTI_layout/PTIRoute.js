import { Route, Routes } from "react-router-dom";
import { PartTrainers } from "../PTIPages/PartTrainers";
import { PTIHistory } from "../PTIPages/PTIHistory";
import { PTResults } from "../../ReusablePages/PTResults";

export default function PTIRoutes() {

  return ( 
   <Routes>
             <Route path='/pti-home' element={<PartTrainers />} />
             <Route path='/pti-history' element={<PTIHistory/>}/>
             <Route path='/pti-results' element={<PTResults type={'instructor'}/>}/>
   </Routes>
  )
}