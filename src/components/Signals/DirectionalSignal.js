import React from "react";
import { circleColor, directionData } from "./constant";
import { signalKeys } from "../../constant/signalKeys";
import ThreeCL from "./ThreeCL";
import ShuntingCL from "./ShuntingCL";
import MACLAndCLComp from "./MACLAndCLComp";
import ShuntingPlusCallingCL from "./ShuntingPLusCallingCL";
export default function DirectionalSignal({
  width,
  height,
  data,
  type = "two",
}) {
  let direction = data?.DIRECTION;
  let resultedDirectionData = directionData?.map((item, index) => {
    let fillCount = -1;
    let tempCircle = item.circle.map((item2) => {
      if (direction?.[index]?.active) {
        if (Object.keys(item2)?.includes("fill")) {
          fillCount++;
          return {
            ...item2,
            fill:
              fillCount % 2 === 0
                ? circleColor.white.color1
                : fillCount % 2 === 1
                ? circleColor.white.color2
                : "none",
          };
        }
        return item2;
      }
      return item2;
    });
    return {
      ...item,
      active: direction?.[index]?.active,
      exist: direction?.[index]?.exist,
      circle: tempCircle,
    };
  });
  const rectangleStartPosY = 938.556;
  const circleRadius = 110;
  const circleCount = data?.CL_DATA?.length || 0;
  const rectangleEndPosY =
    rectangleStartPosY +
    circleCount * 2 * circleRadius +
    (circleCount + 1) * 10 +
    50;
  const rectangleHeight = rectangleEndPosY - rectangleStartPosY;
  const textBox1StartPosY = rectangleEndPosY + 100;
  const textBox1Height = 117;
  const textBox1EndPosY = textBox1StartPosY + textBox1Height;
  const textBox2StartPosY = textBox1EndPosY + 10;
  const textBox2Height = 300;
  const callingTextStartPosY = textBox2StartPosY + textBox2Height;
  const callingTextHeight = 300;
  const callingTextEndPosY = callingTextStartPosY + 2 * circleRadius;
  const callingTextCy = callingTextStartPosY + circleRadius;
  let shuntingStartPosY = callingTextEndPosY + 2 * circleRadius;
  let shuntingHeight = 400;
  const box2Content = {
    text1: "S 15",
    text2: "A/B",
  };
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1579 3218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip0_302_18803)">
        <path
          d="M761.113 888.556H818.06V975.516H761.113V888.556Z"
          fill="url(#pattern0_302_18803)"
        />
        <g filter="url(#filter0_f_302_18803)">
          <path
            d="M806.015 878.495V983.365H827.893V878.495H806.015Z"
            fill="black"
          />
        </g>
      </g>
      {type !== "three" && (
        <g>
          <rect
            x="639.555"
            y={rectangleStartPosY}
            width="300"
            height={rectangleHeight}
            rx="40"
            fill="black"
          />
          {data?.CL_DATA?.map((item, index) => {
            return (
              <g key={index}>
                <circle
                  cx="789.445"
                  cy={
                    rectangleStartPosY + 130 + index * 2 * (circleRadius + 10)
                  }
                  r="109.89"
                  fill={item.color1}
                />
                <circle
                  cx="789.446"
                  cy={
                    rectangleStartPosY + 130 + index * 2 * (circleRadius + 10)
                  }
                  r="59.977"
                  fill={item.color2}
                />
                <circle
                  cx="789.445"
                  cy={
                    rectangleStartPosY + 130 + index * 2 * (circleRadius + 10)
                  }
                  r="105.494"
                  stroke="url(#paint1_linear_302_18803)"
                  strokeWidth="8.79121"
                />
              </g>
            );
          })}
          <path
            d={`M679.664 ${rectangleEndPosY}H899.444V${
              rectangleEndPosY + 50
            }H679.664V${rectangleEndPosY}Z`}
            fill="black"
          />
          <path
            d={`M734.609 ${rectangleEndPosY + 50}H844.5V${
              rectangleEndPosY + 100
            }H734.609V${rectangleEndPosY + 50}Z`}
            fill="black"
          />
          <rect
            x="639.555"
            y={textBox1StartPosY}
            height={textBox1Height}
            width="300"
            rx="2"
            fill="white"
          />
          <rect
            x="639.555"
            y={textBox1StartPosY}
            height={textBox1Height}
            width="300"
            rx="2"
            stroke="black"
            strokeWidth="3"
          />
          <text
            x="800.555"
            y={textBox1StartPosY + 80}
            font-size={"100"}
            alignment-baseline="middle"
            text-anchor="middle"
            fontWeight={"600"}
            fill="black"
          >
            {data?.text1}
          </text>

          <g clipPath="url(#clip1_302_18803)">
            <rect
              width="75"
              height="936.367"
              transform="translate(752.055 2281.19)"
              fill="url(#pattern1_302_18803)"
            />
            <g filter="url(#filter2_f_302_18803)">
              <path
                d="M815.116 1749.37V3749.37H836.994V1749.37H815.116Z"
                fill="black"
              />
            </g>
          </g>
          <rect
            x="639.555"
            y={textBox2StartPosY}
            width={textBox2Height}
            height={textBox2Height}
            rx={50}
            stroke="black"
            strokeWidth="3"
            fill="white"
          />
          <text
            x="800"
            y={textBox2StartPosY + 130}
            alignmentBaseline="middele"
            textAnchor="middle"
            fontWeight={600}
            fill="#000"
            fontSize={100}
          >
            {box2Content.text1}
          </text>
          <text
            x="800"
            y={textBox2StartPosY + 250}
            alignmentBaseline="middele"
            textAnchor="middle"
            fontWeight={600}
            fill="#000"
            fontSize={100}
          >
            {box2Content.text2}
          </text>
          <circle
            cx={789.445}
            cy={callingTextCy}
            fill="#fff"
            r={circleRadius}
            stroke="black"
            strokeWidth="3"
          />
          <text
            x={779.445}
            y={callingTextCy + 30}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="black"
            fontSize={200}
            fontWeight={700}
          >
            C
          </text>
          <circle
            cx="789.445"
            cy={callingTextCy + circleRadius * 2}
            r="109.89"
            fill="#494949"
          />
          <circle
            cx="789.446"
            cy={callingTextCy + circleRadius * 2}
            r="59.977"
            fill="#616060"
          />
          <circle
            cx="789.445"
            cy={callingTextCy + circleRadius * 2}
            r="105.494"
            stroke="url(#paint0_linear_302_18803)"
            strokeWidth="8.79121"
          />
          <g>
            <rect
              x="600.555"
              y={shuntingStartPosY}
              width="350"
              height={shuntingHeight}
              rx="50"
              stroke="black"
              fill="url(#shungBGColor)"
              strokeWidth="0"
            />
            <polygon
              points={`639.555,${shuntingStartPosY + 30} 839.555,${
                shuntingStartPosY + 30
              } 839.555, ${shuntingStartPosY + 10} 930, ${
                shuntingStartPosY + 50
              } 839.555, ${shuntingStartPosY + 100} 839.555, ${
                shuntingStartPosY + 80
              } 639.555,${shuntingStartPosY + 80} 639.555,${
                shuntingStartPosY + 30
              }`}
              fill="white"
            />
            <circle
              cx="679.555"
              cy={shuntingStartPosY + 190}
              r="49.89"
              fill={data?.SHUNTING_DATA?.[0]?.color1}
            />
            <circle
              cx="679.555"
              cy={shuntingStartPosY + 190}
              r="29.977"
              fill={data?.SHUNTING_DATA?.[0]?.color2}
            />
            <circle
              cx="679.555"
              cy={shuntingStartPosY + 190}
              r="45.494"
              stroke="url(#paint0_linear_152_15466)"
              strokeWidth="4.79121"
            />

            <circle
              cx="679.555"
              cy={shuntingStartPosY + 320}
              r="49.89"
              fill={data?.SHUNTING_DATA?.[1]?.color1}
            />
            <circle
              cx="679.555"
              cy={shuntingStartPosY + 320}
              r="29.977"
              fill={data?.SHUNTING_DATA?.[1]?.color2}
            />
            <circle
              cx="679.555"
              cy={shuntingStartPosY + 320}
              r="45.494"
              stroke="url(#paint0_linear_152_15466)"
              strokeWidth="4.79121"
            />

            <circle
              cx="851.89"
              cy={shuntingStartPosY + 320}
              r="49.89"
              fill={data?.SHUNTING_DATA?.[2]?.color1}
            />
            <circle
              cx="851.89"
              cy={shuntingStartPosY + 320}
              r="29.977"
              fill={data?.SHUNTING_DATA?.[2]?.color2}
            />
            <circle
              cx="851.89"
              cy={shuntingStartPosY + 320}
              r="45.494"
              stroke="url(#paint0_linear_152_15466)"
              strokeWidth="4.79121"
            />
          </g>
        </g>
      )}
      {type === "three" && (
        <foreignObject x={"0"} y={"888.556"} width="100%" height="72%">
          {/* <ThreeCL
                    type={signalKeys.PROCEED}
                    text={"S-14"}
                    width="100%"
                    height="100%"
                  />
                  <ShuntingCL
                    clType={3}
                    isShunting={true}
                    type={signalKeys.PROCEED}
                    text={"S-14"}
                    width="100%"
                    height="100%"
                  />
                  <MACLAndCLComp
                    maclType={4}
                    type={signalKeys.ATTENTION}
                    text={"S-14"}
                     width="100%"
                    height="100%"
                  /> */}
          <ShuntingPlusCallingCL
            clType={3}
            isShunting={true}
            type={signalKeys.PROCEED}
            text={"S-14"}
            isCalling={true}
            isCallingActive={true}
            width="100%"
            height="100%"
          />
        </foreignObject>
      )}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M533.766 527.15L683.465 377.451H895.172L1044.87 527.15V738.857L895.172 888.556H683.465L533.766 738.857V527.15Z"
        fill="black"
      />
      {resultedDirectionData?.map((item, index) => {
        if (item.exist) {
          return (
            <g key={index}>
              <rect {...item.rect} />
              {item?.circle?.map((circle, circleIndex) => {
                return <circle {...circle} key={circleIndex} />;
              })}
            </g>
          );
        }
        return;
      })}
      <circle
        cx="795.775"
        cy="632.522"
        r="44.955"
        fill={
          direction?.some((el) => el.active)
            ? circleColor.white.color1
            : "#494949"
        }
      />
      <circle
        cx="795.774"
        cy="632.522"
        r="24.5361"
        fill={
          direction?.some((el) => el.active)
            ? circleColor.white.color1
            : "#616060"
        }
      />
      <circle
        cx="795.775"
        cy="632.522"
        r="43.1568"
        stroke="url(#paint22_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="657.775"
        cy="512.522"
        r="44.955"
        fill={direction?.[2]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="657.774"
        cy="512.522"
        r="24.5361"
        fill={direction?.[2]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="657.775"
        cy="512.522"
        r="43.1568"
        stroke="url(#paint23_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="657.775"
        cy="752.522"
        r="44.955"
        fill={direction?.[0]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="657.774"
        cy="752.522"
        r="24.5361"
        fill={direction?.[0]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="657.775"
        cy="752.522"
        r="43.1568"
        stroke="url(#paint24_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="657.775"
        cy="631.522"
        r="44.955"
        fill={direction?.[1]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="657.774"
        cy="631.522"
        r="24.5361"
        fill={direction?.[1]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="657.775"
        cy="631.522"
        r="43.1568"
        stroke="url(#paint25_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="932.775"
        cy="512.522"
        r="44.955"
        fill={direction?.[3]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="932.774"
        cy="512.522"
        r="24.5361"
        fill={direction?.[3]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="932.775"
        cy="512.522"
        r="43.1568"
        stroke="url(#paint26_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="932.775"
        cy="752.522"
        r="44.955"
        fill={direction?.[5]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="932.774"
        cy="752.522"
        r="24.5361"
        fill={direction?.[5]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="932.775"
        cy="752.522"
        r="43.1568"
        stroke="url(#paint27_linear_302_18803)"
        strokeWidth="3.5964"
      />
      <circle
        cx="932.775"
        cy="631.522"
        r="44.955"
        fill={direction?.[4]?.active ? circleColor.white.color1 : "#494949"}
      />
      <circle
        cx="932.774"
        cy="631.522"
        r="24.5361"
        fill={direction?.[4]?.active ? circleColor.white.color2 : "#616060"}
      />
      <circle
        cx="932.775"
        cy="631.522"
        r="43.1568"
        stroke="url(#paint28_linear_302_18803)"
        strokeWidth="3.5964"
      />

      <defs>
        <linearGradient id="shungBGColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="30.33%" stop-color="rgba(255, 0, 0, 1)" />
          <stop offset="30.33%" stop-color="#000" />
          <stop offset="100%" stop-color="#000" />
        </linearGradient>
        <pattern
          id="pattern0_302_18803"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_302_18803"
            transform="matrix(0.00165982 0 0 0.00108696 -0.645279 0)"
          />
        </pattern>
        <filter
          id="filter0_f_302_18803"
          x="782.387"
          y="854.866"
          width="69.1352"
          height="152.127"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="11.8141"
            result="effect1_foregroundBlur_302_18803"
          />
        </filter>
        <filter
          id="filter1_d_302_18803"
          x="659.555"
          y="1767.31"
          width="259.781"
          height="259.78"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.890196 0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_302_18803"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_302_18803"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern1_302_18803"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_302_18803"
            transform="matrix(0.0135705 0 0 0.00108696 -8.86367 0)"
          />
        </pattern>
        <filter
          id="filter2_f_302_18803"
          x="791.489"
          y="1725.74"
          width="69.1313"
          height="2047.26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="11.8141"
            result="effect1_foregroundBlur_302_18803"
          />
        </filter>
        <linearGradient
          id="paint0_linear_302_18803"
          x1="709.062"
          y1="1049.77"
          x2="832.38"
          y2="1202.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_302_18803"
          x1="709.062"
          y1="1313.73"
          x2="832.38"
          y2="1466.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_302_18803"
          x1="709.062"
          y1="1577.69"
          x2="832.38"
          y2="1730.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_302_18803"
          x1="709.062"
          y1="1841.64"
          x2="832.38"
          y2="1994.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_302_18803"
          x1="67.3369"
          y1="615.841"
          x2="117.785"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_302_18803"
          x1="234.337"
          y1="615.841"
          x2="284.785"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_302_18803"
          x1="401.337"
          y1="615.841"
          x2="451.785"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_302_18803"
          x1="1111.44"
          y1="615.841"
          x2="1161.89"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_302_18803"
          x1="1278.44"
          y1="615.841"
          x2="1328.89"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_302_18803"
          x1="1445.44"
          y1="615.841"
          x2="1495.89"
          y2="678.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_302_18803"
          x1="1007.33"
          y1="359.319"
          x2="1057.78"
          y2="421.997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_302_18803"
          x1="1125.41"
          y1="241.233"
          x2="1175.86"
          y2="303.911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_302_18803"
          x1="1243.5"
          y1="123.146"
          x2="1293.95"
          y2="185.824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_302_18803"
          x1="269.243"
          y1="1097.41"
          x2="319.691"
          y2="1160.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_302_18803"
          x1="387.329"
          y1="979.319"
          x2="437.777"
          y2="1042"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_302_18803"
          x1="505.415"
          y1="861.232"
          x2="555.863"
          y2="923.91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_302_18803"
          x1="1243.56"
          y1="1097.47"
          x2="1294.01"
          y2="1160.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_302_18803"
          x1="1125.48"
          y1="979.383"
          x2="1175.92"
          y2="1042.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_302_18803"
          x1="1007.39"
          y1="861.296"
          x2="1057.84"
          y2="923.974"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_302_18803"
          x1="505.476"
          y1="359.389"
          x2="555.924"
          y2="422.067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_302_18803"
          x1="387.39"
          y1="241.302"
          x2="437.838"
          y2="303.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_302_18803"
          x1="269.304"
          y1="123.215"
          x2="319.752"
          y2="185.893"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_302_18803"
          x1="762.892"
          y1="609.795"
          x2="813.34"
          y2="672.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_302_18803"
          x1="624.892"
          y1="489.795"
          x2="675.34"
          y2="552.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_302_18803"
          x1="624.892"
          y1="729.795"
          x2="675.34"
          y2="792.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_302_18803"
          x1="624.892"
          y1="608.795"
          x2="675.34"
          y2="671.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_302_18803"
          x1="899.892"
          y1="489.795"
          x2="950.34"
          y2="552.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_302_18803"
          x1="899.892"
          y1="729.795"
          x2="950.34"
          y2="792.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_302_18803"
          x1="899.892"
          y1="608.795"
          x2="950.34"
          y2="671.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.453069" stop-opacity="0" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
        <clipPath id="clip0_302_18803">
          <rect
            width="56.8826"
            height="50"
            fill="white"
            transform="translate(761.113 888.556)"
          />
        </clipPath>
        <clipPath id="clip1_302_18803">
          <rect
            width="75"
            height="936.367"
            fill="white"
            transform="translate(752.055 2281.19)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
