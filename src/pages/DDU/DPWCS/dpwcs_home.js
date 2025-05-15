import React, { useState } from 'react'
import classes from './dpwcs_home.module.css'
import Modepage from './dpwcs_pages/modepage'
import { Icons } from '#framework'
import PasswordPage from './dpwcs_pages/passwordPage'
import SelfTest from './dpwcs_pages/selfTest'
import SelectZone from './dpwcs_pages/selectZone'
import InaugurationScreen from './dpwcs_pages/inaugurationScreen'
import MasterScreen from './dpwcs_pages/master_screens/masterScreen'
import Wagon from './dpwcs_pages/master_screens/wagon'
import SlaveScreen from './dpwcs_pages/slave_screens/slaveScreen'
import { ARCContent } from '../ARC/main'
export const Dpwcs_Home = ({dimensions}) => {
  const [page, setPage]=useState("mode-page");
  const [mode,setmode] = useState('dpwcs')
  console.log("dimension",dimensions)
  console.log(page)
  const {ddu_header_icon,pxy_icon,rrc_icon,esc_icon,return_icon,top_icon,bottom_icon,home_icon,
         menu_icon,e_return_icon,clr_icon,bright_icon,zero_icon,one_icon,two_icon,three_icon,
         four_icon,five_icon,six_icon,seven_icon,eight_icon,nine_icon,modes_icon,emg,ns_icon,
         reboot,lowpan

  } = Icons.DDUIcons;

  const leftTopButtons = [
    {
      id: 1,
      lable: 'esc',
      icon:esc_icon
    },
    {
      id: 2,
      lable: 'toparrow',
      icon:top_icon
    },
    {
      id: 3,
      lable: 'home',
      icon:home_icon,
    },
    {
      id: 4,
      lable: 'bottomarrow',
      icon:bottom_icon
    },
    {
      id: 5,
      lable: 'menu',
      icon:menu_icon
    },
    {
      id: 6,
      lable: 'enter',
      icon:e_return_icon
    }
  ]

  const leftBottomButtons = [
    {
      id: 1,
      lable: '0',
      icon:zero_icon
    },
    {
      id: 2,
      lable: '1',
      icon:one_icon
    },
    {
      id: 3,
      lable: '2',
      icon:two_icon
    },
    {
      id: 4,
      lable: '3',
      icon:three_icon
    },
    {
      id: 5,
      lable: '4',
      icon:four_icon
    },
    {
      id: 6,
      lable: '5',
      icon:five_icon
    },
    {
      id: 7,
      lable: '6',
      icon:six_icon
    },
    {
      id: 8,
      lable: '7',
      icon:seven_icon
    },
    {
      id: 9,
      lable: '8',
      icon:eight_icon
    },
    {
      id: 10,
      lable: '9',
      icon:nine_icon
    }
  ]

  const rightTopButtons = [
    {
      id: 1,
      lable: 'clr',
      icon:clr_icon
    },
    {
      id: 2,
      lable: 'toparrow',
      icon:top_icon
    },
    {
      id: 3,
      lable: 'home',
      icon:home_icon,
    },
    {
      id: 4,
      lable: 'bottomarrow',
      icon:bottom_icon
    },
    {
      id: 5,
      lable: 'brightnees',
      icon:bright_icon
    },
    {
      id: 6,
      lable: 'enter',
      icon:e_return_icon
    }
  ]

  const rightBottomButtons = [
    {
      id: 1,
      lable: 'modes',
      icon:modes_icon
    },
    {
      id: 2,
      lable: 'ns',
      icon:ns_icon
    },
    {
      id: 3,
      lable: 'reboot',
      icon:reboot
    },
    {
      id: 4,
      lable: 'panlow',
      icon:lowpan
    },
    {
      id: 5,
      lable: 'menu',
      icon:menu_icon
    },
    {
      id: 6,
      lable: 'emg',
      icon:emg
    },
    {
      id: 7,
      lable: 'toparrow',
      icon:top_icon
    },
    {
      id: 8,
      lable: 'bottomarrow',
      icon:bottom_icon
    }
  ]


  return (
    <div className={classes.dpwcs_home_div}>

      <div className={classes.dpwcs_left_actions}>
        <div className={classes.top_div}>
          <div className={classes.top_div_header}>
            <img src={ddu_header_icon}/>
          </div>
          <div className={classes.top_div_buttons}>
            {
              leftTopButtons?.map((x) => { return (<Buttons icon={x.icon}/>) })
            }
          </div>

        </div>
        <div className={classes.bottom_div}>
          <div className={classes.bottom_div_header}>
            <img src={rrc_icon}/>
          </div>
          <div className={classes.bottom_div_buttons}>
            {
              leftBottomButtons?.map((x) => { return (<Buttons icon={x.icon}/>) })
            }
          </div>
        </div>
      </div>


      <div className={classes.dpwcs_content_div}>
        <div className={classes.dpwcs_header}>
          DRIVER INTERFACE UNIT
        </div>
        <div className={classes.dpwcs_content}>
          {
            mode==='dpwcs' &&
            <div className={classes.dpwcs_content_pages}>
            {page==="mode-page"&& <Modepage setPage={setPage}/>}
            {page==="password-page"&& <PasswordPage setPage={setPage}/>}
            {page==="self-test"&& <SelfTest setPage={setPage}/>}
            {page==="selectZone"&& <SelectZone setPage={setPage}/>}
            {page==="inaugurationScreen"&& <InaugurationScreen setPage={setPage}/>}
            {page==="masterscreen"&& <MasterScreen setPage={setPage}/>}
            {page==="wagon"&& <Wagon setPage={setPage}/>}
            {page==="slavescreen"&& <SlaveScreen setPage={setPage}/>}
           </div>
          }

          {
             mode==='arc' &&
           <ARCContent DDUType={'ARC'}/>

          }

        </div>
      </div>


      <div className={classes.dpwcs_right_actions}>
        <div className={classes.top_div}>
          <div className={classes.top_div_header}>
           <img src={pxy_icon}/>
          </div>
          <div className={classes.top_div_buttons}>
            {
              rightTopButtons?.map((x) => { return (<Buttons icon={x.icon} />) })
            }
          </div>

        </div>
        <div className={classes.bottom_div}>
          <div className={classes.bottom_div_header}>
          <img src={rrc_icon}/>

          </div>
          <div className={classes.right_bottom_div_buttons}>
            <div className={classes.right_bottom_top_buttons}>
            {
              rightBottomButtons?.map((x) => { return (<Buttons icon={x.icon}/>) })
            }
            </div>
            <div className={classes.right_bottom_bottom_button}>
                 <img src={return_icon}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


const Buttons = ({icon}) => {
  const {esc_icon} = Icons.DDUIcons
  return (
    <div className={classes.action_button}>
      <img src={icon?icon:esc_icon}/>
    </div>
  )
}
