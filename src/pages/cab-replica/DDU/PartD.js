import React from "react";
import { useRotate } from "../../../components/cab-replica/customHook/useRotate";
import { deriveAngleFn } from "../CabReplicate/CabUtility";

export default function PartD({ data }) {
  // const minPoint=0, maxPoint=292, actualPoint=140;
  // const rotateRight=useRotate(minPoint, maxPoint, actualPoint);
  const updatedRadialMax = (current) => {
    let result = 299;
    if (current <= 50) {
      result = 270;
    } else if (current <= 70) {
      result = 284;
    } else if (current <= 80) {
      result = 288;
    } else if (current <= 100) {
      result = 292.7;
    }
    if (current === 180) {
      result = 296;
    } else if (current > 180) {
      result = 295;
    }

    return result;
  };
  const numericCurrent = 10;
  const numericMin = 0,
    numericMax = 190,
    radialMin = 0,
    radialMax = updatedRadialMax(numericCurrent);
  const radialCurrent = deriveAngleFn(
    numericMin,
    numericMax,
    radialMin,
    radialMax,
    numericCurrent
  );

  const rotateRight = useRotate(radialMin, radialMax, radialCurrent);
  const dialStyle = {
    transformOrigin: "135px 128px",
    transform: `rotate(${rotateRight}deg)`,
  };

  return (
    <div style={{ display: "grid", gridTemplateRows: "70% 30%" }}>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <svg
          width="270"
          height="160"
          viewBox="0 0 220 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="78.4871"
            y1="210.268"
            x2="87.1419"
            y2="198.531"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="60.8058"
            y1="192.921"
            x2="72.2314"
            y2="183.858"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="48.3418"
            y1="171.69"
            x2="61.732"
            y2="165.913"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="41.9163"
            y1="148.55"
            x2="56.3348"
            y2="146.362"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="41.6159"
            y1="124.209"
            x2="56.1117"
            y2="125.806"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="47.5561"
            y1="100.695"
            x2="61.1578"
            y2="105.955"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="60.1414"
            y1="78.4051"
            x2="71.8144"
            y2="87.1468"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="77.4925"
            y1="60.9513"
            x2="86.4897"
            y2="72.4285"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="99.7862"
            y1="48.203"
            x2="105.333"
            y2="61.6904"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="124.629"
            y1="41.9877"
            x2="126.321"
            y2="56.4727"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="148.964"
            y1="42.5213"
            x2="146.871"
            y2="56.9539"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="174.879"
            y1="50.4537"
            x2="168.748"
            y2="63.6855"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="195.627"
            y1="63.8742"
            x2="186.253"
            y2="75.0454"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="212.033"
            y1="82.0751"
            x2="200.085"
            y2="90.437"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="223.244"
            y1="104.132"
            x2="209.525"
            y2="109.079"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="228.287"
            y1="128.213"
            x2="213.754"
            y2="129.422"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="226.53"
            y1="154.59"
            x2="212.237"
            y2="151.695"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="218.557"
            y1="177.358"
            x2="205.474"
            y2="170.913"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="204.088"
            y1="198.399"
            x2="193.229"
            y2="188.665"
            stroke="white"
            strokeWidth="1.51595"
          />
          <line
            x1="186.793"
            y1="213.265"
            x2="178.604"
            y2="201.198"
            stroke="white"
            strokeWidth="1.51595"
          />
          <g opacity="0.7" filter="url(#filter0_f_260_15038)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M185.903 213.251C202.509 202.364 215.206 186.461 222.146 167.857C229.085 149.253 229.906 128.92 224.487 109.817C219.069 90.7145 207.694 73.8402 192.02 61.6509C176.345 49.4615 157.189 42.5936 137.341 42.047C117.492 41.5003 97.987 47.3035 81.6654 58.6117C65.3438 69.9199 53.0579 86.1426 46.5962 104.918C40.1345 123.693 39.8345 144.041 45.7399 162.999C51.6452 181.957 63.4476 198.534 79.4287 210.319L74.0305 217.639C56.4907 204.706 43.5371 186.511 37.0558 165.704C30.5744 144.897 30.9036 122.565 37.9956 101.958C45.0875 81.3513 58.5718 63.5463 76.4854 51.1352C94.3989 38.724 115.806 32.3548 137.591 32.9547C159.376 33.5547 180.4 41.0925 197.603 54.4707C214.807 67.849 227.291 86.3692 233.238 107.335C239.185 128.301 238.284 150.618 230.668 171.036C223.051 191.455 209.116 208.909 190.89 220.858L185.903 213.251Z"
              fill="url(#paint0_angular_260_15038)"
            />
          </g>
          <g filter="url(#filter1_f_260_15038)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M185.903 213.251C202.509 202.364 215.206 186.461 222.146 167.857C229.085 149.253 229.906 128.92 224.487 109.817C219.069 90.7145 207.694 73.8402 192.02 61.6509C176.345 49.4615 157.189 42.5936 137.341 42.047C117.492 41.5003 97.987 47.3035 81.6654 58.6117C65.3438 69.9199 53.0579 86.1426 46.5962 104.918C40.1345 123.693 39.8345 144.041 45.7399 162.999C51.6452 181.957 63.4476 198.534 79.4287 210.319L74.0305 217.639C56.4907 204.706 43.5371 186.511 37.0558 165.704C30.5744 144.897 30.9036 122.565 37.9956 101.958C45.0875 81.3513 58.5718 63.5463 76.4854 51.1352C94.3989 38.724 115.806 32.3548 137.591 32.9547C159.376 33.5547 180.4 41.0925 197.603 54.4707C214.807 67.849 227.291 86.3692 233.238 107.335C239.185 128.301 238.284 150.618 230.668 171.036C223.051 191.455 209.116 208.909 190.89 220.858L185.903 213.251Z"
              fill="url(#paint1_angular_260_15038)"
            />
          </g>
          <g filter="url(#filter2_f_260_15038)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M185.903 213.251C202.509 202.364 215.206 186.461 222.146 167.857C229.085 149.253 229.906 128.92 224.487 109.817C219.069 90.7145 207.694 73.8402 192.02 61.6509C176.345 49.4615 157.189 42.5936 137.341 42.047C117.492 41.5003 97.987 47.3035 81.6654 58.6117C65.3438 69.9199 53.0579 86.1426 46.5962 104.918C40.1345 123.693 39.8345 144.041 45.7399 162.999C51.6452 181.957 63.4476 198.534 79.4287 210.319L74.0305 217.639C56.4907 204.706 43.5371 186.511 37.0558 165.704C30.5744 144.897 30.9036 122.565 37.9956 101.958C45.0875 81.3513 58.5718 63.5463 76.4854 51.1352C94.3989 38.724 115.806 32.3548 137.591 32.9547C159.376 33.5547 180.4 41.0925 197.603 54.4707C214.807 67.849 227.291 86.3692 233.238 107.335C239.185 128.301 238.284 150.618 230.668 171.036C223.051 191.455 209.116 208.909 190.89 220.858L185.903 213.251Z"
              fill="url(#paint2_angular_260_15038)"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M185.903 213.251C202.509 202.364 215.206 186.461 222.146 167.857C229.085 149.253 229.906 128.92 224.487 109.817C219.069 90.7145 207.694 73.8402 192.02 61.6509C176.345 49.4615 157.189 42.5936 137.341 42.047C117.492 41.5003 97.987 47.3035 81.6654 58.6117C65.3438 69.9199 53.0579 86.1426 46.5962 104.918C40.1345 123.693 39.8345 144.041 45.7399 162.999C51.6452 181.957 63.4476 198.534 79.4287 210.319L74.0305 217.639C56.4907 204.706 43.5371 186.511 37.0558 165.704C30.5744 144.897 30.9036 122.565 37.9956 101.958C45.0875 81.3513 58.5718 63.5463 76.4854 51.1352C94.3989 38.724 115.806 32.3548 137.591 32.9547C159.376 33.5547 180.4 41.0925 197.603 54.4707C214.807 67.849 227.291 86.3692 233.238 107.335C239.185 128.301 238.284 150.618 230.668 171.036C223.051 191.455 209.116 208.909 190.89 220.858L185.903 213.251Z"
            fill="url(#paint3_angular_260_15038)"
          />
          <path
            d="M92.0034 198.097L90.4268 196.429V188.394L92.0034 186.727H96.2783L97.8549 188.394V196.429L96.2783 198.097H92.0034ZM92.5946 196.793H95.6719L96.4602 195.989V188.834L95.6871 188.031H92.6097L91.8214 188.834V195.989L92.5946 196.793Z"
            fill="white"
          />
          <path
            d="M70.4932 166.822H63.5198V165.609L68.8711 159.652V157.56L68.0828 156.756H65.7634L64.8538 157.696V159.03H63.5956V157.12L65.1722 155.453H68.6892L70.2658 157.12V160.091L65.2177 165.609H69.2804V163.851H70.4932V166.822ZM74.8802 166.822L73.3036 165.155V157.12L74.8802 155.453H79.1551L80.7317 157.12V165.155L79.1551 166.822H74.8802ZM75.4714 165.518H78.5488L79.3371 164.715V157.56L78.5639 156.756H75.4865L74.6983 157.56V164.715L75.4714 165.518Z"
            fill="white"
          />
          <path
            d="M62.2608 132.266H63.4735V130.644H58.1677V129.431L62.5943 122.109H64.8682V129.431H65.8232V130.644H64.8682V132.266H65.9293V133.479H62.2608V132.266ZM63.4735 129.431V123.186L59.6988 129.431H63.4735ZM70.2102 133.479L68.6337 131.811V123.777L70.2102 122.109H74.4852L76.0618 123.777V131.811L74.4852 133.479H70.2102ZM70.8015 132.175H73.8788L74.6671 131.372V124.217L73.894 123.413H70.8166L70.0283 124.217V131.372L70.8015 132.175Z"
            fill="white"
          />
          <path
            d="M74.3588 97.0589V89.0244L75.9353 87.3568H79.4523L81.0289 89.0244V90.9345H79.7707V89.6004L78.8611 88.6605H76.5417L75.6776 89.5398V92.1624H79.801L81.3321 93.7693V97.0589L79.7555 98.7264H75.9353L74.3588 97.0589ZM75.6776 93.3751V96.5435L76.5417 97.4227H79.1643L79.9374 96.6193V94.2089L79.1188 93.3751H75.6776ZM85.4917 98.7264L83.9152 97.0589V89.0244L85.4917 87.3568H89.7667L91.3433 89.0244V97.0589L89.7667 98.7264H85.4917ZM86.083 97.4227H89.1603L89.9486 96.6193V89.464L89.1755 88.6605H86.0981L85.3098 89.464V96.6193L86.083 97.4227Z"
            fill="white"
          />
          <path
            d="M101.667 76.3245V73.1865L102.652 72.1405L101.818 71.2613V68.29L103.395 66.6224H107.079L108.655 68.29V71.2613L107.806 72.1557L108.792 73.1865V76.3245L107.215 77.9921H103.243L101.667 76.3245ZM106.669 72.8833H103.789L103.061 73.6261V75.8849L103.85 76.6883H106.624L107.397 75.8849V73.6261L106.669 72.8833ZM103.213 70.8216L103.956 71.5796H106.518L107.26 70.8216V68.7296L106.472 67.9262H104.001L103.213 68.7296V70.8216ZM112.951 77.9921L111.375 76.3245V68.29L112.951 66.6224H117.226L118.803 68.29V76.3245L117.226 77.9921H112.951ZM113.542 76.6883H116.62L117.408 75.8849V68.7296L116.635 67.9262H113.558L112.769 68.7296V75.8849L113.542 76.6883Z"
            fill="white"
          />
          <path
            d="M137.251 61.4503V71.6072H139.525V72.8199H133.582V71.6072H135.856V62.9208L133.385 64.1487L132.794 62.9663L135.856 61.4503H137.251ZM143.821 72.8199L142.244 71.1524V63.1179L143.821 61.4503H148.096L149.673 63.1179V71.1524L148.096 72.8199H143.821ZM144.412 71.5162H147.49L148.278 70.7128V63.5575L147.505 62.754H144.427L143.639 63.5575V70.7128L144.412 71.5162ZM153.681 72.8199L152.104 71.1524V63.1179L153.681 61.4503H157.956L159.532 63.1179V71.1524L157.956 72.8199H153.681ZM154.272 71.5162H157.349L158.137 70.7128V63.5575L157.364 62.754H154.287L153.499 63.5575V70.7128L154.272 71.5162Z"
            fill="white"
          />
          <path
            d="M167.2 79.0192V89.176H169.474V90.3888H163.532V89.176H165.806V80.4896L163.335 81.7176L162.744 80.5351L165.806 79.0192H167.2ZM179.243 90.3888H172.27V89.176L177.621 83.2184V81.1263L176.833 80.3229H174.513L173.604 81.2628V82.5968H172.345V80.6867L173.922 79.0192H177.439L179.016 80.6867V83.658L173.968 89.176H178.03V87.4175H179.243V90.3888ZM183.63 90.3888L182.053 88.7212V80.6867L183.63 79.0192H187.905L189.482 80.6867V88.7212L187.905 90.3888H183.63ZM184.221 89.0851H187.299L188.087 88.2816V81.1263L187.314 80.3229H184.236L183.448 81.1263V88.2816L184.221 89.0851Z"
            fill="white"
          />
          <path
            d="M183.437 104.892V115.049H185.711V116.261H179.768V115.049H182.042V106.362L179.571 107.59L178.98 106.408L182.042 104.892H183.437ZM191.917 115.049H193.13V113.427H187.824V112.214L192.25 104.892H194.524V112.214H195.479V113.427H194.524V115.049H195.585V116.261H191.917V115.049ZM193.13 112.214V105.968L189.355 112.214H193.13ZM199.866 116.261L198.29 114.594V106.559L199.866 104.892H204.141L205.718 106.559V114.594L204.141 116.261H199.866ZM200.458 114.958H203.535L204.323 114.154V106.999L203.55 106.196H200.473L199.684 106.999V114.154L200.458 114.958Z"
            fill="white"
          />
          <path
            d="M185.608 145.245V155.402H187.882V156.615H181.94V155.402H184.214V146.716L181.743 147.944L181.151 146.761L184.214 145.245H185.608ZM190.905 154.947V146.913L192.481 145.245H195.998L197.575 146.913V148.823H196.317V147.489L195.407 146.549H193.088L192.224 147.428V150.051H196.347L197.878 151.658V154.947L196.302 156.615H192.481L190.905 154.947ZM192.224 151.264V154.432L193.088 155.311H195.71L196.483 154.508V152.097L195.665 151.264H192.224ZM202.038 156.615L200.461 154.947V146.913L202.038 145.245H206.313L207.889 146.913V154.947L206.313 156.615H202.038ZM202.629 155.311H205.706L206.495 154.508V147.352L205.722 146.549H202.644L201.856 147.352V154.508L202.629 155.311Z"
            fill="white"
          />
          <path
            d="M170.076 177.088V187.244H172.35V188.457H166.407V187.244H168.681V178.558L166.21 179.786L165.619 178.603L168.681 177.088H170.076ZM175.221 186.79V183.652L176.206 182.606L175.373 181.726V178.755L176.949 177.088H180.633L182.209 178.755V181.726L181.361 182.621L182.346 183.652V186.79L180.769 188.457H176.798L175.221 186.79ZM180.224 183.348H177.343L176.616 184.091V186.35L177.404 187.153H180.178L180.951 186.35V184.091L180.224 183.348ZM176.767 181.287L177.51 182.045H180.072L180.815 181.287V179.195L180.026 178.391H177.555L176.767 179.195V181.287ZM186.506 188.457L184.929 186.79V178.755L186.506 177.088H190.78L192.357 178.755V186.79L190.78 188.457H186.506ZM187.097 187.153H190.174L190.962 186.35V179.195L190.189 178.391H187.112L186.324 179.195V186.35L187.097 187.153Z"
            fill="white"
          />
          <g filter="url(#filter3_di_260_15038)" id="dial" style={dialStyle}>
            <path
              d="M85.9509 201.069L131.051 123.938C132.539 121.395 135.859 120.625 138.314 122.256C140.768 123.887 141.346 127.246 139.577 129.603L85.9509 201.069Z"
              fill="url(#paint4_linear_260_15038)"
            />
          </g>
          <circle
            cx="135.656"
            cy="126.886"
            r="8.14369"
            fill="url(#paint5_linear_260_15038)"
          />
          <g filter="url(#filter4_f_260_15038)">
            <circle
              cx="135.656"
              cy="126.886"
              r="7.562"
              stroke="url(#paint6_linear_260_15038)"
              stroke-width="1.16338"
            />
          </g>
          <path
            d="M122.075 199.549L119.868 197.214V185.966L122.075 183.631H128.06L130.268 185.966V197.214L128.06 199.549H122.075ZM122.903 197.724H127.211L128.315 196.599V186.581L127.233 185.456H122.924L121.821 186.581V196.599L122.903 197.724ZM133.035 197.002H135.157V199.549H133.035V197.002ZM140.128 199.549L137.92 197.214V185.966L140.128 183.631H146.113L148.32 185.966V197.214L146.113 199.549H140.128ZM140.955 197.724H145.264L146.367 196.599V186.581L145.285 185.456H140.977L139.873 186.581V196.599L140.955 197.724Z"
            fill="white"
          />
          <path
            d="M123.674 220.776H120.46V219.563H121.233L119.005 216.455H117.504V219.563H118.565V220.776H115.048V219.563H116.109V212.135H115.048V210.922H118.565V212.135H117.504V215.242H118.838L121.082 212.135H120.309V210.922H123.522V212.135H122.643L120.051 215.743L122.795 219.563H123.674V220.776ZM127.645 219.563H128.706V220.776H125.189V219.563H126.25V212.135H125.189V210.922H128.282L131.147 218.092L134.012 210.922H137.104V212.135H136.043V219.563H137.104V220.776H133.587V219.563H134.649V212.635L131.814 219.563H130.48L127.645 212.635V219.563ZM138.397 221.988L143.021 208.193H144.188L139.565 221.988H138.397ZM145.471 210.922H148.988V212.135H147.927V215.242H152.596V212.135H151.535V210.922H155.052V212.135H153.99V219.563H155.052V220.776H151.535V219.563H152.596V216.455H147.927V219.563H148.988V220.776H145.471V219.563H146.532V212.135H145.471V210.922Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_260_15038"
              x="0.286442"
              y="0.777775"
              width="268.974"
              height="252.218"
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
                stdDeviation="16.0691"
                result="effect1_foregroundBlur_260_15038"
              />
            </filter>
            <filter
              id="filter1_f_260_15038"
              x="25.906"
              y="26.3973"
              width="217.735"
              height="200.979"
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
                stdDeviation="3.25929"
                result="effect1_foregroundBlur_260_15038"
              />
            </filter>
            <filter
              id="filter2_f_260_15038"
              x="25.906"
              y="26.3973"
              width="217.735"
              height="200.979"
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
                stdDeviation="3.25929"
                result="effect1_foregroundBlur_260_15038"
              />
            </filter>
            <filter
              id="filter3_di_260_15038"
              x="82.8486"
              y="118.296"
              width="60.8575"
              height="92.8551"
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
              <feOffset dy="6.9803" />
              <feGaussianBlur stdDeviation="1.55118" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_260_15038"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_260_15038"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-10.0827" />
              <feGaussianBlur stdDeviation="1.55118" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_260_15038"
              />
            </filter>
            <filter
              id="filter4_f_260_15038"
              x="126.737"
              y="117.967"
              width="17.8385"
              height="17.8385"
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
                stdDeviation="0.387795"
                result="effect1_foregroundBlur_260_15038"
              />
            </filter>
            <radialGradient
              id="paint0_angular_260_15038"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.01 133.303) rotate(135.145) scale(98.2931 97.1353)"
            >
              <stop offset="0.378994" stop-color="#0B8E00" />
              <stop offset="0.379158" stop-color="#FF0000" />
              <stop offset="0.781708" stop-color="#FF0000" />
              <stop offset="0.919162" stop-color="#0B8E00" />
            </radialGradient>
            <radialGradient
              id="paint1_angular_260_15038"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.01 133.303) rotate(135.145) scale(98.2931 97.1353)"
            >
              <stop offset="0.378994" stop-color="#0B8E00" />
              <stop offset="0.379158" stop-color="#FF0000" />
              <stop offset="0.781708" stop-color="#FF0000" />
              <stop offset="0.919162" stop-color="#0B8E00" />
            </radialGradient>
            <radialGradient
              id="paint2_angular_260_15038"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.01 133.303) rotate(135.145) scale(98.2931 97.1353)"
            >
              <stop offset="0.378994" stop-color="#0B8E00" />
              <stop offset="0.379158" stop-color="#FF0000" />
              <stop offset="0.781708" stop-color="#FF0000" />
              <stop offset="0.919162" stop-color="#0B8E00" />
            </radialGradient>
            <radialGradient
              id="paint3_angular_260_15038"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.01 133.303) rotate(135.145) scale(98.2931 97.1353)"
            >
              <stop offset="0.378994" stop-color="#0B8E00" />
              <stop offset="0.379158" stop-color="#FF0000" />
              <stop offset="0.781708" stop-color="#FF0000" />
              <stop offset="0.919162" stop-color="#0B8E00" />
            </radialGradient>
            <linearGradient
              id="paint4_linear_260_15038"
              x1="138.314"
              y1="122.256"
              x2="85.9509"
              y2="201.069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A20000" />
              <stop offset="1" stop-color="#FF0000" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_260_15038"
              x1="134.88"
              y1="119.906"
              x2="140.541"
              y2="132.991"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8991A5" />
              <stop offset="1" stop-color="#5D6579" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_260_15038"
              x1="135.656"
              y1="135.03"
              x2="135.656"
              y2="118.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFFFA" />
              <stop offset="1" stop-color="#1C1822" />
            </linearGradient>
          </defs>
        </svg> */}
        <h2 className="fc-1">FLG : {data}</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
          }}
        >
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>Battery</span>
          <span style={{ color: "#0B8E00", fontSize: "0.9vw" }}>98</span>
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>Volts</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
          }}
        >
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>BC</span>
          <span style={{ color: "#0B8E00", fontSize: "0.9vw" }}>RELEASED</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
          }}
        >
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>MR</span>
          <span style={{ color: "#FF0000", fontSize: "0.9vw" }}>{"< 6.4"}</span>
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>KG/CM2</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
          }}
        >
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>BP</span>
          <span style={{ color: "#FF0000", fontSize: "0.9vw" }}>{"< 6.4"}</span>
          <span style={{ color: "#fff", fontSize: "0.9vw" }}>KG/CM2</span>
        </div>
      </div>
    </div>
  );
}
