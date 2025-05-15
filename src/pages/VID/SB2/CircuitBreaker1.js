import React from 'react'
import { SwitchComp } from '../../CabReplicaControl/Main/ControlPanel'
import { updateVIDData } from '../VIDUtility'

export const Switch=({value, valueKey})=>{
	const updatData=(key, val)=>{
		console.log('SWWWWW', key, val)
		updateVIDData(key, val);
	}
	
    return(
        <div style={{width:"100%", position:"absolute", left:18, top:3}}>
        <SwitchComp
       				screen="VID"
                   label1={"1"}
                   label2={""}
                   label3={"0"}
				   value={value}
                  valueKey={valueKey}
				  updateData={updatData}
                 />
        </div>
       
    )
}

export default function CircuitBreaker1({description, value, valueKey}) {
  return (
	<div className='dflex flex-col align-center' style={{width:"70%", height:"90%"}}>
        <svg width="100%" height="80%" viewBox="0 0 112 144" fill="none" >
	<line x1="25.6365" y1="98.0237" x2="25.6365" y2="114.057" stroke="#6A6969" />
	
    
    <rect x="10" y="98" width={92} height={20} fill='#fff' />
    <line x1="25.6365" y1="98.0237" x2="25.6365" y2="114.057" stroke="#6A6969" />
	<line x1="45.6365" y1="98.0237" x2="45.6365" y2="114.057" stroke="#6A6969" />
	<line x1="65.6365" y1="98.0237" x2="65.6365" y2="114.057" stroke="#6A6969" />
	<line x1="85.6365" y1="98.0237" x2="85.6365" y2="114.057" stroke="#6A6969" />
    <g filter="url(#filter0_i_514_2088)">
		<circle cx="35.5536" cy="107.212" r="4.11005" fill="#F3F4F4" />
	</g>
	<g filter="url(#filter1_dii_514_2088)">
		<circle cx="35.5535" cy="107.212" r="3.61456" fill="#3D739D" />
	</g>
		<rect x="10.48" y="116.961" width="91.4321" height="3.10821" fill="#d5d3d6"/>
	<path
		d="M22.6064 142.384L24.651 143.845L20.5042 143.368L20.2812 142.221V134.879L21.0776 127.799L24.9953 126.546C24.9953 126.721 26.5163 126.653 26.5163 128.698C25.6383 128.744 23.8208 131.675 22.947 133.046C22.7283 133.389 22.6064 133.785 22.6064 134.192V142.384Z"
		fill="#1D2835" />
	<path
		d="M51.4468 142.384L53.4913 143.845L49.3446 143.368L49.1216 142.221V134.879L49.9179 127.799L53.8357 126.546C53.8357 126.721 55.3566 126.653 55.3566 128.698C54.4786 128.744 52.6611 131.675 51.7874 133.046C51.5686 133.389 51.4468 133.785 51.4468 134.192V142.384Z"
		fill="#1D2835" />
	<path
		d="M87.7024 142.384L85.6578 143.845L89.8046 143.368L90.0276 142.221V134.879L89.2313 127.799L85.3135 126.546C85.3135 126.721 83.7926 126.653 83.7926 128.698C84.6706 128.744 86.4881 131.675 87.3618 133.046C87.5805 133.389 87.7024 133.785 87.7024 134.192V142.384Z"
		fill="#1D2835" />
	
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M79.4549 141.483H60.3044V133.794C60.3044 130.985 58.0915 128.708 55.3617 128.708C52.6319 128.708 50.419 130.985 50.419 133.794V141.483H31.2685V133.794C31.2685 130.985 29.0555 128.708 26.3258 128.708C23.596 128.708 21.3831 130.985 21.3831 133.794V141.483H13.6631V131.51H15.4001V133.32H16.6225V131.51V128.708H26.3258H55.3617H84.3976L95.8121 128.708V131.51V133.32H97.0344V131.51H98.7714V141.483H89.3403V133.794C89.3403 130.985 87.1274 128.708 84.3976 128.708C81.6678 128.708 79.4549 130.985 79.4549 133.794V141.483ZM41.7871 141.232H39.7425V138.333C39.0551 137.954 38.5875 137.208 38.5875 136.35C38.5875 135.108 39.5658 134.101 40.7726 134.101C41.9794 134.101 42.9576 135.108 42.9576 136.35C42.9576 137.215 42.483 137.966 41.7871 138.342V141.232ZM69.3346 141.232H71.3792V138.342C72.0751 137.966 72.5497 137.215 72.5497 136.35C72.5497 135.108 71.5715 134.101 70.3647 134.101C69.1579 134.101 68.1797 135.108 68.1797 136.35C68.1797 137.208 68.6472 137.954 69.3346 138.333V141.232ZM97.8944 139.1C97.8944 138.382 97.3285 137.8 96.6303 137.8C95.9322 137.8 95.3662 138.382 95.3662 139.1C95.3662 139.819 95.9322 140.401 96.6303 140.401C97.3285 140.401 97.8944 139.819 97.8944 139.1ZM15.8235 137.8C16.5216 137.8 17.0876 138.382 17.0876 139.1C17.0876 139.819 16.5216 140.401 15.8235 140.401C15.1253 140.401 14.5593 139.819 14.5593 139.1C14.5593 138.382 15.1253 137.8 15.8235 137.8Z"
			fill="#485461" />
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M79.4549 141.483H60.3044V142.917C60.3044 143.441 58.0915 143.866 55.3617 143.866C52.6319 143.866 50.419 143.441 50.419 142.917V141.483H31.2685V142.917C31.2685 143.441 29.0555 143.866 26.3258 143.866C23.596 143.866 21.3831 143.441 21.3831 142.917V141.483H13.6631V143.343H15.4001V143.006H16.6225V143.343V143.866H26.3258H55.3617H84.3976L95.8121 143.866V143.343V143.006H97.0344V143.343H98.7714V141.483H89.3403V142.917C89.3403 143.441 87.1274 143.866 84.3976 143.866C81.6678 143.866 79.4549 143.441 79.4549 142.917V141.483ZM41.7871 141.529H39.7425V142.07C39.0551 142.141 38.5875 142.28 38.5875 142.44C38.5875 142.672 39.5658 142.86 40.7726 142.86C41.9794 142.86 42.9576 142.672 42.9576 142.44C42.9576 142.279 42.483 142.139 41.7871 142.069V141.529ZM69.3346 141.529H71.3792V142.069C72.0751 142.139 72.5497 142.279 72.5497 142.44C72.5497 142.672 71.5715 142.86 70.3647 142.86C69.1579 142.86 68.1797 142.672 68.1797 142.44C68.1797 142.28 68.6472 142.141 69.3346 142.07V141.529ZM97.8944 141.927C97.8944 142.061 97.3285 142.17 96.6303 142.17C95.9322 142.17 95.3662 142.061 95.3662 141.927C95.3662 141.793 95.9322 141.684 96.6303 141.684C97.3285 141.684 97.8944 141.793 97.8944 141.927ZM15.8235 142.17C16.5216 142.17 17.0876 142.061 17.0876 141.927C17.0876 141.793 16.5216 141.684 15.8235 141.684C15.1253 141.684 14.5593 141.793 14.5593 141.927C14.5593 142.061 15.1253 142.17 15.8235 142.17Z"
		fill="#2E3A47" />
	
	<g>
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M41.0673 124.395C39.1938 124.395 37.6749 125.958 37.6749 127.886C37.6749 128.169 37.7077 128.444 37.7694 128.708H13.895C13.9733 128.448 14.0155 128.172 14.0155 127.886C14.0155 126.358 12.8115 125.119 11.3263 125.119C11.0306 125.119 10.7461 125.168 10.4801 125.259V120.07H101.912V125.288C101.623 125.179 101.31 125.119 100.984 125.119C99.4989 125.119 98.2949 126.358 98.2949 127.886C98.2949 128.172 98.3371 128.448 98.4154 128.708H44.3652C44.427 128.444 44.4597 128.169 44.4597 127.886C44.4597 125.958 42.9409 124.395 41.0673 124.395Z"
				fill="#485461" />
			<path
				d="M41.0673 123.895C38.9042 123.895 37.1749 125.696 37.1749 127.886C37.1749 127.994 37.1792 128.102 37.1874 128.208H14.5002C14.5103 128.102 14.5155 127.995 14.5155 127.886C14.5155 126.095 13.101 124.619 11.3263 124.619C11.2094 124.619 11.0939 124.625 10.9801 124.638V120.57H101.412V124.648C101.272 124.629 101.129 124.619 100.984 124.619C99.2094 124.619 97.7949 126.095 97.7949 127.886C97.7949 127.995 97.8001 128.102 97.8102 128.208H44.9472C44.9555 128.102 44.9597 127.994 44.9597 127.886C44.9597 125.696 43.2304 123.895 41.0673 123.895Z"
				stroke="grey"/>
	</g>
	<rect x="67.5469" y="14.7242" width="12.831" height="8.28329" fill="#303030" />
	<path
		d="M21.6312 2.01749L23.7351 0.556488L19.468 1.03419L19.2385 2.18137V9.52332L20.0579 16.6031L24.0895 17.8559C24.0895 17.6811 25.6546 17.7488 25.6546 15.7035C24.7528 15.6584 22.8879 12.7376 21.9868 11.3639C21.7586 11.016 21.6312 10.6108 21.6312 10.1948V2.01749Z"
		fill="#1D2835" />
	<path
		d="M51.3087 2.01749L53.4126 0.556488L49.1455 1.03419L48.916 2.18137V9.52332L49.7354 16.6031L53.767 17.8559C53.767 17.6811 55.332 17.7488 55.332 15.7035C54.4303 15.6584 52.5653 12.7376 51.6643 11.3639C51.4361 11.016 51.3087 10.6108 51.3087 10.1948V2.01749Z"
		fill="#1D2835" />
	<path
		d="M88.6168 2.01749L86.5129 0.556488L90.7801 1.03419L91.0095 2.18137V9.52332L90.1901 16.6031L86.1586 17.8559C86.1586 17.6811 84.5935 17.7488 84.5935 15.7035C85.4953 15.6584 87.3602 12.7376 88.2612 11.3639C88.4894 11.016 88.6168 10.6108 88.6168 10.1948V2.01749Z"
		fill="#1D2835" />

		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M80.13 2.91922H60.4235V10.608C60.4235 13.417 58.1463 15.6942 55.3373 15.6942C52.5283 15.6942 50.2512 13.417 50.2512 10.608V2.91922H30.5447V10.608C30.5447 13.417 28.2675 15.6942 25.4585 15.6942C22.6495 15.6942 20.3723 13.417 20.3723 10.608V2.91922H12.4282V12.8917H14.2157V11.0822H15.4735V12.8917V15.6942H25.4585H55.3373H85.2161L96.962 15.6942V12.8917V11.0822H98.2198V12.8917H100.007V2.91922H90.3023V10.608C90.3023 13.417 88.0252 15.6942 85.2161 15.6942C82.4071 15.6942 80.13 13.417 80.13 10.608V2.91922ZM41.3686 3.16972H39.2647V6.06869C38.5574 6.44749 38.0762 7.19362 38.0762 8.05212C38.0762 9.29392 39.0829 10.3006 40.3247 10.3006C41.5665 10.3006 42.5732 9.29392 42.5732 8.05212C42.5732 7.18714 42.0847 6.43623 41.3686 6.06017V3.16972ZM69.7159 3.16972H71.8198V6.06017C72.5359 6.43623 73.0244 7.18714 73.0244 8.05212C73.0244 9.29392 72.0177 10.3006 70.7759 10.3006C69.5341 10.3006 68.5274 9.29392 68.5274 8.05212C68.5274 7.19362 69.0085 6.44749 69.7159 6.06869V3.16972ZM99.1048 5.30154C99.1048 6.01996 98.5224 6.60236 97.804 6.60236C97.0856 6.60236 96.5032 6.01996 96.5032 5.30154C96.5032 4.58313 97.0856 4.00073 97.804 4.00073C98.5224 4.00073 99.1048 4.58313 99.1048 5.30154ZM14.6513 6.60236C15.3697 6.60236 15.9521 6.01996 15.9521 5.30154C15.9521 4.58313 15.3697 4.00073 14.6513 4.00073C13.9329 4.00073 13.3505 4.58313 13.3505 5.30154C13.3505 6.01996 13.9329 6.60236 14.6513 6.60236Z"
			fill="#485461" />
	<path fill-rule="evenodd" clip-rule="evenodd"
		d="M80.13 2.91924H60.4235V1.48484C60.4235 0.960802 58.1463 0.535985 55.3373 0.535985C52.5283 0.535985 50.2512 0.960802 50.2512 1.48484V2.91924H30.5447V1.48484C30.5447 0.960802 28.2675 0.535985 25.4585 0.535985C22.6495 0.535985 20.3723 0.960802 20.3723 1.48484V2.91924H12.4282V1.05881H14.2157V1.39638H15.4735V1.05881V0.535985H25.4585H55.3373H85.2161L96.962 0.53598V1.05881V1.39638H98.2198V1.05881H100.007V2.91924H90.3023V1.48484C90.3023 0.960802 88.0252 0.535985 85.2161 0.535985C82.4071 0.535985 80.13 0.960802 80.13 1.48484V2.91924ZM41.3686 2.8725H39.2647V2.33168C38.5574 2.26101 38.0762 2.12182 38.0762 1.96166C38.0762 1.72999 39.0829 1.54219 40.3247 1.54219C41.5665 1.54219 42.5732 1.72999 42.5732 1.96166C42.5732 2.12303 42.0847 2.26312 41.3686 2.33327V2.8725ZM69.7159 2.8725H71.8198V2.33327C72.5359 2.26312 73.0244 2.12303 73.0244 1.96166C73.0244 1.72999 72.0177 1.54219 70.7759 1.54219C69.5341 1.54219 68.5274 1.72999 68.5274 1.96166C68.5274 2.12182 69.0085 2.26101 69.7159 2.33168V2.8725ZM99.1048 2.4748C99.1048 2.34077 98.5224 2.23212 97.804 2.23212C97.0856 2.23212 96.5032 2.34077 96.5032 2.4748C96.5032 2.60882 97.0856 2.71747 97.804 2.71747C98.5224 2.71747 99.1048 2.60882 99.1048 2.4748ZM14.6513 2.23212C15.3697 2.23212 15.9521 2.34077 15.9521 2.4748C15.9521 2.60882 15.3697 2.71747 14.6513 2.71747C13.9329 2.71747 13.3505 2.60882 13.3505 2.4748C13.3505 2.34077 13.9329 2.23212 14.6513 2.23212Z"
		fill="#2E3A47" />


			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M71.7639 20.0066C73.6919 20.0066 75.2548 18.4437 75.2548 16.5157C75.2548 16.2328 75.2211 15.9577 75.1576 15.6942H99.7251C99.6445 15.9538 99.6011 16.2297 99.6011 16.5157C99.6011 18.0441 100.84 19.283 102.368 19.283C102.673 19.283 102.965 19.2339 103.239 19.1432V24.3323H9.15283V19.1139C9.45047 19.2233 9.77213 19.283 10.1077 19.283C11.6361 19.283 12.875 18.0441 12.875 16.5157C12.875 16.2297 12.8316 15.9538 12.7511 15.6942H68.3703C68.3068 15.9577 68.2731 16.2328 68.2731 16.5157C68.2731 18.4437 69.836 20.0066 71.7639 20.0066Z"
				fill="#485461" />
			<path
				d="M71.7639 20.5066C73.968 20.5066 75.7548 18.7198 75.7548 16.5157C75.7548 16.4076 75.7505 16.3003 75.742 16.1942H99.1167C99.1064 16.3001 99.1011 16.4073 99.1011 16.5157C99.1011 18.3202 100.564 19.783 102.368 19.783C102.494 19.783 102.617 19.776 102.739 19.7622V23.8323H9.65283V19.7516C9.80163 19.7723 9.95351 19.783 10.1077 19.783C11.9122 19.783 13.375 18.3202 13.375 16.5157C13.375 16.4073 13.3697 16.3001 13.3594 16.1942H67.7859C67.7774 16.3003 67.7731 16.4076 67.7731 16.5157C67.7731 18.7198 69.5599 20.5066 71.7639 20.5066Z"
				stroke="url(#paint3_linear_514_2088)" />
	
	<g filter="url(#filter13_dddiiii_514_2088)">
		<rect x="7.9917" y="24.3323" width="96.4086" height="76.2808" fill="url(#paint4_linear_514_2088)" />
		<rect x="7.9917" y="24.3323" width="96.4086" height="76.2808" fill="#485461" />
	</g>
	<g filter="url(#filter14_ddii_514_2088)">
		<rect x="17.2822" y="31.6833" width="77.8272" height="61.5788" fill="url(#paint5_linear_514_2088)" />
		<rect x="17.2822" y="31.6833" width="77.8272" height="61.5788" fill="#485461" />
	</g>
    <path d="M45,35 C40,50 40,75 45,90" stroke="#444242" stroke-width="2"/>
	<line x1="31.9607" y1="107.247" x2="39.1463" y2="107.247" stroke="#63B9FC" />
    <foreignObject x="17" y="30" width={80} height={60} style={{ position:"relative"}}>
      <Switch value={value} valueKey={valueKey}/>
    </foreignObject>

  <defs>
	<filter id="filter0_i_514_2088" x="31.4436" y="103.102" width="8.21997" height="9.22009" filterUnits="userSpaceOnUse"
		color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix" />
		<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
			result="hardAlpha" />
		<feOffset dy="1" />
		<feGaussianBlur stdDeviation="0.5" />
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0" />
		<feBlend mode="normal" in2="shape" result="effect1_innerShadow_514_2088" />
	</filter>
<linearGradient id="paint3_linear_514_2088" x1="56.196" y1="15.6942" x2="56.196" y2="24.3323"
	gradientUnits="userSpaceOnUse">
	<stop stop-color="#B7B7B7" />
	<stop offset="1" stop-color="#666666" stop-opacity="0" />
</linearGradient>
<linearGradient id="paint4_linear_514_2088" x1="-12.6904" y1="84.7005" x2="101.084" y2="52.1346"
	gradientUnits="userSpaceOnUse">
	<stop stop-color="#313131" />
	<stop offset="1" stop-color="#1D2021" />
</linearGradient>

<filter id="filter13_dddiiii_514_2088" x="0.643709" y="15.3323" width="111.105" height="93.2808"
	filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feFlood flood-opacity="0" result="BackgroundImageFix" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset />
	<feGaussianBlur stdDeviation="3.674" />
	<feComposite in2="hardAlpha" operator="out" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 1 0" />
	<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="4" />
	<feGaussianBlur stdDeviation="2" />
	<feComposite in2="hardAlpha" operator="out" />
	<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
	<feBlend mode="normal" in2="effect1_dropShadow_514_2088" result="effect2_dropShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="-5" />
	<feGaussianBlur stdDeviation="2" />
	<feComposite in2="hardAlpha" operator="out" />
	<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
	<feBlend mode="normal" in2="effect2_dropShadow_514_2088" result="effect3_dropShadow_514_2088" />
	<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_514_2088" result="shape" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dx="2.96888" />
	<feGaussianBlur stdDeviation="1.48444" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 1 0" />
	<feBlend mode="normal" in2="shape" result="effect4_innerShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dx="-2.96888" />
	<feGaussianBlur stdDeviation="3.006" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 1 0" />
	<feBlend mode="normal" in2="effect4_innerShadow_514_2088" result="effect5_innerShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="1" />
	<feGaussianBlur stdDeviation="1.48444" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.720833 0 0 0 0 0.720833 0 0 0 0 0.720833 0 0 0 1 0" />
	<feBlend mode="normal" in2="effect5_innerShadow_514_2088" result="effect6_innerShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="-3.71111" />
	<feGaussianBlur stdDeviation="1.48444" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.12549 0 0 0 0 0.129412 0 0 0 1 0" />
	<feBlend mode="normal" in2="effect6_innerShadow_514_2088" result="effect7_innerShadow_514_2088" />
</filter>
<linearGradient id="paint5_linear_514_2088" x1="0.586281" y1="80.4164" x2="92.4327" y2="54.1271"
	gradientUnits="userSpaceOnUse">
	<stop stop-color="#313131" />
	<stop offset="1" stop-color="#1D2021" />
</linearGradient>

<filter id="filter14_ddii_514_2088" x="13.2822" y="22.6833" width="85.8271" height="78.5788"
	filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feFlood flood-opacity="0" result="BackgroundImageFix" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="4" />
	<feGaussianBlur stdDeviation="2" />
	<feComposite in2="hardAlpha" operator="out" />
	<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
	<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="-5" />
	<feGaussianBlur stdDeviation="2" />
	<feComposite in2="hardAlpha" operator="out" />
	<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
	<feBlend mode="normal" in2="effect1_dropShadow_514_2088" result="effect2_dropShadow_514_2088" />
	<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_514_2088" result="shape" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="1" />
	<feGaussianBlur stdDeviation="0.5" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.500451 0 0 0 0 0.544235 0 0 0 0 0.591667 0 0 0 1 0" />
	<feBlend mode="normal" in2="shape" result="effect3_innerShadow_514_2088" />
	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		result="hardAlpha" />
	<feOffset dy="-1" />
	<feGaussianBlur stdDeviation="1.48444" />
	<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
	<feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.12549 0 0 0 0 0.129412 0 0 0 1 0" />
	<feBlend mode="normal" in2="effect3_innerShadow_514_2088" result="effect4_innerShadow_514_2088" />
</filter>
  </defs>
        </svg>
		<div  style={{fontSize:"1.1vh", background:"#000", borderRadius:"0.3rem",height:"20%",display:"flex", alignItems:"center",justifyContent:"center", width:"80%", justifySelf:"center" }}>
		<span style={{textAlign:"center"}}>{description} </span>
		</div>
		</div>
  )
}
