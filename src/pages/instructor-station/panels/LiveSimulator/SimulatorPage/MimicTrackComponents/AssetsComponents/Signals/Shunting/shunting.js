import React from "react";

// export const Shunting = ({ type }) => {

//     return (
//         <svg
//             width="4vh"
//             height="5vh"
//             viewBox="0 0 300 355"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path d="M0 40C0 17.9086 17.9086 0 40 0H260C282.091 0 300 17.9086 300 40V95.5967H0V40Z" fill="#FF0000" />
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M192.357 10.2706L257.357 47.7983L192.357 85.3261V64.2983H42.6426V31.2983H192.357V10.2706Z"
//                 fill="white"
//             />
//             <path
//                 d="M0 95.5967H300V314.597C300 336.688 282.091 354.597 260 354.597H40C17.9086 354.597 0 336.688 0 314.597V95.5967Z"
//                 fill="#292929"
//             />
//             <g filter="url(#filter0_d)">
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M153.908 130.733C149.615 126.179 143.634 123.598 137.375 123.598H50.7216C38.1728 123.598 28 133.77 28 146.319V304.848C28 317.397 38.1728 327.57 50.7216 327.57H247.278C259.827 327.57 270 317.397 270 304.848V262.905C270 257.111 267.786 251.535 263.812 247.319L153.908 130.733Z"
//                     fill="black"
//                 />
//                 {type === "procced" ? (
//                     <>
//                         <g filter="url(#filter1_d)">
//                             <circle cx="99.1359" cy="175.232" r="34.2257" fill="#F2F2F2" />
//                         </g>
//                         <circle cx="99.1359" cy="175.232" r="18.6801" fill="#BFBFBF" />
//                         <circle cx="99.1359" cy="175.232" r="32.8567" stroke="url(#paint0_linear)" strokeWidth="2.73806" />
//                         <g filter="url(#filter2_d)">
//                             <circle cx="99.1359" cy="274.322" r="34.2257" fill="#494949" />
//                         </g>
//                         <circle cx="99.1359" cy="274.322" r="18.6801" fill="#616060" />
//                     </>
//                 ) : (
//                     <>
//                         <circle cx="99.1349" cy="175.232" r="34.2257" fill="#494949" />
//                         <circle cx="99.1349" cy="175.232" r="18.6801" fill="#616060" />
//                         <circle cx="99.1349" cy="175.232" r="32.8567" stroke="url(#paint0_linear)" strokeWidth="2.73806" />
//                         <g filter="url(#filter2_d)">
//                             <circle cx="99.1359" cy="274.322" r="34.2257" fill="#F2F2F2" />
//                         </g>
//                         <circle cx="99.1359" cy="274.322" r="18.6801" fill="#BFBFBF" />
//                     </>
//                 )}


//                 <circle cx="99.1359" cy="274.322" r="32.8567" stroke="url(#paint1_linear)" strokeWidth="2.73806" />
//                 <g filter="url(#filter3_d)">
//                     <circle cx="198.226" cy="274.322" r="34.2257" fill="#F2F2F2" />
//                 </g>
//                 <circle cx="198.226" cy="274.322" r="18.6801" fill="#BFBFBF" />
//                 <circle cx="198.226" cy="274.322" r="32.8567" stroke="url(#paint2_linear)" strokeWidth="2.73806" />
//             </g>
//         </svg>
//     );
// };


import { Rect, Group, Circle, Layer } from "react-konva";

export const Shunting = ({ x, y, type, angle, height, width, compType = "svg" }) => {
    const originalWidth = 300;
    const originalHeight = 598;
    const scaleX = (width || 15) / originalWidth;
    const scaleY = (height || 30) / originalHeight;
    if (compType === "Konva") {
        return (
            <Group
                x={x}
                y={y}
                scaleX={scaleX}
                scaleY={scaleY}
                rotationDeg={angle + 90}
            >
                {/* Background */}
                <Rect x={0} y={0} width={300} height={95} fill="#FF0000" />
                <Rect x={0} y={95} width={300} height={260} fill="#292929" />

                {/* Arrow Shape */}
                <Group>
                    <Rect x={42} y={31} width={150} height={33} fill="white" />
                    <Rect x={192} y={10} width={65} height={75} fill="white" />
                </Group>

                {/* Signals */}
                {type === "procced" ? (
                    <>
                        <Circle x={99} y={175} radius={34} fill="#F2F2F2" />
                        <Circle x={99} y={175} radius={18} fill="#BFBFBF" />

                        <Circle x={99} y={274} radius={34} fill="#494949" />
                        <Circle x={99} y={274} radius={18} fill="#616060" />
                    </>
                ) : (
                    <>
                        <Circle x={99} y={175} radius={34} fill="#494949" />
                        <Circle x={99} y={175} radius={18} fill="#616060" />

                        <Circle x={99} y={274} radius={34} fill="#F2F2F2" />
                        <Circle x={99} y={274} radius={18} fill="#BFBFBF" />
                    </>
                )}

                <Circle x={198} y={274} radius={34} fill="#F2F2F2" />
                <Circle x={198} y={274} radius={18} fill="#BFBFBF" />
            </Group>
        );
    }

    // Default SVG Component
    return (
        <svg
            width="4vh"
            height="5vh"
            viewBox="0 0 300 355"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 40C0 17.9086 17.9086 0 40 0H260C282.091 0 300 17.9086 300 40V95.5967H0V40Z" fill="#FF0000" />
            <path fillRule="evenodd" clipRule="evenodd" d="M192.357 10.2706L257.357 47.7983L192.357 85.3261V64.2983H42.6426V31.2983H192.357V10.2706Z" fill="white" />
            <path d="M0 95.5967H300V314.597C300 336.688 282.091 354.597 260 354.597H40C17.9086 354.597 0 336.688 0 314.597V95.5967Z" fill="#292929" />

            {/* Signal Lights */}
            {type === "procced" ? (
                <>
                    <circle cx="99.1359" cy="175.232" r="34.2257" fill="#F2F2F2" />
                    <circle cx="99.1359" cy="175.232" r="18.6801" fill="#BFBFBF" />
                    <circle cx="99.1359" cy="274.322" r="34.2257" fill="#494949" />
                    <circle cx="99.1359" cy="274.322" r="18.6801" fill="#616060" />
                </>
            ) : (
                <>
                    <circle cx="99.1349" cy="175.232" r="34.2257" fill="#494949" />
                    <circle cx="99.1349" cy="175.232" r="18.6801" fill="#616060" />
                    <circle cx="99.1359" cy="274.322" r="34.2257" fill="#F2F2F2" />
                    <circle cx="99.1359" cy="274.322" r="18.6801" fill="#BFBFBF" />
                </>
            )}

            <circle cx="198.226" cy="274.322" r="34.2257" fill="#F2F2F2" />
            <circle cx="198.226" cy="274.322" r="18.6801" fill="#BFBFBF" />
        </svg>
    );
};





