import React, { useEffect, useState } from 'react'
import classes from './pixy_screen.module.css'
import { PixySwitchTab } from './PixySwitchTabs/pixySwitchTab';
const { pixy_main_container } = classes;
export const Pixy_screen = ({ maintabs, selectedMainTab, routePath, setroutePath, upcommingRoutePath, setupcommingRoutePath }) => {
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/SOFTWARE VERSIONS/') {
      setFullScreen(true)
    } else {
      setFullScreen(false)
    }
  }, [routePath])
  return (
    <div className={pixy_main_container}>
      {
        !fullScreen && <div style={{ height: '40%', width: '100%' }}>

        </div>
      }
      <div style={!fullScreen?{ height: '60%', width: '100%' }:{ height: '100%', width: '100%' }}>
        <PixySwitchTab
          routePath={routePath}
          setroutePath={setroutePath}
          upcommingRoutePath={upcommingRoutePath}
          setupcommingRoutePath={setupcommingRoutePath}
        />
      </div>
    </div>
  )
}

