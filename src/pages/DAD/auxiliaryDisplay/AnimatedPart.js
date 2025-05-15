import React, { useCallback, useEffect, useState } from "react";
import classes from "./auxiliaryDisplay.module.css";
import Feature from "../../../components/DAD/feature/Feature";
import Gradient from "../../../components/DAD/gradient/Gradient";
import Curvature from "../../../components/DAD/curvature/Curvature";
import websocket from "../../../services/Websocket";
import { Actions, Distance, TrainInfo } from "./utilityComp";
import { topics } from "../../../constant/topic";
import {
  interpolateFeatureData,
} from "./utilityFunction";
import FrontMarker from "./frontMarker";
import { throttle } from "lodash";
import useTrainLocation from "./useTrainLocation";

let signalData=[];

const dummeyGradient = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 200,
    y: -0.018714909544603867,
  },
  {
    x: 400,
    y: -0.037429819089207735,
  },
  {
    x: 600,
    y: -0.056144728633811605,
  },
  {
    x: 800,
    y: -0.07485963817841547,
  },
  {
    x: 1000,
    y: -0.09357454772301933,
  },
  {
    x: 1200,
    y: -0.11228945726762321,
  },
  {
    x: 1400,
    y: -0.13100436681222707,
  },
  {
    x: 1600,
    y: -0.14971927635683094,
  },
  {
    x: 1800,
    y: -0.1684341859014348,
  },
  {
    x: 2000,
    y: -0.18714909544603867,
  },
  {
    x: 2200,
    y: -0.20586400499064256,
  },
  {
    x: 2400,
    y: -0.22457891453524642,
  },
  {
    x: 2600,
    y: -0.24329382407985028,
  },
  {
    x: 2800,
    y: -0.26200873362445415,
  },
  {
    x: 3000,
    y: -0.280723643169058,
  },
  {
    x: 3200,
    y: -0.2994385527136619,
  },
  {
    x: 3400,
    y: -0.1542782495101241,
  },
  {
    x: 3600,
    y: -0.004049640757674722,
  },
  {
    x: 3800,
    y: 0.1461789679947746,
  },
  {
    x: 4000,
    y: 0.296407576747224,
  },
  {
    x: 4200,
    y: 0.4466361854996734,
  },
  {
    x: 4400,
    y: 0.5968647942521228,
  },
  {
    x: 4600,
    y: 0.7470934030045722,
  },
  {
    x: 4800,
    y: 0.85,
  },
  {
    x: 5000,
    y: 0.85,
  },
  {
    x: 5200,
    y: 1.248463519313305,
  },
  {
    x: 5400,
    y: 1.9016824034334765,
  },
  {
    x: 5600,
    y: 2.554901287553648,
  },
  {
    x: 5800,
    y: 3.20812017167382,
  },
  {
    x: 6000,
    y: 3.8613390557939917,
  },
  {
    x: 6200,
    y: 4.514557939914164,
  },
  {
    x: 6400,
    y: 5.167776824034335,
  },
  {
    x: 6600,
    y: 5.8209957081545065,
  },
  {
    x: 6800,
    y: 6.474214592274679,
  },
  {
    x: 7000,
    y: 7.127433476394851,
  },
  {
    x: 7200,
    y: 7.780652360515022,
  },
  {
    x: 7400,
    y: 8.433871244635194,
  },
  {
    x: 7600,
    y: 8.699401496259352,
  },
  {
    x: 7800,
    y: 8.948778054862844,
  },
  {
    x: 8000,
    y: 9.616588805641253,
  },
  {
    x: 8200,
    y: 10.304116350815338,
  },
  {
    x: 8400,
    y: 10.991643895989423,
  },
  {
    x: 8600,
    y: 11.67917144116351,
  },
  {
    x: 8800,
    y: 12.366698986337596,
  },
  {
    x: 9000,
    y: 13.05422653151168,
  },
  {
    x: 9200,
    y: 13.741754076685766,
  },
  {
    x: 9400,
    y: 14.42928162185985,
  },
  {
    x: 9600,
    y: 15.116809167033937,
  },
  {
    x: 9800,
    y: 15.804336712208023,
  },
  {
    x: 10000,
    y: 16.491864257382108,
  },
  {
    x: 10200,
    y: 17.107756041426928,
  },
  {
    x: 10400,
    y: 17.39084004602992,
  },
  {
    x: 10600,
    y: 17.673924050632912,
  },
  {
    x: 10800,
    y: 17.957008055235903,
  },
  {
    x: 11000,
    y: 18.240092059838894,
  },
];

const curvatureDummy = Array.from({ length: 41 }, (_, i) => ({
  x: i * 200,
  y: Math.random() * 10,
  location: i * 200,
}));

curvatureDummy[15] = {
  ...curvatureDummy[15],
  signages: { type: "stopIndicator" },
};

curvatureDummy[27] = {
  ...curvatureDummy[27],
  signages: { type: "stopIndicator" },
};

const curvatureDataDummy = [
  {
    id: 1,
    start: 0,
    end: 4587,
    radius: 0,
    cant: 0,
    degrees: 0,
    direction: 0,
    startvalue: 0,
    endvalue: 0,
  },
  {
    id: 2,
    start: 4588,
    end: 4878,
    radius: 1618,
    cant: 80,
    degrees: 1.08,
    direction: -1,
    startvalue: 0,
    endvalue: 0,
  },
  {
    id: 3,
    start: 4879,
    end: 10934,
    radius: 0,
    cant: 0,
    degrees: 0,
    direction: 0,
  },
];

const initialCurvatureData = Array.from({ length: 1000 }, (_, i) => ({
  y: 30,
  x: -1000 + i,
}));
const initialFeatureData = Array.from({ length: 1000 }, (_, i) => ({
  y: 30,
  x: -1000 + i,
}));

const AnimatedPart=()=> {
  const [pathRange, setPathRange] = useState(2);
  const [DADTrainData, setDADTrainData] = useState();

  useEffect(() => {
    const callback =throttle( (event) => {
        setDADTrainData((prevData) => {
          return JSON.stringify(prevData) !== JSON.stringify(event) ? event : prevData;
        });
      }, 1000);
  
    websocket.subscribe(topics.DAD_TRAIN_DATA, callback);
    return () => websocket.unsubscribeTopic(topics.DAD_TRAIN_DATA);
  }, []);

  return (
    <section className={classes.section1} style={{ position: "relative" }}>
      <FrontMarker pathRange={pathRange} />
      <div className={classes.curvature}>
        <span>Curvature</span>
        <div>
          <CurvatureMain 
             trainLength={DADTrainData?.train_length||650}
             pathRange={pathRange}
          />
        </div>
      </div>
      <div className={classes.curvature}>
        <span>Features</span>
        <div>
          <FeatureMain
           trainLength={DADTrainData?.train_length}
           pathRange={pathRange}
          />
        </div>
      </div>
      <div className={classes.curvature}>
        <span>Gradient </span>
        <div>
          <GradientMain
           pathRange={pathRange}
          trainLength={DADTrainData?.train_length}
          />
        </div>
      </div>
      <Distance pathRange={pathRange} />
      <Actions pathRange={pathRange} setPathRange={setPathRange} />
      <TrainInfo data={DADTrainData} />
    </section>
  );
}
export default AnimatedPart;


const CurvatureMain=React.memo(({trainLength, pathRange})=>{
  const [curvatureData, setCurvatureData] = useState([]);
  const trainLocation=useTrainLocation();

  useEffect(() => {
    const curvatureCallback = throttle(
      (event) => setCurvatureData(prevData=>JSON.stringify(prevData) !== JSON.stringify(event) ? event : prevData),
      1000
    );
   
    websocket.subscribe(topics.CURVATURE, curvatureCallback);
    return () => {
      websocket.unsubscribeTopic(topics.CURVATURE);
    };
  }, []);

  let curveData=[];
   curvatureData 
    ?.forEach((item)=>{
  let startTemp = { x: item.start, y: 32 };
  let endTemp={x:item.end, y:32};
  if(item.direction===-1)
  {
    startTemp.y=14;
    startTemp.x = startTemp.x+50;
    endTemp.y = 14;
    endTemp.x = endTemp.x - 50;
  }
  else if(item.direction===1)
  {
    startTemp.y=50;
    startTemp.x = startTemp.x+50;
    endTemp.y = 50;
    endTemp.x = endTemp.x - 50;
  }
  curveData.push(startTemp);
  curveData.push(endTemp);
});

const interpolatedCurvatureData=interpolateFeatureData(curveData)
const curvature=  Array.from({ length: 1000 }, (_, i) => ({
  y: interpolatedCurvatureData[0]?.y||0,
  x: -1000 + i,
})).concat(interpolatedCurvatureData);

  return(
    <>
     {curvature?.length > 1005 && (
            <Curvature
              range={pathRange === 2 ? 2000 : 1000}
              height={64}
              data={curvature}
              trainLocation={trainLocation}
              trainLength={trainLength}
              // data={curvatureDummy}
            />
          )}
    </>
  )
})

const FeatureMain=React.memo(({pathRange, trainLength })=>{
  const [DADFeatureData, setDADFeatureData] = useState([]);
  const trainLocation=useTrainLocation();


  useEffect(()=>{
    const callback=throttle((event)=>{
      signalData=event
    },1000)
    websocket.subscribe(topics.SIGNAL,callback );
    return()=>{
      websocket.unsubscribeTopic(topics.SIGNAL);
    }
  },[]);

  useEffect(() => {
    const DADFeatureCallback = throttle(
      (event) => setDADFeatureData(event),
      1000
    );
    websocket.subscribe(topics.DAD_FEATURE, DADFeatureCallback);
    return () => {
      websocket.unsubscribeTopic(topics.DAD_FEATURE);
    };
  }, []);

  useEffect(()=>{
    let feauteData= DADFeatureData;
    function matchSignals(data, data2) {
      const signalMap = new Map(data2.map(signal => [signal.id, signal]));
      
      return data.map(item => {
          if (item.signal && signalMap.has(item.signal.id)) {
              return { ...item, signal: signalMap.get(item.signal.id) };
          }
          return item;
      });
  }
  const result=matchSignals(feauteData,signalData);
   setDADFeatureData(result);
  },[signalData])

  let updatedFeatureData = DADFeatureData?.map((item) => ({
    ...item,
    x: item.position,
    y: 30,
  }));

  updatedFeatureData = initialFeatureData.concat(
    interpolateFeatureData(updatedFeatureData)
  );
  return(
    <>
    {updatedFeatureData?.length > 1005&& (
      <Feature
        //  data={dummeyGradient}
        range={pathRange === 2 ? 2000 : 1000}
        data={updatedFeatureData}
        trainLocation={trainLocation}
        height={64}
     trainLength={trainLength}
      />
    )}
    </>
  )
})

const GradientMain=React.memo(({trainLength, pathRange})=>{
  const [gradientData, setGradientData] = useState([]);
  const trainLocation=useTrainLocation();
  const interpolatedGradientData=  interpolateFeatureData(gradientData)
  const updatedGradientData = Array.from({ length: 1000 }, (_, i) => ({
    y: interpolatedGradientData[0]?.y||0,
    x: -1000 + i,
  })).concat(
    interpolatedGradientData
  );


  useEffect(() => {
    const gradientCallback = throttle((event) => {
      let lasItem = {
        x: event[event.length - 1].end,
        y: event[event.length - 1].endvalue,
      };
      let data = event?.map((item) => ({ x: item.start, y: item.startvalue }));
      data.push(lasItem);
      setGradientData(data);
    }, 1000);
    websocket.subscribe(topics.GRADIENT, gradientCallback);
    return () => {
      websocket.unsubscribeTopic(topics.GRADIENT);
    };
  }, []);

  return(
    <>
     {updatedGradientData?.length > 1005&& (
            <Gradient
              width={1400}
              height={64}
               data={updatedGradientData}
              trainLocation={trainLocation}
               //data={dummeyGradient}
              range={pathRange === 2 ? 2000 : 1000}
              trainLength={trainLength}
            />
          )}
    </>
  )
})
