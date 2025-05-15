import classes from './Medha_home.module.css'
console.log("classessclassess",classes)
import React, { act, useEffect, useRef, useState } from 'react'
import { Icons } from '#framework';
import { Medha_screen_1 } from './MedhaPages/medha_screen_1';
import { auxConverterCTestmenu, blowerTestMenus, ContactrelayMenu, crLineConveretersMenu, dataMetersMenus, dcAuxConmenu, dcLinktestMenus, dotTestTypes, driverInfoMenus, generalTestTypes, isolateMenus, lcDcTestMenu, mainmenulist, maintabs, mccComMenu, MedhaDiagnosticDataTabs, medhaEnergyConsumptionMenuList, meterTestTypes, PixyCommisionDataTabs, PixyDiagnosticDataSetTabs, pixymainmenulist, pixymainTabs, PixyMSITabs, PixyProcessInformatioTabs, processInformationtabs, selfTestMenus, settingsMenu, vehiclediagnosticsmenu } from './TabsData/tabs';
import { Pixy_screen } from './MedhaPages/pixy_screen';
import { useLocoSSStore, useVDBrowseMode, useInchingMode } from './MiddlewareFunctions/medha_pixy_stores';
import { dateEntryStore, IsolateStore, PageScrool, SelfTest, settingInformationstore, useLocoBrowseStore } from './MiddlewareFunctions/medha_default_stores';
import { useWebSocketStore } from './medhaDataStore';
import { MEDHA_TOPICS } from './websocketTopics';
import websocket from '../../../services/Websocket';

export const Medha_home = ({callScreen}) => {
    const medhadefaultPath = "home-tab/";
    const pixydefaultPath = 'homepixy-tab/'
    const heightRef = useRef(null);
    const scaleUI = () => {
        const wrapper = heightRef.current;
        if (wrapper&&!callScreen) {
        //   const scaleX =window.innerWidth / 800;
        //   const scaleY = window.innerHeight / 600;
        //   const scale = Math.min(scaleX, scaleY);
        //    wrapper.style.transform = `scale(${scale})`;
        // width: 800px;
        // height: 600px;
        // aspect-ratio: 800/600;
        }
        else if(callScreen)
        {
          const scaleX =window.innerWidth/ 1366;
          const scaleY =window.innerHeight/1080;
          const scale = Math.min(scaleX, scaleY);
           wrapper.style.transform = `scale(${scale})`;
        }
      };
    
      useEffect(() => {
        scaleUI();
      }, []);
    

    const [action, setAction] = useState({
        backlight: true
    })
    const [brightness, setBrightness] = useState(1);
    const { currentData, locoInfo, setCuurentInfo, currentInfo } = useLocoSSStore();
    const { inchingTestPayload, setErrors, setSetSpeed, setSpeed } = useInchingMode();
    const { visible, currentBML, setVisibleInfo, setcurrentBML, browseLocos, setcurrentBMLLocoSS, currentBMLLocoSS, setbrowseLocos } = useVDBrowseMode();
    const { mVDBMLoco, setcurrentVDBML, setcurrentSSvisible, mVDBMLocoSS, visible: nbmVisible, setmVDBMLoco, setmVDBMLocoSS, currentVDBML } = useLocoBrowseStore();
    const { datetimevalues, segments, activeIndex, setValues, setactiveIndex } = dateEntryStore();
    const { IsolateConditions, selected, setSelected, TractionMotors, toggleMotorStatus, setIsolateErrors, LineConverters, toggleConverterStatus, AuxConverters, toggleAuxStatus } = IsolateStore();
    const { pageScrool, setPageScrool } = PageScrool();
    const { selfTestConditions, setSelfTestErrors, setSelectedChannel, dotChannels, selectedChannel, updateDotChannelStatus, setMeterValue, meterValue,
        feedBackStatusTest, LcoutPutTest, settestcurrentId, testsection, testcurrentId, setTestsection, updateFeedbackStatus, updateOutPutStatus,
        AcoutPutTest, AcfeedBackStatusTest, updateACOutPutStatus, updateACFeedbackStatus
    } = SelfTest();
    const { LOCO_SS } = useWebSocketStore.getState();

    const { setInformation } = settingInformationstore()
    const [routePath, setroutePath] = useState('home-tab/')
    const [upcommingRoutePath, setupcommingRoutePath] = useState()

    const [output, setOutput] = useState("");
    const [lastKey, setLastKey] = useState(null);
    const [keyPressCount, setKeyPressCount] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);
    const [alphaType, setalphaType] = useState(true);
    const { connectWebSocket } = useWebSocketStore();
    // const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    // const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { INCHINGMODE_DATA, BROWSE_LOCOS } = useWebSocketStore();

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, [timeoutId]);

    useEffect(() => {

        if (routePath === 'home-tab/DRIVER INFO/DRIVER ID/') {
            setInformation({ driverId: output })
        }
        if (routePath === 'home-tab/DRIVER INFO/TRAIN NUMBER/') {
            setInformation({ trainNumber: output })
        }
        if (routePath === 'home-tab/DRIVER INFO/TRAIN LOAD/') {
            setInformation({ trainLoad: output })
        }
        if (routePath === 'home-tab/DRIVER INFO/SECTION NAME/') {
            setInformation({ sectionName: output })
        }
        if (routePath === 'home-tab/SETTINGS/') {
            setInformation({ password: output })

        }
        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/LOCO TYPE/') {
            setInformation({ locoType: output })
        }
        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/SHED NAME/') {
            setInformation({ shedName: output })
        }
        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/LOCO NUMBER/') {
            setInformation({ locoNumber: output })
        }
    }, [output])

    const { top_icon, bottom_icon,
        e_return_icon, zero_icon, one_icon, two_icon, three_icon,
        four_icon, five_icon, six_icon, seven_icon, eight_icon, nine_icon,
        left_icon, right_icon, c_icon, m_icon, f_icon, o_icon, onoff_icon, brightuup_icon, brightdown_icon
    } = Icons.DDUIcons;

    const leftArrowaction = () => {

        if ([
            'home-tab/DRIVER INFO/DRIVER ID/',
            'home-tab/DRIVER INFO/TRAIN NUMBER/',
            'home-tab/DRIVER INFO/TRAIN LOAD/',
            'home-tab/DRIVER INFO/SECTION NAME/',
            'home-tab/SETTINGS/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO TYPE/',
            'home-tab/SETTINGS/SETTINGS_MENU/SHED NAME/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO NUMBER/',
        ].includes(routePath)) {
            setOutput(prev => prev.slice(0, -1));

        }

        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/DATE AND TIME/') {
            let updatedIndex = (activeIndex - 1 + segments.length) % segments.length
            setactiveIndex(updatedIndex)

        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/') {
            setSelectedChannel(null)
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/'
        ].includes(routePath)) {
            setMeterValue(null)
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/'
            ].includes(routePath)
        ) {
            setTestsection('output')
        }
    }

    const enterDateTime = (digit) => {
        const segment = segments[activeIndex];
        const maxLength = segment === "year" ? 2 : 2;
        let currentValue = datetimevalues[segment];

        if (currentValue.length >= maxLength) {
            currentValue = currentValue.slice(1);
        }

        const newValue = (currentValue + digit).slice(-maxLength).padStart(maxLength, "0");
        const payload = {
            [segment]: newValue,
        }
        setValues(payload)
    };

    const rightArrowaction = () => {

        // if (switchingTabs === 'home-tab') {
        //     if (selectedMainTab) {
        //         console.log('hi')
        //         if (selectedMainTab.id <= 10 && selectedMainTab.id >= 1) {
        //             const selectTab = maintabs.find((x) => x.id === selectedMainTab.id + 1)
        //             setSelectedMainTab(selectTab)
        //         }
        //     } else if (!selectedMainTab) {
        //         setSelectedMainTab(maintabs[0])

        //     }
        // }

        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/DATE AND TIME/') {
            let updatedIndex = (activeIndex + 1) % segments.length
            setactiveIndex(updatedIndex)
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/'
            ].includes(routePath)
        ) {
            setTestsection('feedback')
        }
    }
    const downArrowFunction = () => {
        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/SSMODE/')) {
            let visible = currentInfo?.visible
            if (visible) {
                const currentIndex = currentData.findIndex((item) => item.id === visible.id);
                const nextIndex = (currentIndex + 1) % currentData.length;
                setCuurentInfo({ ...currentInfo, visible: currentData[nextIndex] })
            }
        }

        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/BMV/')) {
            const currentIndex = currentBMLLocoSS.findIndex((item) => item.id === visible.id);
            const nextIndex = (currentIndex + 1) % currentBMLLocoSS.length;
            setVisibleInfo(
                currentBMLLocoSS[nextIndex]
            )

        }
        if (routePath.includes('/MBM/')) {
            const currentIndex = mVDBMLocoSS.findIndex((item) => item.id === nbmVisible.id);
            const nextIndex = (currentIndex + 1) % mVDBMLocoSS.length;
            setcurrentSSvisible(
                mVDBMLocoSS[nextIndex]
            )

        }
        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/TEST/'
            || routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/'
        ) {
            const updated = setSpeed > 0.5 ? setSpeed - 0.1 : 0.5
            setSetSpeed(parseFloat(updated.toFixed(2)))
        }

        if (routePath === 'home-tab/BRW-MODE/') {
            const currentIndex = mVDBMLocoSS.findIndex((item) => item.id === nbmVisible.id);
            const nextIndex = (currentIndex + 1) % mVDBMLocoSS.length;
            setcurrentSSvisible(
                mVDBMLocoSS[nextIndex]
            )
        }

        if (routePath === 'home-tab/DATA-METERS/') {
            const routepaarray = upcommingRoutePath.split('/');
            const currentRollingPath = 'home-tab/DATA-METERS/';

            if (routepaarray.length > 3) {
                const currentItem = dataMetersMenus.find((x) => x.lable === routepaarray[2]);

                if (currentItem) {
                    const currentIndex = dataMetersMenus.findIndex((item) => item.id === currentItem.id);

                    if (currentIndex !== -1) {
                        const nextIndex = (currentIndex + 1) % dataMetersMenus.length;
                        const nextPathLabel = dataMetersMenus[nextIndex].lable;

                        const upcomingPath = `${currentRollingPath}${nextPathLabel}/`;
                        setupcommingRoutePath(upcomingPath);
                    }
                }
            } else {
                setupcommingRoutePath('home-tab/DATA-METERS/MOTORING AND REGENRATION/');
            }
        }

        if (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/') {
            const currentIndex = selected ? TractionMotors.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex + 1) % TractionMotors.length;
            setSelected(TractionMotors[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/') {
            const currentIndex = selected ? LineConverters.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex + 1) % LineConverters.length;
            setSelected(LineConverters[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/') {
            const currentIndex = selected ? AuxConverters.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex + 1) % AuxConverters.length;
            setSelected(AuxConverters[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/MAIN MENU/DIGITAL OUTPUT STATUS/' ||
            routePath === 'home-tab/MAIN MENU/DIGITAL INPUT STATUS/'
        ) {
            const current = pageScrool < 0 ? -pageScrool : pageScrool + 1;
            setPageScrool(current)

        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/') {
            const currentIndex = selectedChannel ? dotChannels.findIndex((item) => item.id === selectedChannel) : 1;
            const nextIndex = (currentIndex + 1) % dotChannels.length;
            setSelectedChannel(dotChannels[nextIndex]?.id);
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
        ].includes(routePath)) {
            // feedBackStatusTest,LcoutPutTest,settestcurrentId,testsection
            if (testsection === 'output') {
                const currentIndex = testcurrentId ? LcoutPutTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex + 1) % LcoutPutTest.length;
                settestcurrentId(LcoutPutTest[nextIndex]?.id);
            }

            if (testsection === 'feedback') {
                const currentIndex = testcurrentId ? feedBackStatusTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex + 1) % feedBackStatusTest.length;
                settestcurrentId(feedBackStatusTest[nextIndex]?.id);
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/'
            ].includes(routePath)
        ) {

            if (testsection === 'output') {
                const currentIndex = testcurrentId ? AcoutPutTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex + 1) % AcoutPutTest.length;
                settestcurrentId(AcoutPutTest[nextIndex]?.id);
            }

            if (testsection === 'feedback') {
                const currentIndex = testcurrentId ? AcfeedBackStatusTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex + 1) % AcfeedBackStatusTest.length;
                settestcurrentId(AcfeedBackStatusTest[nextIndex]?.id);
            }
            // AcoutPutTest,AcfeedBackStatusTest,updateACOutPutStatus,updateACFeedbackStatus
        }

    }
    const upArrowFunction = () => {
        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/SSMODE/')) {
            let visible = currentInfo?.visible
            if (visible) {
                const currentIndex = currentData.findIndex((item) => item.id === visible.id);
                const nextIndex = (currentIndex - 1 + currentData.length) % currentData.length;
                setCuurentInfo({ ...currentInfo, visible: currentData[nextIndex] })
            }
        }

        if (routePath.includes('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/BMV/')) {
            const currentIndex = currentBMLLocoSS.findIndex((item) => item.id === visible.id);
            const nextIndex = (currentIndex - 1 + currentBMLLocoSS.length) % currentBMLLocoSS.length;
            setVisibleInfo(
                currentBMLLocoSS[nextIndex]
            )

        }
        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/TEST/'
            || routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/'
        ) {
            const updated = setSpeed < 1.5 ? setSpeed + 0.1 : 1.5
            setSetSpeed(parseFloat(updated.toFixed(2)))
        }

        if (routePath.includes('/MBM/')) {
            const currentIndex = mVDBMLocoSS.findIndex((item) => item.id === nbmVisible.id);
            const nextIndex = (currentIndex - 1 + mVDBMLocoSS.length) % mVDBMLocoSS.length;
            setcurrentSSvisible(
                mVDBMLocoSS[nextIndex]
            )

        }

        if (routePath === 'home-tab/BRW-MODE/') {
            const currentIndex = mVDBMLocoSS.findIndex((item) => item.id === nbmVisible.id);
            const nextIndex = (currentIndex - 1 + mVDBMLocoSS.length) % mVDBMLocoSS.length;
            setcurrentSSvisible(
                mVDBMLocoSS[nextIndex]
            )
        }

        if (routePath === 'home-tab/DATA-METERS/') {
            const routepaarray = upcommingRoutePath.split('/');
            const currentRollingPath = 'home-tab/DATA-METERS/';

            if (routepaarray.length > 3) {
                const currentItem = dataMetersMenus.find((x) => x.lable === routepaarray[2]);

                if (currentItem) {
                    const currentIndex = dataMetersMenus.findIndex((item) => item.id === currentItem.id);

                    if (currentIndex !== -1) {
                        const nextIndex = (currentIndex - 1 + dataMetersMenus.length) % dataMetersMenus.length;
                        const nextPathLabel = dataMetersMenus[nextIndex].lable;

                        const upcomingPath = `${currentRollingPath}${nextPathLabel}/`;
                        setupcommingRoutePath(upcomingPath);
                    }
                }
            } else {
                setupcommingRoutePath('home-tab/DATA-METERS/MOTORING AND REGENRATION/');
            }
        }

        if (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/') {
            const currentIndex = selected ? TractionMotors.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex - 1 + TractionMotors.length) % TractionMotors.length;
            setSelected(TractionMotors[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/') {
            const currentIndex = selected ? LineConverters.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex - 1 + LineConverters.length) % LineConverters.length;
            setSelected(LineConverters[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/') {
            const currentIndex = selected ? AuxConverters.findIndex((item) => item.id === selected) : 0;
            const nextIndex = (currentIndex - 1 + AuxConverters.length) % AuxConverters.length;
            setSelected(AuxConverters[nextIndex]?.id); // Ensure you're setting the ID
        }

        if (routePath === 'home-tab/MAIN MENU/DIGITAL OUTPUT STATUS/'
            || routePath === 'home-tab/MAIN MENU/DIGITAL INPUT STATUS/'
        ) {
            const current = pageScrool > 0 ? -pageScrool : pageScrool - 1;
            setPageScrool(current)

        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/') {
            const currentIndex = selectedChannel ? dotChannels.findIndex((item) => item.id === selectedChannel) : 1;
            const nextIndex = (currentIndex - 1 + dotChannels.length) % dotChannels.length;
            setSelectedChannel(dotChannels[nextIndex]?.id);
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
        ].includes(routePath)) {
            // feedBackStatusTest,LcoutPutTest,settestcurrentId,testsection
            if (testsection === 'output') {
                const currentIndex = testcurrentId ? LcoutPutTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex - 1 + LcoutPutTest.length) % LcoutPutTest.length;
                settestcurrentId(LcoutPutTest[nextIndex]?.id);
            }

            if (testsection === 'feedback') {
                const currentIndex = testcurrentId ? feedBackStatusTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex - 1 + feedBackStatusTest.length) % feedBackStatusTest.length;
                settestcurrentId(feedBackStatusTest[nextIndex]?.id);
            }
        }


        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/'
            ].includes(routePath)
        ) {

            if (testsection === 'output') {
                const currentIndex = testcurrentId ? AcoutPutTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex - 1 + AcoutPutTest.length) % AcoutPutTest.length;

                settestcurrentId(AcoutPutTest[nextIndex]?.id);
            }

            if (testsection === 'feedback') {
                const currentIndex = testcurrentId ? AcfeedBackStatusTest.findIndex((item) => item.id === testcurrentId) : 0;
                const nextIndex = (currentIndex - 1 + AcfeedBackStatusTest.length) % AcfeedBackStatusTest.length;
                settestcurrentId(AcfeedBackStatusTest[nextIndex]?.id);
            }
            // AcoutPutTest,AcfeedBackStatusTest,updateACOutPutStatus,updateACFeedbackStatus
        }
    }
    const enterAction = () => {

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/') {
            if (selectedChannel) {
                let channel = dotChannels.find((x) => x.id === selectedChannel)
                if (channel) {
                    setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/')
                }
            }

        }


        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/') {
            if (meterValue) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/TEST VIEW/')
            }
        }


        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/') {
            if (meterValue) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/TEST VIEW/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/') {
            if (meterValue) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/TEST VIEW/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/') {
            if (meterValue) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/TEST VIEW/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/') {
            if (meterValue) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/TEST VIEW/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/') {
            // console.log('fr',setSpeed)
            websocket.publish(MEDHA_TOPICS.PUBLISHINCHINGMODE, { inchingSpeed: setSpeed });
        }

        if (routePath === 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/') {
            connectWebSocket([{ topic: MEDHA_TOPICS.BROWSELOCOS, data: {} }]);

            setTimeout(() => {
                const { BROWSE_LOCOS } = useWebSocketStore.getState();
                const loco = BROWSE_LOCOS.map((x, index) => ({
                    id: index + 1,
                    trainNumber: x.loco_id,
                    fault: 'FAULT',
                    message: 'ISOLATION MESSAGE',
                }));
                setmVDBMLoco(loco);
            }, 500);
        }

        if (routePath === 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/') {

            
            connectWebSocket([{ topic: MEDHA_TOPICS.BROWSELOCOSSS, data: { id: currentVDBML.id } }]);
            setTimeout(() => {
                const { LOCO_SS } = useWebSocketStore.getState();
                const ss = LOCO_SS.map((x, index) => ({

                    id: index + 1,
                    fc: '--',
                    subsystem: x.ss_id,
                    message: `${x.ss_name} ISOLATED`,
                    status: 'SRIVING STILL POSSIBLE'
                }));

                // {
                //     "id": 1,
                //     "ss_id": "SS01",
                //     "ss_name": "Main Power",
                //     "status": 1
                // },

                setmVDBMLocoSS(ss)
            }, 500);
        }




        if (
            ![
                'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/',
                'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/',
                'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/',
                'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/',
                'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/',
                'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/',
                'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/',
                'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/'
            ].includes(routePath)

        ) {
            if (upcommingRoutePath) {

                if (upcommingRoutePath.includes('/BMV/') || routePath.includes('/BMV/')) {
                    const extrackId = upcommingRoutePath.split('/')
                    const getId = extrackId[extrackId.length - 1]
                    const currentLoco = browseLocos.find(x => `${x.trainNumber}${x.id}` === `${getId}`)
                    console.log(getId)
                    setcurrentBML(currentLoco)
                    setcurrentBMLLocoSS(getId === '314271' ? currentBMLLocoSS : [])
                    if (getId === '314271') {
                        setVisibleInfo(currentBMLLocoSS[0])
                    } else {
                        setVisibleInfo({})
                    }
                }

                if (upcommingRoutePath.includes('/MBM/') || routePath.includes('/MBM/')) {
                    const extrackId = upcommingRoutePath.split('/')
                    const getId = extrackId[extrackId.length - 3]
                    const currentLoco = mVDBMLoco.find(x => `${x.trainNumber}` === getId)
                    setcurrentVDBML(currentLoco)
                    setcurrentSSvisible(mVDBMLocoSS[0])
                }

                setroutePath(upcommingRoutePath)

            }
        }



        if (routePath === 'home-tab/SETTINGS/') {
            setroutePath('home-tab/SETTINGS/SETTINGS_MENU/')
        }
        if (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/') {
            let anyCutOut = TractionMotors.find(x => x.status === 'CUTOUT')
            if (anyCutOut) {

                setroutePath('home-tab/ISOLATE/TRACTION MOTORS/CONDITIONS/')


            } else {
                setSelected(0)
            }
        }

        if (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/') {
            let anyCutOut = LineConverters.find(x => x.status === 'CUTOUT')
            if (anyCutOut) {

                setroutePath('home-tab/ISOLATE/LINE CONVERTERS/CONDITIONS/')


            } else {
                setSelected(0)
            }
        }

        if (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/') {
            let anyCutOut = AuxConverters.find(x => x.status === 'CUTOUT')
            if (anyCutOut) {

                setroutePath('home-tab/ISOLATE/AUXILARY CONVERTERS/CONDITIONS/')

            } else {
                setSelected(0)
            }
        }

        if ([
            'home-tab/SETTINGS/SETTINGS_MENU/DATE AND TIME/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO TYPE/',
            'home-tab/SETTINGS/SETTINGS_MENU/SHED NAME/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO NUMBER/',
            'home-tab/DRIVER INFO/DRIVER ID/',
            'home-tab/DRIVER INFO/TRAIN NUMBER/',
            'home-tab/DRIVER INFO/TRAIN LOAD/',
            'home-tab/DRIVER INFO/SECTION NAME/'


        ].includes(routePath)) {
            setroutePath('home-tab/SETTINGS/SETTINGS_MENU/')
        }


    }
    const numericKeyaction = (key) => {
        const keyMap = {
            1: "10_",
            2: "2ABC",
            3: "3DEF",
            4: "4GHI",
            5: "5JKL",
            6: "6MNO",
            7: "7PQRS",
            8: "8TUV",
            9: "9WXYZ"
        };

        const pressKey = (num) => {
            clearTimeout(timeoutId);

            if (lastKey === num) {
                const nextCount = (keyPressCount + 1) % keyMap[num].length;
                setKeyPressCount(nextCount);
                // setOutput((prev) => prev.slice(0, -1) + keyMap[num][nextCount]);
                setOutput((prev) =>
                    prev.slice(0, -1) + formatLetter(keyMap[num][nextCount])
                );
            } else {
                setLastKey(num);
                setKeyPressCount(0);
                // setOutput((prev) => prev + keyMap[num][0]);
                setOutput((prev) => prev + formatLetter(keyMap[num][0]));

            }

            const newTimeoutId = setTimeout(() => setLastKey(null), 1000);
            setTimeoutId(newTimeoutId);
        };

        const formatLetter = (char) => {
            return alphaType ? char.toUpperCase() : char.toLowerCase();
        };

        const validateLocoStatus = (status) => {

            if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/') {
                connectWebSocket([{ topic: MEDHA_TOPICS.INCHINGMODE, data: {} }]);
                return INCHINGMODE_DATA; // or fetch from a state/store
            }

            const errors = [];

            if (!status.speedzero) errors.push("LOCO SPEED IS MORE THAN ZERO");
            if (!status.panraised) errors.push("PAN NOT RAISED");
            if (!status.vcbclosed) errors.push("VCB NOT CLOSED");
            if (!status.ztelswclosed) errors.push("ZTEL SWITCH NOT CLOSED");
            if (!status.throttleidle) errors.push("THROTTLE NOT IDLE");
            if (!status.reversermoved) errors.push("REVERSER NOT MOVED");

            return errors;
        };

        const IsolationErrors = (conditions) => {
            const errors = [];
            if (!conditions.reverserNeutral) errors.push("REVERSER HANDLE NOT IN NEUTRAL POSTION");
            if (!conditions.mchIdle) errors.push("MCH NOT IN IDLE CONDITION");
            if (!conditions.locospeedzero) errors.push("LOCO SPEED NOT IN ZERO");
            if (!conditions.pantoDown) errors.push("PANTO NOT DOWN");


            return errors;
        };

        const SelfTestErrors = () => {
            const errors = [];
            if (!selfTestConditions.locoSpeedZero) errors.push("LOCO SPEED NOT IN ZERO");
            if (!selfTestConditions.reverserIdle) errors.push("REVERSER NOT IN IDLE");

            return errors;
        }

        if (routePath === 'home-tab/') {

            if (key === 2) {
                setcurrentVDBML(mVDBMLoco[0])
                setcurrentSSvisible(mVDBMLocoSS[0])
            }
            const currentTab = maintabs.find(x => x.id === key)
            if (currentTab) {
                const newpath = routePath + `${currentTab.lable}/`
                setroutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/') {
            if (key <= 7 && key >= 1) {
                const currentTab = mainmenulist.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }

        }

        if (routePath === 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/') {
            if (key <= 3 && key >= 1) {
                const currentTab = vehiclediagnosticsmenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }

        }

        if (routePath === 'homepixy-tab/') {
            if (key <= 1 && key >= 1) {
                const currentTab = pixymainTabs.find(x => x.id === key)
                if (currentTab) {
                    const newpath = routePath + `${currentTab.lable}/`
                    setroutePath(newpath)
                }
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/') {
            if (key <= 3 && key >= 1) {
                const currentTab = pixymainmenulist.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/') {
            if (key <= locoInfo.length + 1 && key >= 1) {
                const currentTab = [...locoInfo, { id: locoInfo.length + 1, lable: 'BROWSE MODE' }].find(x => x.id === key)
                if (currentTab.lable === 'BROWSE MODE') {
                    const newpath = routePath + `${currentTab.lable}/`
                    setupcommingRoutePath(newpath)
                } else {
                    const newpath = routePath + `${'SSMODE'}/` + `${currentTab.loconumber}${`${currentTab.id}`}`
                    setupcommingRoutePath(newpath)
                }
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/') {

            if (key >= 1 && key <= browseLocos.length) {
                const currentTab = browseLocos.find(x => x.id === key)
                const newpath = routePath + `${'BMV'}/` + `${currentTab.trainNumber}${`${currentTab.id}`}`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/') {
            if (key >= 1 && key <= PixyProcessInformatioTabs.length) {
                const currentTab = PixyProcessInformatioTabs.find(x => x.id === key)
                if (currentTab.lable === 'MOTOR TEMPRETURE / SOFTWARE VERSION / INCHING MODE') {
                    const newpath = routePath + `MSI/`
                    setupcommingRoutePath(newpath)
                } else {
                    const newpath = routePath + `${currentTab.lable}/`
                    setupcommingRoutePath(newpath)
                }
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/') {
            if (key >= 1 && key <= PixyCommisionDataTabs.length) {
                const currentTab = PixyCommisionDataTabs.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/COMMISSION DATA/DIAGNOSTIC DATA SET/') {
            if (key >= 1 && key <= PixyDiagnosticDataSetTabs.length) {
                const currentTab = PixyDiagnosticDataSetTabs.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/') {
            if (key >= 1 && key <= PixyMSITabs.length) {
                const currentTab = PixyMSITabs.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/') {


            if (key === 1) {
                let getErrors = validateLocoStatus(inchingTestPayload)
                const result = getErrors.length > 0
                if (result) {
                    setErrors(getErrors)
                    setroutePath('homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/ERROR/')
                } else {
                    setroutePath('homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/TEST/')
                }

            }

            if (key === 2) {
                setroutePath('homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/')
            }

        }

        if (routePath === 'homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/ERROR/') {
            if (key === 1) {
                setroutePath('homepixy-tab/MAIN MENU/PROCESS INFORMATION/MSI/INCHING MODE INFORMATION/')
            }
        }


        if (routePath === 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/') {
            if (key >= 1 && key <= mVDBMLoco.length) {
                const currentTab = mVDBMLoco.find(x => x.id === key)
                const newpath = routePath + `${currentTab.trainNumber}/MBM/`
                setcurrentVDBML(currentTab)
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/') {
            if (key <= MedhaDiagnosticDataTabs.length && key >= 1) {
                const currentTab = MedhaDiagnosticDataTabs.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/') {
            if (key <= 6 && key >= 1) {
                const currentTab = processInformationtabs.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/') {
            if (key <= 3 && key >= 1) {
                const currentTab = medhaEnergyConsumptionMenuList.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/') {
            if (key === 1) {
                //   ooooooo

                let getErrors = validateLocoStatus(inchingTestPayload)
                console.log('getErrors', getErrors)
                const result = getErrors.length > 0
                if (result) {
                    setErrors(getErrors)
                    setroutePath('home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/ERROR/')
                } else {
                    setroutePath('home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/')
                }

            }

            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/PROCESS INFORMATION/')
            }

        }

        if (routePath === 'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/ERROR/') {

            key === 1 && setroutePath('home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/')

        }

        if (routePath === 'home-tab/DRIVER INFO/') {
            if (key <= driverInfoMenus.length && key >= 1) {
                const currentTab = driverInfoMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if ([
            'home-tab/DRIVER INFO/DRIVER ID/',
            'home-tab/DRIVER INFO/TRAIN NUMBER/',
            'home-tab/DRIVER INFO/TRAIN LOAD/',
            'home-tab/DRIVER INFO/SECTION NAME/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO TYPE/',
            'home-tab/SETTINGS/SETTINGS_MENU/SHED NAME/',
            'home-tab/SETTINGS/SETTINGS_MENU/LOCO NUMBER/'
        ].includes(routePath)) {
            if (key >= 1) {
                pressKey(key)
            }
            if (key === 0) {
                setalphaType(prev => !prev);
            }
        }

        if (routePath === 'home-tab/SETTINGS/') {
            setOutput((prev) => `${prev}` + `${key}`);
        }

        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/') {
            if (key <= settingsMenu.length && key >= 1) {
                const currentTab = settingsMenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/SETTINGS/SETTINGS_MENU/DATE AND TIME/') {
            enterDateTime(key)
        }
        if (routePath === 'home-tab/DATA-METERS/') {
            console.log('keyyy', key)
            if (key <= dataMetersMenus.length && key >= 0) {
                key = key === 0 ? 10 : key
                const currentTab = dataMetersMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/COM-STAT/') {
            if (key <= mccComMenu.length && key >= 1) {
                const currentTab = mccComMenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/ISOLATE/') {
            if (key <= isolateMenus.length && key >= 1) {
                const currentTab = isolateMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/') {
            if (selected && key === 1) {
                toggleMotorStatus(selected)
            }

        }

        if (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/') {
            if (selected && key === 1) {
                toggleConverterStatus(selected)
            }

        }

        if (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/') {
            if (selected && key === 1) {
                toggleAuxStatus(selected)
            }

        }



        if (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/CONDITIONS/') {
            if (selected && key === 1) {

                const errors = IsolationErrors(IsolateConditions)
                if (errors.length > 0) {
                    setIsolateErrors(errors)
                    setroutePath('home-tab/ISOLATE/TRACTION MOTORS/ERRORS/')

                } else {
                    setSelected(0)
                    setroutePath('home-tab/ISOLATE/TRACTION MOTORS/')
                }

            }
        }

        if (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/CONDITIONS/') {
            if (selected && key === 1) {
                const errors = IsolationErrors(IsolateConditions)
                if (errors.length > 0) {
                    setIsolateErrors(errors)
                    setroutePath('home-tab/ISOLATE/LINE CONVERTERS/ERRORS/')

                } else {
                    setSelected(0)
                    setroutePath('home-tab/ISOLATE/LINE CONVERTERS/')
                }

            }
        }

        if (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/CONDITIONS/') {
            if (selected && key === 1) {
                const errors = IsolationErrors(IsolateConditions)
                if (errors.length > 0) {
                    setIsolateErrors(errors)
                    setroutePath('home-tab/ISOLATE/AUXILARY CONVERTERS/ERRORS/')

                } else {
                    setSelected(0)
                    setroutePath('home-tab/ISOLATE/AUXILARY CONVERTERS/')
                }

            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/') {
            if (key <= 7 && key >= 1) {
                const currentTab = selfTestMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/') {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/ERROR/')

                } else {
                    setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/SUCCESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/')

            }
        }

        if (['home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/SUCCESS/',
            'home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/ERROR/'].includes(routePath)) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/')
        }

        if (['home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/ERROR/',
            'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/SUCCESS/'].includes(routePath)) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/')
        }

        if (['home-tab/MAIN MENU/SELF TEST/METERS TEST/ERROR/'].includes(routePath)) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/')
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/') {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/ERROR/')

                } else {
                    setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/')

            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/') {
            if (key <= dotTestTypes.length && key >= 1) {
                const currentTab = dotTestTypes.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/') {
            if (key === 1) {
                updateDotChannelStatus({ id: selectedChannel, status: 'ON' })
            }
            if (key === 2) {
                updateDotChannelStatus({ id: selectedChannel, status: 'OFF' })
            }
            if (key === 0) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/')
            }
            if (key === 3) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/') {
            const getChanel = selectedChannel ? `${selectedChannel}${key}` : `${key}`
            setSelectedChannel(parseInt(getChanel))
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/') {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/ERROR/')

                } else {
                    setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/') {
            if (key <= meterTestTypes.length && key >= 1) {
                const currentTab = meterTestTypes.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/'
        ].includes(routePath)) {
            const getvalue = meterValue ? `${meterValue}${key}` : `${key}`
            setMeterValue(parseInt(getvalue))
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/TEST VIEW/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/TEST VIEW/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/TEST VIEW/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/TEST VIEW/',
            'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/TEST VIEW/',
        ].includes(routePath)) {
            if (key === 0) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/LAMPS TEST/') {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath('home-tab/MAIN MENU/SELF TEST/LAMPS TEST/ERROR/')

                } else {
                    setroutePath('home-tab/MAIN MENU/SELF TEST/LAMPS TEST/TEST VIEW/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/')
            }
        }

        if (['home-tab/MAIN MENU/SELF TEST/LAMPS TEST/TEST VIEW/'].includes(routePath)) {
            if (key === 0) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/') {
            if (key <= dcLinktestMenus.length && key >= 1) {
                const currentTab = dcLinktestMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/') {
            if (key <= lcDcTestMenu.length && key >= 1) {
                const currentTab = lcDcTestMenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'TEST VIEW/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'TEST VIEW/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'TEST VIEW/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'TEST VIEW/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }


        if (
            [
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/TEST VIEW/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/TEST VIEW/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/TEST VIEW/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/TEST VIEW/'
            ].includes(routePath)
        ) {
            if (key === 1) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/') {
            if (key <= dcAuxConmenu.length && key >= 1) {
                const currentTab = dcAuxConmenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }


        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/')
            }
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/PROGRESS/',
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/ERROR/',
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/ERROR/',
            'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/ERROR/',
        ].includes(routePath)) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/')

        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/') {
            if (key <= blowerTestMenus.length && key >= 1) {
                const currentTab = blowerTestMenus.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }



        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/ERROR/',
            ].includes(routePath)
        ) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/')

        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/') {
            if (key <= ContactrelayMenu.length && key >= 1) {
                const currentTab = ContactrelayMenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/') {
            const compath = 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/'
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(compath + 'ERROR/')

                } else {
                    setroutePath(compath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/')
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/ERROR/',
            ].includes(routePath)
        ) {
            setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/')
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/') {
            if (key <= crLineConveretersMenu.length && key >= 1) {
                const currentTab = crLineConveretersMenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }


        if ([
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/',

        ].includes(routePath)) {
            if (key <= generalTestTypes.length && key >= 1) {
                const currentTab = generalTestTypes.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/',
        ].includes(routePath)) {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(routePath + 'ERROR/')

                } else {
                    setroutePath(routePath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/')
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/AUTO TEST/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/AUTO TEST/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/AUTO TEST/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/AUTO TEST/'
            ].includes(routePath)
        ) {
            if (key === 1) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/')
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/',
            ].includes(routePath)
        ) {
            if (key === 0) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/')
            }

            if (key === 1) {


                if (testsection === 'output') {
                    updateOutPutStatus({ id: testcurrentId, status: 'ON' })
                }

                if (testsection === 'feedback') {
                    updateFeedbackStatus({ id: testcurrentId, status: 'ON' })
                }

            }
            if (key === 2) {


                if (testsection === 'output') {
                    updateOutPutStatus({ id: testcurrentId, status: 'OFF' })
                }

                if (testsection === 'feedback') {
                    updateFeedbackStatus({ id: testcurrentId, status: 'OFF' })
                }

            }
        }

        if (routePath === 'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/') {
            if (key <= auxConverterCTestmenu.length && key >= 1) {
                const currentTab = auxConverterCTestmenu.find(x => x.id === key)
                const newpath = routePath + `${currentTab.lable}/`
                setupcommingRoutePath(newpath)
            }
        }

        if ([
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/',
            'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/'
        ].includes(routePath)) {
            const errors = SelfTestErrors();
            if (key === 1) {
                if (errors.length > 0) {
                    setSelfTestErrors(errors)
                    setroutePath(routePath + 'ERROR/')

                } else {
                    setroutePath(routePath + 'PROGRESS/')
                }
            }
            if (key === 2) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/')
            }
        }

        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/ERROR/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/ERROR/',
                //  'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                //  'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                //  'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/AUTO TEST/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/AUTO TEST/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/AUTO TEST/'


            ].includes(routePath)
        ) {
            if (key === 1) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/')
            }
        }





        if (
            [
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/PROGRESS/',
                'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/PROGRESS/'
            ]
                .includes(routePath)
        ) {
            if (key === 0) {
                setroutePath('home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/')
            }

            if (key === 1) {

                if (testsection === 'output') {
                    updateACOutPutStatus({ id: testcurrentId, status: 'ON' })
                }

                if (testsection === 'feedback') {
                    updateACFeedbackStatus({ id: testcurrentId, status: 'ON' })
                }

            }
            if (key === 2) {


                if (testsection === 'output') {
                    updateACOutPutStatus({ id: testcurrentId, status: 'OFF' })
                }

                if (testsection === 'feedback') {
                    updateACFeedbackStatus({ id: testcurrentId, status: 'OFF' })
                }

            }
        }


    }
    const mFunction = () => {
        setroutePath('home-tab/')
    }
    const fFunction = () => {
        setroutePath('homepixy-tab/')
    }
    const cFunction = () => {
        if (routePath.includes('home-tab/')) {
            if (routePath === medhadefaultPath) return;

            if (routePath.includes('/MBM/')) {
                setupcommingRoutePath(routePath)
                setroutePath('home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/')
            } else {
                setupcommingRoutePath(routePath)
                let segments = routePath.split("/").filter(Boolean);
                segments.pop(); // Remove the last segment
                const newPath = segments.length > 1 ? segments.join("/") + "/" : medhadefaultPath;
                setroutePath(newPath);
            }


        }

        if (routePath.includes('homepixy-tab/')) {
            if (routePath === pixydefaultPath) return;
            if (routePath.includes('/SSMODE/')) {
                setroutePath('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/')
            } else if (routePath.includes('/BMV/')) {
                setroutePath('homepixy-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/')
            } else {
                let segments = routePath.split("/").filter(Boolean);
                segments.pop(); // Remove the last segment

                const newPath = segments.length > 1 ? segments.join("/") + "/" : pixydefaultPath;
                setroutePath(newPath);
            }

        }

    }
    const increaseBrightness = () => {
        setBrightness((prev) => Math.min(prev + 0.1, 1)); // Max brightness = 2
    };
    const decreaseBrightness = () => {
        setBrightness((prev) => Math.max(prev - 0.1, 0)); // Min brightness = 0.5
    };
    const handleBacklightOnOff = () => {
        setAction(prev => ({
            ...prev,
            backlight: !prev.backlight
        }));
    };

    const numericKeys = [
        {
            id: 1,
            icon: one_icon
        },
        {
            id: 2,
            icon: two_icon
        },
        {
            id: 3,
            icon: three_icon
        },
        {
            id: 4,
            icon: four_icon
        },
        {
            id: 5,
            icon: five_icon
        },
        {
            id: 6,
            icon: six_icon
        },
        {
            id: 7,
            icon: seven_icon
        },
        {
            id: 8,
            icon: eight_icon
        },
        {
            id: 9,
            icon: nine_icon
        },
        {
            id: 0,
            icon: zero_icon
        }
    ]

    const rightactions = [
        {
            id: 1,
            icon: c_icon,
            action: cFunction
        },
        {
            id: 2,
            icon: left_icon,
            action: leftArrowaction
        },
        {
            id: 3,
            icon: right_icon,
            action: rightArrowaction

        },
        {
            id: 4,
            icon: top_icon,
            action: upArrowFunction
        },
        {
            id: 5,
            icon: bottom_icon,
            action: downArrowFunction
        },
        {
            id: 6,
            icon: e_return_icon,
            action: enterAction
        },
    ]

    const leftactions = [

        {
            id: 1,
            icon: onoff_icon,
            action: () => handleBacklightOnOff()
        },
        {
            id: 2,
            icon: o_icon
        },
        {
            id: 3,
            icon: brightuup_icon,
            action: increaseBrightness
        },
        {
            id: 4,
            icon: brightdown_icon,
            action: decreaseBrightness
        },
        {
            id: 5,
            icon: f_icon,
            action: fFunction
        },
        {
            id: 6,
            icon: m_icon,
            action: mFunction
        },

    ]

    // console.log('paths', JSON.stringify({
    //     routePath: routePath,
    //     upcommingRoutePath: upcommingRoutePath
    // }, 2, 2))

    return (
        <div 
        className={classes.md_home_container}
        style={callScreen?{width:'1080px',height:'600px',aspectRatio:`${1080/600}`}:{}}
        ref={heightRef}
        >
            <div className={classes.md_home_inner_container}>
                <div className={classes.md_home_section_one}>
                    <div className={classes.mhso_section_one}>
                        {
                            leftactions.map((x) => {
                                return (
                                    <div
                                        onClick={x.action ? x.action : null}
                                        className={classes.buttonDivs}>
                                        <img id={x.id} src={x.icon} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{
                        filter: `brightness(${brightness})`,
                        transition: "filter 0.4s ease",
                    }} className={classes.mhso_section_two}>
                        {
                            (action.backlight && routePath.includes('home-tab/')) && <Medha_screen_1
                                routePath={routePath}
                                setroutePath={setroutePath}
                                upcommingRoutePath={upcommingRoutePath}
                                setupcommingRoutePath={setupcommingRoutePath}
                                maintabs={maintabs}

                            />
                        }
                        {
                            (action.backlight && routePath.includes('homepixy-tab/')) && <Pixy_screen
                                routePath={routePath}
                                setroutePath={setroutePath}
                                upcommingRoutePath={upcommingRoutePath}
                                setupcommingRoutePath={setupcommingRoutePath}
                            />
                        }
                    </div>
                    <div className={classes.mhso_section_three}>
                        {
                            rightactions.map((x) => {
                                return (
                                    <div
                                        onClick={x.action ? () => x.action() : undefined}
                                        className={classes.buttonDivs}>
                                        <img id={x.id} src={x.icon} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={classes.md_home_section_two}>

                    {
                        numericKeys.map((x) => {
                            return (
                                <div onClick={() => numericKeyaction(x.id)} className={classes.buttonDivs}>
                                    <img id={x.id} src={x.icon} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
