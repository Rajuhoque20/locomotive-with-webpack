import React, { useEffect, useState } from 'react'
import classes from './machineRoom.module.css';
import CustomTooltip from '../../../components/VID/CustomPopover/CustomTooltip';
import MachineRoomBlower from './MachineRoomBlower';
import { useVIDStore } from '../store';
import ScavengeBlower from './scavengeBlower';
import TractionMotorBlower from './tractionMotorBlower';
import OCUTransformer from './OCUTransformer';
import OilPumpConverter from './oilPumpConverter';
import TrConverter from './trConverter';

const buttonInfo={
	HBButton1:{bg:classes.HBButton, text:"HB-1", nav:"HB1"},
	HBButton2:{bg:classes.HBButton, text:"HB-2",  nav:"HB2"},
	SBButton1:{bg:classes.SBButton, text:"SB-1", nav:"SB1"},
	SBButton2:{bg:classes.SBButton, text:"SB-2",  nav:"SB2"},
	filterCubicle:{bg:classes.filterCubicle, text:"H. Filter",  nav:"FILTER_CUBICAL"}
}

export const HBButton=({type="HBButton1"})=>{
	const {setNavPage}=useVIDStore();
	return(
		<div className={`${classes.buttonContainer} ${buttonInfo[type]?.bg}`}
		onClick={()=>{setNavPage(buttonInfo[type]?.nav)}}
		>
			{buttonInfo[type]?.text}
		</div>
	)
}

export const HBButton1=({type="HBButton1"})=>{
	const {setNavPage}=useVIDStore();
	return(
		<div className={`${classes.buttonContainer1} ${buttonInfo[type]?.bg}`}
		onClick={()=>{setNavPage(buttonInfo[type]?.nav)}}
		>
			<div className={classes.cellText}>
				<span>CEL-1</span>
			</div>
			<div className={classes.HB1ButtonText}>
				<span>{buttonInfo[type]?.text}</span>
			</div>
		</div>
	)
}

export const MRButton=({text="MR-1"})=>{
	return(
		<div className={`${classes.buttonContainer} ${classes.MRButton}`}>
			{text}
		</div>
	)
}

export const PNUPanel=()=>{
	const {setNavPage}=useVIDStore();
	return(
		<div className={classes.PNPanel}
		onClick={()=>{setNavPage("PNU")}}
		>
			PN. PANEL
		</div>
	)
}

const MachineRoom=({data})=> {
	 const {setNavPage}=useVIDStore();
	 const type=data?.loco_type||"WAP7";
  return (
    <div style={{width:"100%", height:"95%",}}>
        <svg width="100%" height="100%" viewBox="0 0 1246 777" fill="none">
	<g filter="url(#filter0_i_247_22937)">
		<g opacity="0.1" filter="url(#filter1_f_247_22937)">
			<path
				d="M84.3762 266.062L78.1838 278.083C77.6002 279.216 77.2957 280.472 77.2957 281.747V500.028C77.2957 502.44 78.3836 504.723 80.2568 506.242L84.5008 509.684C85.6803 510.64 87.1077 511.241 88.6161 511.417L237.902 528.767H993.502L1141.01 513.936C1142.83 513.753 1144.53 512.952 1145.83 511.666L1152.46 505.109C1153.99 503.606 1154.84 501.556 1154.84 499.418V282.118C1154.84 280.608 1154.41 279.129 1153.61 277.852L1145.83 265.51C1144.56 263.487 1142.44 262.14 1140.07 261.839L993.502 243.233H237.902L90.4889 261.789C87.8713 262.118 85.5844 263.717 84.3762 266.062Z"
				fill="url(#paint0_linear_247_22937)" />
			<path
				d="M82.3952 280.252L88.5876 268.232C89.0804 267.275 90.013 266.623 91.0806 266.489L238.199 247.97H993.202L1139.47 266.539C1140.44 266.662 1141.3 267.211 1141.82 268.036L1149.6 280.378L1153.61 277.852L1149.6 280.378C1149.93 280.899 1150.1 281.502 1150.1 282.118V499.418C1150.1 500.29 1149.76 501.126 1149.14 501.739L1142.5 508.297L1145.83 511.666L1142.5 508.297C1141.97 508.821 1141.27 509.148 1140.53 509.222L993.264 524.03H238.177L89.163 506.711C88.5478 506.639 87.9656 506.394 87.4846 506.004L83.2406 502.563L80.2649 506.232L83.2406 502.562C82.4767 501.943 82.033 501.012 82.033 500.028V281.747C82.033 281.227 82.1572 280.715 82.3952 280.252Z"
				stroke="url(#paint1_linear_247_22937)" strokeWidth="9.47467" />
		</g>
		<foreignObject x="-13.1022" y="152.835" width="1258.34" height="466.329">
			<div
				style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_0_247_22937_clip_path)",height:"100%",width:"100%"}}>
			</div>
		</foreignObject>
		<path dataFigmaBgBlurRadius="90.3978"
			d="M82.3952 280.252L88.5876 268.232C89.0804 267.275 90.013 266.623 91.0806 266.489L238.199 247.97H993.202L1139.47 266.539C1140.44 266.662 1141.3 267.211 1141.82 268.036L1149.6 280.378L1153.61 277.852L1149.6 280.378C1149.93 280.899 1150.1 281.502 1150.1 282.118V499.418C1150.1 500.29 1149.76 501.126 1149.14 501.739L1142.5 508.297L1145.83 511.666L1142.5 508.297C1141.97 508.821 1141.27 509.148 1140.53 509.222L993.264 524.03H238.177L89.163 506.711C88.5478 506.639 87.9656 506.394 87.4846 506.004L83.2406 502.563L80.2649 506.232L83.2406 502.562C82.4767 501.943 82.033 501.012 82.033 500.028V281.747C82.033 281.227 82.1572 280.715 82.3952 280.252Z"
			fill="url(#paint2_linear_247_22937)" stroke="url(#paint3_linear_247_22937)" strokeWidth="9.47467" />
	</g>
	<g filter="url(#filter3_f_247_22937)">
		<g opacity="0.1" filter="url(#filter4_f_247_22937)">
			<path
				d="M79.8684 278.951L86.0608 266.93C86.9828 265.14 88.728 263.92 90.7256 263.669L238.021 245.128H993.382L1139.83 263.719C1141.64 263.949 1143.26 264.977 1144.23 266.521L1152.01 278.863C1152.62 279.837 1152.95 280.966 1152.95 282.118V499.418C1152.95 501.05 1152.29 502.614 1151.13 503.761L1144.5 510.318C1143.5 511.3 1142.21 511.911 1140.82 512.05L993.407 526.872H238.012L88.8349 509.534C87.6837 509.4 86.5944 508.942 85.6943 508.212L81.4503 504.77C80.0208 503.611 79.1906 501.869 79.1906 500.028V281.747C79.1906 280.774 79.423 279.815 79.8684 278.951Z"
				stroke="#3B3C42" strokeWidth="3.78987" />
		</g>
		<foreignObject x="-13.1022" y="152.835" width="1258.34" height="466.329" >
			<div
            style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_1_247_22937_clip_path)",height:"100%",width:"100%"}}>
			</div>
		</foreignObject>
		<path dataFigmaBgBlurRadius="90.3978"
			d="M79.8684 278.951L86.0608 266.93C86.9828 265.14 88.728 263.92 90.7256 263.669L238.021 245.128H993.382L1139.83 263.719C1141.64 263.949 1143.26 264.977 1144.23 266.521L1152.01 278.863C1152.62 279.837 1152.95 280.966 1152.95 282.118V499.418C1152.95 501.05 1152.29 502.614 1151.13 503.761L1144.5 510.318C1143.5 511.3 1142.21 511.911 1140.82 512.05L993.407 526.872H238.012L88.8349 509.534C87.6837 509.4 86.5944 508.942 85.6943 508.212L81.4503 504.77C80.0208 503.611 79.1906 501.869 79.1906 500.028V281.747C79.1906 280.774 79.423 279.815 79.8684 278.951Z"
			stroke="#3B3C42" strokeWidth="3.78987" />
	</g>
	<g opacity="0.1" filter="url(#filter6_f_247_22937)">
		<path
			d="M89.7445 272.956L85.5589 280.879C84.5627 282.764 84.042 284.865 84.042 286.997V493.124C84.042 497.129 85.8744 500.914 89.0161 503.398L90.0067 504.182C91.924 505.698 94.2273 506.647 96.6561 506.922L242.638 523.466H988.776L1132.68 509.357C1135.61 509.07 1138.37 507.8 1140.49 505.754L1144.09 502.288C1146.65 499.819 1148.1 496.414 1148.1 492.856V287.614C1148.1 285.092 1147.37 282.623 1146 280.505L1140.53 272.045C1138.43 268.789 1134.99 266.632 1131.14 266.156L988.776 248.534H242.638L99.7303 266.074C95.4762 266.596 91.7466 269.167 89.7445 272.956Z"
			fill="url(#paint4_linear_247_22937)" />
		<path
			d="M87.2134 281.753L91.399 273.83C93.1151 270.582 96.3119 268.379 99.9583 267.931L242.752 250.405H988.66L1130.91 268.013C1134.21 268.421 1137.16 270.27 1138.96 273.061L1144.43 281.52C1145.6 283.336 1146.22 285.452 1146.22 287.614V492.856C1146.22 495.906 1144.98 498.824 1142.79 500.941L1139.19 504.406L1140.43 505.691L1139.19 504.406C1137.37 506.16 1135.01 507.249 1132.5 507.495L988.684 521.595H242.743L96.8668 505.063C94.785 504.827 92.8107 504.013 91.1673 502.714L90.1767 501.931C87.4839 499.801 85.9132 496.557 85.9132 493.124V286.997C85.9132 285.169 86.3595 283.369 87.2134 281.753Z"
			stroke="url(#paint5_linear_247_22937)" strokeWidth="3.74241" />
	</g>
	<foreignObject x="-5.2239" y="159.268" width="1242.59" height="453.463" >
		<div
        style={{backdropFilter:"blur(44.63px)",clipPath:"url(#bgblur_2_247_22937_clip_path)",height:"100%",width:"100%"}}>
		</div>
	</foreignObject>
	<path dataFigmaBgBlurRadius="89.2659"
		d="M87.2134 281.753L91.399 273.83C93.1151 270.582 96.3119 268.379 99.9583 267.931L242.752 250.405H988.66L1130.91 268.013C1134.21 268.421 1137.16 270.27 1138.96 273.061L1144.43 281.52C1145.6 283.336 1146.22 285.452 1146.22 287.614V492.856C1146.22 495.906 1144.98 498.824 1142.79 500.941L1139.19 504.406L1140.43 505.691L1139.19 504.406C1137.37 506.16 1135.01 507.249 1132.5 507.495L988.684 521.595H242.743L96.8668 505.063C94.785 504.827 92.8107 504.013 91.1673 502.714L90.1767 501.931C87.4839 499.801 85.9132 496.557 85.9132 493.124V286.997C85.9132 285.169 86.3595 283.369 87.2134 281.753Z"
		fill="url(#paint6_linear_247_22937)" stroke="url(#paint7_linear_247_22937)" strokeWidth="3.74241" />
	<g opacity="0.1" filter="url(#filter8_f_247_22937)">
		<path
			d="M94.205 274.326L88.8316 284.301C88.0877 285.682 87.6984 287.226 87.6984 288.794V491.877C87.6984 494.805 89.0525 497.569 91.3666 499.364L94.4272 501.738C95.8058 502.807 97.4529 503.475 99.1869 503.667L245.204 519.897H986.214L1130.39 506.033C1132.49 505.831 1134.46 504.936 1135.99 503.488L1141.47 498.309C1143.37 496.52 1144.44 494.029 1144.44 491.423V289.246C1144.44 287.393 1143.9 285.58 1142.88 284.033L1136.04 273.663C1134.51 271.339 1132.04 269.806 1129.27 269.471L986.214 252.103H245.204L101.414 269.412C98.3551 269.78 95.6661 271.613 94.205 274.326Z"
			fill="url(#paint8_linear_247_22937)" />
		<path
			d="M91.334 285.649L96.7074 275.674C97.7302 273.775 99.6125 272.492 101.754 272.234L245.375 254.946H986.042L1128.93 272.292C1130.86 272.527 1132.6 273.6 1133.67 275.227L1140.5 285.597C1141.22 286.68 1141.6 287.949 1141.6 289.246V491.423C1141.6 493.247 1140.85 494.991 1139.52 496.243L1134.04 501.422C1132.97 502.436 1131.59 503.063 1130.12 503.204L986.078 517.054H245.362L99.5009 500.842C98.2871 500.707 97.1341 500.24 96.1691 499.491L93.1086 497.118C91.4887 495.862 90.5408 493.927 90.5408 491.877V288.794C90.5408 287.696 90.8133 286.616 91.334 285.649Z"
			stroke="url(#paint9_linear_247_22937)" strokeWidth="5.6848" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(44.63px)",clipPath:"url(#bgblur_3_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<path dataFigmaBgBlurRadius="89.2659"
		d="M91.334 285.649L96.7074 275.674C97.7302 273.775 99.6125 272.492 101.754 272.234L245.375 254.946H986.042L1128.93 272.292C1130.86 272.527 1132.6 273.6 1133.67 275.227L1140.5 285.597C1141.22 286.68 1141.6 287.949 1141.6 289.246V491.423C1141.6 493.247 1140.85 494.991 1139.52 496.243L1134.04 501.422C1132.97 502.436 1131.59 503.063 1130.12 503.204L986.078 517.054H245.362L99.5009 500.842C98.2871 500.707 97.1341 500.24 96.1691 499.491L93.1086 497.118C91.4887 495.862 90.5408 493.927 90.5408 491.877V288.794C90.5408 287.696 90.8133 286.616 91.334 285.649Z"
		fill="url(#paint10_linear_247_22937)" stroke="url(#paint11_linear_247_22937)" strokeWidth="5.6848" />
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_4_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="65.5672" y="292.886" width="13.1735" height="39.6685" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="65.5672" y="292.886" width="13.1735" height="39.6685" stroke="url(#paint12_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_5_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="13.1242" height="27.4956" transform="matrix(-1 0 0 1 63.6689 298.34)"
			fill="#808080" fill-opacity="0.3" style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="13.1242" height="27.4956" transform="matrix(-1 0 0 1 63.6689 298.34)"
			stroke="url(#paint13_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_6_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="40.9004" y="288.029" width="9.01144" height="49.3838" rx="4.50572" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="40.9004" y="288.029" width="9.01144" height="49.3838" rx="4.50572"
			stroke="url(#paint14_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_7_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="65.5672" y="439.331" width="13.1735" height="39.6685" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="65.5672" y="439.331" width="13.1735" height="39.6685" stroke="url(#paint15_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_8_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="13.1242" height="27.4956" transform="matrix(-1 0 0 1 63.6689 444.784)"
			fill="#808080" fill-opacity="0.3" style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="13.1242" height="27.4956" transform="matrix(-1 0 0 1 63.6689 444.784)"
			stroke="url(#paint16_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325" >
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_9_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="40.9004" y="434.473" width="9.01144" height="49.3838" rx="4.50572" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="40.9004" y="434.473" width="9.01144" height="49.3838" rx="4.50572"
			stroke="url(#paint17_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_10_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="13.1735" height="39.6685" transform="matrix(-1 0 0 1 1169.85 292.253)"
			fill="#808080" fill-opacity="0.3"style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="13.1735" height="39.6685" transform="matrix(-1 0 0 1 1169.85 292.253)"
			stroke="url(#paint18_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_11_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="1171.75" y="298.973" width="13.1242" height="27.4956" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="1171.75" y="298.973" width="13.1242" height="27.4956" stroke="url(#paint19_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_12_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="9.01144" height="49.3838" rx="4.50572"
			transform="matrix(-1 0 0 1 1194.52 287.396)" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="9.01144" height="49.3838" rx="4.50572"
			transform="matrix(-1 0 0 1 1194.52 287.396)" stroke="url(#paint20_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_13_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="13.1735" height="39.6685" transform="matrix(-1 0 0 1 1169.85 438.698)"
			fill="#808080" fill-opacity="0.3" style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="13.1735" height="39.6685" transform="matrix(-1 0 0 1 1169.85 438.698)"
			stroke="url(#paint21_linear_247_22937)" strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_14_247_22937_clip_path)",height:"100%",width:"100%"}}>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="1171.75" y="445.417" width="13.1242" height="27.4956" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="1171.75" y="445.417" width="13.1242" height="27.4956" stroke="url(#paint22_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="-1.56753" y="162.837" width="1235.27" height="446.325">
		<div
        
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_15_247_22937_clip_path)",height:"100%",width:"100%"}}>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="-0.632785" y="0.632785" width="9.01144" height="49.3838" rx="4.50572"
			transform="matrix(-1 0 0 1 1194.52 433.84)" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="-0.632785" y="0.632785" width="9.01144" height="49.3838" rx="4.50572"
			transform="matrix(-1 0 0 1 1194.52 433.84)" stroke="url(#paint23_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<g filter="url(#filter10_f_247_22937)">
		<path d="M151.678 271.132L143.022 293.615V480.506L151.389 503.271" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter11_f_247_22937)">
		<line x1="239.873" y1="327.283" x2="239.873" y2="367.801" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter12_f_247_22937)">
		<line x1="239.873" y1="404.199" x2="239.873" y2="512.681" stroke="white" strokeWidth="2" />
	</g>
	
	<g filter="url(#filter13_f_247_22937)">
		<line x1="995.866" y1="359.881" x2="240.187" y2="359.881" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter14_f_247_22937)">
		<line x1="995.866" y1="414.119" x2="240.187" y2="414.119" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter15_f_247_22937)">
		<path d="M1084.68 268.57L1093.71 291.55V482.566L1084.98 505.832" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter16_f_247_22937)">
		<line x1="996.866" y1="257.956" x2="996.866" y2="367.801" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter17_f_247_22937)">
		<line x1="997.751" y1="404.224" x2="996.866" y2="440.195" stroke="white" strokeWidth="2" />
	</g>
	<g filter="url(#filter18_f_247_22937)">
		<line x1="996.866" y1="508.334" x2="996.866" y2="525.462" stroke="white" strokeWidth="2" />
	</g>

	<text
	x={370}
	y={398}
	fontSize={11}
	textAnchor='middle'
	alignmentBaseline='middle'
	fill='#fff'
	>
		Machine Room No. 2
	</text>
	<path
		d="M305.977 396.878H261.485C259.552 396.878 257.985 398.445 257.985 400.378V440.909L260.314 438.58C260.509 438.385 260.825 438.385 261.021 438.58C261.216 438.776 261.216 439.092 261.021 439.287L257.839 442.469C257.643 442.665 257.327 442.665 257.132 442.469L253.95 439.287C253.754 439.092 253.754 438.776 253.95 438.58C254.145 438.385 254.462 438.385 254.657 438.58L256.985 440.909V400.378C256.985 397.893 259 395.878 261.485 395.878H305.977V396.878Z"
		fill="white" />
	<path
		d="M430.128 396.878H971.243C973.176 396.878 974.743 398.445 974.743 400.378V440.909L972.414 438.58C972.219 438.385 971.902 438.385 971.707 438.58C971.512 438.776 971.512 439.092 971.707 439.287L974.889 442.469C975.084 442.665 975.401 442.665 975.596 442.469L978.778 439.287C978.973 439.092 978.973 438.776 978.778 438.58C978.583 438.385 978.266 438.385 978.071 438.58L975.743 440.909V400.378C975.743 397.893 973.728 395.878 971.243 395.878H430.128V396.878Z"
		fill="white" />

		<text
		x={875}
		y={374}
		fontSize={11}
		textAnchor='middle'
		alignmentBaseline='middle'
		fill='#fff'
		>
			Machine Room No. 1
	</text>
	<path
		d="M933.803 373.616H978.295C980.228 373.616 981.795 372.049 981.795 370.116V329.585L979.467 331.914C979.272 332.109 978.955 332.109 978.76 331.914C978.565 331.719 978.565 331.402 978.76 331.207L981.942 328.025C982.137 327.829 982.454 327.829 982.649 328.025L985.831 331.207C986.026 331.402 986.026 331.719 985.831 331.914C985.636 332.109 985.319 332.109 985.124 331.914L982.795 329.585V370.116C982.795 372.601 980.781 374.616 978.295 374.616H933.803V373.616Z"
		fill="white" />
	<path
		d="M811.924 373.616H270.81C268.877 373.616 267.31 372.049 267.31 370.116V329.585L269.639 331.914C269.834 332.109 270.151 332.109 270.346 331.914C270.541 331.719 270.541 331.402 270.346 331.207L267.164 328.025C266.969 327.829 266.652 327.829 266.457 328.025L263.275 331.207C263.079 331.402 263.079 331.719 263.275 331.914C263.47 332.109 263.787 332.109 263.982 331.914L266.31 329.585V370.116C266.31 372.601 268.325 374.616 270.81 374.616H811.924V373.616Z"
		fill="white" />
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279" >
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_16_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="1113.24" y="280.808" width="21.2159" height="88.8829" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="1113.24" y="280.808" width="21.2159" height="88.8829" stroke="url(#paint24_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279" >
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_17_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="101.597" y="280.808" width="21.2159" height="88.8829" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="101.597" y="280.808" width="21.2159" height="88.8829" stroke="url(#paint25_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_18_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="1113.24" y="400.977" width="21.2159" height="88.8829" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="1113.24" y="400.977" width="21.2159" height="88.8829" stroke="url(#paint26_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_19_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="101.597" y="400.977" width="21.2159" height="88.8829" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="101.597" y="400.977" width="21.2159" height="88.8829" stroke="url(#paint27_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<mask id="path-43-inside-1_247_22937" fill="white">
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M179.002 354.317C178.212 354.317 178.141 353.202 178.885 352.938C189.261 349.265 196.76 338.661 196.76 326.153C196.76 313.645 189.261 303.041 178.885 299.367C178.141 299.104 178.212 297.989 179.002 297.989C193.307 297.989 204.904 310.598 204.904 326.153C204.904 341.707 193.307 354.317 179.002 354.317Z" />
	</mask>
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M179.002 354.317C178.212 354.317 178.141 353.202 178.885 352.938C189.261 349.265 196.76 338.661 196.76 326.153C196.76 313.645 189.261 303.041 178.885 299.367C178.141 299.104 178.212 297.989 179.002 297.989C193.307 297.989 204.904 310.598 204.904 326.153C204.904 341.707 193.307 354.317 179.002 354.317Z"
		fill="url(#paint28_linear_247_22937)" />
	<path
		d="M178.885 299.367L178.551 300.31L178.885 299.367ZM178.885 352.938L178.551 351.996L178.885 352.938ZM195.76 326.153C195.76 338.269 188.499 348.473 178.551 351.996L179.219 353.881C190.023 350.056 197.76 339.053 197.76 326.153H195.76ZM178.551 300.31C188.499 303.832 195.76 314.037 195.76 326.153H197.76C197.76 313.252 190.023 302.25 179.219 298.425L178.551 300.31ZM179.002 298.989C192.678 298.989 203.904 311.07 203.904 326.153H205.904C205.904 310.126 193.937 296.989 179.002 296.989V298.989ZM203.904 326.153C203.904 341.235 192.678 353.317 179.002 353.317V355.317C193.937 355.317 205.904 342.179 205.904 326.153H203.904ZM179.219 298.425C179.257 298.438 179.303 298.473 179.334 298.523C179.359 298.565 179.369 298.61 179.365 298.655C179.362 298.699 179.342 298.783 179.261 298.866C179.168 298.962 179.057 298.989 179.002 298.989V296.989C178.552 296.989 178.136 297.155 177.831 297.468C177.538 297.768 177.398 298.148 177.371 298.504C177.318 299.208 177.701 300.009 178.551 300.31L179.219 298.425ZM178.551 351.996C177.701 352.297 177.318 353.098 177.371 353.802C177.398 354.158 177.538 354.537 177.831 354.837C178.136 355.15 178.552 355.317 179.002 355.317V353.317C179.057 353.317 179.168 353.344 179.261 353.44C179.342 353.522 179.362 353.606 179.365 353.651C179.369 353.696 179.359 353.74 179.334 353.782C179.303 353.833 179.257 353.867 179.219 353.881L178.551 351.996Z"
		fill="black" mask="url(#path-43-inside-1_247_22937)" />
	<mask id="path-45-inside-2_247_22937" fill="white">
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M1056.96 354.317C1057.75 354.317 1057.83 353.202 1057.08 352.938C1046.7 349.265 1039.21 338.661 1039.21 326.153C1039.21 313.645 1046.7 303.041 1057.08 299.367C1057.83 299.104 1057.75 297.989 1056.96 297.989C1042.66 297.989 1031.06 310.598 1031.06 326.153C1031.06 341.707 1042.66 354.317 1056.96 354.317Z" />
	</mask>
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M1056.96 354.317C1057.75 354.317 1057.83 353.202 1057.08 352.938C1046.7 349.265 1039.21 338.661 1039.21 326.153C1039.21 313.645 1046.7 303.041 1057.08 299.367C1057.83 299.104 1057.75 297.989 1056.96 297.989C1042.66 297.989 1031.06 310.598 1031.06 326.153C1031.06 341.707 1042.66 354.317 1056.96 354.317Z"
		fill="url(#paint29_linear_247_22937)" />
	<path
		d="M1057.08 299.367L1057.41 300.31L1057.08 299.367ZM1057.08 352.938L1057.41 351.996L1057.08 352.938ZM1040.21 326.153C1040.21 338.269 1047.47 348.473 1057.41 351.996L1056.75 353.881C1045.94 350.056 1038.21 339.053 1038.21 326.153H1040.21ZM1057.41 300.31C1047.47 303.832 1040.21 314.037 1040.21 326.153H1038.21C1038.21 313.252 1045.94 302.25 1056.75 298.425L1057.41 300.31ZM1056.96 298.989C1043.29 298.989 1032.06 311.07 1032.06 326.153H1030.06C1030.06 310.126 1042.03 296.989 1056.96 296.989V298.989ZM1032.06 326.153C1032.06 341.235 1043.29 353.317 1056.96 353.317V355.317C1042.03 355.317 1030.06 342.179 1030.06 326.153H1032.06ZM1056.75 298.425C1056.71 298.438 1056.66 298.473 1056.63 298.523C1056.61 298.566 1056.6 298.61 1056.6 298.655C1056.6 298.699 1056.62 298.783 1056.7 298.866C1056.8 298.962 1056.91 298.989 1056.96 298.989V296.989C1057.41 296.989 1057.83 297.155 1058.14 297.468C1058.43 297.768 1058.57 298.148 1058.59 298.504C1058.65 299.208 1058.26 300.009 1057.41 300.31L1056.75 298.425ZM1057.41 351.996C1058.26 352.297 1058.65 353.098 1058.59 353.802C1058.57 354.158 1058.43 354.537 1058.14 354.837C1057.83 355.15 1057.41 355.317 1056.96 355.317V353.317C1056.91 353.317 1056.8 353.344 1056.7 353.44C1056.62 353.522 1056.6 353.606 1056.6 353.651C1056.6 353.696 1056.61 353.74 1056.63 353.782C1056.66 353.833 1056.71 353.867 1056.75 353.881L1057.41 351.996Z"
		fill="black" mask="url(#path-45-inside-2_247_22937)" />
	<mask id="path-47-inside-3_247_22937" fill="white">
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M179.002 488.143C178.212 488.143 178.141 487.028 178.885 486.764C189.261 483.09 196.76 472.487 196.76 459.979C196.76 447.47 189.261 436.867 178.885 433.193C178.141 432.93 178.212 431.815 179.002 431.815C193.307 431.815 204.904 444.424 204.904 459.979C204.904 475.533 193.307 488.143 179.002 488.143Z" />
	</mask>
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M179.002 488.143C178.212 488.143 178.141 487.028 178.885 486.764C189.261 483.09 196.76 472.487 196.76 459.979C196.76 447.47 189.261 436.867 178.885 433.193C178.141 432.93 178.212 431.815 179.002 431.815C193.307 431.815 204.904 444.424 204.904 459.979C204.904 475.533 193.307 488.143 179.002 488.143Z"
		fill="url(#paint30_linear_247_22937)" />
	<path
		d="M178.885 433.193L179.219 432.25L178.885 433.193ZM178.885 486.764L179.219 487.707L178.885 486.764ZM195.76 459.979C195.76 472.095 188.499 482.299 178.551 485.821L179.219 487.707C190.023 483.881 197.76 472.879 197.76 459.979H195.76ZM178.551 434.136C188.499 437.658 195.76 447.863 195.76 459.979H197.76C197.76 447.078 190.023 436.076 179.219 432.25L178.551 434.136ZM179.002 432.815C192.678 432.815 203.904 444.896 203.904 459.979H205.904C205.904 443.952 193.937 430.815 179.002 430.815V432.815ZM203.904 459.979C203.904 475.061 192.678 487.143 179.002 487.143V489.143C193.937 489.143 205.904 476.005 205.904 459.979H203.904ZM179.219 432.25C179.257 432.264 179.303 432.299 179.334 432.349C179.359 432.391 179.369 432.436 179.365 432.481C179.362 432.525 179.342 432.609 179.261 432.692C179.168 432.788 179.057 432.815 179.002 432.815V430.815C178.552 430.815 178.136 430.981 177.831 431.294C177.538 431.594 177.398 431.974 177.371 432.33C177.318 433.034 177.701 433.835 178.551 434.136L179.219 432.25ZM178.551 485.821C177.701 486.122 177.318 486.923 177.371 487.628C177.398 487.984 177.538 488.363 177.831 488.663C178.136 488.976 178.552 489.143 179.002 489.143V487.143C179.057 487.143 179.168 487.17 179.261 487.265C179.342 487.348 179.362 487.432 179.365 487.477C179.369 487.522 179.359 487.566 179.334 487.608C179.303 487.659 179.257 487.693 179.219 487.707L178.551 485.821Z"
		fill="black" mask="url(#path-47-inside-3_247_22937)" />
	<mask id="path-49-inside-4_247_22937" fill="white">
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M1056.96 488.143C1057.75 488.143 1057.83 487.028 1057.08 486.764C1046.7 483.09 1039.21 472.487 1039.21 459.979C1039.21 447.471 1046.7 436.867 1057.08 433.193C1057.83 432.93 1057.75 431.815 1056.96 431.815C1042.66 431.815 1031.06 444.424 1031.06 459.979C1031.06 475.533 1042.66 488.143 1056.96 488.143Z" />
	</mask>
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M1056.96 488.143C1057.75 488.143 1057.83 487.028 1057.08 486.764C1046.7 483.09 1039.21 472.487 1039.21 459.979C1039.21 447.471 1046.7 436.867 1057.08 433.193C1057.83 432.93 1057.75 431.815 1056.96 431.815C1042.66 431.815 1031.06 444.424 1031.06 459.979C1031.06 475.533 1042.66 488.143 1056.96 488.143Z"
		fill="url(#paint31_linear_247_22937)" />
	<path
		d="M1057.08 486.764L1056.75 487.707L1057.08 486.764ZM1040.21 459.979C1040.21 472.095 1047.47 482.299 1057.41 485.821L1056.75 487.707C1045.94 483.881 1038.21 472.879 1038.21 459.979H1040.21ZM1057.41 434.136C1047.47 437.658 1040.21 447.863 1040.21 459.979H1038.21C1038.21 447.078 1045.94 436.076 1056.75 432.25L1057.41 434.136ZM1056.96 432.815C1043.29 432.815 1032.06 444.896 1032.06 459.979H1030.06C1030.06 443.952 1042.03 430.815 1056.96 430.815V432.815ZM1032.06 459.979C1032.06 475.061 1043.29 487.143 1056.96 487.143V489.143C1042.03 489.143 1030.06 476.005 1030.06 459.979H1032.06ZM1056.75 432.25C1056.71 432.264 1056.66 432.299 1056.63 432.349C1056.61 432.391 1056.6 432.436 1056.6 432.481C1056.6 432.525 1056.62 432.609 1056.7 432.692C1056.8 432.788 1056.91 432.815 1056.96 432.815V430.815C1057.41 430.815 1057.83 430.981 1058.14 431.294C1058.43 431.594 1058.57 431.974 1058.59 432.33C1058.65 433.034 1058.26 433.835 1057.41 434.136L1056.75 432.25ZM1057.41 485.821C1058.26 486.122 1058.65 486.923 1058.59 487.628C1058.57 487.984 1058.43 488.363 1058.14 488.663C1057.83 488.976 1057.41 489.143 1056.96 489.143V487.143C1056.91 487.143 1056.8 487.17 1056.7 487.265C1056.62 487.348 1056.6 487.432 1056.6 487.477C1056.6 487.522 1056.61 487.566 1056.63 487.608C1056.66 487.659 1056.71 487.693 1056.75 487.707L1057.41 485.821Z"
		fill="black" mask="url(#path-49-inside-4_247_22937)" />
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_20_247_22937_clip_path)",height:"100%",width:"100%"}}
			>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="987.621" y="441.008" width="17.9753" height="66.6431" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="987.621" y="441.008" width="17.9753" height="66.6431" stroke="url(#paint32_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	
		<text
		x={998}
		y={475}
		fontSize={11}
		textAnchor='middle'
		alignmentBaseline='middle'
		fill='#fff'
		transform='rotate(-90, 998, 475)'
		>
			Fire ext.
	</text>
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_21_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="230.621" y="368.434" width="17.9753" height="35.1328" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="230.621" y="368.434" width="17.9753" height="35.1328" stroke="url(#paint33_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<foreignObject x="992.866" y="505.334" width="8" height="23.1279">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_22_247_22937_clip_path)",height:"100%",width:"100%"}}
		>
		</div>
	</foreignObject>
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="988.71" y="368.434" width="17.9753" height="35.1328" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="988.71" y="368.434" width="17.9753" height="35.1328" stroke="url(#paint34_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>

{/* scarvenge blower */}
	<foreignObject x="345" y="258" width={35} height={45}>
		<CustomTooltip isWorking={data?.scavenge_blower_traction_motor_blower_1===1}>
				<ScavengeBlower/>
		</CustomTooltip>
	</foreignObject>

	<foreignObject x="668" y="258" width={35} height={45}>
		<CustomTooltip isWorking={data?.scavenge_blower_machine_room_blower_1===1}>
				<ScavengeBlower/>
		</CustomTooltip>
	</foreignObject>

	<foreignObject x="544" y="465" width={35} height={45}>
		<div style={{transform: "rotate(180deg)", }}>
		<CustomTooltip isWorking={data?.scavenge_blower_traction_motor_blower_2===1}>
				<ScavengeBlower/>
		</CustomTooltip>
		</div>
	</foreignObject>

	<foreignObject x="865" y="465" width={35} height={45}>
	<div style={{transform: "rotate(180deg)", }}>
		<CustomTooltip isWorking={data?.scavenge_blower_machine_room_blower_2===1}>
				<ScavengeBlower/>
		</CustomTooltip>
		</div>
	</foreignObject>

	{/* Traction motor blower */}

	<foreignObject x="278" y="258" width={65} height={95}>
		<CustomTooltip isWorking={data?.traction_motor_blower_bogie_2===1}>
				<TractionMotorBlower/>
		</CustomTooltip>
	</foreignObject>

	<foreignObject x="910" y="415" width={65} height={95}>
		<div style={{transform:"rotate(180deg)"}}>
		<CustomTooltip isWorking={data?.traction_motor_blower_bogie_1===1}>
				<TractionMotorBlower/>
		</CustomTooltip>
		</div>
	</foreignObject>

	<g filter="url(#filter21_dd_247_22937)">
		<rect width="13.1617" height="24.3321" rx="2.06163" transform="matrix(1 0 0 -1 442.334 344.396)"
			fill="url(#paint55_linear_247_22937)" />
	</g>
	<g filter="url(#filter22_dd_247_22937)">
		<rect width="33.4751" height="13.0659" rx="2.06163" transform="matrix(1 0 0 -1 422.021 338.763)"
			fill="url(#paint56_linear_247_22937)" />
	</g>

	<foreignObject x="417.417" y="322.123" width="41.5155" height="20.7627">
		<div
        style={{backdropFilter:"blur(45.2px)",clipPath:"url(#bgblur_23_247_22937_clip_path)",height:"100%",width:"100%", }}
		>
		</div>
	</foreignObject>

	{/* OCU transformer */}
	<foreignObject x="460" y="255" width={73} height={86}>
		<CustomTooltip isWorking={data?.oil_cooling_unit_converter_1===1}>
				<OCUTransformer/>
		</CustomTooltip>
	</foreignObject>

	<foreignObject x="712" y="426" width={73} height={86}>
		<div style={{transform:"rotate(180deg)"}}>
		<CustomTooltip isWorking={data?.oil_cooling_unit_converter_2===1}>
				<OCUTransformer/>
		</CustomTooltip>
		</div>
	</foreignObject> 

	{/* Oil pump converter */}
	<foreignObject x="530" y="270" width={32} height={65}>
		<CustomTooltip isWorking={data?.oil_pump_converter_1===1}>
				<OilPumpConverter/>
		</CustomTooltip>
	</foreignObject>

	<foreignObject x="687" y="440" width={32} height={65}>
		<CustomTooltip isWorking={data?.oil_pump_converter_2===1}>
				<OilPumpConverter/>
		</CustomTooltip>
	</foreignObject> 

	<foreignObject x="550" y="255" width={115} height={88}>
				<TrConverter/>
	</foreignObject> 

	<foreignObject x="580" y="430" width={115} height={88}>
		<div style={{transform:"rotate(180deg)"}}>
		<TrConverter text={"Tr. Converter -2"}/>
		</div>
	</foreignObject> 

	<foreignObject x="700" y="270" width={50} height={80}>
			<div style={{ height:"100%", display:"flex", alignItems:"center", justifyItems:"center", width:"100%"}}>
				<CustomTooltip isWorking={data?.machine_room_blower_1===1}>
						<MachineRoomBlower/>
				</CustomTooltip>
			</div>
		</foreignObject>

		<foreignObject x="495" y="430" width={50} height={80}>
			<div style={{ transform: "rotate(180deg)", height:"100%", display:"flex", alignItems:"center", justifyItems:"center", width:"100%"}}>
				<CustomTooltip isWorking={data?.machine_room_blower_2===1}>
						<MachineRoomBlower/>
				</CustomTooltip>
			</div>
		</foreignObject>

		<foreignObject x={880} y={263} width={40} height={80}>
		<HBButton1 type="HBButton1"/>
	</foreignObject>

	<foreignObject x={325} y={430} width={40} height={80}>
		<HBButton  type="HBButton2"/>
	</foreignObject>
	
	{type!=="WAP5"&&<foreignObject x={945} y={263} width={35} height={70}>
		<MRButton text='MR-1'/>
	</foreignObject>}
	{type!=="WAP5"&&<foreignObject x={267} y={440} width={35} height={70}>
		<MRButton text='MR-2'/>
	</foreignObject>}

	<foreignObject x={830} y={263} width={40} height={80}>
		 <HBButton  type='SBButton1'/>
	</foreignObject>

	<foreignObject x={376} y={430} width={40} height={80} style={{overflow:"auto"}}>
		<HBButton  type='SBButton2'/>
	</foreignObject>

	<rect x="751.919" y="262.031" width="63.8472" height="83.9065" rx="6.5" fill="url(#paint99_linear_247_22937)"
		stroke="black" />
	
	<rect x="429.421" y="427.106" width="62.9056" height="83.9065" rx="6.5" fill="url(#paint106_linear_247_22937)"
		stroke="black" />
	<line x1="492.827" y1="469.512" x2="428.921" y2="469.512" stroke="black" strokeWidth="0.903978" />
	<path
		d="M445.749 485.548C446.3 485.651 446.753 485.926 447.107 486.374C447.462 486.822 447.639 487.335 447.639 487.914C447.639 488.437 447.509 488.899 447.247 489.3C446.995 489.692 446.627 490 446.141 490.224C445.656 490.448 445.082 490.56 444.419 490.56H440.205V480.788H444.237C444.9 480.788 445.469 480.895 445.945 481.11C446.431 481.325 446.795 481.623 447.037 482.006C447.289 482.389 447.415 482.823 447.415 483.308C447.415 483.877 447.261 484.353 446.953 484.736C446.655 485.119 446.253 485.389 445.749 485.548ZM442.165 484.82H443.957C444.424 484.82 444.783 484.717 445.035 484.512C445.287 484.297 445.413 483.994 445.413 483.602C445.413 483.21 445.287 482.907 445.035 482.692C444.783 482.477 444.424 482.37 443.957 482.37H442.165V484.82ZM444.139 488.964C444.615 488.964 444.984 488.852 445.245 488.628C445.516 488.404 445.651 488.087 445.651 487.676C445.651 487.256 445.511 486.929 445.231 486.696C444.951 486.453 444.573 486.332 444.097 486.332H442.165V488.964H444.139ZM451.133 480.788V486.836C451.133 487.499 451.306 488.007 451.651 488.362C451.997 488.707 452.482 488.88 453.107 488.88C453.742 488.88 454.232 488.707 454.577 488.362C454.923 488.007 455.095 487.499 455.095 486.836V480.788H457.069V486.822C457.069 487.653 456.887 488.357 456.523 488.936C456.169 489.505 455.688 489.935 455.081 490.224C454.484 490.513 453.817 490.658 453.079 490.658C452.351 490.658 451.689 490.513 451.091 490.224C450.503 489.935 450.037 489.505 449.691 488.936C449.346 488.357 449.173 487.653 449.173 486.822V480.788H451.133ZM464.003 490.56L461.847 486.752H460.923V490.56H458.963V480.788H462.631C463.387 480.788 464.031 480.923 464.563 481.194C465.095 481.455 465.492 481.815 465.753 482.272C466.024 482.72 466.159 483.224 466.159 483.784C466.159 484.428 465.972 485.011 465.599 485.534C465.226 486.047 464.67 486.402 463.933 486.598L466.271 490.56H464.003ZM460.923 485.282H462.561C463.093 485.282 463.49 485.156 463.751 484.904C464.012 484.643 464.143 484.283 464.143 483.826C464.143 483.378 464.012 483.033 463.751 482.79C463.49 482.538 463.093 482.412 462.561 482.412H460.923V485.282ZM473.896 484.736V486.388H467.96V484.736H473.896ZM475.898 483.042C475.945 482.109 476.271 481.39 476.878 480.886C477.494 480.373 478.301 480.116 479.3 480.116C479.981 480.116 480.565 480.237 481.05 480.48C481.535 480.713 481.899 481.035 482.142 481.446C482.394 481.847 482.52 482.305 482.52 482.818C482.52 483.406 482.366 483.905 482.058 484.316C481.759 484.717 481.4 484.988 480.98 485.128V485.184C481.521 485.352 481.941 485.651 482.24 486.08C482.548 486.509 482.702 487.06 482.702 487.732C482.702 488.292 482.571 488.791 482.31 489.23C482.058 489.669 481.68 490.014 481.176 490.266C480.681 490.509 480.084 490.63 479.384 490.63C478.329 490.63 477.471 490.364 476.808 489.832C476.145 489.3 475.795 488.516 475.758 487.48H477.662C477.681 487.937 477.835 488.306 478.124 488.586C478.423 488.857 478.829 488.992 479.342 488.992C479.818 488.992 480.182 488.861 480.434 488.6C480.695 488.329 480.826 487.984 480.826 487.564C480.826 487.004 480.649 486.603 480.294 486.36C479.939 486.117 479.389 485.996 478.642 485.996H478.236V484.386H478.642C479.967 484.386 480.63 483.943 480.63 483.056C480.63 482.655 480.509 482.342 480.266 482.118C480.033 481.894 479.692 481.782 479.244 481.782C478.805 481.782 478.465 481.903 478.222 482.146C477.989 482.379 477.853 482.678 477.816 483.042H475.898Z"
		fill="black" />
	<path
		d="M445.42 446.854C445.971 446.957 446.423 447.232 446.778 447.68C447.133 448.128 447.31 448.642 447.31 449.22C447.31 449.743 447.179 450.205 446.918 450.606C446.666 450.998 446.297 451.306 445.812 451.53C445.327 451.754 444.753 451.866 444.09 451.866H439.876V442.094H443.908C444.571 442.094 445.14 442.202 445.616 442.416C446.101 442.631 446.465 442.93 446.708 443.312C446.96 443.695 447.086 444.129 447.086 444.614C447.086 445.184 446.932 445.66 446.624 446.042C446.325 446.425 445.924 446.696 445.42 446.854ZM441.836 446.126H443.628C444.095 446.126 444.454 446.024 444.706 445.818C444.958 445.604 445.084 445.3 445.084 444.908C445.084 444.516 444.958 444.213 444.706 443.998C444.454 443.784 444.095 443.676 443.628 443.676H441.836V446.126ZM443.81 450.27C444.286 450.27 444.655 450.158 444.916 449.934C445.187 449.71 445.322 449.393 445.322 448.982C445.322 448.562 445.182 448.236 444.902 448.002C444.622 447.76 444.244 447.638 443.768 447.638H441.836V450.27H443.81ZM450.804 442.094V448.142C450.804 448.805 450.977 449.314 451.322 449.668C451.668 450.014 452.153 450.186 452.778 450.186C453.413 450.186 453.903 450.014 454.248 449.668C454.594 449.314 454.766 448.805 454.766 448.142V442.094H456.74V448.128C456.74 448.959 456.558 449.664 456.194 450.242C455.84 450.812 455.359 451.241 454.752 451.53C454.155 451.82 453.488 451.964 452.75 451.964C452.022 451.964 451.36 451.82 450.762 451.53C450.174 451.241 449.708 450.812 449.362 450.242C449.017 449.664 448.844 448.959 448.844 448.128V442.094H450.804ZM463.674 451.866L461.518 448.058H460.594V451.866H458.634V442.094H462.302C463.058 442.094 463.702 442.23 464.234 442.5C464.766 442.762 465.163 443.121 465.424 443.578C465.695 444.026 465.83 444.53 465.83 445.09C465.83 445.734 465.643 446.318 465.27 446.84C464.897 447.354 464.341 447.708 463.604 447.904L465.942 451.866H463.674ZM460.594 446.588H462.232C462.764 446.588 463.161 446.462 463.422 446.21C463.683 445.949 463.814 445.59 463.814 445.132C463.814 444.684 463.683 444.339 463.422 444.096C463.161 443.844 462.764 443.718 462.232 443.718H460.594V446.588ZM473.567 446.042V447.694H467.631V446.042H473.567ZM476.157 449.654C477.053 448.908 477.767 448.287 478.299 447.792C478.831 447.288 479.274 446.766 479.629 446.224C479.983 445.683 480.161 445.151 480.161 444.628C480.161 444.152 480.049 443.779 479.825 443.508C479.601 443.238 479.255 443.102 478.789 443.102C478.322 443.102 477.963 443.261 477.711 443.578C477.459 443.886 477.328 444.311 477.319 444.852H475.415C475.452 443.732 475.783 442.883 476.409 442.304C477.043 441.726 477.846 441.436 478.817 441.436C479.881 441.436 480.697 441.721 481.267 442.29C481.836 442.85 482.121 443.592 482.121 444.516C482.121 445.244 481.925 445.94 481.533 446.602C481.141 447.265 480.693 447.844 480.189 448.338C479.685 448.824 479.027 449.412 478.215 450.102H482.345V451.726H475.429V450.27L476.157 449.654Z"
		fill="black" />
	<path
		d="M769.873 303.473C770.423 303.576 770.876 303.851 771.231 304.299C771.585 304.747 771.763 305.26 771.763 305.839C771.763 306.362 771.632 306.824 771.371 307.225C771.119 307.617 770.75 307.925 770.265 308.149C769.779 308.373 769.205 308.485 768.543 308.485H764.329V298.713H768.361C769.023 298.713 769.593 298.82 770.069 299.035C770.554 299.25 770.918 299.548 771.161 299.931C771.413 300.314 771.539 300.748 771.539 301.233C771.539 301.802 771.385 302.278 771.077 302.661C770.778 303.044 770.377 303.314 769.873 303.473ZM766.289 302.745H768.081C768.547 302.745 768.907 302.642 769.159 302.437C769.411 302.222 769.537 301.919 769.537 301.527C769.537 301.135 769.411 300.832 769.159 300.617C768.907 300.402 768.547 300.295 768.081 300.295H766.289V302.745ZM768.263 306.889C768.739 306.889 769.107 306.777 769.369 306.553C769.639 306.329 769.775 306.012 769.775 305.601C769.775 305.181 769.635 304.854 769.355 304.621C769.075 304.378 768.697 304.257 768.221 304.257H766.289V306.889H768.263ZM775.257 298.713V304.761C775.257 305.424 775.429 305.932 775.775 306.287C776.12 306.632 776.605 306.805 777.231 306.805C777.865 306.805 778.355 306.632 778.701 306.287C779.046 305.932 779.219 305.424 779.219 304.761V298.713H781.193V304.747C781.193 305.578 781.011 306.282 780.647 306.861C780.292 307.43 779.811 307.86 779.205 308.149C778.607 308.438 777.94 308.583 777.203 308.583C776.475 308.583 775.812 308.438 775.215 308.149C774.627 307.86 774.16 307.43 773.815 306.861C773.469 306.282 773.297 305.578 773.297 304.747V298.713H775.257ZM788.126 308.485L785.97 304.677H785.046V308.485H783.086V298.713H786.754C787.51 298.713 788.154 298.848 788.686 299.119C789.218 299.38 789.615 299.74 789.876 300.197C790.147 300.645 790.282 301.149 790.282 301.709C790.282 302.353 790.096 302.936 789.722 303.459C789.349 303.972 788.794 304.327 788.056 304.523L790.394 308.485H788.126ZM785.046 303.207H786.684C787.216 303.207 787.613 303.081 787.874 302.829C788.136 302.568 788.266 302.208 788.266 301.751C788.266 301.303 788.136 300.958 787.874 300.715C787.613 300.463 787.216 300.337 786.684 300.337H785.046V303.207ZM798.019 302.661V304.313H792.083V302.661H798.019ZM799.755 300.085V298.279H803.129V308.485H801.113V300.085H799.755Z"
		fill="black" />
	<g dataFigmaBgBlurRadius="90.3978">
		<rect x="230.621" y="260.008" width="17.9753" height="66.6431" fill="#808080" fill-opacity="0.3"
			style={{mixBlendMode:"luminosity"}} />
		<rect x="230.621" y="260.008" width="17.9753" height="66.6431" stroke="url(#paint107_linear_247_22937)"
			strokeWidth="1.26557" />
	</g>
	<path
		d="M235.216 313.44L236.798 313.44L236.798 317.514L239.304 317.514L239.304 314.392L240.858 314.392L240.858 317.514L244.988 317.514L244.988 319.474L235.216 319.474L235.216 313.44ZM236.308 311.057C236.308 311.402 236.201 311.691 235.986 311.925C235.762 312.149 235.487 312.261 235.16 312.261C234.834 312.261 234.563 312.149 234.348 311.925C234.124 311.691 234.012 311.402 234.012 311.057C234.012 310.711 234.124 310.427 234.348 310.203C234.563 309.969 234.834 309.853 235.16 309.853C235.487 309.853 235.762 309.969 235.986 310.203C236.201 310.427 236.308 310.711 236.308 311.057ZM237.232 310.091L244.988 310.091L244.988 312.051L237.232 312.051L237.232 310.091ZM238.436 306.194C238.026 305.942 237.704 305.615 237.47 305.214C237.237 304.803 237.12 304.337 237.12 303.814L239.178 303.814L239.178 304.332C239.178 304.948 239.323 305.415 239.612 305.732C239.902 306.04 240.406 306.194 241.124 306.194L244.988 306.194L244.988 308.154L237.232 308.154L237.232 306.194L238.436 306.194ZM240.942 295.284C241.222 295.284 241.474 295.303 241.698 295.34L241.698 301.01C242.258 300.963 242.697 300.767 243.014 300.422C243.332 300.077 243.49 299.652 243.49 299.148C243.49 298.42 243.178 297.902 242.552 297.594L242.552 295.48C243.299 295.704 243.915 296.133 244.4 296.768C244.876 297.403 245.114 298.182 245.114 299.106C245.114 299.853 244.951 300.525 244.624 301.122C244.288 301.71 243.817 302.172 243.21 302.508C242.604 302.835 241.904 302.998 241.11 302.998C240.308 302.998 239.603 302.835 238.996 302.508C238.39 302.181 237.923 301.724 237.596 301.136C237.27 300.548 237.106 299.871 237.106 299.106C237.106 298.369 237.265 297.711 237.582 297.132C237.9 296.544 238.352 296.091 238.94 295.774C239.519 295.447 240.186 295.284 240.942 295.284ZM240.382 297.314C239.878 297.323 239.477 297.505 239.178 297.86C238.87 298.215 238.716 298.649 238.716 299.162C238.716 299.647 238.866 300.058 239.164 300.394C239.454 300.721 239.86 300.921 240.382 300.996L240.382 297.314ZM240.942 283.307C241.222 283.307 241.474 283.326 241.698 283.363L241.698 289.033C242.258 288.987 242.697 288.791 243.014 288.445C243.332 288.1 243.49 287.675 243.49 287.171C243.49 286.443 243.178 285.925 242.552 285.617L242.552 283.503C243.299 283.727 243.915 284.157 244.4 284.791C244.876 285.426 245.114 286.205 245.114 287.129C245.114 287.876 244.951 288.548 244.624 289.145C244.288 289.733 243.817 290.195 243.21 290.531C242.604 290.858 241.904 291.021 241.11 291.021C240.308 291.021 239.603 290.858 238.996 290.531C238.39 290.205 237.923 289.747 237.596 289.159C237.27 288.571 237.106 287.895 237.106 287.129C237.106 286.392 237.265 285.734 237.582 285.155C237.9 284.567 238.352 284.115 238.94 283.797C239.519 283.471 240.186 283.307 240.942 283.307ZM240.382 285.337C239.878 285.347 239.477 285.529 239.178 285.883C238.87 286.238 238.716 286.672 238.716 287.185C238.716 287.671 238.866 288.081 239.164 288.417C239.454 288.744 239.86 288.945 240.382 289.019L240.382 285.337ZM244.988 277.593L242.58 279.189L244.988 280.603L244.988 282.703L241.096 280.169L237.232 282.731L237.232 280.519L239.626 278.937L237.232 277.509L237.232 275.409L241.096 277.957L244.988 275.381L244.988 277.593ZM238.842 272.034L242.594 272.034C242.856 272.034 243.047 271.974 243.168 271.852C243.28 271.722 243.336 271.507 243.336 271.208L243.336 270.298L244.988 270.298L244.988 271.53C244.988 273.182 244.186 274.008 242.58 274.008L238.842 274.008L238.842 274.932L237.232 274.932L237.232 274.008L235.314 274.008L235.314 272.034L237.232 272.034L237.232 270.298L238.842 270.298L238.842 272.034ZM245.086 268.02C245.086 268.375 244.979 268.669 244.764 268.902C244.54 269.126 244.265 269.238 243.938 269.238C243.612 269.238 243.341 269.126 243.126 268.902C242.902 268.669 242.79 268.375 242.79 268.02C242.79 267.675 242.902 267.39 243.126 267.166C243.341 266.942 243.612 266.83 243.938 266.83C244.265 266.83 244.54 266.942 244.764 267.166C244.979 267.39 245.086 267.675 245.086 268.02Z"
		fill="#C4C4C4" />
	<rect x="255.993" y="266.737" width="22.1406" height="53.2009" rx="6.5" fill="url(#paint108_linear_247_22937)"
		stroke="black" />
	<path
		d="M270.379 295.874L270.379 299.766L272.241 300.41L272.241 302.468L262.455 298.954L262.455 296.672L272.241 293.158L272.241 295.23L270.379 295.874ZM268.811 296.406L264.723 297.82L268.811 299.234L268.811 296.406ZM272.241 286.805L268.433 288.961L268.433 289.885L272.241 289.885L272.241 291.845L262.469 291.845L262.469 288.177C262.469 287.421 262.604 286.777 262.875 286.245C263.136 285.713 263.495 285.316 263.953 285.055C264.401 284.784 264.905 284.649 265.465 284.649C266.109 284.649 266.692 284.835 267.215 285.209C267.728 285.582 268.083 286.137 268.279 286.875L272.241 284.537L272.241 286.805ZM266.963 289.885L266.963 288.247C266.963 287.715 266.837 287.318 266.585 287.057C266.323 286.795 265.964 286.665 265.507 286.665C265.059 286.665 264.713 286.795 264.471 287.057C264.219 287.318 264.093 287.715 264.093 288.247L264.093 289.885L266.963 289.885Z"
		fill="black" />
	<path
		d="M382.667 265.337C382.667 261.748 385.577 258.837 389.167 258.837H448.496C452.086 258.837 454.996 261.748 454.996 265.337V286.977H382.667V265.337Z"
		fill="url(#paint109_linear_247_22937)" stroke="black" />
	<path
		d="M397.558 270.094L393.974 279.866H391.594L388.01 270.094H390.11L392.798 277.864L395.472 270.094H397.558ZM398.258 274.966C398.258 274.005 398.472 273.146 398.902 272.39C399.34 271.625 399.933 271.032 400.68 270.612C401.436 270.183 402.28 269.968 403.214 269.968C404.306 269.968 405.262 270.248 406.084 270.808C406.905 271.368 407.479 272.143 407.806 273.132H405.552C405.328 272.666 405.01 272.316 404.6 272.082C404.198 271.849 403.732 271.732 403.2 271.732C402.63 271.732 402.122 271.868 401.674 272.138C401.235 272.4 400.89 272.773 400.638 273.258C400.395 273.744 400.274 274.313 400.274 274.966C400.274 275.61 400.395 276.18 400.638 276.674C400.89 277.16 401.235 277.538 401.674 277.808C402.122 278.07 402.63 278.2 403.2 278.2C403.732 278.2 404.198 278.084 404.6 277.85C405.01 277.608 405.328 277.253 405.552 276.786H407.806C407.479 277.785 406.905 278.564 406.084 279.124C405.272 279.675 404.315 279.95 403.214 279.95C402.28 279.95 401.436 279.74 400.68 279.32C399.933 278.891 399.34 278.298 398.902 277.542C398.472 276.786 398.258 275.928 398.258 274.966ZM412.896 270.094C413.922 270.094 414.823 270.295 415.598 270.696C416.382 271.098 416.984 271.672 417.404 272.418C417.833 273.156 418.048 274.014 418.048 274.994C418.048 275.974 417.833 276.833 417.404 277.57C416.984 278.298 416.382 278.863 415.598 279.264C414.823 279.666 413.922 279.866 412.896 279.866H409.48V270.094H412.896ZM412.826 278.2C413.852 278.2 414.646 277.92 415.206 277.36C415.766 276.8 416.046 276.012 416.046 274.994C416.046 273.977 415.766 273.184 415.206 272.614C414.646 272.036 413.852 271.746 412.826 271.746H411.44V278.2H412.826ZM424.783 270.094V276.142C424.783 276.805 424.955 277.314 425.301 277.668C425.646 278.014 426.131 278.186 426.757 278.186C427.391 278.186 427.881 278.014 428.227 277.668C428.572 277.314 428.745 276.805 428.745 276.142V270.094H430.719V276.128C430.719 276.959 430.537 277.664 430.173 278.242C429.818 278.812 429.337 279.241 428.731 279.53C428.133 279.82 427.466 279.964 426.729 279.964C426.001 279.964 425.338 279.82 424.741 279.53C424.153 279.241 423.686 278.812 423.341 278.242C422.995 277.664 422.823 276.959 422.823 276.128V270.094H424.783ZM436.91 271.998C437.834 271.998 438.581 272.292 439.15 272.88C439.72 273.459 440.004 274.271 440.004 275.316V279.866H438.044V275.582C438.044 274.966 437.89 274.495 437.582 274.168C437.274 273.832 436.854 273.664 436.322 273.664C435.781 273.664 435.352 273.832 435.034 274.168C434.726 274.495 434.572 274.966 434.572 275.582V279.866H432.612V272.11H434.572V273.076C434.834 272.74 435.165 272.479 435.566 272.292C435.977 272.096 436.425 271.998 436.91 271.998ZM442.862 271.186C442.517 271.186 442.228 271.079 441.994 270.864C441.77 270.64 441.658 270.365 441.658 270.038C441.658 269.712 441.77 269.441 441.994 269.226C442.228 269.002 442.517 268.89 442.862 268.89C443.208 268.89 443.492 269.002 443.716 269.226C443.95 269.441 444.066 269.712 444.066 270.038C444.066 270.365 443.95 270.64 443.716 270.864C443.492 271.079 443.208 271.186 442.862 271.186ZM443.828 272.11V279.866H441.868V272.11H443.828ZM448.047 273.72V277.472C448.047 277.734 448.107 277.925 448.229 278.046C448.359 278.158 448.574 278.214 448.873 278.214H449.783V279.866H448.551C446.899 279.866 446.073 279.064 446.073 277.458V273.72H445.149V272.11H446.073V270.192H448.047V272.11H449.783V273.72H448.047Z"
		fill="black" />

	<foreignObject x="382" y="285" width={72} height={25} fontSize={11}>
		<PNUPanel/>
	</foreignObject>

		<foreignObject x="808" y="423" width={"38"} height={"87"}>		
				<HBButton  type="filterCubicle"/>
		</foreignObject>

	<path
		d="M1079.14 407.009C1078.18 407.009 1077.32 406.794 1076.57 406.365C1075.8 405.926 1075.21 405.334 1074.79 404.587C1074.36 403.831 1074.14 402.986 1074.14 402.053C1074.14 400.961 1074.42 400.004 1074.98 399.183C1075.54 398.362 1076.32 397.788 1077.31 397.461L1077.31 399.715C1076.84 399.939 1076.49 400.256 1076.26 400.667C1076.02 401.068 1075.91 401.535 1075.91 402.067C1075.91 402.636 1076.04 403.145 1076.31 403.593C1076.58 404.032 1076.95 404.377 1077.43 404.629C1077.92 404.872 1078.49 404.993 1079.14 404.993C1079.79 404.993 1080.36 404.872 1080.85 404.629C1081.34 404.377 1081.71 404.032 1081.98 403.593C1082.25 403.145 1082.38 402.636 1082.38 402.067C1082.38 401.535 1082.26 401.068 1082.03 400.667C1081.78 400.256 1081.43 399.939 1080.96 399.715L1080.96 397.461C1081.96 397.788 1082.74 398.362 1083.3 399.183C1083.85 399.995 1084.13 400.952 1084.13 402.053C1084.13 402.986 1083.92 403.831 1083.5 404.587C1083.07 405.334 1082.47 405.926 1081.72 406.365C1080.96 406.794 1080.1 407.009 1079.14 407.009ZM1082.18 389.795L1082.18 393.687L1084.04 394.331L1084.04 396.389L1074.26 392.875L1074.26 390.593L1084.04 387.079L1084.04 389.151L1082.18 389.795ZM1080.61 390.327L1076.52 391.741L1080.61 393.155L1080.61 390.327ZM1079.03 380.221C1079.13 379.671 1079.41 379.218 1079.86 378.863C1080.3 378.509 1080.82 378.331 1081.4 378.331C1081.92 378.331 1082.38 378.462 1082.78 378.723C1083.17 378.975 1083.48 379.344 1083.71 379.829C1083.93 380.315 1084.04 380.889 1084.04 381.551L1084.04 385.765L1074.27 385.765L1074.27 381.733C1074.27 381.071 1074.38 380.501 1074.59 380.025C1074.81 379.54 1075.11 379.176 1075.49 378.933C1075.87 378.681 1076.3 378.555 1076.79 378.555C1077.36 378.555 1077.84 378.709 1078.22 379.017C1078.6 379.316 1078.87 379.717 1079.03 380.221ZM1078.3 383.805L1078.3 382.013C1078.3 381.547 1078.2 381.187 1077.99 380.935C1077.78 380.683 1077.48 380.557 1077.08 380.557C1076.69 380.557 1076.39 380.683 1076.17 380.935C1075.96 381.187 1075.85 381.547 1075.85 382.013L1075.85 383.805L1078.3 383.805ZM1082.45 381.831C1082.45 381.355 1082.33 380.987 1082.11 380.725C1081.89 380.455 1081.57 380.319 1081.16 380.319C1080.74 380.319 1080.41 380.459 1080.18 380.739C1079.94 381.019 1079.81 381.397 1079.81 381.873L1079.81 383.805L1082.45 383.805L1082.45 381.831ZM1078.22 370.805L1079.87 370.805L1079.87 376.741L1078.22 376.741L1078.22 370.805ZM1075.64 369.069L1073.84 369.069L1073.84 365.695L1084.04 365.695L1084.04 367.711L1075.64 367.711L1075.64 369.069Z"
		fill="#C4C4C4" />
	<path
		d="M159.142 408.992C158.181 408.992 157.322 408.778 156.566 408.348C155.801 407.91 155.208 407.317 154.788 406.57C154.359 405.814 154.144 404.97 154.144 404.036C154.144 402.944 154.424 401.988 154.984 401.166C155.544 400.345 156.319 399.771 157.308 399.444L157.308 401.698C156.841 401.922 156.491 402.24 156.258 402.65C156.025 403.052 155.908 403.518 155.908 404.05C155.908 404.62 156.043 405.128 156.314 405.576C156.575 406.015 156.949 406.36 157.434 406.612C157.919 406.855 158.489 406.976 159.142 406.976C159.786 406.976 160.355 406.855 160.85 406.612C161.335 406.36 161.713 406.015 161.984 405.576C162.245 405.128 162.376 404.62 162.376 404.05C162.376 403.518 162.259 403.052 162.026 402.65C161.783 402.24 161.429 401.922 160.962 401.698L160.962 399.444C161.961 399.771 162.74 400.345 163.3 401.166C163.851 401.978 164.126 402.935 164.126 404.036C164.126 404.97 163.916 405.814 163.496 406.57C163.067 407.317 162.474 407.91 161.718 408.348C160.962 408.778 160.103 408.992 159.142 408.992ZM162.18 391.778L162.18 395.67L164.042 396.314L164.042 398.372L154.256 394.858L154.256 392.576L164.042 389.062L164.042 391.134L162.18 391.778ZM160.612 392.31L156.524 393.724L160.612 395.138L160.612 392.31ZM159.03 382.205C159.133 381.654 159.408 381.202 159.856 380.847C160.304 380.492 160.817 380.315 161.396 380.315C161.919 380.315 162.381 380.446 162.782 380.707C163.174 380.959 163.482 381.328 163.706 381.813C163.93 382.298 164.042 382.872 164.042 383.535L164.042 387.749L154.27 387.749L154.27 383.717C154.27 383.054 154.377 382.485 154.592 382.009C154.807 381.524 155.105 381.16 155.488 380.917C155.871 380.665 156.305 380.539 156.79 380.539C157.359 380.539 157.835 380.693 158.218 381.001C158.601 381.3 158.871 381.701 159.03 382.205ZM158.302 385.789L158.302 383.997C158.302 383.53 158.199 383.171 157.994 382.919C157.779 382.667 157.476 382.541 157.084 382.541C156.692 382.541 156.389 382.667 156.174 382.919C155.959 383.171 155.852 383.53 155.852 383.997L155.852 385.789L158.302 385.789ZM162.446 383.815C162.446 383.339 162.334 382.97 162.11 382.709C161.886 382.438 161.569 382.303 161.158 382.303C160.738 382.303 160.411 382.443 160.178 382.723C159.935 383.003 159.814 383.381 159.814 383.857L159.814 385.789L162.446 385.789L162.446 383.815ZM158.218 372.789L159.87 372.789L159.87 378.725L158.218 378.725L158.218 372.789ZM161.83 370.199C161.083 369.303 160.463 368.589 159.968 368.057C159.464 367.525 158.941 367.081 158.4 366.727C157.859 366.372 157.327 366.195 156.804 366.195C156.328 366.195 155.955 366.307 155.684 366.531C155.413 366.755 155.278 367.1 155.278 367.567C155.278 368.033 155.437 368.393 155.754 368.645C156.062 368.897 156.487 369.027 157.028 369.037L157.028 370.941C155.908 370.903 155.059 370.572 154.48 369.947C153.901 369.312 153.612 368.509 153.612 367.539C153.612 366.475 153.897 365.658 154.466 365.089C155.026 364.519 155.768 364.235 156.692 364.235C157.42 364.235 158.115 364.431 158.778 364.823C159.441 365.215 160.019 365.663 160.514 366.167C160.999 366.671 161.587 367.329 162.278 368.141L162.278 364.011L163.902 364.011L163.902 370.927L162.446 370.927L161.83 370.199Z"
		fill="#C4C4C4" />
	<path d="M352.5 256.964L352.5 174.625" stroke="white" strokeWidth="3" />
	
	<text
		x={357}
		y={120}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={357} dy="0">Scavenge Blower-2</tspan>
		<tspan x={357} dy="18"> for Traction Motor</tspan>
		<tspan x={357} dy="18">  Blower-2</tspan>
		</text>
	<path
		d="M351.439 258.025C352.025 258.61 352.975 258.61 353.561 258.025L363.106 248.479C363.692 247.893 363.692 246.943 363.106 246.357C362.521 245.771 361.571 245.771 360.985 246.357L352.5 254.843L344.015 246.357C343.429 245.771 342.479 245.771 341.893 246.357C341.307 246.943 341.307 247.893 341.893 248.479L351.439 258.025ZM354 256.964L354 252.103L351 252.103L351 256.964L354 256.964Z"
		fill="white" />
	<path d="M296.353 256.964L296 200H220V45.824" stroke="white" strokeWidth="3"/>
	<text
		x={225}
		y={15}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={225} dy="0">Traction Motor</tspan>
		<tspan x={225} dy="18"> Blower No.2</tspan>
		</text>
	
	<path
		d="M295.292 258.025C295.878 258.611 296.828 258.611 297.414 258.025L306.96 248.479C307.545 247.893 307.545 246.943 306.96 246.358C306.374 245.772 305.424 245.772 304.838 246.358L296.353 254.843L287.868 246.358C287.282 245.772 286.332 245.772 285.746 246.358C285.161 246.943 285.161 247.893 285.746 248.479L295.292 258.025ZM297.853 256.964L297.853 252.103L294.853 252.103L294.853 256.964L297.853 256.964Z"
		fill="white" />
	<path d="M488.718 256.964L488.718 45.824" stroke="white" strokeWidth="3" />
	<text
		x={490}
		y={15}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={490} dy="0">Oil Cooling </tspan>
		<tspan x={490} dy="18">Unit 1</tspan>
		</text>
	
	<path
		d="M487.658 258.025C488.243 258.611 489.193 258.611 489.779 258.025L499.325 248.479C499.911 247.893 499.911 246.943 499.325 246.358C498.739 245.772 497.789 245.772 497.204 246.358L488.718 254.843L480.233 246.358C479.647 245.772 478.697 245.772 478.112 246.358C477.526 246.943 477.526 247.893 478.112 248.479L487.658 258.025ZM490.218 256.964L490.218 252.103L487.218 252.103L487.218 256.964L490.218 256.964Z"
		fill="white" />
	<path d="M681.084 256.964L681.084 67.824" stroke="white" strokeWidth="3" />
			<text
		x={684}
		y={15}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={684} dy="0">Scavenge Blower - 1</tspan>
		<tspan x={684} dy="18">for Machine Room</tspan>
		<tspan x={684} dy="18">Blower - 1</tspan>
		</text>
	
	<path
		d="M680.023 258.025C680.609 258.611 681.558 258.611 682.144 258.025L691.69 248.479C692.276 247.893 692.276 246.943 691.69 246.358C691.104 245.772 690.155 245.772 689.569 246.358L681.084 254.843L672.598 246.358C672.013 245.772 671.063 245.772 670.477 246.358C669.891 246.943 669.891 247.893 670.477 248.479L680.023 258.025ZM682.584 256.964L682.584 252.103L679.584 252.103L679.584 256.964L682.584 256.964Z"
		fill="white" />
	<path d="M544.865 256.964L544.865 174.625" stroke="white" strokeWidth="3" />
	<text
		x={550}
		y={150}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		MPH-1
		</text>
	
	<path
		d="M543.805 258.025C544.39 258.61 545.34 258.61 545.926 258.025L555.472 248.479C556.058 247.893 556.058 246.943 555.472 246.357C554.886 245.771 553.936 245.771 553.351 246.357L544.865 254.843L536.38 246.357C535.794 245.771 534.844 245.771 534.259 246.357C533.673 246.943 533.673 247.893 534.259 248.479L543.805 258.025ZM546.365 256.964L546.365 252.103L543.365 252.103L543.365 256.964L546.365 256.964Z"
		fill="white" />
	<path d="M737.231 256.964L737.231 189.874" stroke="white" strokeWidth="3" />
	<text
		x={745}
		y={155}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={745} dy="0">Machine Room</tspan>
		<tspan x={745} dy="18">Blower 1</tspan>
		</text>
	
	<path
		d="M736.17 258.025C736.756 258.61 737.705 258.61 738.291 258.025L747.837 248.479C748.423 247.893 748.423 246.943 747.837 246.357C747.251 245.771 746.302 245.771 745.716 246.357L737.231 254.843L728.745 246.357C728.16 245.771 727.21 245.771 726.624 246.357C726.038 246.943 726.038 247.893 726.624 248.479L736.17 258.025ZM738.731 256.964L738.731 252.103L735.731 252.103L735.731 256.964L738.731 256.964Z"
		fill="white" />
	<path d="M562.5 520.867L562.5 582.205" stroke="white" strokeWidth="3" />
	<text
		x={565}
		y={600}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={565} dy="0">Scavenge Blower-2</tspan>
		<tspan x={565} dy="18"> for Traction Motor</tspan>
		<tspan x={565} dy="18">  Blower-2</tspan>
		</text>
	
	<path
		d="M561.439 519.806C562.025 519.22 562.975 519.22 563.561 519.806L573.106 529.352C573.692 529.938 573.692 530.888 573.106 531.473C572.521 532.059 571.571 532.059 570.985 531.473L562.5 522.988L554.015 531.473C553.429 532.059 552.479 532.059 551.893 531.473C551.307 530.888 551.307 529.938 551.893 529.352L561.439 519.806ZM564 520.867L564 525.728L561 525.728L561 520.867L564 520.867Z"
		fill="white" />
	<path d="M518, 520L518, 560L450, 560V710" stroke="white" strokeWidth="3" />
     <text
		x={450}
		y={730}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={450} dy="0">Machine Room</tspan>
		<tspan x={450} dy="18"> Blower 2</tspan>
		</text>
	<path
		d="M517.292 519.806C517.878 519.22 518.828 519.22 519.414 519.806L528.96 529.352C529.545 529.938 529.545 530.887 528.96 531.473C528.374 532.059 527.424 532.059 526.838 531.473L518.353 522.988L509.868 531.473C509.282 532.059 508.332 532.059 507.746 531.473C507.161 530.887 507.161 529.938 507.746 529.352L517.292 519.806ZM519.853 520.866L519.853 525.727L516.853 525.727L516.853 520.866L519.853 520.866Z"
		fill="white" />
	<path d="M698.718 520.866L698.718 582.205" stroke="white" strokeWidth="3" />
	<text
		x={700}
		y={600}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		MPH-2
		</text>
	
	<path
		d="M697.658 519.806C698.243 519.22 699.193 519.22 699.779 519.806L709.325 529.352C709.911 529.938 709.911 530.887 709.325 531.473C708.739 532.059 707.789 532.059 707.204 531.473L698.718 522.988L690.233 531.473C689.647 532.059 688.697 532.059 688.112 531.473C687.526 530.887 687.526 529.938 688.112 529.352L697.658 519.806ZM700.218 520.866L700.218 525.727L697.218 525.727L697.218 520.866L700.218 520.866Z"
		fill="white" />
	<path d="M891.084 520.866L891.084 580.397" stroke="white" strokeWidth="3" />
		<text
			x={890}
			y={600}
			fontSize={14}
			fontWeight={600}
			textAnchor="middle"
			alignmentBaseline="middle"
			fill="#fff"
			>
			<tspan x={890} dy="0"> Scavenge Blower - 1</tspan>
			<tspan x={890} dy="18">for Machine Room </tspan>
			<tspan x={890} dy={"20"}> Blower - 1</tspan>
		</text>
	<path
		d="M890.023 519.806C890.609 519.22 891.558 519.22 892.144 519.806L901.69 529.352C902.276 529.938 902.276 530.887 901.69 531.473C901.104 532.059 900.155 532.059 899.569 531.473L891.084 522.988L882.598 531.473C882.013 532.059 881.063 532.059 880.477 531.473C879.891 530.887 879.891 529.938 880.477 529.352L890.023 519.806ZM892.584 520.866L892.584 525.727L889.584 525.727L889.584 520.866L892.584 520.866Z"
		fill="white" />
	<path d="M754.865 520.867L754.865 710.007" stroke="white" strokeWidth="3" />
		<text
				x={758}
				y={730}
				fontSize={14}
				fontWeight={600}
				textAnchor="middle"
				alignmentBaseline="middle"
				fill="#fff"
				>
				<tspan x={758} dy="0">Oil Cooling </tspan>
				<tspan x={758} dy="18">Unit 2</tspan>
		</text>

		<text
			x={390}
			y={333}
			fontSize={14}
			fontWeight={600}
			textAnchor="middle"
			alignmentBaseline="middle"
			fill="#fff"
			>
			MCPA
		</text>
	<path
		d="M753.805 519.806C754.39 519.22 755.34 519.22 755.926 519.806L765.472 529.352C766.058 529.938 766.058 530.888 765.472 531.474C764.886 532.059 763.936 532.059 763.351 531.474L754.865 522.988L746.38 531.474C745.794 532.059 744.844 532.059 744.259 531.474C743.673 530.888 743.673 529.938 744.259 529.352L753.805 519.806ZM756.365 520.867L756.365 525.728L753.365 525.728L753.365 520.867L756.365 520.867Z"
		fill="white" />
	<path d="M947.231 520.867L947.231 560H1000V704.689" stroke="white" strokeWidth="3"/>
	<text
		x={1000}
		y={730}
		fontSize={14}
		fontWeight={600}
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
		>
		<tspan x={1000} dy="0"> Traction Motor</tspan>
		<tspan x={1000} dy="18">Blower No. 1</tspan>
		</text>
	
	<path
		d="M946.17 519.806C946.756 519.22 947.705 519.22 948.291 519.806L957.837 529.352C958.423 529.938 958.423 530.888 957.837 531.473C957.251 532.059 956.302 532.059 955.716 531.473L947.231 522.988L938.745 531.473C938.16 532.059 937.21 532.059 936.624 531.473C936.038 530.888 936.038 529.938 936.624 529.352L946.17 519.806ZM948.731 520.867L948.731 525.728L945.731 525.728L945.731 520.867L948.731 520.867Z"
		fill="white" />
	<defs>
		<filter id="filter0_i_247_22937" x="77.2957" y="243.233" width="1082.55" height="290.534"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="5" dy="5" />
			<feGaussianBlur stdDeviation="5" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_247_22937" />
		</filter>
		<filter id="filter1_f_247_22937" x="-13.1022" y="152.835" width="1258.34" height="466.329"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="45.1989" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_0_247_22937_clip_path">
			<path transform="translate(13.1022 -152.835)"
				d="M82.3952 280.252L88.5876 268.232C89.0804 267.275 90.013 266.623 91.0806 266.489L238.199 247.97H993.202L1139.47 266.539C1140.44 266.662 1141.3 267.211 1141.82 268.036L1149.6 280.378L1153.61 277.852L1149.6 280.378C1149.93 280.899 1150.1 281.502 1150.1 282.118V499.418C1150.1 500.29 1149.76 501.126 1149.14 501.739L1142.5 508.297L1145.83 511.666L1142.5 508.297C1141.97 508.821 1141.27 509.148 1140.53 509.222L993.264 524.03H238.177L89.163 506.711C88.5478 506.639 87.9656 506.394 87.4846 506.004L83.2406 502.563L80.2649 506.232L83.2406 502.562C82.4767 501.943 82.033 501.012 82.033 500.028V281.747C82.033 281.227 82.1572 280.715 82.3952 280.252Z" />
		</clipPath>
		<filter id="filter3_f_247_22937" x="73.5058" y="239.443" width="1085.13" height="293.113"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.89494" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter4_f_247_22937" x="-13.1022" y="152.835" width="1258.34" height="466.329"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="45.1989" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_1_247_22937_clip_path">
			<path transform="translate(13.1022 -152.835)"
				d="M79.8684 278.951L86.0608 266.93C86.9828 265.14 88.728 263.92 90.7256 263.669L238.021 245.128H993.382L1139.83 263.719C1141.64 263.949 1143.26 264.977 1144.23 266.521L1152.01 278.863C1152.62 279.837 1152.95 280.966 1152.95 282.118V499.418C1152.95 501.05 1152.29 502.614 1151.13 503.761L1144.5 510.318C1143.5 511.3 1142.21 511.911 1140.82 512.05L993.407 526.872H238.012L88.8349 509.534C87.6837 509.4 86.5944 508.942 85.6943 508.212L81.4503 504.77C80.0208 503.611 79.1906 501.869 79.1906 500.028V281.747C79.1906 280.774 79.423 279.815 79.8684 278.951Z" />
		</clipPath>
		<filter id="filter6_f_247_22937" x="-5.2239" y="159.268" width="1242.59" height="453.463"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="44.6329" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_2_247_22937_clip_path">
			<path transform="translate(5.2239 -159.268)"
				d="M87.2134 281.753L91.399 273.83C93.1151 270.582 96.3119 268.379 99.9583 267.931L242.752 250.405H988.66L1130.91 268.013C1134.21 268.421 1137.16 270.27 1138.96 273.061L1144.43 281.52C1145.6 283.336 1146.22 285.452 1146.22 287.614V492.856C1146.22 495.906 1144.98 498.824 1142.79 500.941L1139.19 504.406L1140.43 505.691L1139.19 504.406C1137.37 506.16 1135.01 507.249 1132.5 507.495L988.684 521.595H242.743L96.8668 505.063C94.785 504.827 92.8107 504.013 91.1673 502.714L90.1767 501.931C87.4839 499.801 85.9132 496.557 85.9132 493.124V286.997C85.9132 285.169 86.3595 283.369 87.2134 281.753Z" />
		</clipPath>
		<filter id="filter8_f_247_22937" x="-1.56753" y="162.837" width="1235.27" height="446.325"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="44.6329" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_3_247_22937_clip_path">
			<path transform="translate(1.56753 -162.837)"
				d="M91.334 285.649L96.7074 275.674C97.7302 273.775 99.6125 272.492 101.754 272.234L245.375 254.946H986.042L1128.93 272.292C1130.86 272.527 1132.6 273.6 1133.67 275.227L1140.5 285.597C1141.22 286.68 1141.6 287.949 1141.6 289.246V491.423C1141.6 493.247 1140.85 494.991 1139.52 496.243L1134.04 501.422C1132.97 502.436 1131.59 503.063 1130.12 503.204L986.078 517.054H245.362L99.5009 500.842C98.2871 500.707 97.1341 500.24 96.1691 499.491L93.1086 497.118C91.4887 495.862 90.5408 493.927 90.5408 491.877V288.794C90.5408 287.696 90.8133 286.616 91.334 285.649Z" />
		</clipPath>
		<clipPath id="bgblur_4_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="65.5672" y="292.886" width="13.1735" height="39.6685" />
		</clipPath>
		<clipPath id="bgblur_5_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 63.6689 298.34) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="13.1242" height="27.4956"
				/>
		</clipPath>
		<clipPath id="bgblur_6_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="40.9004" y="288.029" width="9.01144" height="49.3838"
				rx="4.50572" />
		</clipPath>
		<clipPath id="bgblur_7_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="65.5672" y="439.331" width="13.1735" height="39.6685" />
		</clipPath>
		<clipPath id="bgblur_8_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 63.6689 444.784) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="13.1242" height="27.4956"/>
		</clipPath>
		<clipPath id="bgblur_9_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="40.9004" y="434.473" width="9.01144" height="49.3838"
				rx="4.50572" />
		</clipPath>
		<clipPath id="bgblur_10_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 1169.85 292.253) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="13.1735" height="39.6685" />
		</clipPath>
		<clipPath id="bgblur_11_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="1171.75" y="298.973" width="13.1242" height="27.4956" />
		</clipPath>
		<clipPath id="bgblur_12_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 1194.52 287.396) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="9.01144" height="49.3838"
				rx="4.50572" />
		</clipPath>
		<clipPath id="bgblur_13_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 1169.85 438.698) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="13.1735" height="39.6685"
				 />
		</clipPath>
		<clipPath id="bgblur_14_247_22937_clip_path">
			<rect transform="translate(1.56753 -162.837)" x="1171.75" y="445.417" width="13.1242" height="27.4956" />
		</clipPath>
		<clipPath id="bgblur_15_247_22937_clip_path">
			<rect transform="matrix(-1 0 0 1 1194.52 433.84) translate(1.56753 -162.837)" x="-0.632785" y="0.632785" width="9.01144" height="49.3838"
				rx="4.50572" />
		</clipPath>
		<filter id="filter10_f_247_22937" x="139.022" y="267.773" width="16.589" height="238.843"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter11_f_247_22937" x="235.873" y="324.283" width="8" height="46.5178"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter12_f_247_22937" x="235.873" y="401.199" width="8" height="114.481"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter13_f_247_22937" x="237.188" y="355.881" width="761.679" height="8"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter14_f_247_22937" x="237.188" y="410.119" width="761.679" height="8"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter15_f_247_22937" x="1080.75" y="265.204" width="16.9642" height="243.979"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter16_f_247_22937" x="992.866" y="254.956" width="8" height="115.845"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter17_f_247_22937" x="992.866" y="401.2" width="8.8847" height="42.0195"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter18_f_247_22937" x="992.866" y="505.334" width="8" height="23.1279"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_16_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="1113.24" y="280.808" width="21.2159" height="88.8829" />
		</clipPath>
		<clipPath id="bgblur_17_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="101.597" y="280.808" width="21.2159" height="88.8829" />
		</clipPath>
		<clipPath id="bgblur_18_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="1113.24" y="400.977" width="21.2159" height="88.8829" />
		</clipPath>
		<clipPath id="bgblur_19_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="101.597" y="400.977" width="21.2159" height="88.8829" />
		</clipPath>
		<clipPath id="bgblur_20_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="987.621" y="441.008" width="17.9753" height="66.6431" />
		</clipPath>
		<clipPath id="bgblur_21_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="230.621" y="368.434" width="17.9753" height="35.1328" />
		</clipPath>
		<clipPath id="bgblur_22_247_22937_clip_path">
			<rect transform="translate(-992.866 -505.334)" x="988.71" y="368.434" width="17.9753" height="35.1328" />
		</clipPath>
		<filter id="filter19_f_247_22937" x="310.449" y="248.352" width="79.5936" height="108.624"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter20_f_247_22937" x="850.449" y="413.351" width="79.5936" height="108.624"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter21_dd_247_22937" x="437.73" y="316.49" width="21.202" height="32.0288"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="2.06163" dy="2.74884" />
			<feGaussianBlur stdDeviation="0.68721" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-1.71802" dy="-0.68721" />
			<feGaussianBlur stdDeviation="1.44314" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
		</filter>
		<filter id="filter22_dd_247_22937" x="417.417" y="322.123" width="41.5155" height="20.7627"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="2.06163" dy="2.74884" />
			<feGaussianBlur stdDeviation="0.68721" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-1.71802" dy="-0.68721" />
			<feGaussianBlur stdDeviation="1.44314" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
		</filter>
		<clipPath id="bgblur_23_247_22937_clip_path">
			<rect transform="translate(-417.417 -322.123)" x="460.193" y="259.368" width="72.0169" height="81.9748" />
		</clipPath>
		<filter id="filter23_ddii_247_22937" x="457.76" y="255.586" width="86.0033" height="97.815"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="6.8721" dy="6.52849" />
			<feGaussianBlur stdDeviation="2.68012" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.172549 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feMorphology radius="0.155531" operator="erode" in="SourceAlpha" result="effect2_dropShadow_247_22937" />
			<feOffset dy="-1.08872" />
			<feGaussianBlur stdDeviation="1.08872" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.72 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="2.79955" />
			<feGaussianBlur stdDeviation="0.544358" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0" />
			<feBlend mode="normal" in2="shape" result="effect3_innerShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-0.155531" dy="9.17631" />
			<feGaussianBlur stdDeviation="1.63307" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
			<feBlend mode="normal" in2="effect3_innerShadow_247_22937" result="effect4_innerShadow_247_22937" />
		</filter>
		<filter id="filter24_d_247_22937" x="454.961" y="253.876" width="81.3919" height="92.4586"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feMorphology radius="3.11061" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_247_22937" />
			<feOffset />
			<feGaussianBlur stdDeviation="0.855419" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_247_22937" result="shape" />
		</filter>
		<filter id="filter25_dd_247_22937" x="456.121" y="256.212" width="77.9025" height="88.3344"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="2.06163" dy="2.74884" />
			<feGaussianBlur stdDeviation="0.68721" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-1.71802" dy="-0.68721" />
			<feGaussianBlur stdDeviation="1.44314" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
		</filter>
		<filter id="filter26_f_247_22937" x="459.351" y="258.411" width="72.611" height="83.3865"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="0.68721" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<clipPath id="bgblur_24_247_22937_clip_path">
			<rect transform="translate(-459.351 -258.411)" x="711.193" y="429.368" width="72.0169" height="81.9748" />
		</clipPath>
		<filter id="filter27_ddii_247_22937" x="708.76" y="425.586" width="86.0033" height="97.815"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="6.8721" dy="6.52849" />
			<feGaussianBlur stdDeviation="2.68012" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.172549 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feMorphology radius="0.155531" operator="erode" in="SourceAlpha" result="effect2_dropShadow_247_22937" />
			<feOffset dy="-1.08872" />
			<feGaussianBlur stdDeviation="1.08872" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.72 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="2.79955" />
			<feGaussianBlur stdDeviation="0.544358" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0" />
			<feBlend mode="normal" in2="shape" result="effect3_innerShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-0.155531" dy="9.17631" />
			<feGaussianBlur stdDeviation="1.63307" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
			<feBlend mode="normal" in2="effect3_innerShadow_247_22937" result="effect4_innerShadow_247_22937" />
		</filter>
		<filter id="filter28_d_247_22937" x="705.961" y="423.876" width="81.392" height="92.4586"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feMorphology radius="3.11061" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_247_22937" />
			<feOffset />
			<feGaussianBlur stdDeviation="0.855419" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_247_22937" result="shape" />
		</filter>
		<filter id="filter29_dd_247_22937" x="707.121" y="426.212" width="77.9026" height="88.3344"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="2.06163" dy="2.74884" />
			<feGaussianBlur stdDeviation="0.68721" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="-1.71802" dy="-0.68721" />
			<feGaussianBlur stdDeviation="1.44314" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_dropShadow_247_22937" result="effect2_dropShadow_247_22937" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_22937" result="shape" />
		</filter>
		<filter id="filter30_f_247_22937" x="710.351" y="428.411" width="72.6111" height="83.3865"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="0.68721" result="effect1_foregroundBlur_247_22937" />
		</filter>
		
		<clipPath id="bgblur_26_247_22937_clip_path">
			<circle transform="translate(-590.322 -437.16)" cx="598.153" cy="444.992" r="7.18335" />
		</clipPath>
		<filter id="filter48_f_247_22937" x="591.499" y="438.338" width="13.3074" height="13.3076"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="0.085434" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter49_f_247_22937" x="591.712" y="438.55" width="12.8825" height="12.8826"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="0.0955957" result="effect1_foregroundBlur_247_22937" />
		</filter>
		<filter id="filter50_f_247_22937" x="591.732" y="438.571" width="12.842" height="12.842"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="0.085434" result="effect1_foregroundBlur_247_22937" />
		</filter>
		
		<filter id="filter51_ii_247_22937" x="699.671" y="256.146" width="44.9017" height="90.252"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="6.18492" />
			<feGaussianBlur stdDeviation="3.09246" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0" />
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="9.27737" />
			<feGaussianBlur stdDeviation="8.81351" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_innerShadow_247_22937" result="effect2_innerShadow_247_22937" />
		</filter>
		
		<filter id="filter52_ii_247_22937" x="504.671" y="432.239" width="44.9017" height="90.252"
			filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dx="6.18492" />
			<feGaussianBlur stdDeviation="3.09246" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0" />
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_247_22937" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="9.27737" />
			<feGaussianBlur stdDeviation="8.81351" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
			<feBlend mode="normal" in2="effect1_innerShadow_247_22937" result="effect2_innerShadow_247_22937" />
		</filter>
		
		<clipPath id="bgblur_27_247_22937_clip_path">
			<rect transform="translate(-504.671 -432.239)" x="230.621" y="260.008" width="17.9753" height="66.6431" />
		</clipPath>
	
		<linearGradient id="paint0_linear_247_22937" x1="554.465" y1="187.044" x2="555.722" y2="446.866"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#202325" />
			<stop offset="0.458333" stop-color="#202425" />
			<stop offset="1" stop-color="#2B3033" />
		</linearGradient>
		<linearGradient id="paint1_linear_247_22937" x1="543.696" y1="218.941" x2="577.305" y2="560.045"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#23212C" />
			<stop offset="0.994792" stop-color="#292C2F" />
		</linearGradient>
		<linearGradient id="paint2_linear_247_22937" x1="554.465" y1="187.044" x2="555.722" y2="446.866"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#202325" />
			<stop offset="0.458333" stop-color="#202425" />
			<stop offset="1" stop-color="#2B3033" />
		</linearGradient>
		<linearGradient id="paint3_linear_247_22937" x1="543.696" y1="218.941" x2="577.305" y2="560.045"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#23212C" />
			<stop offset="0.994792" stop-color="#292C2F" />
		</linearGradient>
		<linearGradient id="paint4_linear_247_22937" x1="569.581" y1="248.534" x2="574.889" y2="524.523"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#969EA1" />
			<stop offset="0.22" stop-color="#1E1820" />
			<stop offset="0.458333" stop-color="#1B161D" />
			<stop offset="0.765" stop-color="#A0A39F" />
			<stop offset="1" stop-color="#FFFFFB" />
		</linearGradient>
		<linearGradient id="paint5_linear_247_22937" x1="616.069" y1="248.534" x2="616.873" y2="523.499"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#E6EBF1" />
			<stop offset="0.994792" stop-color="#868990" />
		</linearGradient>
		<linearGradient id="paint6_linear_247_22937" x1="569.581" y1="248.534" x2="574.889" y2="524.523"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#969EA1" />
			<stop offset="0.22" stop-color="#1E1820" />
			<stop offset="0.458333" stop-color="#1B161D" />
			<stop offset="0.765" stop-color="#A0A39F" />
			<stop offset="1" stop-color="#FFFFFB" />
		</linearGradient>
		<linearGradient id="paint7_linear_247_22937" x1="616.069" y1="248.534" x2="616.873" y2="523.499"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#E6EBF1" />
			<stop offset="0.994792" stop-color="#868990" />
		</linearGradient>
		<linearGradient id="paint8_linear_247_22937" x1="555.654" y1="199.405" x2="579.867" y2="580.617"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#585659" />
			<stop offset="0.458333" stop-color="#262526" />
			<stop offset="0.774091" stop-color="#161616" />
			<stop offset="1" stop-color="#585659" />
		</linearGradient>
		<linearGradient id="paint9_linear_247_22937" x1="616.069" y1="252.103" x2="616.069" y2="361.207"
			gradientUnits="userSpaceOnUse">
			<stop />
			<stop offset="0.994792" />
		</linearGradient>
		<linearGradient id="paint10_linear_247_22937" x1="555.654" y1="199.405" x2="579.867" y2="580.617"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#585659" />
			<stop offset="0.458333" stop-color="#262526" />
			<stop offset="0.774091" stop-color="#161616" />
			<stop offset="1" stop-color="#585659" />
		</linearGradient>
		<linearGradient id="paint11_linear_247_22937" x1="616.069" y1="252.103" x2="616.069" y2="361.207"
			gradientUnits="userSpaceOnUse">
			<stop />
			<stop offset="0.994792" />
		</linearGradient>
		<linearGradient id="paint12_linear_247_22937" x1="65.946" y1="292.253" x2="80.4414" y2="321.481"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint13_linear_247_22937" x1="1.00808" y1="-6.14929e-06" x2="8.98017" y2="22.7998"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint14_linear_247_22937" x1="40.9875" y1="287.396" x2="63.2721" y2="313.243"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint15_linear_247_22937" x1="65.946" y1="438.698" x2="80.4414" y2="467.926"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint16_linear_247_22937" x1="1.00808" y1="-6.14929e-06" x2="8.98017" y2="22.7998"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint17_linear_247_22937" x1="40.9875" y1="433.84" x2="63.2721" y2="459.687"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint18_linear_247_22937" x1="1.01153" y1="-8.7519e-06" x2="15.507" y2="29.2279"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint19_linear_247_22937" x1="1172.13" y1="298.34" x2="1180.1" y2="321.14"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint20_linear_247_22937" x1="0.719955" y1="-1.08291e-05" x2="23.0045" y2="25.8469"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint21_linear_247_22937" x1="1.01153" y1="-8.7519e-06" x2="15.507" y2="29.2279"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint22_linear_247_22937" x1="1172.13" y1="444.784" x2="1180.1" y2="467.584"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint23_linear_247_22937" x1="0.719955" y1="-1.08291e-05" x2="23.0045" y2="25.8469"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint24_linear_247_22937" x1="1114.18" y1="280.175" x2="1151.89" y2="333.925"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint25_linear_247_22937" x1="102.539" y1="280.175" x2="140.245" y2="333.925"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint26_linear_247_22937" x1="1114.18" y1="400.344" x2="1151.89" y2="454.095"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint27_linear_247_22937" x1="102.539" y1="400.344" x2="140.245" y2="454.095"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint28_linear_247_22937" x1="196.789" y1="350.072" x2="166.312" y2="317.636"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
		<linearGradient id="paint29_linear_247_22937" x1="1039.18" y1="350.072" x2="1069.65" y2="317.636"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
		<linearGradient id="paint30_linear_247_22937" x1="196.789" y1="483.898" x2="166.312" y2="451.462"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
		<linearGradient id="paint31_linear_247_22937" x1="1039.18" y1="483.898" x2="1069.65" y2="451.462"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
		<linearGradient id="paint32_linear_247_22937" x1="988.336" y1="440.375" x2="1015.34" y2="484.115"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint33_linear_247_22937" x1="231.336" y1="367.801" x2="240.995" y2="396.987"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint34_linear_247_22937" x1="989.426" y1="367.801" x2="999.084" y2="396.987"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		
		<linearGradient id="paint55_linear_247_22937" x1="-2.82352" y1="19.2563" x2="13.7331" y2="17.2281"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#646464" />
			<stop offset="1" stop-color="#A6A6A6" />
		</linearGradient>
		<linearGradient id="paint56_linear_247_22937" x1="-7.18126" y1="10.3403" x2="24.7951" y2="-8.21326"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" />
			<stop offset="1" stop-color="#D6D6D6" />
		</linearGradient>

		<linearGradient id="paint83_linear_247_22937" x1="660.428" y1="330.652" x2="653.521" y2="340.746"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#AADBEE" />
			<stop offset="1" stop-color="#0C1E29" />
		</linearGradient>

		<linearGradient id="paint92_linear_247_22937" x1="598.153" y1="437.758" x2="598.153" y2="443.652"
			gradientUnits="userSpaceOnUse">
			<stop />
			<stop offset="0.994792" />
		</linearGradient>
		<linearGradient id="paint93_linear_247_22937" x1="594.169" y1="438.509" x2="599.915" y2="452.129"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.46" />
			<stop offset="1" stop-color="#666666" stop-opacity="0.88" />
		</linearGradient>
		<radialGradient id="paint94_radial_247_22937" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
			gradientTransform="translate(598.153 445.146) rotate(69.1066) scale(5.87556 5.87562)">
			<stop stop-color="#2E3335" />
			<stop offset="1" stop-color="#1E2022" />
		</radialGradient>
		<linearGradient id="paint95_linear_247_22937" x1="600.993" y1="450.252" x2="595.62" y2="439.507"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#6AA5D6" />
			<stop offset="1" stop-color="#9CD3E8" />
		</linearGradient>
		<linearGradient id="paint96_linear_247_22937" x1="601.559" y1="439.926" x2="594.653" y2="450.019"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#AADBEE" />
			<stop offset="1" stop-color="#0C1E29" />
		</linearGradient>
		<linearGradient id="paint97_linear_247_22937" x1="719.137" y1="283.299" x2="719.137" y2="343.213"
			gradientUnits="userSpaceOnUse">
			<stop stop-opacity="0" />
			<stop offset="1" />
		</linearGradient>
		<linearGradient id="paint98_linear_247_22937" x1="524.137" y1="486.06" x2="524.137" y2="426.146"
			gradientUnits="userSpaceOnUse">
			<stop stop-opacity="0" />
			<stop offset="1" />
		</linearGradient>
		<linearGradient id="paint99_linear_247_22937" x1="798.71" y1="340.04" x2="756.523" y2="275.599"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#7B7214" />
			<stop offset="1" stop-color="#FFF8AA" />
		</linearGradient>
		<linearGradient id="paint100_linear_247_22937" x1="949.631" y1="423.021" x2="903.606" y2="377.652"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF9672" />
			<stop offset="1" stop-color="#7A3E29" />
		</linearGradient>
		<linearGradient id="paint101_linear_247_22937" x1="397.631" y1="590.021" x2="351.606" y2="544.652"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF9672" />
			<stop offset="1" stop-color="#7A3E29" />
		</linearGradient>
		<linearGradient id="paint102_linear_247_22937" x1="1002.36" y1="403.427" x2="961.951" y2="363.116"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF617E" />
			<stop offset="1" stop-color="#6A1424" />
		</linearGradient>
		<linearGradient id="paint103_linear_247_22937" x1="333.356" y1="580.427" x2="292.951" y2="540.116"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF617E" />
			<stop offset="1" stop-color="#6A1424" />
		</linearGradient>
		<linearGradient id="paint104_linear_247_22937" x1="899.802" y1="423.021" x2="853.773" y2="376.898"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#96EDDF" />
			<stop offset="1" stop-color="#34776C" />
		</linearGradient>
		<linearGradient id="paint105_linear_247_22937" x1="448.802" y1="590.021" x2="402.773" y2="543.898"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#96EDDF" />
			<stop offset="1" stop-color="#34776C" />
		</linearGradient>
		<linearGradient id="paint106_linear_247_22937" x1="475.525" y1="505.115" x2="433.095" y2="441.243"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#7B7214" />
			<stop offset="1" stop-color="#FFF8AA" />
		</linearGradient>
		<linearGradient id="paint107_linear_247_22937" x1="231.336" y1="259.375" x2="258.343" y2="303.115"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="white" stop-opacity="0.4" />
			<stop offset="0.405687" stop-color="white" stop-opacity="0.01" />
			<stop offset="0.574372" stop-color="white" stop-opacity="0.01" />
			<stop offset="1" stop-color="white" stop-opacity="0.1" />
		</linearGradient>
		<linearGradient id="paint108_linear_247_22937" x1="272.369" y1="316.353" x2="243.348" y2="291.573"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B6F" />
			<stop offset="1" stop-color="#AAEFFF" />
		</linearGradient>
		<linearGradient id="paint109_linear_247_22937" x1="435.643" y1="285.282" x2="429.604" y2="254.887"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
		<linearGradient id="paint111_linear_247_22937" x1="837.002" y1="505.297" x2="789.251" y2="462.56"
			gradientUnits="userSpaceOnUse">
			<stop stop-color="#147B23" />
			<stop offset="1" stop-color="#AAFFCD" />
		</linearGradient>
  </defs>
</svg>
    </div>
  )
}
export default MachineRoom;
