import { Icons } from '#framework';
import { useNavigate } from 'react-router-dom';
import ActionsCards from '../../../../../components/Instructor-station/UIComp/ActionsCards';
import BannerComponent from '../../../../../components/Instructor-station/UIComp/BannerComponent'
import ButtonComp from '../../../../../components/Instructor-station/UIComp/ButtonComp';
import './PTT_Home.css'
export const PTT_Home = () => {
    const navigate=useNavigate();
    const {train1,train2,profileicon} = Icons.ISIcons;
    const handleRunptt = () => {
        navigate('/ptt-run')
    }
    const handleprofile = () => {
      navigate('/ptt-profile')
    }
    const CardData = [
        {
          id: 1,
          title: "WAP varanasi toughalsarai",
          lastRunDate: "2024-10-07",
          icon: train1
        },
        {
          id: 2,
          title: "WAP kanpur mirzapur",
          lastRunDate: "2024-10-03",
          icon: train2
        },
        {
          id: 3,
          title: "WAP delhi prayagraj",
          lastRunDate: "2024-10-03",
          icon: train2
        },
        {
          id: 4,
          title: "WAP delhi prayagraj",
          lastRunDate: "2024-10-03",
          icon: train1
        },
                {
          id: 1,
          title: "WAP varanasi toughalsarai",
          lastRunDate: "2024-10-07",
          icon: train1
        },
        {
          id: 2,
          title: "WAP kanpur mirzapur",
          lastRunDate: "2024-10-03",
          icon: train2
        },
        {
          id: 3,
          title: "WAP delhi prayagraj",
          lastRunDate: "2024-10-03",
          icon: train2
        },
        {
          id: 4,
          title: "WAP delhi prayagraj",
          lastRunDate: "2024-10-03",
          icon: train1
        },
      ];
    return(
        <div className="ptt-main-container">
          <div className='ptt-home-container'>
          <div className='pttHome-banner'>
            <BannerComponent title={'Welcome to the Part Trainer'} subtitle={'Enhance Your Skills: Dive into Targeted Training Modules'}/>
        </div>
          <div className='ptt-action-cards'>
          {CardData?.map(x => {
          return (
            <ActionsCards handleRun={() =>handleRunptt()} title={x.title} subtitle={x.lastRunDate} img={x.icon} cardtype={'run'}/>
          )
         })}
          </div>
          </div>
          <div className='ptt-footer'>
              <div>
                 <ButtonComp onClick={() => handleprofile()} prefixIcon={profileicon} title={'Profile'} bntStyle={{color:'white',fontWeight:'590',background:'rgba(156, 156, 156, 0.74)','backdrop-filter':'blur(10vh)',height:'4.5vh',width:'12vh'}}/>
              </div>
              <div>
                 <ButtonComp title={'Signout'} bntStyle={{color:'white',fontWeight:'590',background:'rgba(156, 156, 156, 0.74)','backdrop-filter':'blur(10vh)',height:'4.5vh',width:'12vh'}}/>
              </div>
          </div>
        </div>
    )
}