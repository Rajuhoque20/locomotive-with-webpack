import { PTResults } from '../../ReusablePages/PTResults'
import './PTT_ResultView.css'
import ButtonComp from './../../../../../components/Instructor-station/UIComp/ButtonComp';
import { useNavigate } from 'react-router-dom';
export const PTTResultsView = () => {
        const navigate=useNavigate();
    
    const handleHome = () => {
        navigate('/ptt-home')
    }
   return(
    <div className='ptt-result-container'>
       <div className='ptt-resultview'>
         <PTResults type={'pttresult'}/>
       </div>
       <div className='pttr-footer'>
          <div>

          </div>
          <div>
                 <ButtonComp onClick={() => handleHome()} title={'Home'} bntStyle={{color:'white',fontWeight:'590',background:'rgba(156, 156, 156, 0.74)','backdrop-filter':'blur(10vh)',height:'4.5vh',width:'12vh'}}/>          </div>
       </div>
    </div>
   )
}