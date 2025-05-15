import React, { useEffect, useRef, useState } from "react";
import { Group, Path, Rect, Circle, Text, Ellipse, Line } from 'react-konva';

export const Signages = ({ payload }) => {
    const { x, y, signage,angle } = payload;
    const { type, config } = signage.state;
    // console.log('sipayload',JSON.stringify(signage.state))
    const componentMap = {
        speedIndicator: <SpeedIndicator x={x} y={y} displayNumber={config.speed} />,
        cautionIndicator: <CautionIndicator type="special" x={x} y={y} displayNumber="20" />,
        stopIndicator: <StopIndicator x={x} y={y} />,
        stopDisk: <StopDisk x={x} y={y} />,
        stationname: <PrimaryStationBoard x={x} y={y} title={config?.value?.split('/')[1]} subtitle={config?.value?.split('/')[0]} info={config?.info || ''} angle= {angle} />,
        secondaryStationBoard: <SecondaryStationBoard x={x} y={y} title={config.title} subtitle={config.subTitle} />,
        kmPost: <KmPost x={x} y={y} km={config.km} />,
        gradientPost: <GradientPostK x={x} y={y} km={config.km} />,
        haltStation: <HaltStation x={x} y={y} />,
        shuntingLimit: <ShuntingLimit x={x} y={y} />,
        sigmaBoard: <SigmaBoard x={x} y={y} angle={angle}/>,
        'neutral section': <NeutralSelection x={x} y={y} meter={config.value} angle={angle}/>,
        djBoards: <DjBoards x={x} y={y} type={config.type} />,
        pole: <OHEMast x={x} y={y} aval={config?.value?.split('/')[0]} bval={config?.value?.split('/')[1]} angle={angle} />,
        panto: <Panto x={x} y={y} type={config.pantoType} />,
        sigtingBoards: <SigtingBoards x={x} y={y} type={config.sigtingType} />,
        bridgeBoard: <BridgeBoardKonva x={x} y={y} title={config.title} subTitle={config.subTitle} />,
        whistleIndicators: <WhistleIndicators x={x} y={y} type={config.type} />,
        terminationIndicators: <TerminationIndicators x={x} y={y} type={config.type} />,
        warningBoards: <WarningBoards x={x} y={y} type={config.type} />,
        signBoard:<SignBoard x={x} y={y} title={config.value} angle={angle}/>
    };

    return componentMap[type] || null;
};


export const SpeedIndicator = ({ x, y, displayNumber }) => {
    const height = 20
    const width = 10
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotationDeg={90}
        >

            {/* Background Rectangle */}
            <Rect x={462.5} y={674.5} width={75} height={155} fill="white" stroke="black" />

            {/* Black Sections */}
            <Rect x={463} y={941.31} width={74} height={299} fill="black" stroke="black" />
            <Rect x={463} y={1200} width={75} height={299} fill="white" stroke="black" />
            <Rect x={463} y={1603.43} width={74} height={299} fill="black" stroke="black" />
            <Rect x={463} y={1900} width={75} height={299} fill="white" stroke="black" />
            <Rect x={463} y={2265.55} width={74} height={299} fill="black" stroke="black" />

            {/* Yellow Triangle (Top Section) */}
            <Path
                data="M3.98061 672.5L500.043 3.46643L996.054 672.479L3.98061 672.5Z"
                fill="#FFFF02"
                stroke="black"
                strokeWidth={4}
            />

            {/* Display Dynamic Number */}
            <Text
                x={400}
                y={400}
                text={displayNumber} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={200}
                height={100}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>
    );
};


export const CautionIndicator = ({ type, x, y, displayNumber }) => {
    const height = 20;
    const width = 10;
    displayNumber = displayNumber || 20
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {/* Rectangles */}
            <Rect x={663} y={666.81} width={74} height={299} fill="black" stroke="black" />
            <Rect x={663} y={1328.93} width={74} height={299} fill="black" stroke="black" />
            <Rect x={663} y={1991.05} width={74} height={299} fill="black" stroke="black" />

            {/* Paths */}
            <Path
                data="M1203.1 397.999H4.57728L186.636 201.358L187.894 200L186.636 198.641L4.57727 2H1203.1L1397.2 200L1203.1 397.999Z"
                fill="#FFFF02"
                stroke="black"
                strokeWidth={4}
            />
            <Path
                data="M700 200L900 400H500L700 200Z"
                fill="black"
            />
            <Path
                data="M700 200L500 0H900L700 200Z"
                fill="black"
            />

            {type && (
                <>
                    <Circle
                        x={368.82}  // Use x instead of cx
                        y={200}     // Use y instead of cy
                        radius={63.9438}
                        fill="white"
                        stroke="black"
                        strokeWidth={4}
                    />
                    <Circle
                        x={950}  // Use x instead of cx
                        y={200}      // Use y instead of cy
                        radius={63.9438}
                        fill="white"
                        stroke="black"
                        strokeWidth={4}
                    />
                </>
            )}

            {(displayNumber && type) && (
                <Text
                    text={displayNumber}
                    x={1050}       // Center position (adjust based on your stage size)
                    y={150}       // Higher position
                    fontFamily="Arial"
                    fill="black"
                    align="center"
                    verticalAlign="middle"
                    width={200}   // Add bounding box
                    height={100}
                    fontSize={150}  // Bigger font size
                    fontStyle="bold" // Bold for clarity
                />
            )}
        </Group>
    );
};

export const StopIndicator = ({ x, y }) => {


    const height = 20;
    const width = 10;
    return (

        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90}
        >
            <Path data="M664.5 402H739.5V2402H664.5V402Z" fill="white" />
            <Path data="M736.3 402V2402H742.7V402H736.3ZM667.7 2402V402H661.3V2402H667.7Z" fill="black"
                mask="url(#Path-1-inside-1_69_2969)" />
            <Rect x={665} y={668.81} width={74} height={299} fill="black" stroke="black" />
            <Rect x={665} y={1330.93} width={74} height={299} fill="black" stroke="black" />
            <Rect x={665} y={1993.05} width={74} height={299} fill="black" stroke="black" />
            <Rect x={1} y={1.12207} width={1402} height={402} stroke="black" stroke-width="2" />
            <Rect x={2} y={2.12207} width={235} height={400} fill="#FF0000" />
            <Rect x={467} y={2.12207} width={470} height={400} fill="#FF0000" />
            <Rect x={1167} y={2.12207} width={235} height={400} fill="#FF0000" />
            <Rect x={937} y={2.12207} width={230} height={400} fill="white" />
            <Ellipse
                x={1052}
                y={202.124}
                radiusX={68.0685}
                radiusY={65.7812}
                fill="#FF0000"
            />
            <Rect x={237} y={2.12207} width={230} height={400} fill="white" />
            <Ellipse
                x={352}
                y={202.124}
                radiusX={68.0685}
                radiusY={65.7812}
                fill="#FF0000"
            />
        </Group>
    )





}

export const StopDisk = ({ x, y }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Path data="M662.5 400H737.5V2050H662.5V400Z" fill="white" />
            <Path data="M734.3 400V2050H740.7V400H734.3ZM665.7 2050V400H659.3V2050H665.7Z" fill="black"
                mask="url(#Path-1-inside-1_69_3169)" />
            <Rect x={663} y={620.205} width={74} height={246.5} fill="black" stroke="black" />
            <Rect x={663} y={1166.46} width={74} height={246.5} fill="black" stroke="black" />
            <Rect x={663} y={1712.71} width={74} height={246.5} fill="black" stroke="black" />
            <Circle x={700} cy={443.455} radius={421.75} fill="#FF0000" stroke="black" strokeWidth="4" />
            <Text
                x={400}
                y={-10}
                text={'Stop'} // Convert number to string
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                width={600}
                height={100}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>


    )
}

export const PrimaryStationBoard = ({ x, y, title, subtitle, info, angle }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={angle}
        >
            {/* <Rect x={1.59766} y={76.5} width={72} height={3047} stroke="black" strokeWidth={3} /> */}
            {/* <Circle cx={37.5977} y={37.5} r={36} stroke="black" strokeWidth={3} /> */}
            {/* <Rect x={2516.6} y={76.5} width={72} height={3047} stroke="black" strokeWidth={3} /> */}
            {/* <Circle x={2552.6} y={37.5} radius={36} stroke="black" strokeWidth={3} /> */}
            <Rect x={75.0977} y={275} width={2440} height={900} fill="#FFFF00" />
            {/* <Rect x={-1.5} y={-1.5} width={2437} height={47} transform="matrix(1 0 0 -1 75.0977 272)" stroke="black" strokeWidth={3} />
            <Rect x={1.5} y={-1.5} width={2437} height={47} transform="matrix(1 0 0 -1 75.0977 1222)" stroke="black" strokeWidth={3} /> */}
            
            {/* Title */}
            <Text
                x={75.0977}
                y={450}
                text={title}
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2440}
                fontSize={300}
                fontStyle="bold"
                wrap="word"
            />
            
            {/* Subtitle */}
            <Text
                x={75.0977}
                y={700}
                text={subtitle}
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2440}
                fontSize={300}
                fontStyle="bold"
                wrap="word"
            />
            
            {/* Info */}
            <Text
                x={75.0977}
                y={1000}
                text={info}
                fontFamily="Arial"
                fill="red"
                align="center"
                verticalAlign="middle"
                width={2440}
                fontSize={150}
                fontStyle="bold"
                wrap="word"
            />
        </Group>
    );
}


export const SecondaryStationBoard = ({ x, y, title, subtitle }) => {
    const height = 70;
    const width = 30;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Path data="M452.941 846.718L2.65532 452.718L424.793 30.58L875.079 424.58L452.941 846.718Z" fill="white" stroke="black"
                stroke-width="3" />
            <Circle x={438.867} y={438.648} radius={118.965} stroke="#FF0000" stroke-width="25" />
            <Rect x={156.664} y={410.436} width={564.403} height={56.4275} fill="#230068" />
            <Text
                x={-570}
                y={250}
                text={title} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={100}
                fontSize={100}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
            <Text
                x={-550}
                y={390}
                text={subtitle} // Convert number to string
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={100}
                fontSize={70}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>
    )

}

export const KmPost = ({ x, y, km }) => {
    const height = 70;
    const width = 30;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >

            <Path data="M1.5 250C1.5 112.757 112.757 1.5 250 1.5C387.243 1.5 498.5 112.757 498.5 250V698.5H1.5V250Z" fill="#FFFF00"
                stroke="black" stroke-width="3" />

            <Path
                data="M102.277 594.14V444.321H129.417V513.159H131.246L189.695 444.321H222.834L164.896 511.549L223.346 594.14H190.719L146.023 529.911L129.417 549.516V594.14H102.277ZM239.629 444.321H272.841L317.318 552.881H319.074L363.551 444.321H396.763V594.14H370.72V491.213H369.33L327.925 593.701H308.466L267.062 490.993H265.672V594.14H239.629V444.321Z"
                fill="black" />
            <Text
                x={-750}
                y={200}
                text={km} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />

        </Group>
    )
}

export const GradientPostK = ({ x, y, km }) => {
    const height = 40;
    const width = 20;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >


            <Path data="M1.5 60C1.5 27.6913 27.6913 1.5 60 1.5H321C353.309 1.5 379.5 27.6913 379.5 60V758.5H1.5V60Z" fill="#FFFF00" stroke="black" strokeWidth="3" />
            <Path data="M40.6562 376.618L191.141 485.657L340.143 376.618" stroke="black" strokeWidth="23" />
            <Text
                x={-800}
                y={100}
                text={km} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>
    )

}

export const HaltStation = ({ x, y }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {/* Vertical divider */}
            <Path
                data="M844.5 1321H919.5V3421H844.5V1321Z"
                fill="white"
            />
            <Path
                data="M916.3 1321V3421H922.7V1321H916.3ZM847.7 3421V1321H841.3V3421H847.7Z"
                fill="black"
            />

            {/* Black Rectangles */}
            <Rect x={845} y={1601.12} width={74} height={314} fill="black" />
            <Rect x={845} y={2296.35} width={74} height={314} fill="black" />
            <Rect x={845} y={2991.58} width={74} height={314} fill="black" />

            {/* Yellow square */}
            <Rect
                x={583.5}
                y={722.5}
                width={597}
                height={597}
                fill="#FFFF00"
                stroke="black"
                strokeWidth={3}
            />

            {/* Complex Paths (text elements) */}
            <Path
                data="M747.136 1184V858.182H806.159V996.114H957.136V858.182H1016.32V1184H957.136V1045.59H806.159V1184H747.136Z"
                fill="black"
            />

            {/* Text input-like elements */}
            <Rect
                x={40.5}
                y={4.5}
                width={163.922}
                height={29}
                cornerRadius={2.5}
                stroke="black"
                strokeWidth={1}
                opacity={0.2}
            />



        </Group>
    )

}

export const ShuntingLimit = ({ x, y }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {/* Yellow vertical bar */}
            <Path
                data="M263.07 864H338.07V2964H263.07V864Z"
                fill="#FFFF00"
            />

            {/* Black borders for vertical bar */}
            <Path
                data="M334.87 864V2964H341.27V864H334.87ZM266.27 2964V864H259.87V2964H266.27Z"
                fill="black"
            />

            {/* Black Rectangles */}
            <Rect x={263.57} y={1144.12} width={74} height={314} fill="black" />
            <Rect x={263.57} y={1839.35} width={74} height={314} fill="black" />
            <Rect x={263.57} y={2534.58} width={74} height={314} fill="black" />

            {/* Main yellow Rectangle */}
            <Rect
                x={1.70312}
                y={1.5}
                width={597}
                height={861}
                fill="#FFFF00"
                stroke="black"
                strokeWidth={3}
            />

            {/* X symbol Paths */}
            <Path
                data="M525.203 173.164L131.365 567.002L75.2031 510.84L469.041 117.002L525.203 173.164Z"
                fill="black"
                fillRule="evenodd"
            />
            <Path
                data="M525.203 510.837L131.365 116.999L75.2031 173.161L469.041 566.999L525.203 510.837Z"
                fill="black"
                fillRule="evenodd"
            />

            {/* Complex Path (text) */}
            <Path
                data="M94.8458 656.262C94.5276 653.284 93.1867 650.966 90.8231 649.307C88.4822 647.648 85.4367 646.819 81.6867 646.819C79.0503 646.819 76.789 647.216 74.9026 648.012C73.0163 648.807 71.5731 649.887 70.5731 651.25C69.5731 652.614 69.0617 654.171 69.039 655.921C69.039 657.375 69.3685 658.637 70.0276 659.705C70.7094 660.773 71.6299 661.682 72.789 662.432C73.9481 663.159 75.2322 663.773 76.6413 664.273C78.0503 664.773 79.4708 665.194 80.9026 665.534L87.4481 667.171C90.0844 667.784 92.6185 668.614 95.0503 669.659C97.5049 670.705 99.6981 672.023 101.63 673.614C103.584 675.205 105.13 677.125 106.266 679.375C107.403 681.625 107.971 684.262 107.971 687.284C107.971 691.375 106.925 694.978 104.834 698.091C102.744 701.182 99.7208 703.603 95.7663 705.353C91.8344 707.08 87.0731 707.944 81.4822 707.944C76.0503 707.944 71.3344 707.103 67.3344 705.421C63.3572 703.739 60.2435 701.284 57.9935 698.057C55.7663 694.83 54.5617 690.898 54.3799 686.262H66.8231C67.0049 688.694 67.7549 690.716 69.0731 692.33C70.3913 693.944 72.1072 695.148 74.2208 695.944C76.3572 696.739 78.7435 697.137 81.3799 697.137C84.1299 697.137 86.539 696.728 88.6072 695.909C90.6981 695.069 92.3344 693.909 93.5163 692.432C94.6981 690.932 95.3003 689.182 95.3231 687.182C95.3003 685.364 94.7663 683.864 93.7208 682.682C92.6753 681.478 91.2094 680.478 89.3231 679.682C87.4594 678.864 85.2776 678.137 82.7776 677.5L74.8344 675.455C69.0844 673.978 64.539 671.739 61.1981 668.739C57.8799 665.716 56.2208 661.705 56.2208 656.705C56.2208 652.591 57.3344 648.989 59.5617 645.898C61.8117 642.807 64.8685 640.409 68.7322 638.705C72.5958 636.978 76.9708 636.114 81.8572 636.114C86.8117 636.114 91.1526 636.978 94.8799 638.705C98.6299 640.409 101.573 642.784 103.709 645.83C105.846 648.853 106.948 652.33 107.016 656.262H94.8458ZM118.286 706.887V637.069H130.934V666.625H163.286V637.069H175.968V706.887H163.286V677.228H130.934V706.887H118.286ZM232.775 637.069H245.423V682.682C245.423 687.682 244.241 692.08 241.878 695.875C239.537 699.671 236.241 702.637 231.991 704.773C227.741 706.887 222.775 707.944 217.093 707.944C211.389 707.944 206.412 706.887 202.162 704.773C197.912 702.637 194.616 699.671 192.275 695.875C189.934 692.08 188.764 687.682 188.764 682.682V637.069H201.412V681.625C201.412 684.534 202.048 687.125 203.321 689.398C204.616 691.671 206.434 693.455 208.775 694.75C211.116 696.023 213.889 696.659 217.093 696.659C220.298 696.659 223.071 696.023 225.412 694.75C227.775 693.455 229.593 691.671 230.866 689.398C232.139 687.125 232.775 684.534 232.775 681.625V637.069ZM315.585 637.069V706.887H304.335L271.437 659.33H270.858V706.887H258.21V637.069H269.528L302.392 684.659H303.006V637.069H315.585ZM325.338 647.671V637.069H381.043V647.671H359.463V706.887H346.918V647.671H325.338ZM403.469 637.069V706.887H390.821V637.069H403.469ZM473.58 637.069V706.887H462.33L429.432 659.33H428.853V706.887H416.205V637.069H427.523L460.387 684.659H461.001V637.069H473.58ZM533.174 659.364C532.606 657.523 531.822 655.875 530.822 654.421C529.845 652.944 528.663 651.682 527.276 650.637C525.913 649.591 524.345 648.807 522.572 648.284C520.799 647.739 518.867 647.466 516.776 647.466C513.026 647.466 509.685 648.409 506.754 650.296C503.822 652.182 501.515 654.955 499.833 658.614C498.174 662.25 497.345 666.682 497.345 671.909C497.345 677.182 498.174 681.648 499.833 685.307C501.492 688.966 503.799 691.75 506.754 693.659C509.708 695.546 513.14 696.489 517.049 696.489C520.595 696.489 523.663 695.807 526.254 694.444C528.867 693.08 530.879 691.148 532.288 688.648C533.697 686.125 534.401 683.171 534.401 679.784L537.265 680.228H518.31V670.341H546.64V678.728C546.64 684.705 545.367 689.875 542.822 694.239C540.276 698.603 536.776 701.966 532.322 704.33C527.867 706.671 522.754 707.841 516.981 707.841C510.549 707.841 504.901 706.398 500.038 703.512C495.197 700.603 491.413 696.478 488.685 691.137C485.981 685.773 484.629 679.409 484.629 672.046C484.629 666.409 485.424 661.375 487.015 656.944C488.629 652.512 490.879 648.75 493.765 645.659C496.651 642.546 500.038 640.182 503.924 638.569C507.81 636.932 512.038 636.114 516.606 636.114C520.47 636.114 524.072 636.682 527.413 637.819C530.754 638.932 533.72 640.523 536.31 642.591C538.924 644.659 541.072 647.114 542.754 649.955C544.435 652.796 545.538 655.932 546.06 659.364H533.174ZM181.088 807.887V738.069H193.735V797.284H224.485V807.887H181.088ZM247.15 738.069V807.887H234.503V738.069H247.15ZM259.886 738.069H275.364L296.091 788.659H296.909L317.636 738.069H333.114V807.887H320.977V759.921H320.33L301.034 807.682H291.966L272.67 759.819H272.023V807.887H259.886V738.069ZM358.574 738.069V807.887H345.926V738.069H358.574ZM368.242 748.671V738.069H423.946V748.671H402.367V807.887H389.821V748.671H368.242Z"
                fill="black"
            />

            {/* Black circle */}
            <Circle
                x={301}
                y={133.933}
                radius={60.5703}
                fill="black"
            />
        </Group>
    )
}

export const SigmaBoard = ({ x, y,angle }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={angle} // Use `rotation` instead of `rotationDeg`
        >
            <Rect width={600} height={800} transform="translate(0.5 0.5)" fill="#230068" />
            <Path fillRule="evenodd" clipRule="evenodd" data="M118.392 172.975L75.5 115.674H519.483V219.976L308.872 221.982C312.523 227.48 316.174 232.99 319.935 238.429L322.834 242.557L326.156 247.298L333.412 257.64L337.251 263.117L355.539 289.241L362.512 299.186L376.631 319.361L380.219 324.49L387.349 334.684L395.075 345.73C398.24 350.256 401.422 354.775 404.634 359.275L408.113 364.113L414.679 373.296L418.314 378.354C419.913 380.6 421.48 382.86 423.031 385.153L425.209 388.465L428.547 393.37C428.249 397.257 428.077 399.537 427.56 401.433C426.808 404.122 425.35 406.04 421.824 410.679C419.427 413.919 417.045 417.185 414.694 420.471L410.949 425.737C404.571 434.563 398.381 443.491 392.27 452.498L384.827 463.457L380.972 469.105L368.905 486.801L360.365 499.336L356.134 505.554L348.44 516.834C341.466 527.101 334.587 537.429 306.866 579.017L525.5 581.023V685.326H79.3646L104.63 649.049C104.63 649.049 117.285 630.78 131.263 610.983L133.99 607.247L137.093 602.962C145.978 590.745 154.816 578.496 163.513 566.143C171.693 554.519 179.889 542.928 188.225 531.418C196.75 519.65 205.259 507.871 213.627 495.988C221.791 484.386 229.971 472.809 238.277 461.311L241.552 456.788L250.5 444.408C253.101 440.818 255.718 437.236 258.366 433.668L262.08 428.659L269.257 418.928C272.579 414.495 275.823 410.181 278.691 405.581C280.32 402.956 281.825 400.237 283.141 397.35C282.89 393.801 281.887 391.07 280.399 388.492C279.192 386.42 277.656 384.446 275.933 382.226C274.444 380.4 272.987 378.564 271.545 376.719L269.476 374.11L266.045 369.692C259.808 361.793 253.712 353.793 247.679 345.735L243.934 340.701C230.535 322.846 217.263 304.902 204.052 286.914C204.052 286.914 206.293 290.007 196.343 276.444C186.392 262.88 176.441 249.32 166.349 235.858C166.349 235.858 165.503 234.942 160.442 227.999C155.38 221.057 144.933 207.615 144.933 207.615L118.392 172.975Z" fill="#FFFF00" />

        </Group>
    )






}

export const NeutralSelection = ({ x, y, meter,angle }) => {
    const height = 40;
    const width = 27;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={angle} // Use `rotation` instead of `rotationDeg`
        >
            <Rect x={297.5} y={269.558} width={600} height={800} fill="#230068" />
            <Path fillRule="evenodd" clipRule="evenodd"
                data="M597.013 290.852L847.5 665.852L597.013 1040.85L347.5 665.852L597.013 290.852ZM597.064 344.726L383.398 665.852L597.065 986.977L811.566 665.852L597.064 344.726Z"
                fill="white" />
            <Text
                x={-400}
                y={550}
                text={meter} // Convert number to string
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />

        </Group>
    )

}

export const DjBoards = ({ x, y, type }) => {
    const height = 40;
    const width = 20;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Rect x={0.28125} y={0.557617} width={600} height={800} fill="#230068" />
            {
                type === 'openBoard' ?
                    (<>
                        <Rect x={255.281} y={55.5566} width={90} height={200} fill="white" />
                        <Rect x={255.281} y={545.557} width={90} height={200} fill="white" />
                        <Rect x={100.281} y={445.557} width={90} height={400}
                            rotation={-90}
                            offsetX={0}  // Offset to rotate from center
                            offsetY={0}
                            fill="white" />
                    </>) : null
            }
            {
                ['general', 'memu', 'emu'].includes(type) ?
                    (
                        <>
                            <Rect x={255.281} y={type === 'emu' ? 137 : 55.5566} width={90} height={type == 'emu' ? 130 : 200} fill="white" />
                            <Rect x={255.281} y={545.557} width={90} height={200} fill="white" />
                            <Rect x={255.281} y={300.557} width={90} height={200} fill="white" />
                            {
                                type === 'memu' ?
                                    (<>
                                        <Path
                                            x={100}
                                            y={120}
                                            data="M22.0859 0.5L30.7109 34.6875L40.5234 0.5H62.3359V91.5H46.2109V64.5625L46.9609 22L35.0234 61.5H26.3359L15.6484 23.6875L16.3984 64.5625V91.5H0.273438V0.5H22.0859ZM56.5234 194.625H19.1484V220.312H62.8359V234.5H1.52344V143.5H62.6484V157.812H19.1484V180.75H56.5234V194.625ZM22.0859 286.5L30.7109 320.688L40.5234 286.5H62.3359V377.5H46.2109V350.562L46.9609 308L35.0234 347.5H26.3359L15.6484 309.688L16.3984 350.562V377.5H0.273438V286.5H22.0859ZM61.1484 429.5L61.2109 489.812C61.2109 494.896 60.5026 499.417 59.0859 503.375C57.7109 507.333 55.7109 510.667 53.0859 513.375C50.4193 516.125 47.1693 518.208 43.3359 519.625C39.5443 521.042 35.2109 521.75 30.3359 521.75C25.7526 521.75 21.6068 521.042 17.8984 519.625C14.2318 518.208 11.0859 516.146 8.46094 513.438C5.83594 510.729 3.79427 507.396 2.33594 503.438C0.919271 499.438 0.210938 494.896 0.210938 489.812L0.273438 429.5H17.8359L17.8984 489.812C17.9401 492.854 18.2318 495.521 18.7734 497.812C19.3568 500.104 20.2109 502 21.3359 503.5C22.3776 504.875 23.6484 505.917 25.1484 506.625C26.6484 507.292 28.3776 507.625 30.3359 507.625C32.4609 507.625 34.3359 507.271 35.9609 506.562C37.6276 505.812 39.0026 504.708 40.0859 503.25C41.2526 501.75 42.1276 499.875 42.7109 497.625C43.2943 495.375 43.6068 492.771 43.6484 489.812L43.7109 429.5H61.1484Z"
                                            fill="white" />
                                    </>) : null
                            }
                            {
                                type === 'emu' ?
                                    (<>
                                        <Path
                                            x={200}
                                            data="M55.6875 51.125H18.3125V76.8125H62V91H0.6875V0H61.8125V14.3125H18.3125V37.25H55.6875V51.125ZM96.845 0L105.47 34.1875L115.283 0H137.095V91H120.97V64.0625L121.72 21.5L109.783 61H101.095L90.4075 23.1875L91.1575 64.0625V91H75.0325V0H96.845ZM211.503 0L211.565 60.3125C211.565 65.3958 210.857 69.9167 209.44 73.875C208.065 77.8333 206.065 81.1667 203.44 83.875C200.773 86.625 197.523 88.7083 193.69 90.125C189.898 91.5417 185.565 92.25 180.69 92.25C176.107 92.25 171.961 91.5417 168.253 90.125C164.586 88.7083 161.44 86.6458 158.815 83.9375C156.19 81.2292 154.148 77.8958 152.69 73.9375C151.273 69.9375 150.565 65.3958 150.565 60.3125L150.628 0H168.19L168.253 60.3125C168.294 63.3542 168.586 66.0208 169.128 68.3125C169.711 70.6042 170.565 72.5 171.69 74C172.732 75.375 174.003 76.4167 175.503 77.125C177.003 77.7917 178.732 78.125 180.69 78.125C182.815 78.125 184.69 77.7708 186.315 77.0625C187.982 76.3125 189.357 75.2083 190.44 73.75C191.607 72.25 192.482 70.375 193.065 68.125C193.648 65.875 193.961 63.2708 194.003 60.3125L194.065 0H211.503Z" fill="white" />

                                    </>) : null
                            }
                        </>
                    ) : null
            }
        </Group>
    )

}

export const OHEMast = ({ x, y, aval, bval,angle }) => {
    const height = 50;
    const width = 27;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={angle} // Use `rotation` instead of `rotationDeg`
        >
            <Rect width={375.487} height={366} fill="black" />
            <Path data="M38 183H188.484H337.487" stroke="#FFFF00" strokeWidth="23" />
            <Text
                x={-830}
                y={-20}
                text={aval} // Convert number to string
                fontFamily="Arial"
                fill="#FFFF00"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
            <Text
                x={-830}
                y={170}
                text={bval} // Convert number to string
                fontFamily="Arial"
                fill="#FFFF00"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={150}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>
    )
}

export const Panto = ({ x, y, type }) => {
    const height = 50;
    const width = 25;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {
                type === 'lower' ?
                    (<>
                        <Path data="M5.54254 4.85114H796.286V512.26H5.54254V4.85114Z" fill="white" stroke="black" strokeWidth="9.25696" />
                        <Path data="M334.057 235.483V325.177L195.086 365.905L334.057 414.413V455.599" stroke="black" strokeWidth="21.7811"
                            stroke-linecap="round" />
                        <Path data="M108.5 267.378L151.075 228.855H383.562L438.98 267.378" stroke="black" strokeWidth="16.3358"
                            stroke-linecap="round" />
                        <Path
                            data="M57.2578 276.426L10.1004 194.747L104.415 194.747L57.2578 276.426ZM49.0899 202.915L49.0899 61.5119L65.4257 61.5119L65.4257 202.915L49.0899 202.915Z"
                            fill="black" />
                        <Path
                            data="M446.671 125.681V66.2777H455.633V117.965H482.55V125.681H446.671ZM543.696 95.9792C543.696 102.322 542.535 107.775 540.215 112.338C537.894 116.882 534.714 120.382 530.672 122.838C526.65 125.275 522.077 126.493 516.953 126.493C511.809 126.493 507.216 125.275 503.175 122.838C499.153 120.382 495.982 116.873 493.661 112.309C491.341 107.746 490.181 102.302 490.181 95.9792C490.181 89.6367 491.341 84.1933 493.661 79.6492C495.982 75.0856 499.153 71.5857 503.175 69.1492C507.216 66.6934 511.809 65.4655 516.953 65.4655C522.077 65.4655 526.65 66.6934 530.672 69.1492C534.714 71.5857 537.894 75.0856 540.215 79.6492C542.535 84.1933 543.696 89.6367 543.696 95.9792ZM534.82 95.9792C534.82 91.1449 534.037 87.0745 532.47 83.7679C530.924 80.442 528.796 77.9282 526.089 76.2265C523.401 74.5055 520.356 73.645 516.953 73.645C513.53 73.645 510.475 74.5055 507.787 76.2265C505.099 77.9282 502.972 80.442 501.406 83.7679C499.859 87.0745 499.085 91.1449 499.085 95.9792C499.085 100.813 499.859 104.893 501.406 108.219C502.972 111.526 505.099 114.04 507.787 115.761C510.475 117.462 513.53 118.313 516.953 118.313C520.356 118.313 523.401 117.462 526.089 115.761C528.796 114.04 530.924 111.526 532.47 108.219C534.037 104.893 534.82 100.813 534.82 95.9792ZM567.417 125.681L550.942 66.2777H560.368L571.942 112.28H572.493L584.53 66.2777H593.87L605.907 112.309H606.458L618.002 66.2777H627.458L610.954 125.681H601.933L589.432 81.1864H588.968L576.466 125.681H567.417ZM637.264 125.681V66.2777H674.507V73.9931H646.226V92.0925H672.563V99.7789H646.226V117.965H674.855V125.681H637.264ZM688.112 125.681V66.2777H709.286C713.888 66.2777 717.707 67.0705 720.743 68.6561C723.798 70.2417 726.08 72.4365 727.588 75.2403C729.097 78.0249 729.851 81.2444 729.851 84.8991C729.851 88.5345 729.087 91.7347 727.559 94.4999C726.051 97.2457 723.769 99.3825 720.714 100.91C717.678 102.438 713.859 103.202 709.257 103.202H693.217V95.4861H708.445C711.345 95.4861 713.704 95.0703 715.522 94.2389C717.359 93.4074 718.703 92.1988 719.554 90.6132C720.405 89.0276 720.83 87.1229 720.83 84.8991C720.83 82.656 720.395 80.7127 719.525 79.069C718.674 77.4254 717.33 76.1685 715.493 75.2984C713.675 74.4089 711.287 73.9641 708.329 73.9641H697.075V125.681H688.112ZM717.437 98.8797L732.113 125.681H721.903L707.517 98.8797H717.437ZM451.656 234.681V175.278H472.83C477.451 175.278 481.28 176.119 484.316 177.801C487.352 179.483 489.624 181.785 491.132 184.704C492.64 187.605 493.395 190.873 493.395 194.508C493.395 198.163 492.631 201.45 491.103 204.37C489.595 207.271 487.313 209.572 484.258 211.273C481.222 212.956 477.403 213.797 472.801 213.797H458.24V206.197H471.989C474.909 206.197 477.277 205.695 479.095 204.689C480.913 203.664 482.247 202.272 483.098 200.512C483.949 198.753 484.374 196.751 484.374 194.508C484.374 192.265 483.949 190.273 483.098 188.533C482.247 186.793 480.903 185.43 479.066 184.443C477.248 183.457 474.851 182.964 471.873 182.964H460.619V234.681H451.656ZM504.252 234.681H494.738L516.115 175.278H526.47L547.847 234.681H538.333L521.539 186.068H521.075L504.252 234.681ZM505.847 211.418H536.709V218.96H505.847V211.418ZM606.005 175.278V234.681H597.767L567.573 191.115H567.022V234.681H558.059V175.278H566.354L596.578 218.902H597.129V175.278H606.005ZM617.783 182.993V175.278H663.756V182.993H645.222V234.681H636.288V182.993H617.783ZM724.597 204.979C724.597 211.322 723.437 216.775 721.117 221.338C718.796 225.882 715.615 229.382 711.574 231.838C707.552 234.275 702.979 235.493 697.854 235.493C692.711 235.493 688.118 234.275 684.077 231.838C680.055 229.382 676.883 225.873 674.563 221.309C672.243 216.746 671.082 211.302 671.082 204.979C671.082 198.637 672.243 193.193 674.563 188.649C676.883 184.086 680.055 180.586 684.077 178.149C688.118 175.693 692.711 174.466 697.854 174.466C702.979 174.466 707.552 175.693 711.574 178.149C715.615 180.586 718.796 184.086 721.117 188.649C723.437 193.193 724.597 198.637 724.597 204.979ZM715.722 204.979C715.722 200.145 714.938 196.075 713.372 192.768C711.825 189.442 709.698 186.928 706.991 185.227C704.303 183.506 701.258 182.645 697.854 182.645C694.432 182.645 691.376 183.506 688.689 185.227C686.001 186.928 683.874 189.442 682.307 192.768C680.76 196.075 679.987 200.145 679.987 204.979C679.987 209.813 680.76 213.893 682.307 217.219C683.874 220.526 686.001 223.04 688.689 224.761C691.376 226.462 694.432 227.313 697.854 227.313C701.258 227.313 704.303 226.462 706.991 224.761C709.698 223.04 711.825 220.526 713.372 217.219C714.938 213.893 715.722 209.813 715.722 204.979Z"
                            fill="black" />
                    </>) : null
            }
            {
                type === 'rise' ? (<>
                    <Path data="M5.54254 4.85114H796.286V512.26H5.54254V4.85114Z" fill="white" stroke="black" strokeWidth="9.25696" />
                    <Path
                        data="M473.53 125.681V66.2777H494.703C499.306 66.2777 503.125 67.0705 506.161 68.6561C509.216 70.2417 511.498 72.4365 513.006 75.2403C514.514 78.0249 515.268 81.2444 515.268 84.8991C515.268 88.5345 514.504 91.7347 512.977 94.4999C511.469 97.2457 509.187 99.3825 506.132 100.91C503.096 102.438 499.277 103.202 494.674 103.202H478.634V95.4861H493.862C496.763 95.4861 499.122 95.0703 500.94 94.2389C502.777 93.4074 504.12 92.1988 504.971 90.6132C505.822 89.0276 506.248 87.1229 506.248 84.8991C506.248 82.656 505.812 80.7127 504.942 79.069C504.091 77.4254 502.748 76.1685 500.911 75.2984C499.093 74.4089 496.705 73.9641 493.746 73.9641H482.492V125.681H473.53ZM502.854 98.8797L517.531 125.681H507.321L492.934 98.8797H502.854ZM532.826 125.681H523.312L544.689 66.2777H555.044L576.421 125.681H566.907L550.113 77.0677H549.649L532.826 125.681ZM534.421 102.418H565.283V109.96H534.421V102.418ZM595.595 66.2777V125.681H586.633V66.2777H595.595ZM642.68 81.8826C642.371 79.1367 641.095 77.0097 638.852 75.5014C636.609 73.9738 633.785 73.21 630.382 73.21C627.946 73.21 625.838 73.5967 624.059 74.3702C622.28 75.1243 620.897 76.1685 619.911 77.5028C618.944 78.8177 618.461 80.3163 618.461 81.9986C618.461 83.4102 618.79 84.6284 619.447 85.6533C620.124 86.6781 621.004 87.5386 622.087 88.2347C623.189 88.9115 624.368 89.482 625.625 89.9461C626.882 90.3908 628.091 90.7582 629.251 91.0483L635.052 92.5565C636.947 93.0206 638.89 93.6491 640.882 94.4419C642.874 95.2347 644.72 96.2789 646.422 97.5745C648.124 98.87 649.497 100.475 650.541 102.389C651.604 104.304 652.136 106.595 652.136 109.264C652.136 112.628 651.266 115.616 649.526 118.226C647.805 120.837 645.301 122.896 642.013 124.404C638.745 125.913 634.791 126.667 630.15 126.667C625.703 126.667 621.855 125.961 618.606 124.549C615.357 123.138 612.815 121.136 610.978 118.545C609.141 115.935 608.125 112.841 607.932 109.264H616.924C617.098 111.41 617.794 113.199 619.012 114.63C620.25 116.041 621.826 117.095 623.74 117.791C625.674 118.468 627.791 118.806 630.092 118.806C632.625 118.806 634.878 118.41 636.85 117.617C638.842 116.805 640.408 115.683 641.549 114.253C642.69 112.802 643.26 111.11 643.26 109.177C643.26 107.417 642.758 105.976 641.752 104.855C640.766 103.733 639.422 102.805 637.72 102.07C636.038 101.335 634.133 100.688 632.006 100.127L624.987 98.2126C620.23 96.917 616.46 95.0123 613.675 92.4985C610.91 89.9847 609.527 86.6588 609.527 82.5207C609.527 79.098 610.455 76.1105 612.312 73.558C614.168 71.0056 616.682 69.0235 619.853 67.6119C623.024 66.181 626.602 65.4655 630.585 65.4655C634.607 65.4655 638.156 66.1713 641.23 67.5829C644.324 68.9945 646.76 70.9379 648.539 73.413C650.318 75.8688 651.247 78.692 651.324 81.8826H642.68ZM664.48 125.681V66.2777H701.723V73.9931H673.443V92.0925H699.779V99.7789H673.443V117.965H702.071V125.681H664.48ZM451.554 234.681V175.278H472.728C477.35 175.278 481.178 176.119 484.214 177.801C487.25 179.483 489.522 181.785 491.031 184.704C492.539 187.605 493.293 190.873 493.293 194.508C493.293 198.163 492.529 201.45 491.002 204.37C489.493 207.271 487.212 209.572 484.156 211.273C481.12 212.956 477.301 213.797 472.699 213.797H458.139V206.197H471.887C474.807 206.197 477.176 205.695 478.993 204.689C480.811 203.664 482.145 202.272 482.996 200.512C483.847 198.753 484.272 196.751 484.272 194.508C484.272 192.265 483.847 190.273 482.996 188.533C482.145 186.793 480.801 185.43 478.964 184.443C477.147 183.457 474.749 182.964 471.771 182.964H460.517V234.681H451.554ZM504.15 234.681H494.637L516.014 175.278H526.368L547.745 234.681H538.232L521.438 186.068H520.973L504.15 234.681ZM505.746 211.418H536.607V218.96H505.746V211.418ZM605.903 175.278V234.681H597.666L567.471 191.115H566.92V234.681H557.957V175.278H566.253L596.476 218.902H597.028V175.278H605.903ZM617.681 182.993V175.278H663.655V182.993H645.12V234.681H636.187V182.993H617.681ZM724.496 204.979C724.496 211.322 723.335 216.775 721.015 221.338C718.695 225.882 715.514 229.382 711.472 231.838C707.45 234.275 702.877 235.493 697.753 235.493C692.609 235.493 688.017 234.275 683.975 231.838C679.953 229.382 676.782 225.873 674.461 221.309C672.141 216.746 670.981 211.302 670.981 204.979C670.981 198.637 672.141 193.193 674.461 188.649C676.782 184.086 679.953 180.586 683.975 178.149C688.017 175.693 692.609 174.466 697.753 174.466C702.877 174.466 707.45 175.693 711.472 178.149C715.514 180.586 718.695 184.086 721.015 188.649C723.335 193.193 724.496 198.637 724.496 204.979ZM715.62 204.979C715.62 200.145 714.837 196.075 713.271 192.768C711.724 189.442 709.597 186.928 706.889 185.227C704.202 183.506 701.156 182.645 697.753 182.645C694.33 182.645 691.275 183.506 688.587 185.227C685.899 186.928 683.772 189.442 682.206 192.768C680.659 196.075 679.885 200.145 679.885 204.979C679.885 209.813 680.659 213.893 682.206 217.219C683.772 220.526 685.899 223.04 688.587 224.761C691.275 226.462 694.33 227.313 697.753 227.313C701.156 227.313 704.202 226.462 706.889 224.761C709.597 223.04 711.724 220.526 713.271 217.219C714.837 213.893 715.62 209.813 715.62 204.979Z"
                        fill="black" />
                    <Path data="M35.8203 153.889L78.3955 115.366H310.882L366.301 153.889" stroke="black" strokeWidth="16.3358"
                        strokeLinecap="round" />
                    <Path data="M277.092 116.718L132.461 322.847L226.403 473.557" stroke="black" strokeWidth="16.3358"
                        strokeLinecap="round" />
                    <Path
                        data="M348.086 214.714L300.928 296.393L395.243 296.393L348.086 214.714ZM339.918 288.225L339.918 429.628L356.254 429.628L356.254 288.225L339.918 288.225Z"
                        fill="black" />
                </>) : null
            }
        </Group>
    )
}

export const SigtingBoards = ({ x, y, type }) => {

    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {
                type === 'passenger' ? (<>
                    {/* Yellow Path */}
                    <Path
                        data="M263.5 1174H338.5V3274H263.5V1174Z"
                        fill="#FFFF00"
                    />

                    {/* Black Rectangles */}
                    <Rect x={264} y={1454.12} width={74} height={314} fill="black" stroke="black" />
                    <Rect x={264} y={2149.35} width={74} height={314} fill="black" stroke="black" />
                    <Rect x={264} y={2844.58} width={74} height={314} fill="black" stroke="black" />

                    {/* Clipped Section */}
                    <Group
                        clipFunc={(ctx) => {
                            ctx.beginPath(); // Start defining the clipping path
                            ctx.Rect(0.84375, 0.196289, 600, 1500); // Define the clipping Rectangle
                            ctx.closePath();
                        }}
                    >
                        {/* Large Yellow Background */}
                        <Rect x={2.34375} y={1.69629} width={597} height={1941.75} fill="#FFFF00" stroke="black" strokeWidth={3} />

                        {/* Diagonal Black Rectangles */}
                        {[
                            -1458.91, -1374.05, -1289.2, -1204.35, -1119.49, -1034.64, -949.789,
                            -864.938, -780.086, -695.234, -610.375, -525.523, -440.672
                        ].map((y, index) => (
                            <Rect
                                key={index}
                                x={y}
                                y={1350.18 + index * 84.85} // Simulating diagonal effect
                                width={2997.33}
                                height={60}
                                fill="black"
                                rotation={-45} // Equivalent to transform="rotate(-45)"
                            />
                        ))}
                    </Group>

                </>) : null
            }
            {
                type === 'goods' ? (<>
                    <Path data="M263.5 1174H338.5V3274H263.5V1174Z" fill="#FFFF00" />
                    <Path data="M335.3 1174V3274H341.7V1174H335.3ZM266.7 3274V1174H260.3V3274H266.7Z" fill="black"
                        mask="url(#Path-1-inside-1_70_3721)" />
                    <Rect x={264} y={1454.12} width={74} height={314} fill="black" stroke="black" />
                    <Rect x={264} y={2149.35} width={74} height={314} fill="black" stroke="black" />
                    <Rect x={264} y={2844.58} width={74} height={314} fill="black" stroke="black" />
                    <Rect x={2.34375} y={1.69629} width={597} height={1941.75} fill="#FFFF00" stroke="black" strokeWidth="3" />
                    <Rect x={2.34375} y={1.69629} width={597} height={253} fill="black" stroke="black" strokeWidth="3" />
                    <Rect x={2.34375} y={1690.45} width={597} height={253} fill="black" stroke="black" strokeWidth="3" />
                    <Rect x={2.34375} y={654.57} width={597} height={636} fill="black" stroke="black" strokeWidth="3" />
                    <Circle x={300.844} y={972.57} radius={242.5} fill="#FFFF00" />
                    <Circle x={300.844} y={972.57} radius={125} fill="black" />
                </>) : null

            }
        </Group>
    )
}

export const BridgeBoardKonva = ({ x, y, title, subTitle }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Rect x={1.59375} y={1.5} width={72} height={2397} stroke="black" strokeWidth="3" />
            <Rect x={1326.59} y={1.5} width={72} height={2397} stroke="black" strokeWidth="3" />
            <Rect x={75.0938} y={50} width={1250} height={900} fill="#FFFF00" />
            <Rect x={1.5} y={-1.5} width={1247} height={47} transform="matrix(1 0 0 -1 75.0938 47)" stroke="black"
                strokeWidth="3" />
            <Rect x={1.5} y={-1.5} width={1247} height={47} transform="matrix(1 0 0 -1 75.0938 997)" stroke="black"
                strokeWidth="3" />
            <Text
                x={-300}
                y={200}
                text={title} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={300}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
            <Text
                x={-300}
                y={500}
                text={subTitle} // Convert number to string
                fontFamily="Arial"
                fill="black"
                align="center"
                verticalAlign="middle"
                width={2000}
                height={250}
                fontSize={250}  // Bigger font size
                fontStyle="bold" // Bold for clarity
            />
        </Group>
    )
}

export const WhistleIndicators = ({ x, y, type }) => {
    const height = 25;
    const width = 15;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            {
                type === 'single' ?
                    (<>
                        <Rect x={262.5} y={600} width={75} height={2100} fill="white" />

                        {/* Black Borders */}
                        <Path
                            data="M334.3 600V2700H340.7V600H334.3ZM265.7 2700V600H259.3V2700H265.7Z"
                            fill="black"
                        />

                        {/* Inner Rectangles */}
                        <Rect x={263} y={880.125} width={74} height={314} fill="black" stroke="black" />
                        <Rect x={263} y={1575.35} width={74} height={314} fill="black" stroke="black" />
                        <Rect x={263} y={2270.58} width={74} height={314} fill="black" stroke="black" />

                        {/* Yellow Background */}
                        <Rect x={1.5} y={1.5} width={597} height={597} fill="#FFFF00" stroke="black" strokeWidth={3} />

                        {/* Custom Path */}
                        <Path
                            data="M179.338 468.278L93.0547 131.72H162.699L212.614 365.568H215.117L270.185 131.72H329.817L384.738 366.061H387.388L437.303 131.72H506.948L420.665 468.278H358.529L301.105 248.233H298.75L241.473 468.278H179.338Z"
                            fill="black"
                        />
                    </>)
                    : null
            }
            {
                type === 'double' ?
                    (<>
                        {/* Yellow Rectangles */}
                        <Rect x={1.5} y={1.5} width={597} height={597} fill="#FFFF00" stroke="black" strokeWidth={3} />
                        <Rect x={1.5} y={751.5} width={597} height={597} fill="#FFFF00" stroke="black" strokeWidth={3} />

                        {/* Diagonal Black Lines */}
                        <Line points={[1.818, 598.426, 597.577, 2.667]} stroke="black" strokeWidth={3} />
                        <Line points={[1.818, 1348.43, 597.577, 752.667]} stroke="black" strokeWidth={3} />

                        {/* Black Rectangles */}
                        <Rect x={262.5} y={600} width={75} height={150} fill="black" />
                        <Rect x={262.5} y={1350} width={75} height={2100} fill="white" />
                        <Rect x={263} y={1630.12} width={74} height={314} fill="black" stroke="black" />
                        <Rect x={263} y={2325.35} width={74} height={314} fill="black" stroke="black" />
                        <Rect x={263} y={3020.58} width={74} height={314} fill="black" stroke="black" />

                        {/* Border Paths */}
                        <Path data="M334.3 600V750H340.7V600H334.3ZM265.7 750V600H259.3V750H265.7Z" fill="black" />
                        <Path data="M334.3 1350V3450H340.7V1350H334.3ZM265.7 3450V1350H259.3V3450H265.7Z" fill="black" />

                        {/* Custom Paths (Text & Symbols) */}
                        <Path
                            data="M140.048 283.607C120.048 264.007 103.848 243.807 96.6484 230.607C92.8484 223.807 91.0484 217.807 91.0484 212.807C91.0484 205.807 95.0484 202.007 101.848 202.007C107.648 202.007 113.048 205.607 118.248 211.607C125.448 206.607 127.848 197.607 127.848 188.807C127.848 181.407 126.248 174.807 124.448 170.607H82.6484V156.407H220.648V170.607H200.048V280.807H183.848V229.607C177.048 231.207 170.048 232.007 162.648 232.007C152.048 232.007 139.448 230.007 128.248 224.207C124.248 227.207 119.048 229.807 113.048 231.807C122.648 244.807 136.248 258.007 152.248 272.807L140.048 283.607ZM162.448 217.607C170.048 217.607 176.848 216.807 183.848 214.807V170.607H140.848C143.048 176.407 144.048 182.807 144.048 190.807C144.048 199.607 142.048 207.207 137.848 213.607C146.048 216.607 153.448 217.607 162.448 217.607Z"
                            fill="black"
                        />
                        <Path
                            data="M406.141 356.331V394.931C412.741 389.531 420.141 386.731 429.141 386.731C447.941 386.731 459.741 398.131 459.741 418.731C459.741 432.931 454.341 445.331 442.741 458.331L428.941 449.531C437.741 440.331 443.741 429.931 443.741 418.731C443.741 406.731 437.941 400.531 428.341 400.531C418.941 400.531 411.741 405.531 406.141 413.331V466.531H389.941V426.531C383.541 431.531 374.541 434.531 364.741 434.531C339.941 434.531 329.941 419.731 329.941 394.531V356.331H314.141V342.131H471.341V356.331H406.141ZM346.141 356.331V394.131C346.141 414.131 352.941 420.331 365.341 420.331C374.141 420.331 383.141 415.531 389.941 409.131V356.331H346.141ZM500.438 356.331V466.531H484.238V356.331H466.438V342.131H521.038V356.331H500.438Z"
                            fill="black"
                        />
                        <Path
                            data="M103.853 1023.29L57.7217 859.831H89.5666L119.017 979.948H120.534L151.979 859.831H180.951L212.477 980.028H213.913L243.364 859.831H275.209L229.078 1023.29H199.867L167.144 908.597H165.867L133.064 1023.29H103.853Z"
                            fill="black"
                        />
                        <Path
                            data="M368.454 1220.8V1057.34H398.064V1195.98H470.055V1220.8H368.454Z"
                            fill="black"
                        />
                    </>) : null
            }
        </Group>
    )
}

export const TerminationIndicators = ({ x, y, type }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Rect x={463} y={1220.21} width={74} height={246.5} fill="black" stroke="black" />
            <Rect x={463} y={1766.46} width={74} height={246.5} fill="black" stroke="black" />
            <Rect x={463} y={2312.71} width={74} height={246.5} fill="black" stroke="black" />
            <Circle x={500} y={500} radius={487.5} fill="#FFFF00" stroke="black" strokeWidth="25" />
            {
                type === 'T' ?
                    (<>
                        <Path data="M330.92 338.312V281.636H668.634V338.312H532.483V718H466.858V338.312H330.92Z" fill="black" />

                    </>) : null
            }
            {
                type === 'TP' ?
                    (<>
                        <Line
                            points={[137.61, 844.716, 844.717, 137.609]}
                            stroke="black"
                            strokeWidth={25}
                        />
                        <Path data="M242.437 247.248V214.754H436.059V247.248H357.999V464.936H320.374V247.248H242.437Z" fill="black" />
                        <Path
                            data="M575.08 804.239V554.057H664.256C683.72 554.057 699.845 557.6 712.631 564.685C725.417 571.77 734.986 581.462 741.338 593.759C747.69 605.975 750.866 619.738 750.866 635.049C750.866 650.441 747.65 664.286 741.216 676.583C734.864 688.799 725.254 698.49 712.386 705.657C699.6 712.742 683.516 716.285 664.134 716.285H602.81V684.279H660.713C673.01 684.279 682.987 682.162 690.642 677.927C698.297 673.61 703.917 667.747 707.5 660.336C711.083 652.925 712.875 644.496 712.875 635.049C712.875 625.602 711.083 617.214 707.5 609.884C703.917 602.555 698.257 596.813 690.52 592.66C682.865 588.506 672.766 586.43 660.224 586.43H612.827V804.239H575.08Z"
                            fill="black" />
                    </>) : null
            }
            {
                type === 'TG' ?
                    (<>
                        <Line
                            points={[137.61, 844.716, 844.717, 137.609]}
                            stroke="black"
                            strokeWidth={25}
                        />
                        <Path data="M242.437 247.248V214.754H436.059V247.248H357.999V464.936H320.374V247.248H242.437Z" fill="black" />
                        <Path data="M744.392 633.094C742.03 625.683 738.854 619.046 734.864 613.182C730.955 607.237 726.272 602.188 720.815 598.035C715.359 593.8 709.129 590.583 702.125 588.384C695.203 586.185 687.588 585.086 679.281 585.086C665.192 585.086 652.488 588.71 641.168 595.958C629.848 603.206 620.889 613.834 614.293 627.842C607.777 641.768 604.52 658.829 604.52 679.026C604.52 699.305 607.818 716.448 614.415 730.455C621.011 744.463 630.051 755.091 641.534 762.339C653.017 769.587 666.088 773.211 680.747 773.211C694.348 773.211 706.197 770.442 716.295 764.904C726.475 759.366 734.334 751.548 739.872 741.449C745.491 731.27 748.301 719.298 748.301 705.535L758.074 707.367H686.489V676.217H784.827V704.68C784.827 725.691 780.348 743.933 771.389 759.407C762.512 774.799 750.215 786.689 734.497 795.077C718.861 803.466 700.944 807.66 680.747 807.66C658.107 807.66 638.236 802.448 621.134 792.023C604.113 781.599 590.838 766.818 581.31 747.68C571.781 728.46 567.017 705.657 567.017 679.271C567.017 659.318 569.786 641.401 575.324 625.521C580.862 609.64 588.639 596.162 598.656 585.086C608.755 573.929 620.604 565.418 634.205 559.555C647.886 553.61 662.83 550.637 679.037 550.637C692.556 550.637 705.138 552.632 716.784 556.623C728.511 560.613 738.936 566.273 748.057 573.603C757.259 580.932 764.874 589.646 770.901 599.745C776.927 609.762 780.999 620.878 783.116 633.094H744.392Z" fill="black" />
                    </>) : null
            }

            {
                type === 'TL' ?
                    (<>
                        <Line
                            points={[137.61, 844.716, 844.717, 137.609]}
                            stroke="black"
                            strokeWidth={25}
                        />
                        <Path data="M242.437 247.248V214.754H436.059V247.248H357.999V464.936H320.374V247.248H242.437Z" fill="black" />
                        <Path data="M578.08 812.239V562.057H615.827V779.745H729.19V812.239H578.08Z" fill="black" />
                    </>) : null
            }
            {
                type === 'TEMU' ?
                    (<>
                        <Line
                            points={[137.61, 844.716, 844.717, 137.609]}
                            stroke="black"
                            strokeWidth={25}
                        />
                        <Path data="M242.437 247.248V214.754H436.059V247.248H357.999V464.936H320.374V247.248H242.437Z" fill="black" />
                        <Path data="M516.641 725.239V613.239H589.484V630.247H536.93V660.653H585.711V677.661H536.93V708.231H589.922V725.239H516.641ZM608.644 613.239H633.472L666.722 694.396H668.034L701.284 613.239H726.112V725.239H706.644V648.294H705.605L674.651 724.911H660.105L629.151 648.13H628.112V725.239H608.644V613.239ZM817.268 613.239H837.557V686.411C837.557 694.432 835.661 701.487 831.869 707.575C828.114 713.664 822.828 718.422 816.01 721.849C809.192 725.239 801.226 726.935 792.111 726.935C782.96 726.935 774.976 725.239 768.158 721.849C761.341 718.422 756.054 713.664 752.299 707.575C748.544 701.487 746.666 694.432 746.666 686.411V613.239H766.955V684.716C766.955 689.382 767.976 693.539 770.018 697.185C772.096 700.83 775.012 703.692 778.768 705.771C782.523 707.812 786.971 708.833 792.111 708.833C797.252 708.833 801.7 707.812 805.455 705.771C809.247 703.692 812.163 700.83 814.205 697.185C816.247 693.539 817.268 689.382 817.268 684.716V613.239Z" fill="black" />
                    </>) : null
            }
            {
                type === 'CT' ?
                    (<>
                        <Line
                            points={[137.61, 844.716, 844.717, 137.609]}
                            stroke="black"
                            strokeWidth={25}
                        />
                        <Path data="M562.741 586.551V554.056H756.364V586.551H678.304V804.238H640.679V586.551H562.741Z" fill="black" />
                        <Path data="M462.567 296.111H424.454C422.988 287.967 420.26 280.8 416.269 274.611C412.279 268.421 407.392 263.168 401.61 258.852C395.828 254.536 389.353 251.278 382.187 249.079C375.102 246.881 367.568 245.781 359.587 245.781C345.173 245.781 332.264 249.405 320.863 256.653C309.543 263.901 300.585 274.529 293.988 288.537C287.473 302.544 284.215 319.647 284.215 339.844C284.215 360.204 287.473 377.387 293.988 391.395C300.585 405.402 309.584 415.989 320.985 423.156C332.387 430.323 345.213 433.906 359.465 433.906C367.365 433.906 374.857 432.847 381.942 430.73C389.109 428.531 395.584 425.314 401.366 421.079C407.148 416.845 412.034 411.673 416.025 405.565C420.097 399.376 422.906 392.291 424.454 384.31L462.567 384.432C460.531 396.729 456.582 408.049 450.718 418.392C444.936 428.653 437.484 437.53 428.363 445.023C419.323 452.434 408.98 458.175 397.335 462.247C385.689 466.319 372.984 468.355 359.221 468.355C337.558 468.355 318.257 463.224 301.317 452.963C284.378 442.62 271.022 427.839 261.249 408.619C251.558 389.4 246.712 366.474 246.712 339.844C246.712 313.132 251.599 290.206 261.371 271.068C271.144 251.848 284.5 237.108 301.44 226.846C318.379 216.504 337.639 211.332 359.221 211.332C372.496 211.332 384.874 213.246 396.357 217.074C407.922 220.82 418.305 226.358 427.508 233.687C436.71 240.936 444.325 249.812 450.352 260.318C456.378 270.742 460.45 282.673 462.567 296.111Z" fill="black" />

                    </>) : null
            }
        </Group>
    )
}

export const WarningBoards = ({ x, y, type }) => {
    const height = 20;
    const width = 10;
    return (
        <Group
            x={x} y={y}
            scaleX={width / 500} scaleY={height / 1000}
            rotation={90} // Use `rotation` instead of `rotationDeg`
        >
            <Path data="M412.98 980H487.98V2830H412.98V980Z" fill="white" />
            <Path data="M484.78 980V2830H491.18V980H484.78ZM416.18 2830V980H409.78V2830H416.18Z" fill="black"
                mask="url(#path-1-inside-1_70_3316)" />
            <Rect x={413.48} y={1226.84} width={74} height={276.5} fill="black" stroke="black" />
            <Rect x={413.48} y={1839.3} width={74} height={276.5} fill="black" stroke="black" />
            <Rect x={413.48} y={2451.76} width={74} height={276.5} fill="black" stroke="black" />
            <Path data="M9.15952 824.833L450.48 10.8409L891.801 824.833H9.15952Z" fill="#FF0000" stroke="black"
                strokeWidth="10.3341" />
            <Path data="M124.231 759.477L448.717 121.034L773.203 759.477H124.231Z" fill="white" stroke="black"
                strokeWidth="10.3341" />
            <Path data="M484.78 830V991H491.18V830H484.78ZM416.18 991V830H409.78V991H416.18Z" fill="black"
                mask="url(#path-9-inside-2_70_3316)" />
            <Rect x={413.48} y={830.5} width={74} height={299} fill="black" stroke="black" />
            {
                type === 'speedBreaker' ?
                    (<>
                        <Rect x={153.153} y={982.672} width={594.655} height={194.655} radiusX={45.4307} fill="white" stroke="black"
                            strokeWidth="5.34479" />
                        <Path
                            data="M300.423 1023.54C300.175 1021.22 299.13 1019.41 297.287 1018.12C295.463 1016.83 293.089 1016.18 290.166 1016.18C288.111 1016.18 286.348 1016.49 284.878 1017.11C283.408 1017.73 282.283 1018.57 281.503 1019.63C280.724 1020.7 280.325 1021.91 280.308 1023.27C280.308 1024.41 280.565 1025.39 281.078 1026.22C281.61 1027.06 282.327 1027.77 283.231 1028.35C284.134 1028.92 285.135 1029.4 286.233 1029.78C287.332 1030.17 288.439 1030.5 289.555 1030.77L294.657 1032.04C296.712 1032.52 298.687 1033.17 300.582 1033.98C302.495 1034.8 304.205 1035.83 305.711 1037.07C307.234 1038.31 308.439 1039.8 309.324 1041.56C310.21 1043.31 310.653 1045.36 310.653 1047.72C310.653 1050.91 309.838 1053.72 308.208 1056.14C306.579 1058.55 304.223 1060.44 301.14 1061.8C298.076 1063.15 294.364 1063.82 290.007 1063.82C285.773 1063.82 282.097 1063.17 278.979 1061.86C275.879 1060.55 273.452 1058.63 271.698 1056.12C269.962 1053.6 269.023 1050.54 268.882 1046.92H278.581C278.722 1048.82 279.307 1050.4 280.334 1051.65C281.362 1052.91 282.699 1053.85 284.347 1054.47C286.012 1055.09 287.872 1055.4 289.927 1055.4C292.07 1055.4 293.948 1055.08 295.56 1054.44C297.19 1053.79 298.465 1052.88 299.386 1051.73C300.308 1050.56 300.777 1049.2 300.795 1047.64C300.777 1046.22 300.361 1045.05 299.546 1044.13C298.731 1043.19 297.588 1042.42 296.118 1041.8C294.666 1041.16 292.965 1040.59 291.016 1040.09L284.825 1038.5C280.343 1037.35 276.8 1035.6 274.196 1033.27C271.61 1030.91 270.317 1027.78 270.317 1023.89C270.317 1020.68 271.185 1017.87 272.921 1015.46C274.674 1013.05 277.057 1011.18 280.069 1009.86C283.08 1008.51 286.49 1007.84 290.299 1007.84C294.161 1007.84 297.544 1008.51 300.449 1009.86C303.372 1011.18 305.666 1013.04 307.332 1015.41C308.997 1017.77 309.856 1020.48 309.909 1023.54H300.423ZM323.931 1063V1008.58H344.339C348.519 1008.58 352.027 1009.36 354.861 1010.92C357.713 1012.48 359.866 1014.62 361.318 1017.35C362.789 1020.06 363.524 1023.14 363.524 1026.6C363.524 1030.09 362.789 1033.19 361.318 1035.9C359.848 1038.61 357.678 1040.74 354.808 1042.3C351.938 1043.84 348.404 1044.61 344.206 1044.61H330.681V1036.51H342.877C345.322 1036.51 347.324 1036.08 348.883 1035.23C350.442 1034.38 351.593 1033.21 352.337 1031.72C353.099 1030.24 353.48 1028.53 353.48 1026.6C353.48 1024.67 353.099 1022.96 352.337 1021.49C351.593 1020.02 350.433 1018.88 348.856 1018.07C347.297 1017.23 345.287 1016.82 342.824 1016.82H333.79V1063H323.931ZM376.576 1063V1008.58H411.97V1016.84H386.435V1031.62H410.137V1039.88H386.435V1054.74H412.183V1063H376.576ZM426.518 1063V1008.58H461.912V1016.84H436.376V1031.62H460.078V1039.88H436.376V1054.74H462.124V1063H426.518ZM494.9 1063H476.459V1008.58H495.272C500.675 1008.58 505.316 1009.67 509.196 1011.85C513.093 1014.01 516.087 1017.12 518.177 1021.18C520.267 1025.23 521.312 1030.09 521.312 1035.74C521.312 1041.41 520.258 1046.28 518.15 1050.35C516.06 1054.43 513.04 1057.55 509.089 1059.73C505.157 1061.91 500.427 1063 494.9 1063ZM486.317 1054.47H494.421C498.212 1054.47 501.375 1053.78 503.908 1052.4C506.441 1051 508.345 1048.92 509.621 1046.15C510.896 1043.37 511.534 1039.9 511.534 1035.74C511.534 1031.57 510.896 1028.12 509.621 1025.37C508.345 1022.61 506.459 1020.55 503.961 1019.18C501.481 1017.8 498.398 1017.11 494.714 1017.11H486.317V1054.47ZM270.848 1152V1097.58H291.681C295.613 1097.58 298.882 1098.2 301.486 1099.44C304.107 1100.66 306.065 1102.34 307.358 1104.46C308.669 1106.59 309.324 1109 309.324 1111.69C309.324 1113.9 308.899 1115.8 308.049 1117.38C307.199 1118.94 306.056 1120.2 304.621 1121.18C303.186 1122.15 301.583 1122.85 299.812 1123.28V1123.81C301.743 1123.91 303.594 1124.51 305.365 1125.59C307.154 1126.65 308.616 1128.16 309.75 1130.1C310.883 1132.05 311.45 1134.41 311.45 1137.17C311.45 1139.99 310.768 1142.52 309.404 1144.77C308.04 1147 305.985 1148.77 303.239 1150.06C300.494 1151.35 297.039 1152 292.876 1152H270.848ZM280.706 1143.76H291.309C294.887 1143.76 297.464 1143.08 299.041 1141.72C300.635 1140.33 301.433 1138.56 301.433 1136.4C301.433 1134.79 301.034 1133.34 300.237 1132.04C299.44 1130.73 298.306 1129.71 296.836 1128.96C295.365 1128.2 293.611 1127.82 291.574 1127.82H280.706V1143.76ZM280.706 1120.72H290.458C292.159 1120.72 293.691 1120.41 295.055 1119.79C296.419 1119.16 297.491 1118.26 298.27 1117.11C299.068 1115.94 299.466 1114.56 299.466 1112.97C299.466 1110.86 298.722 1109.12 297.234 1107.76C295.764 1106.39 293.576 1105.71 290.671 1105.71H280.706V1120.72ZM324.516 1152V1097.58H344.923C349.104 1097.58 352.612 1098.31 355.446 1099.76C358.298 1101.21 360.45 1103.25 361.903 1105.87C363.373 1108.47 364.108 1111.51 364.108 1114.99C364.108 1118.47 363.364 1121.5 361.876 1124.07C360.406 1126.62 358.236 1128.6 355.366 1130C352.496 1131.38 348.971 1132.07 344.791 1132.07H330.256V1123.89H343.462C345.907 1123.89 347.908 1123.55 349.467 1122.88C351.026 1122.19 352.178 1121.19 352.922 1119.87C353.683 1118.55 354.064 1116.92 354.064 1114.99C354.064 1113.05 353.683 1111.41 352.922 1110.04C352.16 1108.66 351 1107.62 349.441 1106.91C347.882 1106.18 345.871 1105.82 343.409 1105.82H334.374V1152H324.516ZM352.629 1127.34L366.101 1152H355.1L341.868 1127.34H352.629ZM377.672 1152V1097.58H413.066V1105.84H387.531V1120.62H411.233V1128.88H387.531V1143.74H413.279V1152H377.672ZM434.602 1152H424.08L443.238 1097.58H455.408L474.593 1152H464.071L449.536 1108.74H449.11L434.602 1152ZM434.948 1130.66H463.645V1138.58H434.948V1130.66ZM486.251 1152V1097.58H496.109V1122.58H496.773L518.004 1097.58H530.041L508.996 1122L530.227 1152H518.376L502.141 1128.67L496.109 1135.79V1152H486.251ZM541.38 1152V1097.58H576.774V1105.84H551.238V1120.62H574.941V1128.88H551.238V1143.74H576.987V1152H541.38ZM591.321 1152V1097.58H611.729C615.909 1097.58 619.417 1098.31 622.251 1099.76C625.103 1101.21 627.256 1103.25 628.708 1105.87C630.178 1108.47 630.914 1111.51 630.914 1114.99C630.914 1118.47 630.17 1121.5 628.682 1124.07C627.211 1126.62 625.041 1128.6 622.171 1130C619.302 1131.38 615.776 1132.07 611.596 1132.07H597.061V1123.89H610.267C612.712 1123.89 614.714 1123.55 616.272 1122.88C617.831 1122.19 618.983 1121.19 619.727 1119.87C620.489 1118.55 620.869 1116.92 620.869 1114.99C620.869 1113.05 620.489 1111.41 619.727 1110.04C618.965 1108.66 617.805 1107.62 616.246 1106.91C614.687 1106.18 612.676 1105.82 610.214 1105.82H601.179V1152H591.321ZM619.435 1127.34L632.907 1152H621.906L608.673 1127.34H619.435Z"
                            fill="black" />
                        <Path fillRule="evenodd" clipRule="evenodd"
                            data="M596.334 682.975H695.93V718.483H213.062V682.975H317.26C337.572 650.612 392.376 627.425 456.797 627.425C521.217 627.425 576.022 650.612 596.334 682.975Z"
                            fill="black" />
                    </>) : null
            }
            {
                ['trackWarning', 'trackWarning1', 'trackWarning2'].includes(type) ?
                    (<>
                        <Rect x={232.867} y={571.521} width={423.338} height={33.2506} fill="black" />
                        <Rect x={232.867} y={680.094} width={423.338} height={33.2506} fill="black" />
                        <Path data="M264.41 570.228L275.282 553.538L286.155 570.228V731.328H264.41V570.228Z" fill="black" />
                        <Path data="M332.105 570.228L342.978 553.538L353.85 570.228V731.328H332.105V570.228Z" fill="black" />
                        <Path data="M399.824 570.228L410.696 553.538L421.569 570.228V731.328H399.824V570.228Z" fill="black" />
                        <Path data="M467.52 570.228L478.392 553.538L489.264 570.228V731.328H467.52V570.228Z" fill="black" />
                        <Path data="M535.215 570.228L546.087 553.538L556.959 570.228V731.328H535.215V570.228Z" fill="black" />
                        <Path data="M602.934 570.228L613.806 553.538L624.678 570.228V731.328H602.934V570.228Z" fill="black" />
                        {
                            type === 'trackWarning1' || 'trackWarning1' ? (<>
                                <Rect x={302.5} y={831.986} width={297} height={897} fill="white" stroke="black" strokeWidth="3" />
                                {
                                    type === 'trackWarning1' ? (<>
                                        <Path fillRule="evenodd" clipRule="evenodd" data="M601 1580.49V1665.34L301 1365.34V1280.49L601 1580.49Z"
                                            fill="#FF0000" />
                                    </>) : null
                                }
                                {
                                    type === 'trackWarning2' ? (<>
                                        <Path fillRule="evenodd" clipRule="evenodd" data="M601 1580.49V1665.34L301 1365.34V1280.49L601 1580.49Z"
                                            fill="#FF0000" />
                                        <Path fillRule="evenodd" clipRule="evenodd" data="M601 1330.15V1415L301 1115V1030.15L601 1330.15Z" fill="#FF0000" />

                                    </>) : null

                                }
                            </>) : null
                        }
                    </>) : null


            }
        </Group>
    )
}

export const SignBoard = ({x, y, title, angle}) => {
    const height = 40;
    const width = 20;
    const textRef = useRef();
    const [textHeight, setTextHeight] = useState(50);

    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.height()); // Get text height dynamically
        }
    }, [title]);

    return (
        <Group 
            x={x} 
            y={y} 
            scaleX={width / 500} 
            scaleY={height / 1000} 
            rotation={angle}
        >
            <Rect 
                width={1250} 
                height={900} 
                fill="#230068" 
            />

            <Text
                ref={textRef}
                x={75}  // Adjusted to center within the board
                y={900 / 2 - textHeight / 2}  // Centered vertically
                text={title}
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                width={1100} // Kept within the board
                height={textHeight} // Dynamic height
                fontSize={200}
                fontStyle="bold"
                wrap="word"
            />
        </Group>
    );
};
