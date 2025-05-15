import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Group, Rect, Circle, Image, Path } from "react-konva";
import { Shunting } from "./Shunting/shunting";
import { CallingSignal } from "./Calling/callingSignal";
import { PreWarningSymbol } from "./unicsignals";


export const Signals = ({ payload }) => {
  const { x, y, signal, onClick, angle } = payload;
  const { type, shunting, indication, calling, bidirection, prewarning } = signal.state;
  if (type === '2CL') {
    return (
      <>
        <TwoCLTrafficLight state={indication} x={x} y={y} onClick={onClick} angle={angle} />
        {
          shunting ? (<>
            <Shunting x={x - 31} y={y} angle={angle} type={shunting?.indication} compType="Konva" />
          </>) : null
        }
        {
          calling ?
            (<>
              <CallingSignal x={calling && shunting ? x - 50 : x - 31} y={y + 2} angle={angle} type={calling?.indication} compType="Kovnva" />
            </>) : null
        }
      </>
    )
  }
  if (type === '3CL') {
    return (
      <>
        <ThreeClTrafficSignals state={indication} x={x} y={y} onClick={onClick} angle={angle} />
        {
          shunting ? (<>
            <Shunting x={x - 44} y={y} angle={angle} type={shunting?.indication} compType="Konva" />
          </>) : null
        }
        {
          calling ?
            (<>
              <CallingSignal x={calling && shunting ? x - 63 : x - 43} y={y + 2} angle={angle} type={calling?.indication} compType="Kovnva" />
            </>) : null
        }
        {
          bidirection ? (<>
            <BidirectionalSignals renderAs={'Konva'} x={x + 30} y={y - 14} angle={angle} directions={bidirection.visibledirections} enabledDirection={bidirection.enabled} />
          </>) : null
        }
      </>
    )
  }
  if (type === '4CLo') {
    return (
      <>
        <FourClTrafficSignals state={indication} x={x} y={y} onClick={onClick} angle={angle} />
        {
          shunting ? (<>
            <Shunting x={x - 61} y={y} angle={angle} type={shunting?.indication} compType="Konva" />
          </>) : null
        }
        {
          calling ?
            (<>
              <CallingSignal x={calling && shunting ? x - 80 : x - 60} y={angle == 0 ? y + 2 : y + 13} angle={angle} type={calling?.indication} compType="Kovnva" />
            </>) : null
        }
        {
          bidirection ? (<>
            <BidirectionalSignals renderAs={'Konva'} x={x + 24} y={angle === 0 ? y - 14 : y - 19} angle={angle} directions={bidirection.visibledirections} enabledDirection={bidirection.enabled} />
          </>) : null
        }
      </>
    )
  }

  if (type === '4CL') {
    const scale = 0.6
    return (
      <Group x={x} y={y} onClick={onClick}
        scale={{ x: scale, y: scale }}
        rotation={angle}
      >
        <FourClTrafficSignals state={indication} angle={0} />

        {shunting && (
          <Shunting x={-61} y={0} angle={0} type={shunting?.indication} compType="Konva" />
        )}

        {calling && (
          <CallingSignal
            x={shunting ? -80 : -60}
            y={2}
            angle={0}
            type={calling?.indication}
            compType="Konva"
          />
        )}

        {bidirection && (
          <BidirectionalSignals
            renderAs="Konva"
            x={24}
            y={angle === 0 ? -14 : -14}
            angle={0}
            directions={bidirection.visibledirections}
            enabledDirection={bidirection.enabled}
          />
        )}
      </Group>
    );
  }


  if (type === '2CLRepeat') {
    return (
      <>
        <TwoCLRepeat renderAs="Konva" x={x} y={y} state={indication} angle={angle} onClick={onClick} />
      </>
    )
  }
  if (type === '3Macl') {
    return (
      <>
        <ThreeMaClTrafficSignals renderAs="Konva" x={x} y={y} state={indication} angle={angle} onClick={onClick} />
        {
          prewarning ? <>
            <PreWarningSymbol renderAs="Konva" x={x - 45} y={y + 2} angle={angle} />
          </> : null
        }
      </>
    )
  }

  if (type === 'twoClStopWarner') {
    return (
      <TwoClStopWarner renderAs="Konva" x={x} y={y} state={indication} angle={angle} onClick={onClick} />
    )
  }

  if (type === 'warnerSignal') {
    return (<>
      <WarnerSignal renderAs="Konva" x={x} y={y} state={indication} angle={angle} onClick={onClick} />
      {
        prewarning ? <>
          <PreWarningSymbol renderAs="Konva" x={x - 55} y={y + 2} angle={angle} />
        </> : null
      }
    </>)
  }
}


export const TwoCLTrafficLight = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs = 'konva'
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;  // Fixed scaling calculation
  const scaleY = (height || 30) / originalHeight;

  const config = {
    background: {
      width: 300,
      height: 598,
      radius: 40,
      fill: 'black'
    },
    lights: {
      positions: [
        { y: 166.773, activeState: 'green' },
        { y: 430.729, activeState: 'red' }
      ],
      radius: 109.89,
      innerRadius: 59.977,
      colors: {
        active: {
          red: ['#E30101', '#F70000'],
          green: ['#01C488', '#00F0A8']
        },
        inactive: ['#494949', '#616060']
      }
    }
  };

  const svgShadowFilter = (color) => (
    <filter id={`glow-${color}`} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
      <feOffset dx="0" dy="0" result="offsetblur" />
      <feFlood floodColor={color} />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );

  const renderLight = (position, index) => {
    const isActive = state === position.activeState;
    const [outerColor, innerColor] = isActive
      ? config.lights.colors.active[position.activeState]
      : config.lights.colors.inactive;

    if (renderAs === 'svg') {
      return (
        <g key={index}>
          <circle
            cx="149.89"
            cy={position.y}
            r={config.lights.radius}
            fill={outerColor}
            filter={isActive ? `url(#glow-${outerColor})` : undefined}
          />
          <circle
            cx="149.89"
            cy={position.y}
            r={config.lights.innerRadius}
            fill={innerColor}
          />
        </g>
      );
    }

    return (
      <Group key={index}>
        <Circle
          x={149.89}
          y={position.y}
          radius={config.lights.radius}
          fill={outerColor}
          shadowBlur={isActive ? 10 : 0}
          shadowColor={isActive ? outerColor : 'transparent'}
        />
        <Circle
          x={149.89}
          y={position.y}
          radius={config.lights.innerRadius}
          fill={innerColor}
        />
      </Group>
    );
  };

  if (renderAs === 'svg') {
    return (
      <g
        transform={`translate(${x},${y}) scale(${scaleX},${scaleY}) rotate(${angle + 90})`}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <defs>
          {svgShadowFilter(config.lights.colors.active.green[0])}
          {svgShadowFilter(config.lights.colors.active.red[0])}
        </defs>

        <rect
          width={config.background.width}
          height={config.background.height}
          rx={config.background.radius}
          fill={config.background.fill}
        />

        {config.lights.positions.map((pos, index) => renderLight(pos, index))}
      </g>
    );
  }

  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}
    >
      <Rect
        width={config.background.width}
        height={config.background.height}
        cornerRadius={config.background.radius}
        fill={config.background.fill}
      />

      {config.lights.positions.map((pos, index) => renderLight(pos, index))}
    </Group>
  );
};

export const ThreeClTrafficSignals = ({

  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs

}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === "svg") {

    return (
      <svg width="4vh" height="5vh" viewBox="0 0 300 862" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect width="300" height="861.677" rx="40" fill="black" />
          {state === "red" ? (
            <>
              <circle cx="149.89" cy="694.685" r="109.89" fill="#E30101" />
              <circle cx="149.89" cy="694.685" r="59.977" fill="#F70000" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="694.685" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="694.685" r="59.977" fill="#616060" />
            </>
          )}
          {state === "green" ? (
            <>
              <circle cx="149.89" cy="166.773" r="109.89" fill="#01C488" />
              <circle cx="149.89" cy="166.773" r="59.977" fill="#00F0A8" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="166.773" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="166.773" r="59.977" fill="#616060" />
            </>
          )}
          {state === "yellow" ? (
            <>
              <circle cx="149.89" cy="430.729" r="109.89" fill="#FFB800" />
              <circle cx="149.89" cy="430.729" r="59.977" fill="#FFDD00" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="430.729" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="430.729" r="59.977" fill="#616060" />
            </>
          )}
        </g>
      </svg>
    );
  }

  // Konva Rendering
  return (
    <Group

      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}

    >
      {/* Background Rect */}
      <Rect width={300} height={861.677} fill="black" cornerRadius={40} />

      {/* Red Light */}
      <Circle x={149.89} y={694.685} radius={109.89} fill={state === "red" ? "#E30101" : "#494949"} />
      <Circle x={149.89} y={694.685} radius={59.977} fill={state === "red" ? "#F70000" : "#616060"} />

      {/* Yellow Light */}
      <Circle x={149.89} y={430.729} radius={109.89} fill={state === "yellow" ? "#FFB800" : "#494949"} />
      <Circle x={149.89} y={430.729} radius={59.977} fill={state === "yellow" ? "#FFDD00" : "#616060"} />

      {/* Green Light */}
      <Circle x={149.89} y={166.773} radius={109.89} fill={state === "green" ? "#01C488" : "#494949"} />
      <Circle x={149.89} y={166.773} radius={59.977} fill={state === "green" ? "#00F0A8" : "#616060"} />
    </Group>
  );
};

export const FourClTrafficSignals = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === 'svg') {
    return (
      <svg width="100%" height="100%" viewBox="100 -150 100 1500" fill="none" xmlns="http://www.w3.org/2000/svg">

        <rect x="2" y="50.5" width="300" height="1125.63" rx="40" fill="black" />

        {/* //yellow */}
        {
          state === 'twoyellow' ? (<>
            <circle cx="151.89" cy="217.273" r="109.89" fill="#FFB800" />
            <circle cx="151.89" cy="217.273" r="59.977" fill="#FFDD00" />
          </>) : (<>
            <circle cx="151.89" cy="217.273" r="109.89" fill="#494949" />
            <circle cx="151.891" cy="217.273" r="59.977" fill="#616060" />
          </>)
        }

        {/* //green */}

        {
          state === 'green' ?
            (<>
              <circle cx="151.89" cy="481.229" r="109.89" fill="#01C488" />
              <circle cx="151.89" cy="481.229" r="59.977" fill="#00F0A8" />
            </>) :
            (<>
              <circle cx="151.89" cy="481.229" r="109.89" fill="#494949" />
              <circle cx="151.891" cy="481.229" r="59.977" fill="#616060" />
            </>)
        }

        {/* //yellow */}

        {
          state === 'yellow' || state === 'twoyellow' ? (<>
            <circle cx="151.89" cy="745.185" r="109.89" fill="#FFB800" />
            <circle cx="151.89" cy="745.185" r="59.977" fill="#FFDD00" />
          </>) : (<>
            <circle cx="151.89" cy="745.185" r="109.89" fill="#494949" />
            <circle cx="151.891" cy="745.185" r="59.977" fill="#616060" />
          </>)
        }

        {/* //red */}
        {
          state === 'red' ?
            (<>
              <g filter="url(#filter1_d_302_23792)">
                <circle cx="151.89" cy="1009.14" r="109.89" fill="#E30101" />
              </g>
              <circle cx="151.891" cy="1009.14" r="59.977" fill="#F70000" />
            </>) :
            (<>
              <circle cx="151.89" cy="1009.14" r="109.89" fill="#494949" />
              <circle cx="151.891" cy="1009.14" r="59.977" fill="#616060" />
            </>)
        }

      </svg>
    )

  }
  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}
    >

      <Rect x={2} y={50.5} width={300} height={1125.63} radius={40} fill="black" />

      {/* //yellow */}
      {
        state === 'twoyellow' ? (<>
          <Circle x={151.89} y={217.273} radius={109.89} fill="#FFB800" />
          <Circle x={151.89} y={217.273} radius={59.977} fill="#FFDD00" />
        </>) : (<>
          <Circle x={151.89} y={217.273} radius={109.89} fill="#494949" />
          <Circle x={151.891} y={217.273} radius={59.977} fill="#616060" />
        </>)
      }

      {/* //green */}

      {
        state === 'green' ?
          (<>
            <Circle x={151.89} y={481.229} radius={109.89} fill="#01C488" />
            <Circle x={151.89} y={481.229} radius={59.977} fill="#00F0A8" />
          </>) :
          (<>
            <Circle x={151.89} y={481.229} radius={109.89} fill="#494949" />
            <Circle x={151.891} y={481.229} radius={59.977} fill="#616060" />
          </>)
      }

      {/* //yellow */}

      {
        state === 'yellow' || state === 'twoyellow' ? (<>
          <Circle x={151.89} y={745.185} radius={109.89} fill="#FFB800" />
          <Circle x={151.89} y={745.185} radius={59.977} fill="#FFDD00" />
        </>) : (<>
          <Circle x={151.89} y={745.185} radius={109.89} fill="#494949" />
          <Circle x={151.891} y={745.185} radius={59.977} fill="#616060" />
        </>)
      }

      {/* //red */}
      {
        state === 'red' ?
          (<>
            <Circle x={151.89} y={1009.14} radius={109.89} fill="#E30101" />
            <Circle x={151.891} y={1009.14} radius={59.977} fill="#F70000" />
          </>) :
          (<>
            <Circle x={151.89} y={1009.14} radius={109.89} fill="#494949" />
            <Circle x={151.891} y={1009.14} radius={59.977} fill="#616060" />
          </>)
      }


      <Path d="M42.1094 1176.13H261.89V1226.13H42.1094V1176.13Z" fill="black" />
      <Path d="M97.0547 1226.13H206.945V1276.13H97.0547V1226.13Z" fill="black" />
      <Rect x={2} y={1276.13} width={300} height={117} radius={2} stroke="black" strokeWidth="3" />

    </Group>
  )
}

export const BidirectionalSignals = ({
  directions, enabledDirection,
  x = 0,
  y = 0,
  height = 16,
  width = 8,
  angle = 0,
  renderAs
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  directions = directions || []
  if (renderAs === 'svg') {
    return (
      <svg width="10vh" height="7vh" viewBox="0 0 1578 1266" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M533.172 526.918L682.871 377.219H894.578L1044.28 526.918V738.625L894.578 888.324H682.871L533.172 738.625V526.918Z"
          fill="black" />


        {/* <!-- direction:1 --> */}
        {
          directions.includes(1) ? (
            <>
              <rect x="306.188" y="1265.21" width="212" height="533" rx="39.872" transform="rotate(-135 306.188 1265.21)"
                fill="black" />
              <circle cx="301.529" cy="1119.9" r="44.955" transform="rotate(-45 301.529 1119.9)" fill={enabledDirection === 1 ? "#F2F2F2" : "#494949"} />
              <circle cx="301.527" cy="1119.9" r="24.5361" transform="rotate(-45 301.527 1119.9)" fill={enabledDirection === 1 ? "#BFBFBF" : "#616060"} />

              <circle cx="419.615" cy="1001.82" r="44.955" transform="rotate(-45 419.615 1001.82)" fill={enabledDirection === 1 ? "#F2F2F2" : "#494949"} />
              <circle cx="419.613" cy="1001.82" r="24.5361" transform="rotate(-45 419.613 1001.82)" fill={enabledDirection === 1 ? "#BFBFBF" : "#616060"} />

              <circle cx="537.701" cy="883.73" r="44.955" transform="rotate(-45 537.701 883.73)" fill={enabledDirection === 1 ? "#F2F2F2" : "#494949"} />
              <circle cx="537.699" cy="883.73" r="24.5361" transform="rotate(-45 537.699 883.73)" fill={enabledDirection === 1 ? "#BFBFBF" : "#616060"} />
            </>
          ) :
            null
        }

        {/* <!-- direction:2 --> */}
        {
          directions.includes(2) ? (<>
            <rect x="0.171875" y="744.379" width="212" height="533" rx="39.872" transform="rotate(-90 0.171875 744.379)"
              fill="black" />
            <circle cx="99.6269" cy="638.334" r="44.955" fill={enabledDirection === 2 ? "#F2F2F2" : "#494949"} />
            <circle cx="99.6298" cy="638.333" r="24.5361" fill={enabledDirection === 2 ? "#BFBFBF" : "#616060"} />

            <circle cx="266.627" cy="638.334" r="44.955" fill={enabledDirection === 2 ? "#F2F2F2" : "#494949"} />
            <circle cx="266.63" cy="638.333" r="24.5361" fill={enabledDirection === 2 ? "#BFBFBF" : "#616060"} />

            <circle cx="433.627" cy="638.334" r="44.955" fill={enabledDirection === 2 ? "#F2F2F2" : "#494949"} />
            <circle cx="433.63" cy="638.333" r="24.5361" fill={enabledDirection === 2 ? "#BFBFBF" : "#616060"} />
          </>) : null
        }


        {/* <!-- direction:3 --> */}
        {
          directions.includes(3) ? (<>
            <rect width="212" height="533" rx="39.872"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 533.172 527.129)" fill="black" />
            <circle cx="537.766" cy="381.885" r="44.955" transform="rotate(-135 537.766 381.885)" fill={enabledDirection === 3 ? "#F2F2F2" : "#494949"} />
            <circle cx="537.766" cy="381.887" r="24.5361" transform="rotate(-135 537.766 381.887)" fill={enabledDirection === 3 ? "#BFBFBF" : "#616060"} />

            <circle cx="419.68" cy="263.799" r="44.955" transform="rotate(-135 419.68 263.799)" fill={enabledDirection === 3 ? "#F2F2F2" : "#494949"} />
            <circle cx="419.68" cy="263.801" r="24.5361" transform="rotate(-135 419.68 263.801)" fill={enabledDirection === 3 ? "#BFBFBF" : "#616060"} />

            <circle cx="301.594" cy="145.711" r="44.955" transform="rotate(-135 301.594 145.711)" fill={enabledDirection === 3 ? "#F2F2F2" : "#494949"} />
            <circle cx="301.594" cy="145.711" r="24.5361" transform="rotate(-135 301.594 145.711)" fill={enabledDirection === 3 ? "#BFBFBF" : "#616060"} />
          </>) : null
        }




        {/* <!-- direction:4 --> */}
        {
          directions.includes(4) ? (<>
            <rect x="1044.28" y="527.125" width="212" height="533" rx="39.872" transform="rotate(-135 1044.28 527.125)"
              fill="black" />
            <circle cx="1039.62" cy="381.816" r="44.955" transform="rotate(-45 1039.62 381.816)" fill={enabledDirection === 4 ? "#F2F2F2" : "#494949"} />
            <circle cx="1039.62" cy="381.816" r="24.5361" transform="rotate(-45 1039.62 381.816)" fill={enabledDirection === 4 ? "#BFBFBF" : "#616060"} />

            <circle cx="1157.71" cy="263.73" r="44.955" transform="rotate(-45 1157.71 263.73)" fill={enabledDirection === 4 ? "#F2F2F2" : "#494949"} />
            <circle cx="1157.71" cy="263.73" r="24.5361" transform="rotate(-45 1157.71 263.73)" fill={enabledDirection === 4 ? "#BFBFBF" : "#616060"} />

            <circle cx="1275.79" cy="145.643" r="44.955" transform="rotate(-45 1275.79 145.643)" fill={enabledDirection === 4 ? "#F2F2F2" : "#494949"} />
            <circle cx="1275.79" cy="145.643" r="24.5361" transform="rotate(-45 1275.79 145.643)" fill={enabledDirection === 4 ? "#BFBFBF" : "#616060"} />
          </>) : null
        }



        {/* <!-- direction:5 --> */}
        {
          directions.includes(5) ? (<>
            <rect x="1044.28" y="744.379" width="212" height="533" rx="39.872" transform="rotate(-90 1044.28 744.379)"
              fill="black" />
            <circle cx="1143.74" cy="638.334" r="44.955" fill={enabledDirection === 5 ? "#F2F2F2" : "#494949"} />
            <circle cx="1143.74" cy="638.333" r="24.5361" fill={enabledDirection === 5 ? "#BFBFBF" : "#616060"} />

            <circle cx="1310.74" cy="638.334" r="44.955" fill={enabledDirection === 5 ? "#F2F2F2" : "#494949"} />
            <circle cx="1310.74" cy="638.333" r="24.5361" fill={enabledDirection === 5 ? "#BFBFBF" : "#616060"} />

            <circle cx="1477.74" cy="638.334" r="44.955" fill={enabledDirection === 5 ? "#F2F2F2" : "#494949"} />
            <circle cx="1477.74" cy="638.333" r="24.5361" fill={enabledDirection === 5 ? "#BFBFBF" : "#616060"} />
          </>) : null
        }



        {/* <!-- direction:6 --> */}
        {
          directions.includes(6) ?
            (<>
              <rect width="212" height="533" rx="39.872"
                transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 1271.26 1265.21)" fill="black" />
              <circle cx="1275.85" cy="1119.97" r="44.955" transform="rotate(-135 1275.85 1119.97)" fill={enabledDirection === 6 ? "#F2F2F2" : "#494949"} />
              <circle cx="1275.85" cy="1119.97" r="24.5361" transform="rotate(-135 1275.85 1119.97)" fill={enabledDirection === 6 ? "#BFBFBF" : "#616060"} />

              <circle cx="1157.77" cy="1001.88" r="44.955" transform="rotate(-135 1157.77 1001.88)" fill={enabledDirection === 6 ? "#F2F2F2" : "#494949"} />
              <circle cx="1157.77" cy="1001.88" r="24.5361" transform="rotate(-135 1157.77 1001.88)" fill={enabledDirection === 6 ? "#BFBFBF" : "#616060"} />

              <circle cx="1039.68" cy="883.791" r="44.955" transform="rotate(-135 1039.68 883.791)" fill={enabledDirection === 6 ? "#F2F2F2" : "#494949"} />
              <circle cx="1039.68" cy="883.793" r="24.5361" transform="rotate(-135 1039.68 883.793)" fill={enabledDirection === 6 ? "#BFBFBF" : "#616060"} />
            </>) : null
        }





        {/* <!-- middle --> */}
        <circle cx="795.182" cy="632.287" r="44.955" fill={enabledDirection !== 0 ? "#F2F2F2" : "#494949"} />
        <circle cx="795.185" cy="632.286" r="24.5361" fill={enabledDirection !== 0 ? "#F2F2F2" : "#494949"} />

        {/* <!-- middleLeft --> */}
        <circle cx="657.182" cy="512.287" r="44.955" fill={enabledDirection === 3 ? "#F2F2F2" : "#494949"} />
        <circle cx="657.185" cy="512.286" r="24.5361" fill={enabledDirection === 3 ? "#BFBFBF" : "#616060"} />

        <circle cx="657.182" cy="752.287" r="44.955" fill={enabledDirection === 1 ? "#F2F2F2" : "#494949"} />
        <circle cx="657.185" cy="752.286" r="24.5361" fill={enabledDirection === 1 ? "#BFBFBF" : "#616060"} />

        <circle cx="657.182" cy="631.287" r="44.955" fill={enabledDirection === 2 ? "#F2F2F2" : "#494949"} />
        <circle cx="657.185" cy="631.286" r="24.5361" fill={enabledDirection === 2 ? "#BFBFBF" : "#616060"} />

        {/* <!-- middleRight --> */}
        <circle cx="932.182" cy="512.287" r="44.955" fill={enabledDirection === 4 ? "#F2F2F2" : "#494949"} />
        <circle cx="932.185" cy="512.286" r="24.5361" fill={enabledDirection === 4 ? "#BFBFBF" : "#616060"} />

        <circle cx="932.182" cy="752.287" r="44.955" fill={enabledDirection === 6 ? "#F2F2F2" : "#494949"} />
        <circle cx="932.185" cy="752.286" r="24.5361" fill={enabledDirection === 6 ? "#BFBFBF" : "#616060"} />

        <circle cx="932.182" cy="631.287" r="44.955" fill={enabledDirection === 5 ? "#F2F2F2" : "#494949"} />
        <circle cx="932.185" cy="631.286" r="24.5361" fill={enabledDirection === 5 ? "#BFBFBF" : "#616060"} />

      </svg>



    )
  }
  return (
    <Group

      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}

    >

      {/* Background Shape */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        data="M533.172 526.918L682.871 377.219H894.578L1044.28 526.918V738.625L894.578 888.324H682.871L533.172 738.625V526.918Z"
        fill="black"
      />

      {/* Direction 1 */}
      {directions.includes(1) && (
        <>
          <Rect
            x={306.188}
            y={1265.21}
            width={212}
            height={533}
            cornerRadius={39.872}
            rotation={-135}
            fill="black"
          />
          {[{ cx: 301.529, cy: 1119.9 }, { cx: 419.615, cy: 1001.82 }, { cx: 537.701, cy: 883.73 }].map(
            (pos, index) => (
              <React.Fragment key={`dir1-${index}`}>
                <Circle
                  x={pos.cx}
                  y={pos.cy}
                  radius={44.955}
                  fill={enabledDirection === 1 ? "#F2F2F2" : "#494949"}
                />
                <Circle
                  x={pos.cx}
                  y={pos.cy}
                  radius={24.5361}
                  fill={enabledDirection === 1 ? "#BFBFBF" : "#616060"}
                />
              </React.Fragment>
            )
          )}
        </>
      )}

      {/* Direction 2 */}
      {directions.includes(2) && (
        <>
          <Rect x={0.171875} y={744.379} width={212} height={533} cornerRadius={39.872} rotation={-90} fill="black" />
          {[99.6269, 266.627, 433.627].map((cx, index) => (
            <React.Fragment key={`dir2-${index}`}>
              <Circle x={cx} y={638.334} radius={44.955} fill={enabledDirection === 2 ? "#F2F2F2" : "#494949"} />
              <Circle x={cx} y={638.334} radius={24.5361} fill={enabledDirection === 2 ? "#BFBFBF" : "#616060"} />
            </React.Fragment>
          ))}
        </>
      )}

      {/* Direction 3 */}
      {directions.includes(3) && (
        <>
          <Rect
            width={212}
            height={533}
            cornerRadius={39.872} // rx in SVG translates to cornerRadius in Konva
            x={710.172}
            y={370.129}
            fill="black"
            rotation={130} />

          {[{ cx: 537.766, cy: 381.885 }, { cx: 419.68, cy: 263.799 }, { cx: 301.594, cy: 145.711 }].map((pos, index) => (
            <React.Fragment key={`dir3-${index}`}>
              <Circle x={pos.cx} y={pos.cy} radius={44.955} fill={enabledDirection === 3 ? "#F2F2F2" : "#494949"} />
              <Circle x={pos.cx} y={pos.cy} radius={24.5361} fill={enabledDirection === 3 ? "#BFBFBF" : "#616060"} />
            </React.Fragment>
          ))}
        </>
      )}

      {/* Direction 4 */}
      {directions.includes(4) && (
        <>
          <Rect x={1044.28} y={527.125} width={212} height={533} cornerRadius={39.872} rotation={-135} fill="black" />
          {[{ cx: 1039.62, cy: 381.816 }, { cx: 1157.71, cy: 263.73 }, { cx: 1275.79, cy: 145.643 }].map((pos, index) => (
            <React.Fragment key={`dir4-${index}`}>
              <Circle x={pos.cx} y={pos.cy} radius={44.955} fill={enabledDirection === 4 ? "#F2F2F2" : "#494949"} />
              <Circle x={pos.cx} y={pos.cy} radius={24.5361} fill={enabledDirection === 4 ? "#BFBFBF" : "#616060"} />
            </React.Fragment>
          ))}
        </>
      )}

      {/* Direction 5 */}
      {directions.includes(5) && (
        <>
          <Rect x={1044.28} y={744.379} width={212} height={533} cornerRadius={39.872} rotation={-90} fill="black" />
          {[1143.74, 1310.74, 1477.74].map((cx, index) => (
            <React.Fragment key={`dir5-${index}`}>
              <Circle x={cx} y={638.334} radius={44.955} fill={enabledDirection === 5 ? "#F2F2F2" : "#494949"} />
              <Circle x={cx} y={638.334} radius={24.5361} fill={enabledDirection === 5 ? "#BFBFBF" : "#616060"} />
            </React.Fragment>
          ))}
        </>
      )}

      {/* Direction 6 */}
      {directions.includes(6) && (
        <>
          <Rect width={212} height={533} cornerRadius={39.872} rotation={135} x={1440.990} y={1120.890} fill="black" />
          {[{ cx: 1275.85, cy: 1119.97 }, { cx: 1157.77, cy: 1001.88 }, { cx: 1039.68, cy: 883.791 }].map((pos, index) => (
            <React.Fragment key={`dir6-${index}`}>
              <Circle x={pos.cx} y={pos.cy} radius={44.955} fill={enabledDirection === 6 ? "#F2F2F2" : "#494949"} />
              <Circle x={pos.cx} y={pos.cy} radius={24.5361} fill={enabledDirection === 6 ? "#BFBFBF" : "#616060"} />
            </React.Fragment>
          ))}
        </>
      )}

      {/* Middle Circles */}
      <Circle x={795.182} y={632.287} radius={44.955} fill={enabledDirection !== 0 ? "#F2F2F2" : "#494949"} />
      <Circle x={795.185} y={632.286} radius={24.5361} fill={enabledDirection !== 0 ? "#BFBFBF" : "#616060"} />

      {/* Middle Left */}
      {[{ x: 657.182, y: 512.287, dir: 3 }, { x: 657.182, y: 752.287, dir: 1 }, { x: 657.182, y: 631.287, dir: 2 }].map(
        (pos, index) => (
          <React.Fragment key={`midL-${index}`}>
            <Circle x={pos.x} y={pos.y} radius={44.955} fill={enabledDirection === pos.dir ? "#F2F2F2" : "#494949"} />
            <Circle x={pos.x} y={pos.y} radius={24.5361} fill={enabledDirection === pos.dir ? "#BFBFBF" : "#616060"} />
          </React.Fragment>
        )
      )}

      {/* Middle Right */}
      {[{ x: 932.182, y: 512.287, dir: 4 }, { x: 932.182, y: 752.287, dir: 6 }, { x: 932.182, y: 631.287, dir: 5 }].map(
        (pos, index) => (
          <React.Fragment key={`midR-${index}`}>
            <Circle x={pos.x} y={pos.y} radius={44.955} fill={enabledDirection === pos.dir ? "#F2F2F2" : "#494949"} />
            <Circle x={pos.x} y={pos.y} radius={24.5361} fill={enabledDirection === pos.dir ? "#BFBFBF" : "#616060"} />
          </React.Fragment>
        )
      )}


    </Group>
  )
}

export const TwoCLRepeat = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs = 'konva'
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;  // Fixed scaling calculation
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === 'svg') {
    return (
      <svg width="9vh" height="19vh" viewBox="-600 0 1500 1200" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="50" width="300" height="597.721" rx="40" fill="black" />

        {/* off */}
        <circle cx="149.89" cy="216.773" r="109.89" fill={state === 'green' ? "#01C488" : "#494949"} />
        <circle cx="149.89" cy="216.773" r="59.977" fill={state === 'green' ? "#00F0A8" : "#616060"} />


        {/* on */}
        <circle cx="149.89" cy="480.729" r="109.89" fill={state === 'yellow' ? "#FFB800" : "#494949"} />
        <circle cx="149.89" cy="480.729" r="59.977" fill={state === 'yellow' ? "#FFDD00" : "#616060"} />

        <path d="M40.1099 647.721H259.89V697.721H40.1099V647.721Z" fill="black" />
        <path d="M95.0547 697.721H204.945V747.721H95.0547V697.721Z" fill="black" />
        <rect x="40" y="847.721" width="220" height="220" rx="110" fill="black" />
        <path
          d="M112.488 1011.72V904.085H152.851C161.12 904.085 168.058 905.521 173.664 908.394C179.305 911.268 183.562 915.297 186.435 920.483C189.343 925.633 190.797 931.642 190.797 938.51C190.797 945.412 189.326 951.403 186.382 956.484C183.474 961.529 179.182 965.436 173.506 968.204C167.83 970.937 160.857 972.304 152.588 972.304H123.84V956.116H149.961C154.796 956.116 158.755 955.45 161.838 954.119C164.922 952.752 167.199 950.773 168.671 948.18C170.177 945.552 170.931 942.329 170.931 938.51C170.931 934.69 170.177 931.432 168.671 928.734C167.164 926.001 164.869 923.934 161.786 922.532C158.703 921.096 154.726 920.377 149.855 920.377H131.986V1011.72H112.488ZM168.093 962.948L194.739 1011.72H172.98L146.807 962.948H168.093Z"
          fill="white" />
      </svg>
    )
  }

  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}
    >
      <Rect y={50} width={300} height={597.721} cornerRadius={40} fill="black" />

      {/* off */}
      <Circle x={149.89} y={216.773} radius={109.89} fill={state === 'green' ? "#01C488" : "#494949"} />
      <Circle x={149.89} y={216.773} radius={59.977} fill={state === 'green' ? "#00F0A8" : "#616060"} />


      {/* on */}
      <Circle x={149.89} y={480.729} radius={109.89} fill={state === 'yellow' ? "#FFB800" : "#494949"} />
      <Circle x={149.89} y={480.729} radius={59.977} fill={state === 'yellow' ? "#FFDD00" : "#616060"} />

      <Path data="M40.1099 647.721H259.89V697.721H40.1099V647.721Z" fill="black" />
      <Path data="M95.0547 697.721H204.945V747.721H95.0547V697.721Z" fill="black" />
      <Rect x={40} y={847.721} width={220} height={220} cornerRadius={110} fill="black" />
      <Path
        data="M112.488 1011.72V904.085H152.851C161.12 904.085 168.058 905.521 173.664 908.394C179.305 911.268 183.562 915.297 186.435 920.483C189.343 925.633 190.797 931.642 190.797 938.51C190.797 945.412 189.326 951.403 186.382 956.484C183.474 961.529 179.182 965.436 173.506 968.204C167.83 970.937 160.857 972.304 152.588 972.304H123.84V956.116H149.961C154.796 956.116 158.755 955.45 161.838 954.119C164.922 952.752 167.199 950.773 168.671 948.18C170.177 945.552 170.931 942.329 170.931 938.51C170.931 934.69 170.177 931.432 168.671 928.734C167.164 926.001 164.869 923.934 161.786 922.532C158.703 921.096 154.726 920.377 149.855 920.377H131.986V1011.72H112.488ZM168.093 962.948L194.739 1011.72H172.98L146.807 962.948H168.093Z"
        fill="white" />
    </Group>
  )

}

export const ThreeMaClTrafficSignals = ({

  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs

}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === "svg") {

    return (
      <svg width="4vh" height="5vh" viewBox="0 0 300 862" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect width="300" height="861.677" rx="40" fill="black" />
          {state === "yellow" || state === "twoyellow" ? ( //y
            <>
              <circle cx="149.89" cy="694.685" r="109.89" fill="#FFB800" />
              <circle cx="149.89" cy="694.685" r="59.977" fill="#FFDD00" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="694.685" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="694.685" r="59.977" fill="#616060" />
            </>
          )}
          {state === "twoyellow" ? ( //y
            <>
              <circle cx="149.89" cy="166.773" r="109.89" fill="#FFB800" />
              <circle cx="149.89" cy="166.773" r="59.977" fill="#FFDD00" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="166.773" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="166.773" r="59.977" fill="#616060" />
            </>
          )}
          {state === "green" ? ( //g
            <>
              <circle cx="149.89" cy="430.729" r="109.89" fill="#01C488" />
              <circle cx="149.89" cy="430.729" r="59.977" fill="#00F0A8" />
            </>
          ) : (
            <>
              <circle cx="149.89" cy="430.729" r="109.89" fill="#494949" />
              <circle cx="149.89" cy="430.729" r="59.977" fill="#616060" />
            </>
          )}
        </g>
      </svg>
    );
  }

  // Konva Rendering
  return (
    <Group

      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}

    >
      {/* Background Rect */}
      <Rect width={300} height={861.677} fill="black" cornerRadius={40} />

      {/* Red Light */}
      <Circle x={149.89} y={694.685} radius={109.89} fill={state === 'twoyellow' || state === 'yellow' ? "#FFB800" : "#494949"} />
      <Circle x={149.89} y={694.685} radius={59.977} fill={state === 'twoyellow' || state === 'yellow' ? "#FFDD00" : "#616060"} />

      {/* Yellow Light */}
      <Circle x={149.89} y={430.729} radius={109.89} fill={state === 'green' ? "#01C488" : "#494949"} />
      <Circle x={149.89} y={430.729} radius={59.977} fill={state === 'green' ? "#00F0A8" : "#616060"} />

      {/* Green Light */}
      <Circle x={149.89} y={166.773} radius={109.89} fill={state === 'twoyellow' ? "#FFB800" : "#494949"} />
      <Circle x={149.89} y={166.773} radius={59.977} fill={state === "twoyellow" ? "#FFDD00" : "#616060"} />
    </Group>
  );
};

export const TwoClStopWarner = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === 'svg') {
    return (
      <svg width="10vh" height="10vh" viewBox="0 -300 300 2000" fill="none" xmlns="http://www.w3.org/2000/svg">

        <rect y="50" width="300" height="597.721" rx="40" fill="black" />


        <circle cx="149.89" cy="216.773" r="109.89" fill={state === 'green' ? '#01C488' : '#494949'} />
        <circle cx="149.889" cy="216.773" r="59.977" fill={state === 'green' ? '#00F0A8' : '#616060'} />

        <circle cx="149.89" cy="480.729" r="109.89" fill={state === 'red' || state === 'redgreen' ? '#E30101' : '#494949'} />
        <circle cx="149.889" cy="480.729" r="59.977" fill={state === 'red' || state === 'redgreen' ? '#F70000' : '#616060'} />


        <path d="M40.1094 647.722H259.89V697.722H40.1094V647.722Z" fill="black" />
        <path d="M95.0547 697.722H204.945V747.722H95.0547V697.722Z" fill="black" />
        <rect y="747.722" width="300" height="597.721" rx="40" fill="black" />



        <circle cx="149.89" cy="914.495" r="109.89" fill={state === 'green' || state === 'redgreen' ? '#01C488' : '#494949'} />
        <circle cx="149.889" cy="914.495" r="59.977" fill={state === 'green' || state === 'redgreen' ? '#00F0A8' : '#616060'} />

        <circle cx="149.89" cy="1178.45" r="109.89" fill={state === 'red' ? '#E30101' : '#494949'} />
        <circle cx="149.889" cy="1178.45" r="59.977" fill={state === 'red' ? '#F70000' : '#616060'} />

      </svg>
    )
  }

  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}
    >
      <Rect y={50} width={300} height={597.721} cornerRadius={40} fill="black" />


      <Circle x={149.89} y={216.773} radius={109.89} fill={state === 'green' ? '#01C488' : '#494949'} />
      <Circle x={149.889} y={216.773} radius={59.977} fill={state === 'green' ? '#00F0A8' : '#616060'} />

      <Circle x={149.89} y={480.729} radius={109.89} fill={state === 'red' || state === 'redgreen' ? '#E30101' : '#494949'} />
      <Circle x={149.889} y={480.729} radius={59.977} fill={state === 'red' || state === 'redgreen' ? '#F70000' : '#616060'} />


      <Path data="M40.1094 647.722H259.89V697.722H40.1094V647.722Z" fill="black" />
      <Path data="M95.0547 697.722H204.945V747.722H95.0547V697.722Z" fill="black" />
      <Rect y={747.722} width={300} height={597.721} cornerRadius={40} fill="black" />



      <Circle x={149.89} y={914.495} radius={109.89} fill={state === 'green' || state === 'redgreen' ? '#01C488' : '#494949'} />
      <Circle x={149.889} y={914.495} radius={59.977} fill={state === 'green' || state === 'redgreen' ? '#00F0A8' : '#616060'} />

      <Circle x={149.89} y={1178.45} radius={109.89} fill={state === 'red' ? '#E30101' : '#494949'} />
      <Circle x={149.889} y={1178.45} radius={59.977} fill={state === 'red' ? '#F70000' : '#616060'} />
    </Group>
  )
}

export const WarnerSignal = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
  renderAs
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  if (renderAs === 'svg') {
    return (
      <svg width="10vh" height="10vh" viewBox="0 -350 301 1736" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.257812" width="300" height="333.765" rx="40" fill="black" />
        <circle cx="150.148" cy="166.773" r="109.89" fill="#01C488" />
        <circle cx="150.147" cy="166.773" r="59.977" fill="#00F0A8" />

        <rect x="0.257812" y="383.765" width="300" height="597.721" rx="40" fill="black" />

        <circle cx="150.148" cy="550.538" r="109.89" fill={state === 'green' ? "#01C488" : "#494949"} />
        <circle cx="150.147" cy="550.538" r="59.977" fill={state === 'green' ? '#00F0A8' : "#616060"} />

        <circle cx="150.148" cy="814.494" r="109.89" fill={state === 'red' ? '#E30101' : '#494949'} />
        <circle cx="150.147" cy="814.494" r="59.977" fill={state === 'red' ? '#F70000' : '#616060'} />
        <path d="M40.3672 981.486H260.147V1031.49H40.3672V981.486Z" fill="black" />
        <path d="M95.3125 1031.49H205.203V1081.49H95.3125V1031.49Z" fill="black" />
      </svg>
    )
  }

  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle + 90}
      onClick={onClick}
    >
      <Rect x={0.257812} width={300} height={333.765} cornerRadius={40} fill="black" />
      <Circle x={150.148} y={166.773} radius={109.89} fill="#01C488" />
      <Circle x={150.147} y={166.773} radius={59.977} fill="#00F0A8" />

      <Rect x={0.257812} y={383.765} width={300} height={597.721} cornerRadius={40} fill="black" />

      <Circle x={150.148} y={550.538} radius={109.89} fill={state === 'green' ? "#01C488" : "#494949"} />
      <Circle x={150.147} y={550.538} radius={59.977} fill={state === 'green' ? '#00F0A8' : "#616060"} />

      <Circle x={150.148} y={814.494} radius={109.89} fill={state === 'red' ? '#E30101' : '#494949'} />
      <Circle x={150.147} y={814.494} radius={59.977} fill={state === 'red' ? '#F70000' : '#616060'} />
      <Path data="M40.3672 981.486H260.147V1031.49H40.3672V981.486Z" fill="black" />
      <Path data="M95.3125 1031.49H205.203V1081.49H95.3125V1031.49Z" fill="black" />
    </Group>
  )
}


export const InvisibleComponent = ({
  state,
  x = 0,
  y = 0,
  height = 30,
  width = 15,
  angle = 0,
  onClick,
}) => {
  const originalWidth = 300;
  const originalHeight = 598;
  const scaleX = (width || 15) / originalWidth;
  const scaleY = (height || 30) / originalHeight;
  return (
    <Group
      x={x}
      y={y}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={angle+90}
      onClick={onClick}
      onMouseEnter={() => {
        document.body.style.cursor = 'pointer';
      }}
      onMouseLeave={() => {
        document.body.style.cursor = 'default';
      }}
    >
     <Rect x={0.257812} width={300} height={400.765} cornerRadius={40}   fill={state?state:"transparent"}
 />
    </Group>
  )
}














