// import React, { useEffect, useState } from "react";
// import { Card } from "antd";
// import CabReplicaMain from "./pages/cab-replica/Main/Main";
// import LandingPage from "./pages/instructor-station/panels/landingPage";
// import ARCMain from "./pages/DDU/ARC/main";
// import { BombarDierMain } from "./pages/DDU/bombardier/main";
// import websocket from "./services/Websocket";
// import CabReplicaControlMain from "./pages/CabReplicaControl/Main/Main";
// import DADmain from "./pages/DAD/main";
// import VIDMain from "./pages/VID/VIDMain";
// import { Medha_home } from "./pages/DDU/Medha/Medha_home";
// import { Kavach_home } from "./pages/KAVACH/kavach_home";
// import M_speedometer from "./pages/MSpeedometer/M_speedometer";
// import { Dpwcs_Home } from "./pages/DDU/DPWCS/dpwcs_home";

// const data = [
//   { id: 1, name: "Instructor-Station-Interface" },
//   { id: 2, name: "DDU" },
//   { id: 3, name: "DAD" },
//   { id: 4, name: "Cab-Replica (E70)" },
//   { id: 5, name: "Cab-Replica (CCB)" },
//   { id: 6, name: "Cab-Replica-Control (E70)" },
//   { id: 7, name: "Cab-Replica-Control (CCB)" },
//   { id: 8, name: "VID" },
//   { id: 9, name: "Medha" },
//   //  { id: 10, name: "DPWCS" },
//   { id: 11, name: "KAVACH" },
//   { id: 12, name: "MEMOTELSPEEDOMETER" },

// ];

// const DDUPage = () => {
//   const [DDUType, setDDUType] = useState("DPWCSHOME");
//   return (
//     <div style={{ width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex", background: "#121a1f" }}>
//       {DDUType === "ARC" && <ARCMain DDUType={"ARC"} />}
//       {DDUType === "BOMBAR" && <BombarDierMain />}
//       {DDUType === "DPWCSHOME" && <Dpwcs_Home />}
//     </div>
//   );
// };

// const App = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [selectedCardName, setSelectedName] = useState(null);

//   const handleCardClick = (cardId, name) => {
//     setSelectedCard(cardId);
//     setSelectedName(name);
//   };
//   useEffect(() => {
//     websocket.connect();
//     return () => {
//       websocket.close();
//     };
//   }, []);
//   return (
//     <div>
//       {selectedCard === null ? (
//         <Card
//           title="Locomotive Software"
//         >
//           {data.map((item) => (
//             <Card.Grid
//               key={item.id}
//               style={{
//                 width: "50%",
//                 height: "25%",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(item.id, item.name)}
//             >
//               {item.name}
//             </Card.Grid>
//           ))}
//         </Card>
//       ) :
//         selectedCard === 1 ? (
//           <LandingPage />
//         ) :
//           selectedCard === 2 ? (
//             <DDUPage />
//           ) : selectedCard === 3 ? (
//             <DADmain />
//           ) : selectedCard === 4 ? (
//             <CabReplicaMain />
//           ) : selectedCard === 5 ? (
//             <CabReplicaMain mode={"CCB"} />
//           ) : selectedCard === 6 ? (
//             <CabReplicaControlMain />
//           ) : selectedCard === 7 ? (
//             <CabReplicaControlMain mode="CCB" />
//           ) : selectedCard === 8 ? (
//             <VIDMain />
//           ) : selectedCard === 9 ? (
//               < Medha_home />
//           ) : selectedCard === 10 ? (
//               < ARCMain />
//           ) : selectedCard == 11 ? (
//               <Kavach_home />
//           ) : selectedCard == 12 ? (
//               <M_speedometer />
//           ) :
//              (
//                     <Card
//                       style={{ width: "100%", height: "100%" }}
//                       bodyStyle={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <div style={{ textAlign: "center" }}>
//                         <h1>Details for {selectedCardName}</h1>
//                         <p>Under Construction.</p>
//                         <button onClick={() => setSelectedCard(null)}>Go Back</button>
//                       </div>
//                     </Card>
//                   )}
//     </div>
//   );
// };

// export default App;




import React, { useEffect, useState, Suspense, lazy } from "react";
import { Card } from "antd";
import websocket from "./services/Websocket";

const ARCMain = lazy(() => import("./pages/DDU/ARC/main").then(mod => ({ default: mod.ARCMain })));
const BombarDierMain = lazy(() => import("./pages/DDU/bombardier/main").then(mod => ({ default: mod.BombarDierMain })));
const Dpwcs_Home = lazy(() => import("./pages/DDU/DPWCS/dpwcs_home").then(mod => ({ default: mod.Dpwcs_Home })))
const DDUPage = () => {
  const [DDUType, setDDUType] = useState("ARC");

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#121a1f" }}>
      {DDUType === "ARC" && <ARCMain DDUType="ARC" />}
      {DDUType === "BOMBAR" && <BombarDierMain />}
      {DDUType === "DPWCSHOME" && <Dpwcs_Home />}
    </div>
  );
};

const componentLoaders = {
  1: () => import("./pages/instructor-station/panels/landingPage"),
  // 2: () => import("./pages/DDU/ARC/main").then(mod => ({ default: () => <mod.default DDUType="ARC" /> })),
  2: () => Promise.resolve({ default: DDUPage }),
  3: () => import(/* webpackPrefetch: true */"./pages/DAD/main"),
  4: () => import(/* webpackPrefetch: true */"./pages/cab-replica/Main/Main"),
  5: () => import(/* webpackPrefetch: true */"./pages/cab-replica/Main/Main").then(mod => ({ default: () => <mod.default mode="CCB" /> })),
  6: () => import(/* webpackPrefetch: true */"./pages/CabReplicaControl/Main/Main"),
  7: () => import(/* webpackPrefetch: true */"./pages/CabReplicaControl/Main/Main").then(mod => ({ default: () => <mod.default mode="CCB" /> })),
  8: () => import(/* webpackPrefetch: true */"./pages/VID/VIDMain"),
  9: () => import("./pages/DDU/Medha/Medha_home").then(mod => ({ default: mod.Medha_home })),
  11: () => import("./pages/KAVACH/kavach_home").then(mod => ({ default: mod.Kavach_home })),
  12: () => import(/* webpackPrefetch: true */"./pages/MSpeedometer/M_speedometer"),
};

const data = [
  { id: 1, name: "Instructor-Station-Interface" },
  { id: 2, name: "DDU" },
  { id: 3, name: "DAD" },
  { id: 4, name: "Cab-Replica (E70)" },
  { id: 5, name: "Cab-Replica (CCB)" },
  { id: 6, name: "Cab-Replica-Control (E70)" },
  { id: 7, name: "Cab-Replica-Control (CCB)" },
  { id: 8, name: "VID" },
  { id: 9, name: "Medha" },
  { id: 11, name: "KAVACH" },
  { id: 12, name: "MEMOTELSPEEDOMETER" },
];

const originalCreateElement = React.createElement;
React.createElement = (type, props, ...children) => {
  if (type === 'img' && props) {
    props = {
      loading: props.loading || 'lazy',
      decoding: props.decoding || 'async',
      ...props,
    };
  }
  return originalCreateElement(type, props, ...children);
};

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardName, setSelectedName] = useState(null);
  const [LoadedComponent, setLoadedComponent] = useState(null);

  useEffect(() => {
    websocket.connect();
    return () => {
      websocket.close();
    };
  }, []);
  // useEffect(() => {
  //   const savedCardId = localStorage.getItem("selectedCardId");
  //   const savedCardName = localStorage.getItem("selectedCardName");
  //   if (savedCardId) {
  //     loadComponent(parseInt(savedCardId), savedCardName);
  //   }
  // }, []);

  const loadComponent = async (cardId, name) => {
    const loader = componentLoaders[cardId];
    if (!loader) return;
    const Component = React.lazy(loader);

    setSelectedCard(cardId);
    setSelectedName(name);
    setLoadedComponent(() => Component);

    // Save first time only
    // if (!localStorage.getItem("selectedCardId")) {
    //   localStorage.setItem("selectedCardId", cardId);
    //   localStorage.setItem("selectedCardName", name);
    // }
  };

  const handleCardClick = (cardId, name) => {
    loadComponent(cardId, name);
  };

  if (LoadedComponent) {
    return (
      <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading {selectedCardName}...</div>}>

        <LoadedComponent />

      </Suspense>
    );
  }

  return (
    <Card title="Locomotive Software">
      {data.map((item) => (
        <Card.Grid
          key={item.id}
          style={{
            width: "50%",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick(item.id, item.name)}
        >
          {item.name}
        </Card.Grid>
      ))}
    </Card>
  );
};

export default App;
