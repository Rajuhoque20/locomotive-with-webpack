
// import React, { useState } from "react";
// import "./landingPageStyles.css";
// import SimulatorLayout from "./LiveSimulator/SimulatorLayout/SimulatorLayout";
// import ExerciseLayout from "./ExercisePanel/Layout/ExerciseLayout";
// import TrackLayout from "./TrackBuilder/TrackLayout/TrackLayout";
// import PTILayout from "./PT_Instructor/PTI_layout/PTILayout";
// import PTTLayout from "./PT_Trainee/PTT_layout";

// const componentsMap = {
//     simulator: SimulatorLayout,
//     exercise: ExerciseLayout,
//     track: TrackLayout,
//     ptinstructor:PTILayout,
//     pttrainee:PTTLayout
// };

// const LandingPage = () => {
//     const [software, setSoftware] = useState("");

//     const items = [
//         { id: 1, key: "simulator", label: "Live Simulator" },
//       { id: 2, key: "exercise", label: "Exercise Panel" },
//        { id: 3, key: "track", label: "Track Builder" },
//       { id: 4, key:'ptinstructor', label:'PT Instructor'},
//          { id: 5, key:'pttrainee', label:'PT Trainee'} 
//     ];

//     const SelectedComponent = componentsMap[software] || null;

//     return (
//         <div className="instuctor-station-layout-container">
//             {SelectedComponent ? (
//                 <SelectedComponent />
//             ) : (
//                 <div className="landingpage">
//                     <div className="landingpage_content">
//                         {items.map(({ id, key, label }) => (
//                             <div key={id} className="buttons" onClick={() => setSoftware(key)}>
//                                 <button className="action-button">{label}</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LandingPage;





import React, { useState, useEffect, Suspense } from "react";
import "./landingPageStyles.css";

const componentCache = {};

const componentLoaders = {
  simulator: () =>
    import(
      /* webpackPrefetch: true */ "./LiveSimulator/SimulatorLayout/SimulatorLayout"
    ),
  exercise: () =>
    import(
      /* webpackPrefetch: true */ "./ExercisePanel/Layout/ExerciseLayout"
    ),
  track: () =>
    import(
      /* webpackPrefetch: true */ "./TrackBuilder/TrackLayout/TrackLayout"
    ),
  ptinstructor: () =>
    import(
      /* webpackPrefetch: true */ "./PT_Instructor/PTI_layout/PTILayout"
    ),
  pttrainee: () =>
    import(/* webpackPrefetch: true */ "./PT_Trainee/PTT_layout"),
};

const LandingPage = () => {
  const [software, setSoftware] = useState("");
  const [SelectedComponent, setSelectedComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // NEW

  const items = [
    { id: 1, key: "simulator", label: "Live Simulator" },
    { id: 2, key: "exercise", label: "Exercise Panel" },
    { id: 3, key: "track", label: "Track Builder" },
    { id: 4, key: "ptinstructor", label: "PT Instructor" },
    { id: 5, key: "pttrainee", label: "PT Trainee" },
  ];

  const loadComponent = async (key) => {
    if (!componentCache[key]) {
      const module = await componentLoaders[key]();
      componentCache[key] = module.default;
    }
    setSelectedComponent(() => componentCache[key]);
  };

  const handleClick = async (key) => {
    // const alreadySelected = localStorage.getItem("selectedSoftware");
    setSoftware(key);
    // if (!alreadySelected) {
    //   localStorage.setItem("selectedSoftware", key);
    // }
    setIsLoading(true);
    await loadComponent(key);
    setIsLoading(false);
  };

  const handlePreload = (key) => {
    if (!componentCache[key]) {
      componentLoaders[key]().then((module) => {
        componentCache[key] = module.default;
      });
    }
  };

  useEffect(() => {
    // const savedKey = localStorage.getItem("selectedSoftware");
    // const init = async () => {
    //   if (savedKey) {
    //     setSoftware(savedKey);
    //     await loadComponent(savedKey);
    //   }
    //   setIsLoading(false);
    // };
    // init();

      setIsLoading(false);

  }, []);

  // ✅ Avoid rendering anything until loading is done
  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="instuctor-station-layout-container">
      {SelectedComponent ? (
        <Suspense fallback={<div >Loading...</div>}>
          <SelectedComponent />
        </Suspense>
      ) : (
        <div className="landingpage">
          <div className="landingpage_content">
            {items.map(({ id, key, label }) => (
              <div
                key={id}
                className="buttons"
                onMouseEnter={() => handlePreload(key)}
                onClick={() => handleClick(key)}
              >
                <button className="action-button">{label}</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;




// uses sessionStorage


// import React, { useState, useEffect, Suspense } from "react";
// import "./landingPageStyles.css";

// const componentCache = {};

// const componentLoaders = {
//   simulator: () =>
//     import(
//       /* webpackPrefetch: true */ "./LiveSimulator/SimulatorLayout/SimulatorLayout"
//     ),
//   exercise: () =>
//     import(
//       /* webpackPrefetch: true */ "./ExercisePanel/Layout/ExerciseLayout"
//     ),
//   track: () =>
//     import(
//       /* webpackPrefetch: true */ "./TrackBuilder/TrackLayout/TrackLayout"
//     ),
//   ptinstructor: () =>
//     import(
//       /* webpackPrefetch: true */ "./PT_Instructor/PTI_layout/PTILayout"
//     ),
//   pttrainee: () =>
//     import(/* webpackPrefetch: true */ "./PT_Trainee/PTT_layout"),
// };

// const LandingPage = () => {
//   const [software, setSoftware] = useState("");
//   const [SelectedComponent, setSelectedComponent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const items = [
//     { id: 1, key: "simulator", label: "Live Simulator" },
//     { id: 2, key: "exercise", label: "Exercise Panel" },
//     { id: 3, key: "track", label: "Track Builder" },
//     { id: 4, key: "ptinstructor", label: "PT Instructor" },
//     { id: 5, key: "pttrainee", label: "PT Trainee" },
//   ];

//   const loadComponent = async (key) => {
//     if (!componentCache[key]) {
//       const module = await componentLoaders[key]();
//       componentCache[key] = module.default;
//     }
//     setSelectedComponent(() => componentCache[key]);
//   };

//   const handleClick = async (key) => {
//     const alreadySelected = sessionStorage.getItem("selectedSoftware");
//     setSoftware(key);
//     if (!alreadySelected) {
//       sessionStorage.setItem("selectedSoftware", key);
//     }
//     setIsLoading(true);
//     await loadComponent(key);
//     setIsLoading(false);
//   };

//   const handlePreload = (key) => {
//     if (!componentCache[key]) {
//       componentLoaders[key]().then((module) => {
//         componentCache[key] = module.default;
//       });
//     }
//   };

//   useEffect(() => {
//     const savedKey = sessionStorage.getItem("selectedSoftware");
//     const init = async () => {
//       if (savedKey) {
//         setSoftware(savedKey);
//         await loadComponent(savedKey);
//       }
//       setIsLoading(false);
//     };
//     init();
//   }, []);

//   if (isLoading) {
//     return <div className="loader"></div>;
//   }

//   return (
//     <div className="instuctor-station-layout-container">
//       {SelectedComponent ? (
//         <Suspense fallback={<div>Loading...</div>}>
//           <SelectedComponent />
//         </Suspense>
//       ) : (
//         <div className="landingpage">
//           <div className="landingpage_content">
//             {items.map(({ id, key, label }) => (
//               <div
//                 key={id}
//                 className="buttons"
//                 onMouseEnter={() => handlePreload(key)}
//                 onClick={() => handleClick(key)}
//               >
//                 <button className="action-button">{label}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;




