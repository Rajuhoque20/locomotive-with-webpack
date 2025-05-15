
import { create } from "zustand";

// export const useExerciseStore=create((set,get)=>({
//     activeTab:'/home',
//     activeId:'/home',
//     tabs:[
//         { id: '/home', title: 'Home', type: 'home', content: {}, fixed: true,path:'/home' },
//     ],
//     addTab: (title, type,basePath) => set((state) => {
//         const existingTabs = state.tabs.filter((tab) => tab.type === type);
//         const tabId = `${type}-${Date.now()}`; // Unique ID
//         const newTitle = existingTabs.length > 0 ? `${title}${existingTabs.length + 1}` : title;
//         const newPath = `${basePath}/${existingTabs.length + 1}`; 
//         return {
//           tabs: [...state.tabs, { id: tabId, title: newTitle, type, content: {} ,path: newPath ,fixed:false}],
//           activeTab: newPath,
//           activeId:tabId,
//         };
//       }), 
//     removeTab: (id, callback) => set((state) => {
//         const currentIndex = state.tabs.findIndex(tab => tab.id === id);
//         let newTabs = state.tabs.filter(tab => tab.id !== id);
//         console.log(id,'checking index',currentIndex,newTabs,state.tabs)

//         let newActiveTab;
//         let newActiveId;

//         if (currentIndex > 0 && currentIndex <= newTabs.length) {
//           newActiveTab = newTabs[currentIndex - 1].path;
//           newActiveId=newTabs[currentIndex-1].activeId;
//         } 
//         console.log("in store",newActiveTab,state.activeTab)
//         return {
//             tabs: newTabs,
//             activeTab: newActiveTab, // Ensure state change
//             activeId:id,
//           };
//       }),
//     setActiveTab: (path) => set({ activeTab: path }),
//     setActiveId:(id)=>set({activeId:id}),
//     setTabData: (id, data) => set((state) => ({
//     tabs: state.tabs.map((tab) =>
//       tab.id === id ? { ...tab, content: { ...tab.content, ...data } } : tab
//     ),
//   })),
//     getNewPath: (type, basePath) => {
//     const existingTabs = get().tabs.filter((tab) => tab.type === type);
//     return `${basePath}/${existingTabs.length + 1}`;
//   },

//     }))



export const useExerciseStore = create((set, get) => ({
  activeTab: '/home',
  activeId: '/home',
  headLoco:null,
  trainConfigData:{
    headLoco:null,
    trainType:null,
    composition:null,
    setting:null,
  },
  tabs: [
    { id: '/home', title: 'Home', type: 'home', content: {}, fixed: true, path: '/home' },
  ],
  // setTrainConfigData:(payload)=>
  setHeadLooco:(val)=>set(state=>({headLoco:val})),
  addTab: (title, type, basePath) => set((state) => {
    const existingTabs = state.tabs.filter((tab) => tab.type === type);
    const tabId = `${type}-${Date.now()}`; // Unique ID
    const newTitle = existingTabs.length > 0 ? `${title}${existingTabs.length + 1}` : title;
    const newPath = `${basePath}/${existingTabs.length + 1}`;
    return {
      tabs: [...state.tabs, { id: tabId, title: newTitle, type, content: {}, path: newPath, fixed: false }],
      activeTab: newPath,
      activeId: tabId,
    };
  }),
  updateTab:(id, payload) => set((state) => {
    console.log("updateTabupdateTabupdateTab",id, payload)
    const updatedTabs=state.tabs?.map((item)=>{
      if(item.id===id)
      {
        return {...item, ...payload}
      }
      return item
    });

    return {
      tabs: updatedTabs,
      activeTab: state.activeTab,
      activeId: state.activeId,
    };

  }),
  removeTab: (id) => {
    set((state) => {
      console.log('tabid', id)
      const currentIndex = state.tabs.findIndex(tab => tab.id === id);
      let newTabs = state.tabs.filter(tab => tab.id !== id);
      console.log(id, 'checking index', currentIndex, newTabs, state.tabs)

      let newActiveTab;
      let newActiveId;

      if (currentIndex > 0 && currentIndex <= newTabs.length) {
        newActiveTab = newTabs[currentIndex - 1].path;
        newActiveId = newTabs[currentIndex - 1].id;
      }
      console.log("in store", newActiveTab, state.activeTab, "id", newActiveId, state.activeId)
      get().setActiveTab(newActiveTab);
      get().setActiveId(newActiveId);

      return { tabs: newTabs }; // Final update
    })

  },
  setActiveTab: (path) => set(

    (state) => {

      console.log('changing new tab in store', state)
      return { activeTab: path }
    }
  ),
  setActiveId: (id) => set({ activeId: id }),
  setTabData: (id, data) => set((state) => ({
    tabs: state.tabs.map((tab) =>
      tab.id === id ? { ...tab, content: { ...tab.content, ...data } } : tab
    ),
  })),
  getNewPath: (type, basePath) => {
    const existingTabs = get().tabs.filter((tab) => tab.type === type);
    return `${basePath}/${existingTabs.length + 1}`;
  },

}))
