import React, { useEffect, useRef, useState } from 'react'
import classes from './switchTabs.module.css'
import { alphaNumericKeys, dataMetersMenus, driverInfoMenus, isolateMenus, mainmenulist, mccComMenu, MedhaDiagnosticDataTabs, medhaEnergyConsumptionMenuList, processInformationtabs, settingsMenu, vehiclediagnosticsmenu } from '../../TabsData/tabs';
import { BreakingIndicators, ControlsComponent, GearIndicators, PantoIndicator, TmComponent, UnicInfo1 } from '../../MedhaComponents/MedhaComponentsStore';
import { dateEntryStore, IsolateStore, PageScrool, settingInformationstore, useLocoBrowseStore, useLocoStatusStore } from '../../MiddlewareFunctions/medha_default_stores';
import mainClasses from './../medha_screen_1.module.css'
import { SoftwareVersions } from '../PixySwitchTabs/pixySwitchTab';
import { useInchingMode } from '../../MiddlewareFunctions/medha_pixy_stores';
import {
    AC1DCLINKTEST, AC1DCLINKTESTERROR, AC1DCLINKTESTVIEW, AC2DCLINKTEST, AC2DCLINKTESTERROR, AC2DCLINKTESTVIEW,
    AC3DCLINKTEST, AC3DCLINKTESTERROR, AC3DCLINKTESTVIEW, B1BEMeterProgress, B1BETest, B1LC1DCLINKTEST, B1LC1DCLINKTESTERROR,
    B1LC1DCLINKTESTVIEW, B1LC2DCLINKTEST, B1LC2DCLINKTESTERROR, B1LC2DCLINKTESTVIEW, B1TEMeterProgress, B1TETest, B2BEMeterProgress,
    B2BETest, B2LC1DCLINKTEST, B2LC1DCLINKTESTERROR, B2LC1DCLINKTESTVIEW, B2LC2DCLINKTEST, B2LC2DCLINKTESTERROR, B2LC2DCLINKTESTVIEW,
    B2TEMeterProgress, B2TETest, BloweTestMenus, ContactorsandRelaysTestMenu, DClinkAuxConverterMenu, DClinkMenu, DitCompletionView,
    DitConditions, DitERRORView, DotChannelView, DotConditionsView, DotERRORView, DotTestTypesMenu, GneralLCACCTERRORVIEW, LampTest,
    LampTestView, LCB1LC1CT_AutoTest, LCB1LC1CT_ManualTest, LCB1LC1CT_ManualTest_Progress, LCB1LC1CT_MENU, LCB1LC2CT_AutoTest,
    LCB1LC2CT_ManualTest, LCB1LC2CT_ManualTest_Progress, LCB1LC2CT_MENU, LCB2LC1CT_AutoTest, LCB2LC1CT_ManualTest, LCB2LC1CT_ManualTest_Progress,
    LCB2LC1CT_MENU, LCB2LC2CT_AutoTest, LCB2LC2CT_ManualTest, LCB2LC2CT_ManualTest_Progress, LCB2LC2CT_MENU, LCContactorsTestMenu, LCDCTEST, MetersTestTypesMenu,
    OilCollerError, OilCollerTestConditions, OilCollerTestView, RandomChannelSelection, SelfTestMenu, SFAC1_AutoTest, SFAC1_ManualTest, SFAC1_ManualTest_Progress, SFAC1_MENU, SFAC2_AutoTest, SFAC2_ManualTest, SFAC2_ManualTest_Progress, SFAC2_MENU,
    SFAC3_AutoTest,
    SFAC3_ManualTest, SFAC3_ManualTest_Progress, SFAC3_MENU, SfAcTestmenus, SFCOError, SFCOTestConditions, SFCOTestView, SfDmConditionsView, SfDmErrorView, SFSBError, SFSBTestConditions,
    SFSBTestView, SFTMError, SFTMTestConditions, SFTMTestView, SFTOError, SFTOTestConditions, SFTOTestView, SFVCUError, SFVCUTestConditions, SFVCUTestView, SpeedMeterProgress,
    SpeedMeterTest
} from './SelfTestPages/selfTest';
import { useWebSocketStore } from '../../medhaDataStore';
import { MEDHA_TOPICS } from '../../websocketTopics';
const { ms1_s3_s1indicatorsdiv, ms1_s3_s2_s1 } = mainClasses;
const { mmv_container, mmv_container_inner, mmv_container_inner_header, mmv_container_inner_content, mmv_container_inner_content_table,
    mmv_container_s1, mmv_container_s2, mmv_container_s3, unicmenu, ls_container, ls_container_inner, locoStatus_table, locoStatus_row,
    locoStatusHeader_cell, locoStatusData_cell, dmedha_bm_view_container, dmedha_bm_view_header, dmedha_bm_view_header_cell, dmedha_bm_view_Info_row,
    medha_fault_table_container, medha_fault_table_view_container, medha_fault_table_container_instruction, medha_fault_table_footer_menu, medha_fault_table_view_header,
    medha_table_inner_container, medha_table_header_row, medha_table_header_row_cell, medha_table_data_container, medha_table_data_container_cell, medha_table_data_container_row,
    medha_ecv_container, medha_ecv_container_view, medha_ecv_container_infomation, medha_ecv_container_menu, medha_ecv_container_view_header, medha_ecv_container_view_header_row,
    medha_ecv_container_view_header_cell, medha_ecv_container_view_data_row, medha_ecv_container_view_data_row_cell, medha_monthly_view_container, medha_monthly_view_header_view,
    medha_monthly_data_view_footer_menu, medha_monthly_data_view_footer_instruction, medha_monthly_data_view, medha_monthly_data_view_table_container, mm_dvt_header, mm_dvt_row, mm_dvt_cell,
    medha_help_view, acstatus_container, actr_table_container, actr_table_data, actr_table_header, actr_table_data_view, actr_table_data_row, actr_table_data_cell, mTMandS_container, mTMandS_container_data,
    mTMandS_container_footer, mTMandS_container_data_indicators, mTMandS_container_data_table_tm, mTMandS_container_data_table_view, mtms_table_header, mtms_table_row,
    mtms_table_row_cell, mImode_container, mImode_conditions, mImode_info, mImode_menu, mImode_conditions_header, mImode_conditions_mini_header, mImode_conditions_container,
    mImode_conditions_view, mImode_Errors_view, mImode_test_container, mImode_test_row, medhaMimode_actions_row_cell, mImode_actions_instruction, mt_config_container, mt_config_data_container, mt_config_footer_info,
    mt_config_footer_menu, mt_config_data_table_container, mt_config_dt_header, mt_config_dt_data_view, mt_config_dt_data_rows, medha_setting_container, medha_setting_data_container, medha_setting_footer_info,
    medha_setting_menus, medha_setting_data_table, medha_setting_data_header, medha_setting_data_view, medha_setting_data_view_row, medha_setting_data_view_cell,
    medha_settings_passWordView, medha_setting_enter_view, medha_settings_passWordView_cell, medha_setting_Info_view, medha_dt_view_container, medha_dt_view_row, medha_dt_view_header_cell, digital_table_container,
    digital_table_header, digital_tables_view_container, digital_tables_view_footer_info, digital_tables_view_footer_menu, digital_tables, digital_tables_header, digital_tables_data, dst_table_container, dst_table_Header,
    dst_table_cell_container, dst_table_cell, mcc_table_container, mcc_table_data, mcc_table_footer_info, mcc_table_footer_menu, mcc_table_data_header, mcc_table_data_view, mcc_table, mcc_main_row, mcc_main_row_main_cell,
    mcc_data_cell, isolate_conatainer, isolate_conatainer_data, isolate_conatainer_info, isolate_conatainer_menu, solate_conatainer_data_view, solate_conatainer_data_header, isolate_list_view, isolate_list_row,
    isolate_list_cell, conditions_row, m_fault_message


} = classes;


export const SwitchTabs = ({ routePath, upcommingRoutePath, setupcommingRoutePath }) => {
    const routeComponents = {
        'home-tab/MAIN MENU/': <MainMenuView upcommingRoutePath={upcommingRoutePath} setupcommingRoutePath={setupcommingRoutePath} />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/': <VehicleDiagnosticsMenu upcommingRoutePath={upcommingRoutePath} setupcommingRoutePath={setupcommingRoutePath} />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/LOCO STATUS/': <LocoStatus />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/': <MDBrowseMode upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/': <MedhaDiagnosticData upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/ENTER ARCHIVE/': <MedhaEntireArchiveFults />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/ALL ACTIVE FAULTS/': <MedhaAllActiveFults />,
        'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/ALL INACTIVE FAULTS/': <MedhaAllInActiveFults />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/': <MedhaProcessInformation upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/': <MedhaEnergyConsumptionMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/LIFE TIME DATA/': <MedhaLifeTimeDataView />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/TRIP DATA/': <MedhaTripDataView />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/MONTHLY DATA/': <MedhaMonthlyDataView />,
        'home-tab/HELP/': <HelpView />,
        'home-tab/AC STATUS/': <AcStatus />,
        'home-tab/TMS STATUS/': <TractionStatus />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/MOTOR TEMPRETURE/': <MedhaMotorTempreture />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/SIMULATION MODE/': <MedhaSimulation />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/NODE INFORMATION/': <MedhaNodeInformation />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/SOFTWARE VERSIONS/': <MedhaSoftwareVersions />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/': <MedhaInchingMode />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/ERROR/': <MedhaInchingError />,
        'home-tab/MAIN MENU/PROCESS INFORMATION/INCHING MODE/TEST/': <MedhaInchingTest />,
        'home-tab/BRW-MODE/': <MedhaDirectBRmode />,
        'home-tab/MAIN MENU/TRAIN CONFIGURATION/': <MedhaTrainConfiguration />,
        'home-tab/DRIVER INFO/': <DriverInfoMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/DRIVER INFO/DRIVER ID/': <DriverId />,
        'home-tab/DRIVER INFO/TRAIN NUMBER/': <TrainNumber />,
        'home-tab/DRIVER INFO/TRAIN LOAD/': <TrainLoad />,
        'home-tab/DRIVER INFO/SECTION NAME/': <SectionName />,
        'home-tab/SETTINGS/': <MedhaSettingsView />,
        'home-tab/SETTINGS/SETTINGS_MENU/': <MedhaSettingsMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/SETTINGS/SETTINGS_MENU/LOCO TYPE/': <LocoTypeEnter />,
        'home-tab/SETTINGS/SETTINGS_MENU/SHED NAME/': <ShedNameEnter />,
        'home-tab/SETTINGS/SETTINGS_MENU/LOCO NUMBER/': <LocoNumberEnter />,
        'home-tab/SETTINGS/SETTINGS_MENU/DATE AND TIME/': <DateTimeView />,
        'home-tab/MAIN MENU/DIGITAL INPUT STATUS/': <DigitalInputStatus />,
        'home-tab/MAIN MENU/DIGITAL OUTPUT STATUS/': <DigitalOutputStatus />,
        'home-tab/DATA-METERS/': <DataMetersMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/DATA-METERS/MOTORING AND REGENRATION/': <DmMoterandRegenration />,
        'home-tab/DATA-METERS/PNEUMATIC STATUS/': <DmPneumaticStatus />,
        'home-tab/DATA-METERS/BOGIE1 TC STATUS/': <Bogie1TcStatus />,
        'home-tab/DATA-METERS/BOGIE2 TC STATUS/': <Bogie2TcStatus />,
        'home-tab/DATA-METERS/BOGIE1 LC STATUS/': <Bogie1LcStatus />,
        'home-tab/DATA-METERS/BOGIE2 LC STATUS/': <Bogie2LcStatus />,
        'home-tab/DATA-METERS/AUX CONVERTER1 STATUS/': <Auxcon1Status />,
        'home-tab/DATA-METERS/AUX CONVERTER2 STATUS/': <Auxcon2Status />,
        'home-tab/DATA-METERS/AUX CONVERTER3 STATUS/': <Auxcon3Status />,
        'home-tab/DATA-METERS/TEMPRETURES AND PRESSURES/': <DmTemPre />,
        'home-tab/DATA-METERS/LTC PHASE TEMPRETURES/': <DmLtcPhaseTem />,
        'home-tab/DATA-METERS/TRAIL LOCO STATUS/': <DmLocoTrailParams />,
        'home-tab/COM-STAT/': <ComStatMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/COM-STAT/MCC1 COMM STATUS/': <Mcc1Status />,
        'home-tab/COM-STAT/MCC2 COMM STATUS/': <Mcc2Status />,
        'home-tab/COM-STAT/ACC1 COMMUNICATION STATUS/': <Acc1Status />,
        'home-tab/COM-STAT/ACC2 COMMUNICATION STATUS/': <Acc2Status />,
        'home-tab/COM-STAT/LTC COMMUNICATION STATUS/': <LtcComm />,
        'home-tab/COM-STAT/AUX COMMUNICATION STATUS/': <AuxComm />,
        'home-tab/ISOLATE/': <IsolateMenus upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/ISOLATE/TRACTION MOTORS/': <TractionMotorsList />,
        'home-tab/ISOLATE/TRACTION MOTORS/CONDITIONS/': <TractionMotorConditions />,
        'home-tab/ISOLATE/LINE CONVERTERS/': <LineConverterList />,
        'home-tab/ISOLATE/LINE CONVERTERS/CONDITIONS/': <LineConvertersConditions />,
        'home-tab/ISOLATE/AUXILARY CONVERTERS/': <AuxConverterList />,
        'home-tab/ISOLATE/AUXILARY CONVERTERS/CONDITIONS/': <AuxConditions />,
        'home-tab/MAIN MENU/SELF TEST/': <SelfTestMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/': <DitConditions />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/SUCCESS/': <DitCompletionView />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL INPUTS TEST/ERROR/': <DitERRORView />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/': <DotConditionsView />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/ERROR/': <DotERRORView />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/': <DotTestTypesMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/SEQUENTIAL ORDER/': <DotChannelView />,
        'home-tab/MAIN MENU/SELF TEST/DIGITAL OUTPUTS TEST/TEST TYPES/RANDOM ORDER/': <RandomChannelSelection />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/': <SfDmConditionsView />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/ERROR/': <SfDmErrorView />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/': <MetersTestTypesMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/': <SpeedMeterTest />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/SPEED METERS TEST/TEST VIEW/': <SpeedMeterProgress />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/': <B1TETest />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 TE METERS TEST/TEST VIEW/': <B1TEMeterProgress />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/': <B1BETest />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE1 BE METERS TEST/TEST VIEW/': <B1BEMeterProgress />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/': <B2TETest />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 TE METERS TEST/TEST VIEW/': <B2TEMeterProgress />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/': <B2BETest />,
        'home-tab/MAIN MENU/SELF TEST/METERS TEST/TEST TYPES/BOGIE2 BE METERS TEST/TEST VIEW/': <B2BEMeterProgress />,
        'home-tab/MAIN MENU/SELF TEST/LAMPS TEST/': <LampTest />,
        'home-tab/MAIN MENU/SELF TEST/LAMPS TEST/TEST VIEW/': <LampTestView />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/': <DClinkMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/': <LCDCTEST upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/': <B1LC1DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/TEST VIEW/': <B1LC1DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC1DC LINK TEST/ERROR/': <B1LC1DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/': <B1LC2DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/TEST VIEW/': <B1LC2DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE1-LC2DC LINK TEST/ERROR/': <B1LC2DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/': <B2LC1DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/TEST VIEW/': <B2LC1DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC1DC LINK TEST/ERROR/': <B2LC1DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/': <B2LC2DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/TEST VIEW/': <B2LC2DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/LINE CONVERTER DC-LINK DISCHARGE TEST/BOGIE2-LC2DC LINK TEST/ERROR/': <B2LC2DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/': <DClinkAuxConverterMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/': <AC1DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/PROGRESS/': <AC1DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 1 DC LINK TEST/ERROR/': <AC1DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/': <AC2DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/PROGRESS/': <AC2DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 2 DC LINK TEST/ERROR/': <AC2DCLINKTESTERROR />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/': <AC3DCLINKTEST />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/PROGRESS/': <AC3DCLINKTESTVIEW />,
        'home-tab/MAIN MENU/SELF TEST/DC LINK DISCHARGE< TEST/AUX. CONVERTER DC-LINK DISCHARGE TEST/AUX CONVERTER 3 DC LINK TEST/ERROR/': <AC3DCLINKTESTERROR />,
        'home-tab/MAIN MENU/USER PROGRAMABLE SCREENS/': <UserProgrmableScreens />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/': <BloweTestMenus upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/': <OilCollerTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/PROGRESS/': <OilCollerTestView />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/OLI COOLER BLOWER TEST/ERROR/': <OilCollerError />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/': <SFTMTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/PROGRESS/': <SFTMTestView />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRACTION MOTOR BLOWER TEST/ERROR/': <SFTMError />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/': <SFTOTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/PROGRESS/': < SFTOTestView />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/TRANSFORMER OIL PUMP TEST/ERROR/': <SFTOError />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/': < SFCOTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/PROGRESS/': <SFCOTestView />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/CONVERTER OIL PUMP TEST/ERROR/': <SFCOError />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/': < SFSBTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/PROGRESS/': <SFSBTestView />,
        'home-tab/MAIN MENU/SELF TEST/BLOWERST TEST/SCAVENGE BLOWER TEST/ERROR/': < SFSBError />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/': <ContactorsandRelaysTestMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/': <SFVCUTestConditions />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/PROGRESS/': <SFVCUTestView />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/VEHICLE CONTROL UNIT/ERROR/': <SFVCUError />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/': <LCContactorsTestMenu upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/': <LCB1LC1CT_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/': <LCB1LC2CT_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/': <LCB2LC1CT_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/': <LCB2LC2CT_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/': <LCB1LC1CT_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/': <LCB1LC2CT_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/': <LCB2LC1CT_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/': <LCB2LC2CT_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/AUTO TEST/': <LCB1LC1CT_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/AUTO TEST/': <LCB1LC2CT_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/AUTO TEST/': <LCB2LC1CT_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/AUTO TEST/': <LCB2LC2CT_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/': <LCB1LC1CT_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/': <LCB1LC2CT_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/PROGRESS/': <LCB2LC1CT_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/PROGRESS/': <LCB2LC2CT_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/': <SfAcTestmenus upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/': <SFAC1_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/': <SFAC2_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/': <SFAC3_MENU upcommingRoutePath={upcommingRoutePath} />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/': <SFAC1_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/': <SFAC2_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/': <SFAC3_ManualTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/AUTO TEST/': <SFAC1_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/AUTO TEST/': <SFAC2_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/AUTO TEST/': <SFAC3_AutoTest />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/': <SFAC1_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/': <SFAC2_ManualTest_Progress />,
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/PROGRESS/': <SFAC3_ManualTest_Progress />,












    };
    const LCCTERRORSpath = [
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC1CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE1-LC2CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC1CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/LINE CONVERTER/BOGIE2-LC2CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC1 CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC2 CONTACTORS TEST/MANUAL TEST/ERROR/',
        'home-tab/MAIN MENU/SELF TEST/CONTACTERS AND RELAYS TEST/AUXILIARY CONVERTER/AC3 CONTACTORS TEST/MANUAL TEST/ERROR/',

    ]
    return (
        <div style={{ height: '100%', width: '100%' }}>
            {
                routeComponents[routePath] || (routePath.includes('/MBM/') && <MedhaBrowseModeView /> ||
                    ['home-tab/ISOLATE/TRACTION MOTORS/ERRORS/', 'home-tab/ISOLATE/LINE CONVERTERS/ERRORS/',
                        'home-tab/ISOLATE/AUXILARY CONVERTERS/ERRORS/'].includes(routePath) && <IsolationErrors
                        routePath={routePath} />) || LCCTERRORSpath.includes(routePath) && <GneralLCACCTERRORVIEW />
            }

        </div>
    );
};

const MainMenuView = ({ routePath, upcommingRoutePath, setupcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            MAIN MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    mainmenulist.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...mainmenulist, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const VehicleDiagnosticsMenu = ({ routePath, upcommingRoutePath, setupcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/'

    return (
        <div className={mmv_container}>
            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            VEHICLE DIAGNOSTICS MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    vehiclediagnosticsmenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...vehiclediagnosticsmenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const LocoStatus = () => {
    const { currentData, locodata, setCurrentData } = useLocoStatusStore();
    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { LOCOSTATUS_DATA, COMMONVARIABLES_DATA } = useWebSocketStore();

    const statuscolor = {
        'HEALTHY': 'rgba(40, 167, 69, 1)',
        'NA': 'white',
        'FAIL': 'rgba(229, 57, 53, 1)'
    }
    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.LOCOSTATUS, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);

    useEffect(() => {

        if (Array.isArray(LOCOSTATUS_DATA)) {
            let updated = LOCOSTATUS_DATA.map((x) => {
                let status = ''

                return {
                    id: x.id,
                    subsystem: `${x.ss_id}-${x.ss_name}`,
                    status: (`${x.status}` === `${1}` && 'HEALTHY') || (`${x.status}` === `${0}` && 'FAIL')
                }
            })
            setCurrentData(updated)

        }

        // { id: 1, subsystem: 'SS01 - MAIN POWER', status: 'HEALTHY' },

        // {
        //     "id": 1,
        //     "ss_id": "SS01",
        //     "ss_name": "Main Power",
        //     "status": 1
        // }
    }, [LOCOSTATUS_DATA])

    return (
        <div className={ls_container}>
            <div className={ls_container_inner}>
                <div style={{ height: '6%', width: '100%', display: 'flex', flexDirection: 'row', gap: '0.2vh', padding: '0.1vh' }}>
                    <UnicInfo1 value={COMMONVARIABLES_DATA?.loco_no} styles={{ height: '100%' }} />
                    <UnicInfo1 value={COMMONVARIABLES_DATA?.date} styles={{ height: '100%' }} />
                    <UnicInfo1 value={COMMONVARIABLES_DATA?.time} styles={{ height: '100%' }} />
                </div>

                <div style={{ height: '82%', width: '100%', padding: '1vh' }}>
                    <div style={{ height: '100%', width: '100%', border: '0.1vh solid rgba(30, 144, 255, 1)', display: 'flex', flexDirection: 'row' }} >
                        <div className={locoStatus_table}>
                            <div className={locoStatus_row}>
                                <div className={locoStatusHeader_cell}>
                                    SUB SYSTEM
                                </div>
                                <div className={locoStatusHeader_cell}>
                                    STATUS
                                </div>
                            </div>
                            {
                                currentData.slice(0, 15).map((x) => {
                                    return (
                                        <div className={locoStatus_row}>
                                            <div className={locoStatusData_cell}>
                                                {x.subsystem}
                                            </div>
                                            <div style={{ color: `${statuscolor[x.status]}` }} className={locoStatusData_cell}>
                                                {x.status}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={locoStatus_table}>
                            <div className={locoStatus_row}>
                                <div className={locoStatusHeader_cell}>
                                    SUB SYSTEM
                                </div>
                                <div className={locoStatusHeader_cell}>
                                    STATUS
                                </div>
                            </div>
                            {
                                currentData.slice(16, 19).map((x) => {
                                    return (
                                        <div className={locoStatus_row}>
                                            <div className={locoStatusData_cell}>
                                                {x.subsystem}
                                            </div>
                                            <div style={{ color: `${statuscolor[x.status]}` }} className={locoStatusData_cell}>
                                                {x.status}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div style={{ height: '6%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5vh', border: '0.1vh solid white', color: ' rgba(40, 167, 69, 1)', fontWeight: '590', fontSize: '2vh' }}>
                    {` PRESS(C) TO GO TO PREVIOUS SCREEN`}
                </div>
                <div style={{ height: '6%', width: '100%', display: 'flex', flexDirection: 'row', gap: '0.1vh' }}>
                    {
                        [...locodata, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {
                                        x.id ? `${x.lable}${x.id}` : ''
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MDBrowseMode = ({ routePath, upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/'
    const { mVDBMLoco } = useLocoBrowseStore();
    return (
        <div className={mmv_container}>
            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            BROWSE MODE
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div style={{ border: 'none' }} className={mmv_container_inner_content_table}>
                                {
                                    // home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/BROWSE MODE/31427/
                                    mVDBMLoco.map((x, index) => {
                                        let justify = componentPath + `${x.trainNumber}/MBM/` === upcommingRoutePath
                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', border: '0.1vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${index + 1}. BROWSE LOCO ${index + 1}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...mVDBMLoco, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaBrowseModeView = () => {
    const { mVDBMLoco, setcurrentVDBML, currentVDBML, mVDBMLocoSS, visible } = useLocoBrowseStore();
    const lococCurrentIndex = 1
    const locoSSCurrentIndex = mVDBMLocoSS?.findIndex((item) => item.id === visible?.id) + 1


    return (
        <div className={mmv_container}>
            <div className={mmv_container_inner}>
                <div style={{ padding: '3vh', border: 'none' }} className={mmv_container_s1}>
                    <div className={dmedha_bm_view_container}>
                        <div className={dmedha_bm_view_header}>
                            <div className={dmedha_bm_view_header_cell}>
                                {`LOCO NO:${currentVDBML.trainNumber}`}
                            </div>
                            <div className={dmedha_bm_view_header_cell}>
                                {`BROWSE LOCO ${lococCurrentIndex}`}
                            </div>
                            <div className={dmedha_bm_view_header_cell}>
                                {`${locoSSCurrentIndex}/${mVDBMLocoSS.length}`}
                            </div>
                        </div>

                        <div className={dmedha_bm_view_Info_row}>

                            {`FC:${visible.fc}`}
                        </div>
                        <div className={dmedha_bm_view_Info_row}>
                            {`${visible.subsystem}:${visible.message}`}
                        </div>
                        <div className={dmedha_bm_view_Info_row}>
                            {visible.status}
                        </div>
                    </div>
                </div>
                <div className={mmv_container_s2}>
                    PRESS UP AND DOWN KEY TO VIEW OTHER MESSAGE
                </div>
                <div className={mmv_container_s3}>
                    {
                        [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaDiagnosticData = ({ routePath, upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/VEHICLE DIAGNOSTICS/DIAGNOSTIC DATA/'
    return (
        <div className={mmv_container}>
            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            DIAGNOSTICS MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    MedhaDiagnosticDataTabs.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...MedhaDiagnosticDataTabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaEntireArchiveFults = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { ENTIRE_FAULTS } = useWebSocketStore();
    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.ENTIREFAULTS, data: {} },
        ]);
        return () => {
            unsubscribeWebSocket();
        };
    }, []);
    const payload = {
        header: 'ALL FAULTS',
        faultCurrentDATA:ENTIRE_FAULTS

    }
    
    return (
        <MedhaFaultTableView payload={payload} />
    )
}

const MedhaAllActiveFults = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { ACTIVE_FAULTS } = useWebSocketStore();
    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.ACTIVEFAULT, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);

    const payload = {
        header: 'All ACTIVE FAULTS',
        faultCurrentDATA: ACTIVE_FAULTS
    }



    return (
        <MedhaFaultTableView payload={payload} />
    )
}

const MedhaAllInActiveFults = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { INACTIVE_FAULTS } = useWebSocketStore();
    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.INACTIVEFAULTS, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);


    const payload = {
        header: 'All INACTIVE FAULTS',
        faultCurrentDATA: INACTIVE_FAULTS

    }
    return (
        <MedhaFaultTableView payload={payload} />
    )
}

const MedhaFaultTableView = ({ payload }) => {

    const [faultData, setFaultData] = useState(
        [
            {
                id: 1,
                faultCode: "29862",
                faultNumber: "F1407P2",
                faultMessage: "ACC2 - DOP3 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:23:50"
            },
            {
                id: 2,
                faultCode: "29861",
                faultNumber: "F1407P2",
                faultMessage: " ACC2 - DOP2 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:23:50"
            },
            {
                id: 3,
                faultCode: "29861",
                faultNumber: "F1407P2",
                faultMessage: " ACC2 - DOP2 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:23:50"
            },
            {
                id: 4,
                faultCode: "29860",
                faultNumber: "F1407P2",
                faultMessage: "ACC2 - DOP1 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:22:45"
            },
            {
                id: 5,
                faultCode: "29859",
                faultNumber: "F1407P2",
                faultMessage: "ACC1 - DOP3 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:21:30"
            },
            {
                id: 6,
                faultCode: "29858",
                faultNumber: "F1407P2",
                faultMessage: " ACC1 - DOP2 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:20:15"
            },
            {
                id: 7,
                faultCode: "29857",
                faultNumber: "F1407P2",
                faultMessage: "ACC1 - DOP1 COMM FAIL",
                frequency: 1,
                status: "INACTIVE",
                date: "29/02/2020",
                time: "17:19:00"
            }
        ]
    )


    // {
    //     "id": 1,
    //     "fault": "F0101P1",
    //     "frontendMessage": "Loco XXXXXX SS01: Main Power VCB STUCK IN ON POSITION Loco will be shut down",
    //     "triggered": true, ACTIVE for false INACTIVE 
    //     "resolved": false,
    //     "preset": false,
    //     "cause": "",
    //     "startDate": "17-03-2025",
    //     "startTime": "12:54:32",
    //     "endDate": "",
    //     "endTime": "",
    //     "location": ""
    // }
    useEffect(() => {
        if (payload?.faultCurrentDATA) {
            const updated = payload.faultCurrentDATA.map((x) => {
                return {
                    id: x.id,
                    faultCode: "---",
                    faultNumber: x.fault,
                    faultMessage: x.frontendMessage,
                    frequency: 1,
                    status: x.triggered?"ACTIVE":"INACTIVE",
                    date: x.startDate,
                    time: x.startTime
                }
            })
            setFaultData(updated)
        }
    },
        [payload])


    const headers = [
        {
            id: 1,
            lable: 'DATE & TIME',
            width: '13'
        },
        {
            id: 2,
            lable: 'FAULT CODE',
            width: '13'
        },
        {
            id: 3,
            lable: 'FAULT MESSAGE',
            width: '48'
        },
        {
            id: 4,
            lable: 'FREQUENCY',
            width: '13'
        },
        {
            id: 5,
            lable: 'STATUS',
            width: '13'
        },
    ]

    return (
        <div className={medha_fault_table_container}>
            <div className={medha_fault_table_view_container}>
                <div className={medha_fault_table_view_header}>
                    {payload.header}
                </div>

                <div className={medha_table_inner_container}>
                    <div className={medha_table_header_row}>
                        {
                            headers.map((x) => {
                                return (
                                    <div style={{ width: `${x.width}%`, borderRight: '0.1vh solid rgba(30, 144, 255, 1)', borderBottom: '0.1vh solid rgba(30, 144, 255, 1)' }} key={x.id} className={medha_table_header_row_cell}>{x.lable}</div>
                                )
                            })
                        }
                    </div>

                    <div className={medha_table_data_container}>
                        {
                            faultData.map((x) => {
                                return (
                                    <div className={medha_table_data_container_row}>
                                        <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={medha_table_data_container_cell}>
                                            <div >
                                                {x.date}
                                            </div>
                                            <div>
                                                {x.time}
                                            </div>
                                        </div>
                                        <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={medha_table_data_container_cell}>
                                            {x.faultCode}
                                        </div>
                                        <div style={{ width: '48%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={medha_table_data_container_cell}>
                                            <div>
                                                {`[${x.faultNumber}]`}
                                            </div>
                                            <div style={{
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%', /* Truncate if length exceeds 100px */
                                                cursor: 'pointer'
                                            }}
                                                title={x.faultMessage} // Tooltip with full message
                                                className={m_fault_message}>
                                                {`MCC:${x.faultMessage}`}
                                            </div>
                                        </div>
                                        <div style={{ width: '13%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }} className={medha_table_data_container_cell}>
                                            {x.frequency}
                                        </div>
                                        <div style={{ width: '13%' }} className={medha_table_data_container_cell}>
                                            {x.status}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
            <div className={medha_fault_table_container_instruction}>
                PRESS (PAGE UP), (PAGE DOWN), KEYS TO VIEW MORE FAULTS. PRESS (C) TO GO O PREVIOUS SCREEN
            </div>
            <div className={medha_fault_table_footer_menu}>
                {
                    [{ id: 1, lable: 'PAGE UP' }, { id: 2, lable: 'PAGE DOWN' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

const MedhaProcessInformation = ({ routePath, upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/PROCESS INFORMATION/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            PROCESS INFORMATION MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    processInformationtabs.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath
                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...processInformationtabs, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaEnergyConsumptionMenu = ({ routePath, upcommingRoutePath }) => {
    const componentPath = 'home-tab/MAIN MENU/PROCESS INFORMATION/ENERGY CONSUMPTION/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            ENERGY CONSUMPTION MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    medhaEnergyConsumptionMenuList.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath
                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...medhaEnergyConsumptionMenuList, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaLifeTimeDataView = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { LIFETIME_DATA, COMMONVARIABLES_DATA } = useWebSocketStore();

    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.LIFETIMEDATA, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);
    const payload = {
        header: 'LIFE TIME ENERGY CONSUMPTION DATA',
        locoNumber: COMMONVARIABLES_DATA.loco_no,
        date: COMMONVARIABLES_DATA.date,
        time: COMMONVARIABLES_DATA.time,
        energyConsumed: LIFETIME_DATA.energyConsumed,
        energyRegenrated: LIFETIME_DATA.energyRegenerated,
        distanceTravelled: LIFETIME_DATA.distanceTravelled
    }
    return (
        <EnergyConsumptionView1 payload={payload} />
    )
}

const MedhaTripDataView = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { TRIP_DATA, COMMONVARIABLES_DATA } = useWebSocketStore();

    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.TRIPDATA, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);

    const payload = {
        header: 'TRIP ENERGY CONSUMPTION DATA',
        locoNumber: COMMONVARIABLES_DATA.loco_no,
        date: COMMONVARIABLES_DATA.date,
        time: COMMONVARIABLES_DATA.time,
        energyConsumed: TRIP_DATA.energyConsumed,
        energyRegenrated: TRIP_DATA.energyRegenerated,
        distanceTravelled: TRIP_DATA.distanceTravelled
    }
    return (
        <EnergyConsumptionView1 payload={payload} />
    )
}

const EnergyConsumptionView1 = ({ payload }) => {
    const datarows = [
        {
            id: 1,
            lable: 'ENERGY CONUMED (IN KWH)',
            data: payload.energyConsumed
        },
        {
            id: 1,
            lable: 'ENERGY REGENRATED (IN KWH)',
            data: payload.energyRegenrated
        },
        {
            id: 1,
            lable: 'DISTANCE TRAVELLED (IN KWS)',
            data: payload.distanceTravelled
        }
    ]
    return (
        <div className={medha_ecv_container}>
            <div className={medha_ecv_container_view}>
                <div className={medha_ecv_container_view_header}>
                    {payload.header}
                </div>
                <div className={medha_ecv_container_view_header_row}>
                    <div style={{ fontWeight: '400' }} className={medha_ecv_container_view_header_cell}>
                        LOCO NO.:
                    </div>
                    <div className={medha_ecv_container_view_header_cell}>
                        {payload.locoNumber}
                    </div>
                    <div style={{ fontWeight: '400' }} className={medha_ecv_container_view_header_cell}>
                        DATE SINCE :
                    </div>
                    <div className={medha_ecv_container_view_header_cell}>
                        {`${payload.date} ${payload.time}`}
                    </div>
                </div>

                {
                    datarows.map((x) => {
                        return (
                            <div className={medha_ecv_container_view_data_row}>
                                <div style={{ fontWeight: '400' }} className={medha_ecv_container_view_data_row_cell}>
                                    {
                                        x.lable
                                    }
                                </div>
                                <div className={medha_ecv_container_view_data_row_cell}>
                                    {
                                        x.data
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={medha_ecv_container_infomation}>
                PRESS (C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={medha_ecv_container_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaMonthlyDataView = () => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { MONTHLY_DATA, COMMONVARIABLES_DATA } = useWebSocketStore();
    const [monthlyData, setMonthlyData] = useState(
        [
            { month: 'MONTH', distanceTravelled: 'DISTANCE TRAVELED (IN KMS)', energyConsumed: 'ENERGY CONSUMED (IN KWH)', energyRegenrated: 'ENERGY REGENRATED (IN KWH)' },
            { month: 'JANUARY', distanceTravelled: 30, energyConsumed: 600, energyRegenrated: 30 },
            { month: 'FEBRUARY', distanceTravelled: 28, energyConsumed: 580, energyRegenrated: 28 },
            { month: 'MARCH', distanceTravelled: 35, energyConsumed: 620, energyRegenrated: 32 },
            { month: 'APRIL', distanceTravelled: 40, energyConsumed: 650, energyRegenrated: 35 },
            { month: 'MAY', distanceTravelled: 45, energyConsumed: 700, energyRegenrated: 38 },
            { month: 'JUNE', distanceTravelled: 50, energyConsumed: 750, energyRegenrated: 40 },
            { month: 'JULY', distanceTravelled: 55, energyConsumed: 780, energyRegenrated: 42 },
            { month: 'AUGUST', distanceTravelled: 60, energyConsumed: 800, energyRegenrated: 45 },
            { month: 'SEPTEMBER', distanceTravelled: 58, energyConsumed: 770, energyRegenrated: 43 },
            { month: 'OCTOBER', distanceTravelled: 53, energyConsumed: 740, energyRegenrated: 40 },
            { month: 'NOVEMBER', distanceTravelled: 47, energyConsumed: 710, energyRegenrated: 38 },
            { month: 'DECEMBER', distanceTravelled: 42, energyConsumed: 680, energyRegenrated: 35 },
        ]
    )


    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.MONTHLYDATA, data: {} },
        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);

    useEffect(() => {
        if (Array.isArray(MONTHLY_DATA)) {
            const data = [
                { month: 'MONTH', distanceTravelled: 'DISTANCE TRAVELED (IN KMS)', energyConsumed: 'ENERGY CONSUMED (IN KWH)', energyRegenerated: 'ENERGY REGENRATED (IN KWH)' },
                ...MONTHLY_DATA
            ];
            setMonthlyData(data);
        }
    }, [MONTHLY_DATA]);

    return (
        <div className={medha_monthly_view_container}>
            <div className={medha_monthly_view_header_view}>
                <UnicInfo1 value={COMMONVARIABLES_DATA?.loco_no} styles={{ height: '100%' }} />
                <UnicInfo1 value={COMMONVARIABLES_DATA?.date} styles={{ height: '100%' }} />
                <UnicInfo1 value={COMMONVARIABLES_DATA?.time} styles={{ height: '100%' }} />


            </div>

            <div className={medha_monthly_data_view}>
                <div className={medha_monthly_data_view_table_container}>
                    <div className={mm_dvt_header}>
                        MONTHLY ENERGY CONSUMPTION DATA
                    </div>
                    <div className={mm_dvt_row}>
                        <div className={mm_dvt_cell}>
                            LOCO NO.:
                        </div>
                        <div style={{ fontWeight: '700' }} className={mm_dvt_cell}>
                            {COMMONVARIABLES_DATA?.loco_no}
                        </div>
                        <div className={mm_dvt_cell}>
                            CURRENT YEAR:
                        </div>
                        <div style={{ fontWeight: '700' }} className={mm_dvt_cell}>
                            {new Date(COMMONVARIABLES_DATA?.date).getFullYear()}
                        </div>
                    </div>
                    {
                        monthlyData.map((x) => {
                            return (
                                <div style={{ background: 'none', textTransform: 'uppercase' }} className={mm_dvt_row}>
                                    <div className={mm_dvt_cell}>
                                        {x.month}
                                    </div>
                                    <div style={{ fontWeight: '700' }} className={mm_dvt_cell}>
                                        {x.distanceTravelled}

                                    </div>
                                    <div style={{ fontWeight: '700' }} className={mm_dvt_cell}>
                                        {x.energyConsumed}
                                    </div>
                                    <div style={{ fontWeight: '700' }} className={mm_dvt_cell}>
                                        {x.energyRegenerated}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={medha_monthly_data_view_footer_instruction}>
                PRESS (C) TO GO TO PREVIOUS SCREEN

            </div>
            <div className={medha_monthly_data_view_footer_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const HelpView = () => {
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            HELP
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={medha_help_view}>
                                RESERVED FOR THE FUTURE PURPOSE.
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    PRESS (C) TO GO TO PREVIOUS SCREEN
                </div>
                <div className={mmv_container_s3}>
                    {
                        [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const AcStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'PANTO STATUS',
            lable1data: 1,
            lable2: 'VCB STATUS',
            lable2data: 1,
            lable3: 'VCB ON',
            lable3data: 'ON'
        },
        {
            id: 2,
            lable1: 'AUX CONV1 ON',
            lable1data: 1,
            lable2: 'AUX CONV2 ON',
            lable2data: 0,
            lable3: 'AUX CONV3 ON',
            lable3data: 1
        },
        {
            id: 3,
            lable1: 'AC1 INP VOLT',
            lable1data: 946,
            lable2: 'AC2 INP VOLT',
            lable2data: 725,
            lable3: 'AC3 INP VOLT',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'AC1 REF VENT',
            lable1data: 1,
            lable2: 'AC2 REF VENT',
            lable2data: 0,
            lable3: 'AC3 REF VENT',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'AC1 REF FREQ',
            lable1data: 50,
            lable2: 'AC2 REF FREQ',
            lable2data: 0,
            lable3: 'AC3 REF FREQ',
            lable3data: 50
        },
        {
            id: 6,
            lable1: 'AC1 OUT FREQ',
            lable1data: 50,
            lable2: 'AC2 OUT FREQ',
            lable2data: 0,
            lable3: 'AC3 OUT FREQ',
            lable3data: 50
        },
        {
            id: 7,
            lable1: 'AC1 SHUT DOWN',
            lable1data: 0,
            lable2: 'AC2 SHUT DOWN',
            lable2data: 1,
            lable3: 'AC3 SHUT DOWN',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'AUXILIARY CONVERTER STATUS',
        type: 'Ac',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const TractionStatus = () => {

    const data = [
        {
            id: 1,
            lable1: 'TM1 STALL TRQ',
            lable1data: 0,
            lable2: 'TM2 STALL TRQ',
            lable2data: 0,
            lable3: 'TM3 STALL TRQ',
            lable3data: 0
        },
        {
            id: 2,
            lable1: 'TM4 STALL TRQ',
            lable1data: 0,
            lable2: 'TM5 STALL TRQ',
            lable2data: 0,
            lable3: 'TM6 STALL TRQ',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'TM1 TORQUE REF',
            lable1data: 0,
            lable2: 'TM2 TORQUE REF',
            lable2data: 0,
            lable3: 'TM3 TORQUE REF',
            lable3data: 0
        },
        {
            id: 4,
            lable1: 'TM4 TORQUE REF',
            lable1data: 0,
            lable2: 'TM5 TORQUE REF',
            lable2data: 0,
            lable3: 'TM6 TORQUE REF',
            lable3data: 0
        },
        {
            id: 5,
            lable1: 'TM1 TORQUE FBK',
            lable1data: 0,
            lable2: 'TM2 TORQUE FBK',
            lable2data: 0,
            lable3: 'TM3 TORQUE FBK',
            lable3data: 0
        },
        {
            id: 6,
            lable1: 'TM4 TORQUE FBK',
            lable1data: 0,
            lable2: 'TM5 TORQUE FBK',
            lable2data: 0,
            lable3: 'TM6 TORQUE FBK',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'TM1 RPM',
            lable1data: 0,
            lable2: 'TM2 RPM',
            lable2data: 0,
            lable3: 'TM3 RPM',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'TRACTION STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const StatusTableView = ({ payload }) => {
    return (
        <div className={actr_table_container}>
            <div className={actr_table_data}>
                <div className={actr_table_header}>
                    {payload.header}
                </div>
                <div className={actr_table_data_view}>
                    {
                        payload.data.map((x, index) => {
                            return (
                                <div className={actr_table_data_row}>
                                    <div style={{ width: '20%' }} className={actr_table_data_cell}>{x.lable1}</div>
                                    <div style={{ width: '13.33%', color: 'rgba(40, 167, 69, 1)', fontWeight: '700' }} className={actr_table_data_cell}>{x.lable1data}</div>
                                    <div style={{ width: '20%' }} className={actr_table_data_cell}>{x.lable2}</div>
                                    <div style={{ width: '13.33%', color: 'rgba(40, 167, 69, 1)', fontWeight: '700' }} className={actr_table_data_cell}>{x.lable2data}</div>
                                    <div style={index == 0 && payload.type === 'Ac' ? { width: '33.33%', justifyContent: 'center' } : { width: '20%' }} className={actr_table_data_cell}>{x.lable3}</div>
                                    {
                                        ((index !== 0 && payload.type == 'Ac') || !payload.type) && <div style={{ width: '13.33%', color: 'rgba(40, 167, 69, 1)', fontWeight: '700' }} className={actr_table_data_cell}>{x.lable3data}</div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={medha_ecv_container_infomation}>
                PRESS (C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={medha_ecv_container_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaMotorTempreture = ({ }) => {

    const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { TRACTIONMOTOR_DATA, HOMESCREEN_DATA } = useWebSocketStore();
    const {
        tm1Temperature, tm2Temperature, tm3Temperature,
        tm4Temperature, tm5Temperature, tm6Temperature
    } = TRACTIONMOTOR_DATA;
    useEffect(() => {
        connectWebSocket([
            { topic: MEDHA_TOPICS.TRACTIONMOTOR, data: {} },

        ]);

        return () => {
            unsubscribeWebSocket();
        };
    }, []);
    const data = [
        {
            id: 1,
            lable1: 'TM1 STATOR TEMP',
            lable1data: tm1Temperature,
            lable2: 'TM2 STATOR TEMP',
            lable2data: tm2Temperature
        },
        {
            id: 2,
            lable1: 'TM3 STATOR TEMP',
            lable1data: tm3Temperature,
            lable2: 'TM4 STATOR TEMP',
            lable2data: tm4Temperature
        },
        {
            id: 3,
            lable1: 'TM5 STATOR TEMP',
            lable1data: tm5Temperature,
            lable2: 'TM6 STATOR TEMP',
            lable2data: tm6Temperature
        }
    ]
    const payload = {
        header: 'TRACTION MOTOR TEMPRETURES',
        data: data,
        HOMESCREEN_DATA: HOMESCREEN_DATA,
    }
    return (
        <MedhaTractionMotorandSimulationStatus payload={payload} />
    )
}

const MedhaSimulation = ({ }) => {
    // const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);
    // const unsubscribeWebSocket = useWebSocketStore((state) => state.unsubscribeWebSocket);
    const { HOMESCREEN_DATA, COMMONVARIABLES_DATA } = useWebSocketStore();

    // useEffect(() => {
    //         connectWebSocket([
    //             { topic: MEDHA_TOPICS.TRACTIONMOTOR, data: {} },

    //         ]);

    //         return () => {
    //             unsubscribeWebSocket();
    //         };
    // }, []);

    const data = [
        {
            id: 1,
            lable1: 'OHE VOLT (KV)',
            lable1data: COMMONVARIABLES_DATA?.ohe_v,
            lable2: 'MCC1 NODE',
            lable2data: COMMONVARIABLES_DATA?.flg
        },
        {
            id: 2,
            lable1: 'LOCO SPEED',
            lable1data: COMMONVARIABLES_DATA?.speed,
            lable2: 'MCC1 NODE',
            lable2data: COMMONVARIABLES_DATA?.flg
        },
        {
            id: 3,
            lable1: 'TE/BE (KN)',
            lable1data: 0,
            lable2: '',
            lable2data: ''
        }
    ]
    const payload = {
        header: 'SIMULATION',
        data: data,
        HOMESCREEN_DATA: HOMESCREEN_DATA,

    }
    return (
        <MedhaTractionMotorandSimulationStatus payload={payload} />
    )
}

const MedhaNodeInformation = ({ }) => {
    const { HOMESCREEN_DATA } = useWebSocketStore();
    const data = [
        {
            id: 1,
            lable1: 'MCC1 NODE',
            lable1data: 550,
            lable2: 'MCC2 NODE',
            lable2data: 550
        },
        {
            id: 2,
            lable1: 'SLV NODE',
            lable1data: 0,
            lable2: 'SPARE 1 NODE',
            lable2data: 570
        },
        {
            id: 3,
            lable1: 'SPARE 2 NODE',
            lable1data: 0,
            lable2: 'SPARE 3 NODE',
            lable2data: 0
        },
        {
            id: 4,
            lable1: '--',
            lable1data: '--',
            lable2: '--',
            lable2data: '--'
        }
    ]
    const payload = {
        header: 'NODE INFORMATION',
        data: data,
        type: 'node',
        HOMESCREEN_DATA: HOMESCREEN_DATA,


    }
    return (
        <MedhaTractionMotorandSimulationStatus payload={payload} />
    )
}

const MedhaTractionMotorandSimulationStatus = ({ payload }) => {
    const [ms1_s3_s1Indicators, setMs1_s3_s1Indicators] = useState([
        {
            id: 1,
            indicator: 'PB'
        },
        {
            id: 2,
            indicator: 'EB'
        },
        {
            id: 3,
            indicator: 'REVERSER'
        },
        {
            id: 4,
            indicator: 'BLCP'
        },
        {
            id: 5,
            indicator: 'BANKING'
        },
        {
            id: 6,
            indicator: 'SIMULATION'
        },
        {
            id: 7,
            indicator: 'TE LIMIT'
        },
        {
            id: 8,
            indicator: 'PANTO'
        }
    ])
    const [tmData, settmData] = useState([
        {
            id: 1,
            lable: 'TM1'
        },
        {
            id: 2,
            lable: 'TM2'
        },
        {
            id: 3,
            lable: 'TM3'
        },
        {
            id: 4,
            lable: 'TM4'
        },
        {
            id: 5,
            lable: 'TM5'
        },
        {
            id: 6,
            lable: 'TM6'
        }
    ])


    useEffect(() => {
        const {
            parking_brake, emergency_brake, reverser, blcp, banking, simulation,
            te_limit, panto, subsystem2, subsystem3
        } = payload.HOMESCREEN_DATA;
        setMs1_s3_s1Indicators([
            {
                id: 1,
                indicator: 'PB',
                status: parking_brake === 1
            },
            {
                id: 2,
                indicator: 'EB',
                status: emergency_brake === 1

            },
            {
                id: 3,
                indicator: 'REVERSER',
                status: (reverser === 0 && 'off' || reverser === 1 && 'auto' || reverser === 2 && 'main')

            },
            {
                id: 4,
                indicator: 'BLCP',
                status: (blcp === 0 && 'off' || blcp === 1 && 'auto' || blcp === 2 && 'main')

            },
            {
                id: 5,
                indicator: 'BANKING',
                status: banking === 1

            },
            {
                id: 6,
                indicator: 'SIMULATION',
                status: simulation === 1

            },
            {
                id: 7,
                indicator: 'TE LIMIT',
                status: te_limit === 1

            },
            {
                id: 8,
                indicator: 'PANTO',
                status: panto === 1

            }
        ])
        settmData([
            {
                id: 1,
                lable: 'TM1',
                status: subsystem2 === 1
            },
            {
                id: 2,
                lable: 'TM2',
                status: subsystem2 === 1

            },
            {
                id: 3,
                lable: 'TM3',
                status: subsystem2 === 1

            },
            {
                id: 4,
                lable: 'TM4',
                status: subsystem3 === 1

            },
            {
                id: 5,
                lable: 'TM5',
                status: subsystem3 === 1

            },
            {
                id: 6,
                lable: 'TM6',
                status: subsystem3 === 1

            }
        ])
    }, [])

    return (
        <div className={mTMandS_container}>
            <div className={mTMandS_container_data}>
                <div className={mTMandS_container_data_indicators}>
                    {
                        ms1_s3_s1Indicators.map((x) => {
                            return (
                                <div className={ms1_s3_s1indicatorsdiv}>
                                    {
                                        (x.indicator === 'PB' || x.indicator === 'EB') && <BreakingIndicators status={x.status} style={{ height: '10vh', width: '10vh' }} indicator={x.indicator} />
                                    }
                                    {
                                        (x.indicator === 'REVERSER' || x.indicator === 'BLCP') && <GearIndicators status={x.status} type={x.indicator} style={{ height: '10vh' }} />
                                    }
                                    {
                                        (x.indicator === 'BANKING' || x.indicator === 'SIMULATION' || x.indicator === 'TE LIMIT') && <ControlsComponent status={x.status} indicator={x.indicator} />
                                    }
                                    {
                                        (x.indicator === 'PANTO') && <PantoIndicator status={x.status} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={mTMandS_container_data_table_tm}>
                    <div className={ms1_s3_s2_s1}>
                        {
                            tmData.map((x) => {
                                return (
                                    <div
                                        style={{
                                            height: "100%", width: '100%',
                                            background: 'rgba(102, 102, 102, 1)',
                                            border: '0.4vh solid rgba(30, 30, 30, 1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <TmComponent indicator={x.lable} status={x.status} style={{ height: '8vh', width: '8vh' }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={mTMandS_container_data_table_view}>
                        <div className={mtms_table_header}>
                            {payload.header}
                        </div>
                        {
                            payload.data.map((x) => {
                                return (
                                    <div style={payload?.type === 'node' ? { height: '19%' } : {}} className={mtms_table_row}>
                                        <div style={{ width: '30%' }} className={mtms_table_row_cell}>{x.lable1}</div>
                                        <div style={{ width: '20%', color: 'rgba(40, 167, 69, 1)' }} className={mtms_table_row_cell}>{x.lable1data}</div>
                                        <div style={{ width: '30%' }} className={mtms_table_row_cell}>{x.lable2}</div>
                                        <div style={{ width: '20%', color: 'rgba(40, 167, 69, 1)' }} className={mtms_table_row_cell}>{x.lable2data}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div className={mTMandS_container_footer}>
                PRESS(C) TO GO TO PREVIOUS SCREEN
            </div>
        </div>
    )
}

const MedhaSoftwareVersions = () => {
    return (
        <SoftwareVersions />
    )
}

const MedhaInchingMode = () => {
    return (
        <div className={mImode_container}>
            <div className={mImode_conditions}>
                <div className={mImode_conditions_container}>
                    <div className={mImode_conditions_header}>
                        INCHING MODE ENTRY CONDITIONS
                    </div>
                    <div className={mImode_conditions_mini_header}>
                        INCHING MODE ENTRY CONDITIONS:
                    </div>
                    <div className={mImode_conditions_view}>
                        <div>
                            LOCO SPEED ZERO,
                        </div>
                        <div>
                            PAN RAISED, VCB CLOSED, ZTEL SW CLOSED, THROTTLE IDLE
                        </div>
                        <div>
                            REVERSER MOVED
                        </div>
                    </div>
                </div>
            </div>
            <div className={mImode_info}>
                PRESS(C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={mImode_menu}>
                {
                    [{ id: 1, lable: 'START TEST' }, { id: 2, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaInchingError = () => {
    const { errors } = useInchingMode();
    return (
        <div className={mImode_container}>


            <div className={mImode_conditions}>
                <div className={mImode_conditions_container}>
                    <div className={mImode_conditions_header}>
                        IMPROPER TEST CONDITIONS
                    </div>
                    <div className={mImode_Errors_view}>
                        {
                            errors?.map((x) => {
                                return (
                                    <div>{x}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={mImode_info}>
            </div>
            <div className={mImode_menu}>
                {
                    [{ id: 1, lable: 'END TEST' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {
                                    x.id ? `${x.lable}` : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaInchingTest = () => {
    const { inchingTestPayload, setErrors, actualSpeed, setSpeed } = useInchingMode();
    return (
        <div className={mImode_container}>


            <div className={mImode_conditions}>
                <div className={mImode_conditions_container}>
                    <div className={mImode_conditions_header}>
                        INCHING MODE
                    </div>
                    <div className={mImode_test_container}>
                        <div className={mImode_test_row}>
                            <div style={{ paddingRight: '1%', justifyContent: 'right', width: '52%' }} className={medhaMimode_actions_row_cell}>
                                SET SPEED :
                            </div>
                            <div style={{ width: '48%', paddingLeft: '1%', background: 'rgba(10, 71, 163, 1)', border: '0.1vh solid rgba(30, 144, 255, 1)' }} className={medhaMimode_actions_row_cell}>
                                {setSpeed}
                            </div>
                        </div>
                        <div className={mImode_test_row}>
                            <div style={{ paddingRight: '1%', justifyContent: 'right', width: '52%' }} className={medhaMimode_actions_row_cell}>
                                ACTUAL SPEED :
                            </div>
                            <div style={{ width: '48%', paddingLeft: '1%' }} className={medhaMimode_actions_row_cell}>
                                {actualSpeed}
                            </div>
                        </div>
                        <div className={mImode_actions_instruction}>
                            RANGE 0.5 KMPH TO 1.5 KMPH
                        </div>
                    </div>
                </div>
            </div>
            <div className={mImode_info}>
                {
                    `PRESS UP, DOWN, SOFT KEYS FOR SPEED ENTRY (<) TO DELETE, (E) TO UPDATE, (C) TO END TEST`
                }
            </div>
            <div className={mImode_menu}>
                {
                    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {
                                    x.id === 0 ? `.${x.id}` : `${x.id}`
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaDirectBRmode = () => {

    return (
        <MedhaBrowseModeView />
    )
}

const MedhaTrainConfiguration = () => {
    const Locos = [
        {
            id: 1,
            trainNumber: 31427
        },
        {
            id: 2,
            trainNumber: 77809
        },
        {
            id: 3,
            trainNumber: 88909
        }
    ]
    return (
        <div className={mt_config_container}>
            <div className={mt_config_data_container}>
                <div className={mt_config_data_table_container}>
                    <div className={mt_config_dt_header}>
                        TRAIN CONFIGURATION
                    </div>
                    <div className={mt_config_dt_data_view}>
                        <div>
                        </div>
                        {
                            Locos.map((x, index) => {
                                return (
                                    <div className={mt_config_dt_data_rows}>
                                        <div>
                                            {`LOCO NUMBER ${index + 1}`}
                                        </div>
                                        <div style={{ color: 'rgba(40, 167, 69, 1)', fontWeight: '700' }}>
                                            {x.trainNumber}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={mt_config_footer_info}>
                PRESS(C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={mt_config_footer_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DriverInfoMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/DRIVER INFO/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            DRIVER INFO MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    driverInfoMenus.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...driverInfoMenus, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const DriverId = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.driverId) {
            setData(settingInformation.driverId);
        }
    }, [settingInformation?.driverId]);

    const payload = {
        header: 'DRIVER ID'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
};

const TrainNumber = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.trainNumber) {
            setData(settingInformation.trainNumber);
        }
    }, [settingInformation?.trainNumber]);

    const payload = {
        header: 'TRAIN NUMBER'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
};

const TrainLoad = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.trainLoad) {
            setData(settingInformation.trainLoad);
        }
    }, [settingInformation?.trainLoad]);

    const payload = {
        header: 'TRAIN LOAD'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
};

const SectionName = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.sectionName) {
            setData(settingInformation.sectionName);
        }
    }, [settingInformation?.sectionName]);

    const payload = {
        header: 'SECTION NAME'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
};

const SettingInformationView = ({ payload, data }) => {
    return (
        <div className={medha_setting_container}>
            <div className={medha_setting_data_container}>
                <div className={medha_setting_data_table}>
                    <div className={medha_setting_data_header}>
                        {payload.header}
                    </div>
                    <div className={medha_setting_data_view}>
                        <div className={medha_setting_data_view_row}>
                            <div className={medha_setting_data_view_cell}>
                                {payload.header}
                            </div>
                            <div style={{ border: 'none', background: 'rgba(10, 71, 163, 1)', justifyContent: 'left' }} className={medha_setting_data_view_cell}>
                                {data}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={medha_setting_footer_info}>
                {`PRESS (<) TO DELETE, (E) TO UPDATE, (C) TO GO TO PREVIOUS SCREEN`}
            </div>
            <div className={medha_setting_menus}>

                {
                    alphaNumericKeys.map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MedhaSettingsView = () => {
    const { settingInformation } = settingInformationstore();
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            PASSWORD
                        </div>
                        <div className={medha_settings_passWordView}>
                            <div className={medha_setting_enter_view}>
                                <div className={medha_settings_passWordView_cell}>
                                    ENTER PASSWORD
                                </div>
                                <div className={medha_settings_passWordView_cell}>
                                    {"*".repeat(settingInformation.password.length)}
                                </div>
                            </div>
                            <div className={medha_setting_Info_view}>
                                USE NUMBER KEYS TO ENTER PASSWORD
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    {`PRESS (<) TO DELETE (C) TO GO TO PREVIOUS SCREEN, (E) TO ENTER`}
                </div>
                <div className={mmv_container_s3}>
                    {
                        [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 },].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MedhaSettingsMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/SETTINGS/SETTINGS_MENU/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            SETTINGS MENU
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    settingsMenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...settingsMenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const LocoTypeEnter = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.locoType) {
            setData(settingInformation.locoType);
        }
    }, [settingInformation?.locoType]);

    const payload = {
        header: 'LOCO TYPE'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
}

const ShedNameEnter = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.shedName) {
            setData(settingInformation.shedName);
        }
    }, [settingInformation?.shedName]);

    const payload = {
        header: 'SHED NAME'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
}

const LocoNumberEnter = () => {
    const { settingInformation } = settingInformationstore();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (settingInformation?.locoNumber) {
            setData(settingInformation.locoNumber);
        }
    }, [settingInformation?.locoNumber]);

    const payload = {
        header: 'LOCO NUMBER'
    };

    return (
        <SettingInformationView payload={payload} data={data} />
    );
}

const DateTimeView = () => {
    const { datetimevalues, segments, activeIndex, setValues, setactiveIndex } = dateEntryStore();
    const { day, month, year, hour, minute, second } = datetimevalues;
    return (
        <div className={medha_setting_container}>
            <div className={medha_setting_data_container}>
                <div className={medha_setting_data_table}>
                    <div className={medha_setting_data_header}>
                        DATE AND TIME
                    </div>
                    <div className={medha_setting_data_view}>
                        <div className={medha_dt_view_container}>
                            <div className={medha_dt_view_row}>
                                <div style={{ border: 'none' }} className={medha_dt_view_header_cell}>

                                </div>
                                <div style={{ borderTop: 'none', borderRight: 'none', borderBottom: 'none', background: 'rgba(10, 71, 163, 1)' }} className={medha_dt_view_header_cell}>
                                    DD/MM/YY
                                </div>
                                <div style={{ borderTop: 'none', borderBottom: 'none', background: 'rgba(10, 71, 163, 1)' }} className={medha_dt_view_header_cell}>
                                    HH/MM/SS
                                </div>
                                <div style={{ border: 'none' }} className={medha_dt_view_header_cell}>

                                </div>
                            </div>
                            <div className={medha_dt_view_row}>
                                <div style={{ border: 'none', background: 'rgba(10, 71, 163, 1)' }} className={medha_dt_view_header_cell}>
                                    DATE & TIME
                                </div>


                                <div style={{ borderTop: 'none', borderRight: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 0 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {day}
                                    </div>
                                    <div style={{ width: '12.5%', borderTop: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                        /
                                    </div>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 1 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {month}
                                    </div>
                                    <div style={{ width: '12.5%', borderTop: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                        /
                                    </div>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 2 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {year}
                                    </div>
                                </div>


                                <div style={{ borderTop: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 3 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {hour}
                                    </div>
                                    <div style={{ width: '12.5%', borderTop: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                        /
                                    </div>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 4 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {minute}
                                    </div>
                                    <div style={{ width: '12.5%', borderTop: 'none', borderBottom: 'none' }} className={medha_dt_view_header_cell}>
                                        /
                                    </div>
                                    <div style={{ width: '25%', border: 'none', background: activeIndex == 5 ? 'rgba(135, 206, 250, 1)' : null }} className={medha_dt_view_header_cell}>
                                        {second}
                                    </div>
                                </div>





                                <div style={{ border: 'none' }} className={medha_dt_view_header_cell}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={medha_setting_footer_info}>
                {`PRESS (UP) AND (DOWN) ARROWS TO CHANGE FIELD, (<) TO DELETE, (E) TO UPDATE, (C) TO GO TO PREVIOUS SCREEN`}
            </div>
            <div className={medha_setting_menus}>

                {
                    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 },].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.id}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DigitalInputStatus = () => {
    const data1 = [
        { id: 0, name: "actkswinc1", value: "off" },
        { id: 1, name: "ConstSpeed1", value: "off" },
        { id: 2, name: "ParkBrake1", value: "off" },
        { id: 3, name: "FwSand1", value: "off" },
        { id: 4, name: "PrimlHigh", value: "off" },
        { id: 5, name: "Compr1MCB", value: "off" },
        { id: 6, name: "VCURelOn", value: "on" },
        { id: 7, name: "VCUTemp", value: "on" },
        { id: 8, name: "FailMode", value: "off" },
        { id: 9, name: "SimMode", value: "off" },
        { id: 10, name: "BankOp1", value: "on" },
        { id: 11, name: "MaxTELimit1", value: "off" },
        { id: 12, name: "EmgStop1", value: "on" },
        { id: 13, name: "FItAck1", value: "off" },
        { id: 14, name: "FtSwLocBrk1", value: "off" },
        { id: 15, name: "LSWConfig", value: "off" },
        { id: 16, name: "HotelOn1", value: "off" },
        { id: 17, name: "VCUlp Spare1", value: "off" },
        { id: 18, name: "VCUlp Spare2", value: "off" },
        { id: 19, name: "VCUlp Spare3", value: "off" },
        { id: 20, name: "VCUlp Spare4", value: "off" },
        { id: 21, name: "VCUlp Spare5", value: "off" },
        { id: 22, name: "VCUlp Spare6", value: "off" },
        { id: 23, name: "VCUlp Spare7", value: "off" }
    ];

    const data2 = [
        { id: 24, name: "ActKswInD1", value: "on" },
        { id: 25, name: "ComprOff1", value: "off" },
        { id: 26, name: "HotelOn1_R", value: "off" },
        { id: 27, name: "DirFor1", value: "off" },
        { id: 28, name: "DirRev1", value: "off" },
        { id: 29, name: "TEDemand1", value: "off" },
        { id: 30, name: "BEDemand1", value: "off" },
        { id: 31, name: "TEBDem1_1by3", value: "off" },
        { id: 32, name: "VCBOn", value: "off" },
        { id: 33, name: "AuxConVCB", value: "off" },
        { id: 34, name: "TM1BIoMCB", value: "on" },
        { id: 35, name: "TscBlo1MCB", value: "on" },
        { id: 36, name: "MscBlo1MCB", value: "on" },
        { id: 37, name: "MRBlo1MCB", value: "on" },
        { id: 38, name: "FuseAux", value: "on" },
        { id: 39, name: "OCBI1MCB", value: "on" },
        { id: 40, name: "BgCutoutlp1", value: "off" },
        { id: 41, name: "FastRel_VCB", value: "on" },
        { id: 42, name: "FItAck1_R", value: "off" },
        { id: 43, name: "VCUlp Spare8", value: "off" },
        { id: 44, name: "VCUlp Spare9", value: "off" },
        { id: 45, name: "VCUlp Spare10", value: "off" },
        { id: 46, name: "VCUlp Spare11", value: "off" },
        { id: 47, name: "VCUlp Spare12", value: "off" }
    ];

    const payload = [
        {
            id: 1,
            header: 'VCU1 DIP1 INPUT CARDS STATUS',
            data: data1,
            height: '50%'
        },
        {
            id: 2,
            header: 'VCU1 DIP2 INPUT CARDS STATUS',
            data: data2,
            height: '50%'
        }
    ]
    return (
        <DigitalStatusTablesView payload={payload} mainHeader={'DIGITAL INPUT SCREENS'} />
    )
}

const DigitalOutputStatus = () => {
    const data1 = [
        { id: 0, name: "HLLamp1", value: "off" },
        { id: 1, name: "WslipLamp1", value: "off" },
        { id: 2, name: "TpartLamp1", value: "off" },
        { id: 3, name: "CSpeedLamp1", value: "off" },
        { id: 4, name: "ParkBkLamp1", value: "off" },
        { id: 5, name: "FaultAckLamp1", value: "off" },
        { id: 6, name: "VCBHoldOn", value: "off" },
        { id: 7, name: "VCBOnPlus", value: "off" },
        { id: 8, name: "VCBDisable", value: "off" },
        { id: 9, name: "VCUOp Spare1", value: "off" },
        { id: 10, name: "VCUOp Spare2", value: "off" },
        { id: 11, name: "ContCompr1", value: "off" },
        { id: 12, name: "LcontSelfH", value: "on" },
        { id: 13, name: "CompSelfH", value: "on" },
        { id: 14, name: "VCUOp Spare3", value: "off" },
        { id: 15, name: "VCUOp Spare4", value: "off" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },

    ];

    const data2 = [
        { id: 16, name: "BuzzBlack1", value: "off" },
        { id: 17, name: "FItLamp1", value: "on" },
        { id: 18, name: "BuzzerRed1", value: "off" },
        { id: 19, name: "FItAckLamp1_R", value: "off" },
        { id: 20, name: "VCUOp Spare5", value: "off" },
        { id: 21, name: "LampTestCB1", value: "off" },
        { id: 22, name: "LcontSelfH_R", value: "on" },
        { id: 23, name: "ReIVCUOf", value: "off" },
        { id: 24, name: "VCBDisable_R", value: "off" },
        { id: 25, name: "AirDryer", value: "off" },
        { id: 26, name: "VCBHoldOn_R", value: "off" },
        { id: 27, name: "VCBOnPlus_R", value: "off" },
        { id: 28, name: "Bg1AntSpin", value: "off" },
        { id: 29, name: "CompSelfH_R", value: "on" },
        { id: 30, name: "ContCompr1_R", value: "off" },
        { id: 31, name: "VCUOp Spare6", value: "off" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
    ];
    const data3 = [
        { id: 32, name: "VCUOp Spare7", value: "off" },
        { id: 33, name: "VCUOp Spare8", value: "off" },
        { id: 34, name: "VCUOp Spare9", value: "off" },
        { id: 35, name: "VCUOp Spare10", value: "off" },
        { id: 36, name: "VCUOp Spare11", value: "off" },
        { id: 37, name: "VCUOp Spare12", value: "off" },
        { id: 38, name: "VCUOp Spare13", value: "off" },
        { id: 39, name: "VCUOp Spare14", value: "off" },
        { id: 40, name: "VCUOp Spare14", value: "off" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" }, ,
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
        { id: '', name: "", value: "" },
    ]
    const payload = [
        {
            id: 1,
            header: 'VCU1 DOP1 OUTPUT CARDS STATUS',
            data: data1,
            height: '38.89%'
        },
        {
            id: 2,
            header: '',
            data: data2,
            height: '38.89%'
        },
        {
            id: 2,
            header: '',
            data: data3,
            height: '22.22%'
        }
    ]
    return (
        <DigitalStatusTablesView payload={payload} mainHeader={'DIGITAL OUTPUT SCREENS'} />
    )
}

const DigitalStatusTablesView = ({ payload, mainHeader }) => {
    const { pageScrool } = PageScrool();
    const scrollableDivRef = useRef(null);
    useEffect(() => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({ top: pageScrool, behavior: "smooth" });
        }
        console.log('pageScrool', pageScrool)
    }, [pageScrool]);
    return (
        <div className={digital_table_container}>
            <div className={digital_table_header}>
                <UnicInfo1 value={'31427'} styles={{ height: '100%' }} />
                <UnicInfo1 value={'26/04/2000'} styles={{ height: '100%' }} />
                <UnicInfo1 value={'00:00:00'} styles={{ height: '100%' }} />
            </div>
            <div className={digital_tables_view_container}>
                <div className={digital_tables}>
                    <div className={digital_tables_header}>
                        {mainHeader}
                    </div>
                    <div id='scrollableDiv' ref={scrollableDivRef} className={digital_tables_data}>
                        {
                            payload.map((x) => {
                                return (
                                    <DigitalStatusTable payload={x} style={{ height: x.height }} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={digital_tables_view_footer_info}>
                PRESS(UP), (DOWN) KEYS TO SCROLL, PRESS(C) TO GO TO PREVIOUS SCREEN
            </div>
            <div className={digital_tables_view_footer_menu}>
                {
                    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {
                                    ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DigitalStatusTable = ({ payload, style }) => {

    return (
        <div style={style} className={dst_table_container}>
            <div style={payload.header == '' ? { background: 'none' } : {}} className={dst_table_Header}>
                {payload.header}
            </div>
            <div className={dst_table_cell_container}>
                {
                    payload.data.map((x) => {

                        return (
                            <div className={dst_table_cell}>
                                < div style={{ height: '100%', width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }}>
                                    {x.id}
                                </div>
                                < div style={{ height: '100%', width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '2%', borderRight: '0.1vh solid rgba(30, 144, 255, 1)' }}>
                                    {x.name}
                                </div>
                                < div style={{ height: '100%', width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '0.1vh solid rgba(30, 144, 255, 1)', color: x.value === 'on' ? 'white' : 'rgba(102, 102, 102, 1)', background: x.value === 'on' ? 'linear-gradient(124.33deg, #28A745 35.99%, #10411B 100%)' : 'none' }}>
                                    {x.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const DataMetersMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/DATA-METERS/'
    const menu = dataMetersMenus.slice(0, 10)

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            DATA METERS
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div style={{ border: 'none' }} className={mmv_container_inner_content_table}>
                                {
                                    dataMetersMenus.slice(0, 6).map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', border: '0.1vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                            <div style={{ border: 'none' }} className={mmv_container_inner_content_table}>
                                {
                                    dataMetersMenus.slice(6,).map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', border: '0.1vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...menu].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const DmMoterandRegenration = () => {
    const data = [
        {
            id: 1,
            lable1: 'BOGIE1 DCLV',
            lable1data: 85,
            lable2: 'BOGIE1 DCLV',
            lable2data: 79,
            lable3: 'VCB ON',
            lable3data: 'ON'
        },
        {
            id: 2,
            lable1: 'BG1 REF POWER',
            lable1data: 1,
            lable2: 'BG2 REF POWER',
            lable2data: 0,
            lable3: 'BATTERY VOLT',
            lable3data: 111
        },
        {
            id: 3,
            lable1: 'BG1 FBK POWER',
            lable1data: 946,
            lable2: 'BG2 FBK POWER',
            lable2data: 725,
            lable3: 'AUX INP VOL',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'BG1-TM REF POWER',
            lable1data: 1,
            lable2: 'BG2-TM REF POWER',
            lable2data: 0,
            lable3: 'PANTO STATUS',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'BG1-TM FBK POWER',
            lable1data: 50,
            lable2: 'BG2-TM FBK POWER',
            lable2data: 0,
            lable3: 'VCB STATUS',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'BG1-LTC-TM EFF',
            lable1data: 50,
            lable2: 'BG2-LTC-TM EFF',
            lable2data: 0,
            lable3: 'AVERAGE RRPM',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'START/RUN',
            lable1data: 0,
            lable2: 'TRACK INTERLOCK',
            lable2data: 1,
            lable3: 'SIMULATION MODE',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'MOTOR AND REGENRATION',
        type: 'Ac',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const DmPneumaticStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'CONTCOMPR1>',
            lable1data: 85,
            lable2: 'MR7_5PRSW<',
            lable2data: 79,
            lable3: 'MR8PRSW<',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'TM1 TORQUE FBK',
            lable1data: 1,
            lable2: 'CONTCOMPR1>',
            lable2data: 0,
            lable3: 'CPUNLOAD',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'BC1PRSW<',
            lable1data: 946,
            lable2: 'BC2PRSW<',
            lable2data: 725,
            lable3: 'LOCBRKPRSW<',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'PAN1PRSW<',
            lable1data: 1,
            lable2: 'VIGEMGBRK<',
            lable2data: 0,
            lable3: 'EMGBRKPRSW<',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'PBAPPLY>',
            lable1data: 50,
            lable2: 'PAN2PRSW<',
            lable2data: 0,
            lable3: 'EMGBRKPRSW_R<',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'PBPrSw<',
            lable1data: 50,
            lable2: 'PBREL>',
            lable2data: 0,
            lable3: 'PARK BRAKE',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'LOCBKCUTOUT>',
            lable1data: 0,
            lable2: 'PBPRSW_R<',
            lable2data: 1,
            lable3: 'AIRFIPRSW<',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'PNEUMATIC STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Bogie1TcStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'TM1 TORQUE REF',
            lable1data: 85,
            lable2: 'TM2 TORQUE REF',
            lable2data: 79,
            lable3: 'TM3 TORQUE REF',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'TM4 TORQUE FBK',
            lable1data: 1,
            lable2: 'TM2 TORQUE FBK',
            lable2data: 0,
            lable3: 'TM3 TORQUE FBK',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'TM1 RPM',
            lable1data: 946,
            lable2: 'TM2 RPM',
            lable2data: 725,
            lable3: 'TM3 RPM',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'TM1_VREF',
            lable1data: 1,
            lable2: 'TM2_VREF',
            lable2data: 0,
            lable3: 'TM3_VREF',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'TM1 L_PEAK',
            lable1data: 50,
            lable2: 'TM2 L_PEAK',
            lable2data: 0,
            lable3: 'TM3 L_PEAK',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'TM1CNTRIWRDFBK',
            lable1data: 50,
            lable2: 'TM2CNTRIWRDFBK>',
            lable2data: 0,
            lable3: 'TM3CNTRIWRDFBK',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'TM1_SLIPSPEED',
            lable1data: 0,
            lable2: 'TM2_SLIPSPEED',
            lable2data: 1,
            lable3: 'TM3_SLIPSPEED',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'BOGIE1 TC STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Bogie2TcStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'TM4 TORQUE REF',
            lable1data: 85,
            lable2: 'TM5 TORQUE REF',
            lable2data: 79,
            lable3: 'TM6 TORQUE REF',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'OHE CURRENT LC1',
            lable1data: 1,
            lable2: 'TM5 TORQUE FBK',
            lable2data: 0,
            lable3: 'TM6 TORQUE FBK',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'TM4 RPM',
            lable1data: 946,
            lable2: 'TM5 RPM',
            lable2data: 725,
            lable3: 'TM6 RPM',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'TM4_VREF',
            lable1data: 1,
            lable2: 'TM5_VREF',
            lable2data: 0,
            lable3: 'TM6_VREF',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'TM4 L_PEAK',
            lable1data: 50,
            lable2: 'TM5 L_PEAK',
            lable2data: 0,
            lable3: 'TM6 L_PEAK',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'TM4CNTRIWRDFBK',
            lable1data: 50,
            lable2: 'TM5CNTRIWRDFBK',
            lable2data: 0,
            lable3: 'TM6CNTRIWRDFBK',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'TM4_SLIPSPEED',
            lable1data: 0,
            lable2: 'TM5_SLIPSPEED',
            lable2data: 1,
            lable3: 'TM6_SLIPSPEED',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'BOGIE2 TC STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Bogie1LcStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'OHE VOLT LC1',
            lable1data: 85,
            lable2: 'OHE VOLT LC2',
            lable2data: 79,
            lable3: 'LC1 POWER FACT',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'OHE CURRENTLC1',
            lable1data: 1,
            lable2: 'OHE CURRENTLC2',
            lable2data: 0,
            lable3: 'LC2 POWER FACT',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'IS LC1',
            lable1data: 946,
            lable2: 'IS LC2',
            lable2data: 725,
            lable3: 'LC1 FLAG STAT',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'IS_RET_LC1',
            lable1data: 1,
            lable2: 'IS_RET_LC2',
            lable2data: 0,
            lable3: 'LC2 FLAG STAT',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'DCLV LC1',
            lable1data: 50,
            lable2: 'DCLV LC2',
            lable2data: 0,
            lable3: 'LINE FREQ LC1',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'LC1_LS REF MAG',
            lable1data: 50,
            lable2: 'LC2_1S REF MAG',
            lable2data: 0,
            lable3: 'LINE FREQ LC2',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'LC1 SHDN TYPE1',
            lable1data: 0,
            lable2: 'LC2 SHDN TYPE1',
            lable2data: 1,
            lable3: 'LC1_DCLVREF',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'BOGIE1 LC STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Bogie2LcStatus = () => {
    const data = [
        {
            id: 1,
            lable1: 'OHE VOLT LC3',
            lable1data: 85,
            lable2: 'OHE VOLT LC4',
            lable2data: 79,
            lable3: 'LC3 POWER FACT',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'OHE CURRENTLC3',
            lable1data: 1,
            lable2: 'OHE CURRENTLC4',
            lable2data: 0,
            lable3: 'LC4 POWER FACT',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'IS LC3',
            lable1data: 946,
            lable2: 'IS LC4',
            lable2data: 725,
            lable3: 'LC3 FLAG STAT',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'IS_RET_LC3',
            lable1data: 1,
            lable2: 'IS_RET_LC4',
            lable2data: 0,
            lable3: 'LC4 FLAG STAT',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'DCLV LC3',
            lable1data: 50,
            lable2: 'DCLV LC4',
            lable2data: 0,
            lable3: 'LINE FREQ LC3',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'LC3_LS REF MAG',
            lable1data: 50,
            lable2: 'LC4_1S REF MAG',
            lable2data: 0,
            lable3: 'LINE FREQ LC4',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'LC3 SHDN TYPE1',
            lable1data: 0,
            lable2: 'LC4 SHDN TYPE1',
            lable2data: 1,
            lable3: 'LC3_DCLVREF',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'BOGIE2 LC STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Auxcon1Status = () => {
    const data = [
        {
            id: 1,
            lable1: 'AUX INP VOL',
            lable1data: 85,
            lable2: 'AUX WINDING I',
            lable2data: 79,
            lable3: 'VCB ON',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'AC1 INP VOLT',
            lable1data: 1,
            lable2: 'AC1 INP CURR',
            lable2data: 0,
            lable3: 'AUX CONV1 ON',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'AC1 DCLV',
            lable1data: 946,
            lable2: 'AC1 DCLI',
            lable2data: 725,
            lable3: 'AC1 IPERLEAK I',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'AC1 REF VENT',
            lable1data: 1,
            lable2: 'AC1 YB PH VOLT',
            lable2data: 0,
            lable3: 'AC1 OpErLeak I',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'AC1 R-PH CURR',
            lable1data: 50,
            lable2: 'AC1 Y-PH CURR',
            lable2data: 0,
            lable3: 'AC1 B-PH CURR',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'AC1 REF VENT',
            lable1data: 50,
            lable2: 'AC1 REF FREQ',
            lable2data: 0,
            lable3: 'AC1 OUT FREQ',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'AC1 VENTLEVEL1',
            lable1data: 0,
            lable2: 'AC1 VENTLEVEL2',
            lable2data: 1,
            lable3: 'AC1 VENTLEVEL3',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'AUX CONVERTER1 STATUS',
        type: 'Ac',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Auxcon2Status = () => {
    const data = [
        {
            id: 1,
            lable1: 'AUX INP VOL',
            lable1data: 85,
            lable2: 'AUX WINDING I',
            lable2data: 79,
            lable3: 'VCB ON',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'AC1 INP VOLT',
            lable1data: 1,
            lable2: 'AC1 INP CURR',
            lable2data: 0,
            lable3: 'AUX CONV1 ON',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'AC1 DCLV',
            lable1data: 946,
            lable2: 'AC1 DCLI',
            lable2data: 725,
            lable3: 'AC1 IPERLEAK I',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'AC1 REF VENT',
            lable1data: 1,
            lable2: 'AC1 YB PH VOLT',
            lable2data: 0,
            lable3: 'AC1 OpErLeak I',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'AC1 R-PH CURR',
            lable1data: 50,
            lable2: 'AC1 Y-PH CURR',
            lable2data: 0,
            lable3: 'AC1 B-PH CURR',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'AC1 REF VENT',
            lable1data: 50,
            lable2: 'AC1 REF FREQ',
            lable2data: 0,
            lable3: 'AC1 OUT FREQ',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'AC1 VENTLEVEL1',
            lable1data: 0,
            lable2: 'AC1 VENTLEVEL2',
            lable2data: 1,
            lable3: 'AC1 VENTLEVEL3',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'AUX CONVERTER2 STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const Auxcon3Status = () => {
    const data = [
        {
            id: 1,
            lable1: 'AUX INP VOL',
            lable1data: 85,
            lable2: 'AUX WINDING I',
            lable2data: 79,
            lable3: 'VCB ON',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'AC1 INP VOLT',
            lable1data: 1,
            lable2: 'AC1 INP CURR',
            lable2data: 0,
            lable3: 'AUX CONV1 ON',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'AC1 DCLV',
            lable1data: 946,
            lable2: 'AC1 DCLI',
            lable2data: 725,
            lable3: 'AC1 IPERLEAK I',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'AC1 REF VENT',
            lable1data: 1,
            lable2: 'AC1 YB PH VOLT',
            lable2data: 0,
            lable3: 'AC1 OpErLeak I',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'AC1 R-PH CURR',
            lable1data: 50,
            lable2: 'AC1 Y-PH CURR',
            lable2data: 0,
            lable3: 'AC1 B-PH CURR',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'AC1 REF VENT',
            lable1data: 50,
            lable2: 'AC1 REF FREQ',
            lable2data: 0,
            lable3: 'AC1 OUT FREQ',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'AC1 VENTLEVEL1',
            lable1data: 0,
            lable2: 'AC1 VENTLEVEL2',
            lable2data: 1,
            lable3: 'AC1 VENTLEVEL3',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'AUX CONVERTER3 STATUS',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const DmTemPre = () => {
    const data = [
        {
            id: 1,
            lable1: 'BG1 T/FOILTMP1',
            lable1data: 85,
            lable2: 'BG1 T/FOILTMP2',
            lable2data: 79,
            lable3: 'BG1 T/FOILTEMP',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'BG2 T/FOILTMP1',
            lable1data: 1,
            lable2: 'BG2 T/FOILTMP2',
            lable2data: 0,
            lable3: 'BG2 T/FOILTEMP',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'BG1 T/FOIL PR1',
            lable1data: 946,
            lable2: 'BG1 T/FOIL PR2',
            lable2data: 725,
            lable3: 'BG1 T/F OIL PR',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'BG2 T/FOIL PR1',
            lable1data: 1,
            lable2: 'BG2 T/FOIL PR2',
            lable2data: 0,
            lable3: 'BG2 T/F OIL PR',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'CONV1 COOLTMP1',
            lable1data: 50,
            lable2: 'CONV1 COOLTMP2',
            lable2data: 0,
            lable3: 'CONV1 COOLTEMP',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'CONV2 COOLTMP1',
            lable1data: 50,
            lable2: 'CONV2 COOLTMP2',
            lable2data: 0,
            lable3: 'CONV2 COOLTEMP',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'CONV1 COOL PR1',
            lable1data: 0,
            lable2: 'CONV1 COOL PR2',
            lable2data: 1,
            lable3: 'CONV1 COOL PR2',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'TEMPRETURE AND PRESSURE',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const DmLtcPhaseTem = () => {
    const data = [
        {
            id: 1,
            lable1: 'TI1 PH TEMP1',
            lable1data: 85,
            lable2: 'TI1 PH TEMP2',
            lable2data: 79,
            lable3: 'TI1 PH TEMP3',
            lable3data: 1
        },
        {
            id: 2,
            lable1: 'TI2 PH TEMP1',
            lable1data: 1,
            lable2: 'TI2 PH TEMP2',
            lable2data: 0,
            lable3: 'TI2 PH TEMP3',
            lable3data: 0
        },
        {
            id: 3,
            lable1: 'TI3 PH TEMP1',
            lable1data: 946,
            lable2: 'TI3 PH TEMP2',
            lable2data: 725,
            lable3: 'TI3 PH TEMP3',
            lable3data: 858
        },
        {
            id: 4,
            lable1: 'TI4 PH TEMP1',
            lable1data: 1,
            lable2: 'TI4 PH TEMP2',
            lable2data: 0,
            lable3: 'TI4 PH TEMP3',
            lable3data: 3
        },
        {
            id: 5,
            lable1: 'TI5 PH TEMP1',
            lable1data: 50,
            lable2: 'TI5 PH TEMP2',
            lable2data: 0,
            lable3: 'TI5 PH TEMP3',
            lable3data: 1
        },
        {
            id: 6,
            lable1: 'TI6 PH TEMP1',
            lable1data: 50,
            lable2: 'TI6 PH TEMP2',
            lable2data: 0,
            lable3: 'TI6 PH TEMP3',
            lable3data: 0
        },
        {
            id: 7,
            lable1: 'LC1 PH TEMP1',
            lable1data: 0,
            lable2: 'LC1 PH TEMP2',
            lable2data: 1,
            lable3: 'LC1 PH TEMP3',
            lable3data: 0
        },


    ]
    const payload = {
        header: 'LTC PHASE PRESSURES',
        data: data
    }

    return (
        <div className={acstatus_container}>
            <StatusTableView payload={payload} />
        </div>
    )
}

const DmLocoTrailParams = () => {
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            TRAIL LOCO PARAMETERS
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={medha_help_view}>
                                RESERVED FOR THE FUTURE PURPOSE.
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    PRESS (C) TO GO TO PREVIOUS SCREEN
                </div>
                <div className={mmv_container_s3}>
                    {
                        [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const ComStatMenu = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/COM-STAT/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            MCC COMM STATUS
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    mccComMenu.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath
                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...mccComMenu, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const Mcc1Status = () => {
    const data = [
        { label: 'ATC1', status: 'OK' }, { label: 'ATC2', status: 'OK' }, { label: 'ATC3', status: 'OK' }, { label: 'ALC11', status: 'OK' }, { label: 'ALC2', status: 'OK' },
        { label: 'ATC4', status: 'OK' }, { label: 'ATC5', status: 'OK' }, { label: 'ATC6', status: 'OK' }, { label: 'ALC21', status: 'OK' }, { label: 'ALC22', status: 'OK' },
        { label: 'AC1', status: 'OK' }, { label: 'AC2', status: 'OK' }, { label: 'AC3', status: 'OK' }, { label: 'MCC (AC)', status: 'OK' }, { label: 'MCC', status: 'OK' },
        { label: 'DIP1', status: 'OK' }, { label: 'DIP2', status: 'OK' }, { label: 'DIP3', status: 'OK' }, { label: 'DIP4', status: 'OK' }, { label: 'DOP1', status: 'OK' },
        { label: 'DOP2', status: 'FAIL' }, { label: 'DOP3', status: 'OK' }, { label: 'DMC', status: 'OK' }, { label: 'ACC', status: 'OK' }, { label: 'TCN', status: 'OK' }
    ]

    const payload = {
        header: 'MCC1 COMM STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}

const Mcc2Status = () => {
    const data = [
        { label: 'ATC1', status: 'OK' }, { label: 'ATC2', status: 'OK' }, { label: 'ATC3', status: 'OK' }, { label: 'ALC11', status: 'OK' }, { label: 'ALC2', status: 'OK' },
        { label: 'ATC4', status: 'OK' }, { label: 'ATC5', status: 'OK' }, { label: 'ATC6', status: 'OK' }, { label: 'ALC21', status: 'OK' }, { label: 'ALC22', status: 'OK' },
        { label: 'AC1', status: 'OK' }, { label: 'AC2', status: 'OK' }, { label: 'AC3', status: 'OK' }, { label: 'MCC (AC)', status: 'OK' }, { label: 'MCC', status: 'OK' },
        { label: 'DIP1', status: 'OK' }, { label: 'DIP2', status: 'OK' }, { label: 'DIP3', status: 'OK' }, { label: 'DIP4', status: 'OK' }, { label: 'DOP1', status: 'OK' },
        { label: 'DOP2', status: 'OK' }, { label: 'DOP3', status: 'OK' }, { label: 'DMC', status: 'FAIL' }, { label: 'ACC', status: 'OK' }, { label: 'TCN', status: 'OK' }
    ]

    const payload = {
        header: 'MCC2 COMM STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}

const Acc1Status = () => {
    const data = [
        { label: 'ATC1', status: 'OK' }, { label: 'ATC2', status: 'OK' }, { label: 'ATC3', status: 'OK' }, { label: 'ALC11', status: 'OK' }, { label: 'ALC2', status: 'OK' },
        { label: 'ATC4', status: 'OK' }, { label: 'ATC5', status: 'OK' }, { label: 'ATC6', status: 'OK' }, { label: 'ALC21', status: 'OK' }, { label: 'ALC22', status: 'OK' },
        { label: 'AC1', status: 'OK' }, { label: 'AC2', status: 'OK' }, { label: 'AC3', status: 'OK' }, { label: 'MCC (AC)', status: 'OK' }, { label: 'MCC', status: 'OK' },
        { label: 'DIP1', status: 'OK' }, { label: 'DIP2', status: 'OK' }, { label: 'DIP3', status: 'OK' }, { label: 'DIP4', status: 'OK' }, { label: 'DOP1', status: 'OK' },
        { label: 'DOP2', status: 'OK' }, { label: 'DOP3', status: 'OK' }, { label: 'DMC', status: 'OK' }, { label: 'ACC', status: 'OK' }, { label: 'TCN', status: 'OK' }
    ]

    const payload = {
        header: 'ACC1 COMMUNICATION STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}

const Acc2Status = () => {
    const data = [
        { label: 'ATC1', status: 'OK' }, { label: 'ATC2', status: 'OK' }, { label: 'ATC3', status: 'OK' }, { label: 'ALC11', status: 'OK' }, { label: 'ALC2', status: 'OK' },
        { label: 'ATC4', status: 'OK' }, { label: 'ATC5', status: 'OK' }, { label: 'ATC6', status: 'OK' }, { label: 'ALC21', status: 'OK' }, { label: 'ALC22', status: 'OK' },
        { label: 'AC1', status: 'OK' }, { label: 'AC2', status: 'OK' }, { label: 'AC3', status: 'OK' }, { label: 'MCC (AC)', status: 'OK' }, { label: 'MCC', status: 'OK' },
        { label: 'DIP1', status: 'OK' }, { label: 'DIP2', status: 'OK' }, { label: 'DIP3', status: 'OK' }, { label: 'DIP4', status: 'OK' }, { label: 'DOP1', status: 'OK' },
        { label: 'DOP2', status: 'OK' }, { label: 'DOP3', status: 'OK' }, { label: 'DMC', status: 'OK' }, { label: 'ACC', status: 'OK' }, { label: 'TCN', status: 'OK' }
    ]

    const payload = {
        header: 'ACC2 COMMUNICATION STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}

const LtcComm = () => {
    const data = [
        { "label": "ATC1 - TMC", "status": "OK" },
        { "label": "ATC2 - TMC", "status": "OK" },
        { "label": "ATC3 - TMC", "status": "OK" },
        { "label": "ALC11 - LC11", "status": "OK" },
        { "label": "ALC12 - LC12", "status": "OK" },
        { "label": "ATC4 - TMC", "status": "OK" },
        { "label": "ATC5 - TMC", "status": "OK" },
        { "label": "ATC6 - TMC", "status": "OK" },
        { "label": "ALC21 - LC21", "status": "OK" },
        { "label": "ALC22 - LC22", "status": "OK" },
    ]

    const payload = {
        header: 'LTC COMMUNICATION STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}

const AuxComm = () => {
    const data = [
        { "label": "AUX1 - CNTRL DSP", "status": "OK" },
        { "label": "AUX2 - CNTRL DSP", "status": "OK" },
        { "label": "AUX3 - CNTRL DSP", "status": "OK" },

    ]

    const payload = {
        header: 'AUX COMMUNICATION STATUS',
        data: data
    }

    return (
        <MccTableView payload={payload} />
    )

}


const MccTableView = ({ payload }) => {
    const data = chunkArray(payload?.data || [], 5);

    // Helper function for status color
    const getStatusColor = (status) =>
        status === "OK" ? "rgba(40, 167, 69, 1)" : "rgba(229, 57, 53, 1)";

    return (
        <div className={mcc_table_container}>
            <div className={mcc_table_data}>
                <div className={mcc_table_data_header}>{payload?.header}</div>

                <div className={mcc_table_data_view}>
                    <div className={mcc_table}>
                        {data.map((row, rowIndex) => (
                            <div key={rowIndex} className={mcc_main_row}>
                                {row.map((cell, cellIndex) => (
                                    <div
                                        key={cellIndex}
                                        className={mcc_main_row_main_cell}
                                        style={{ width: `${100 / row.length}%` }}
                                    >
                                        <div className={mcc_data_cell}>{cell.label}</div>
                                        <div
                                            className={mcc_data_cell}
                                            style={{ color: getStatusColor(cell.status) }}
                                        >
                                            {cell.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={mcc_table_footer_info}>
                PRESS(C) TO GO PREVIOUS SCREEN
            </div>

            <div className={mcc_table_footer_menu}>
                {Array.from({ length: 10 }, (_, index) => (
                    <div key={index} className={unicmenu}></div>
                ))}
            </div>
        </div>
    );
};


const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
}


const IsolateMenus = ({ upcommingRoutePath }) => {
    const componentPath = 'home-tab/ISOLATE/'

    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            ISOLATE MENU SCREEN
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={mmv_container_inner_content_table}>
                                {
                                    isolateMenus.map((x) => {
                                        const justify = componentPath + `${x.lable}/` === upcommingRoutePath

                                        return (
                                            <div style={{ background: justify ? 'rgba(10, 71, 163, 1)' : 'none', paddingLeft: '5%', fontSize: '1.5vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'left', color: justify ? 'white' : 'rgba(168, 230, 163, 1)', borderBottom: '0.2vh solid rgba(168, 230, 163, 1)', height: "14.28%" }}>{`${x.id}. ${x.lable}`}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                        USE NUMBER KEYS FOR SELECTION
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    USE NUMBER OR NAVIGATION KEYS TO SELECT MENU OPTIONS
                </div>
                <div className={mmv_container_s3}>
                    {
                        [...isolateMenus, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const TractionMotorsList = () => {
    const { TractionMotors } = IsolateStore();
    return (
        <IsolationactionView list={TractionMotors} header={'TRACTION MOTORS'} />
    )
}

const LineConverterList = () => {
    const { LineConverters } = IsolateStore();
    return (
        <IsolationactionView list={LineConverters} header={'LINE CONVERTERS ISOLATE'} />
    )
}


const AuxConverterList = () => {
    const { AuxConverters } = IsolateStore();
    return (
        <IsolationactionView list={AuxConverters} header={'AUXILIARY CONVERTERS ISOLATE'} />
    )
}


const IsolationactionView = ({ list, header }) => {
    const { selected } = IsolateStore();
    return (
        <div className={isolate_conatainer}>
            <div className={isolate_conatainer_data}>
                <div className={solate_conatainer_data_view}>
                    <div className={solate_conatainer_data_header}>
                        {header}
                    </div>
                    <div className={isolate_list_view}>
                        {
                            list.map((x) => {
                                const justify = x.id === selected
                                return (
                                    <div style={{ height: `${100 / 6}%` }} className={isolate_list_row}>
                                        < div style={{ width: '40%' }} className={isolate_list_cell}>
                                            {
                                                x.lable
                                            }
                                        </div>
                                        < div style={{ width: '60%', background: justify ? 'rgba(10, 71, 163, 1)' : 'none', border: justify ? '0.1vh solid rgba(30, 144, 255, 1)' : 'none' }} className={isolate_list_cell}>
                                            {
                                                x.status
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={isolate_conatainer_info}>
                PRESS 1 KEY TO EDIT STATUS, (UP), (DOWN) TO NAVIGATE, (LEFT, RIGHT) TO CHANGE STATUS, (E) TO SEND DATA
            </div>
            <div className={isolate_conatainer_menu}>
                {
                    [{ id: 1, lable: 'CHANGE' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const TractionMotorConditions = ({ }) => {
    const conditions = [
        'REVERSER HANDLE MUST BE IN NEUTRAL POSITION,',
        'MCH IDLE CONDITION, LOCO SPEED MUST BE ZERO'
    ]
    return (
        <IsolateConditionsView header={'TM CUTOUT ENTRY CONDITIONS'} conditions={conditions} />
    )
}

const LineConvertersConditions = ({ }) => {
    const conditions = [
        'REVERSER HANDLE MUST BE IN NEUTRAL POSITION,',
        'MCH IDLE CONDITION, LOCO SPEED MUST BE ZERO,PANTO DOWN'
    ]
    return (
        <IsolateConditionsView header={'LC ISOLATE CUTOUT ENTRY CONDITIONS'} conditions={conditions} />
    )
}

const AuxConditions = ({ }) => {
    const conditions = [
        'REVERSER HANDLE MUST BE IN NEUTRAL POSITION,',
        'MCH IDLE CONDITION, LOCO SPEED MUST BE ZERO,PANTO DOWN'
    ]
    return (
        <IsolateConditionsView header={'AC ISOLATE ENTRY CONDITIONS'} conditions={conditions} />
    )
}

const IsolateConditionsView = ({ conditions, header }) => {
    return (
        <div className={isolate_conatainer}>
            <div className={isolate_conatainer_data}>
                <div className={solate_conatainer_data_view}>
                    <div className={solate_conatainer_data_header}>
                        {header}
                    </div>
                    <div style={{ padding: '4% 1% 1% 1%' }} className={isolate_list_view}>
                        {
                            conditions.map((x) => {
                                return (
                                    <div className={conditions_row}>
                                        {x}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={isolate_conatainer_info}>
                PRESS 1 KEY TO EDIT STATUS, (UP), (DOWN) TO NAVIGATE, (LEFT, RIGHT) TO CHANGE STATUS, (E) TO SEND DATA
            </div>
            <div className={isolate_conatainer_menu}>
                {
                    [{ id: 1, lable: 'ENTER' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const IsolationErrors = ({ routePath }) => {
    // 
    const { isolateErrors } = IsolateStore();
    const header =
        (routePath === 'home-tab/ISOLATE/TRACTION MOTORS/ERRORS/' && 'TRACTION MOTOR ISOLATE IMPROPER TEST CONDITIONS') ||
        (routePath === 'home-tab/ISOLATE/LINE CONVERTERS/ERRORS/' && 'LC ISOLATE IMPROPER TEST CONDITIONS') ||
        (routePath === 'home-tab/ISOLATE/AUXILARY CONVERTERS/ERRORS/' && 'AC ISOLATE IMPROPER TEST CONDITIONS')

    return (
        <div className={isolate_conatainer}>
            <div className={isolate_conatainer_data}>
                <div className={solate_conatainer_data_view}>
                    <div className={solate_conatainer_data_header}>
                        {header}
                    </div>
                    <div style={{ padding: '4% 1% 1% 1%' }} className={isolate_list_view}>
                        {
                            isolateErrors.map((x) => {
                                return (
                                    <div className={conditions_row}>
                                        {x}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={isolate_conatainer_info}>
                PRESS(C) TO EXIT
            </div>
            <div className={isolate_conatainer_menu}>
                {
                    [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                        return (
                            <div className={unicmenu}>
                                {x.lable}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const UserProgrmableScreens = () => {
    return (
        <div className={mmv_container}>

            <div className={mmv_container_inner}>
                <div className={mmv_container_s1}>
                    <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', padding: '1vh' }}>
                        <div className={mmv_container_inner_header}>
                            USER DEFINED SCREEN
                        </div>
                        <div className={mmv_container_inner_content}>
                            <div className={medha_help_view}>
                                RESERVED FOR THE FUTURE PURPOSE.
                            </div>
                        </div>
                    </div>


                    <div style={{ height: '10%', width: '100%', borderTop: '0.1vh solid rgba(168, 230, 163, 1)', fontSize: '1.8vh', fontWeight: '590', display: 'flex', alignItems: 'center', justifyContent: 'right', color: 'white', paddingRight: '1vh' }}>
                    </div>

                </div>
                <div className={mmv_container_s2}>
                    PRESS (C) TO GO TO PREVIOUS SCREEN
                </div>
                <div className={mmv_container_s3}>
                    {
                        [{ id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }, { id: '' }].map((x) => {
                            return (
                                <div className={unicmenu}>
                                    {x.id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


