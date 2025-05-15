
import { create } from "zustand";
export const useTrackStore=create((set,get)=>({
    activeTab:'/track-home',
    activeId:'/track-home',
    tabs:[
        { id: '/track-home', title: 'Home', type: 'home', content: {}, fixed: true,path:'/track-home' },
    ],
    addTab: (title, type,basePath) => set((state) => {
        const existingTabs = state.tabs.filter((tab) => tab.type === type);
        const tabId = `${type}-${Date.now()}`; // Unique ID
        const newTitle = existingTabs.length > 0 ? `${title}${existingTabs.length + 1}` : title;
        const newPath = `${basePath}/${existingTabs.length + 1}`; 
        return {
          tabs: [...state.tabs, { id: tabId, title: newTitle, type, content: {} ,path: newPath ,fixed:false}],
          activeTab: newPath,
          activeId:tabId,
        };
      }), 
    removeTab: (id, callback) => set((state) => {
        const currentIndex = state.tabs.findIndex(tab => tab.id === id);
        let newTabs = state.tabs.filter(tab => tab.id !== id);
        console.log(id,'checking index',currentIndex,newTabs,state.tabs)
      
        let newActiveTab;
        let newActiveId;
    
        if (currentIndex > 0 && currentIndex <= newTabs.length) {
          newActiveTab = newTabs[currentIndex - 1].path;
          newActiveId=newTabs[currentIndex-1].activeId;
        } 
        console.log("in store",newActiveTab,state.activeTab)
        return {
            tabs: newTabs,
            activeTab: newActiveTab, // Ensure state change
            activeId:id,
          };
      }),
    setActiveTab: (path) => set({ activeTab: path }),
    setActiveId:(id)=>set({activeId:id}),
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
   
 