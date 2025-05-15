
import { create } from "zustand";
import websocket from "../../../../services/Websocket";

export const usePTIStore=create((set,get)=>({
    activeTab:'/pti-home',
    activeId:'/pti-home',
    cardData:[],
    tabs:[
        { id: '/pti-home', title: 'Home', type: 'home', content: {}, fixed: true,path:'/pti-home' }
    ],
    addTab: (title, type,basePath,content) => set((state) => {
        const existingTabs = state.tabs.filter((tab) => tab.type === type);
        const tabId = `${type}-${Date.now()}`; // Unique ID
        const newTitle = existingTabs.length > 0 ? `${title}${existingTabs.length + 1}` : title;
        const newPath = `${basePath}/${existingTabs.length + 1}`; 
        return {
          tabs: [...state.tabs, { id: tabId, title: newTitle, type, content:content ,path: newPath ,fixed:false}],
          activeTab: newPath,
          activeId:tabId,
        };
      }), 
      updateTab: (id,type,content) => set((state) => {
       let currenttab = state?.tabs?.find(x => (x?.content?.sessionId === id));
        currenttab['content'][type] = content;
        let tempTabs=state?.tabs?.map((item, index)=>{
          if(item.content?.sessionId===id)
          {
            return currenttab;
          }
          return item;
        });
        return {
          tabs: tempTabs
        }

      }),
    removeTab: (id) =>{
        // const allTopics=["sessionManagement_overview_by_id","sessionManagement_management_by_id","logs"];
        //  allTopics?.forEach(item=>{
        //   websocket.unsubscribeTopic(item);
        //    })
       
       set((state) => {
        const currentIndex = state.tabs.findIndex(tab => tab.id === id);
        let newTabs = state.tabs.filter(tab => tab.id !== id);
      
        let newActiveTab;
        let newActiveId;  
    
        if (currentIndex > 0 && currentIndex <= newTabs.length) {
          newActiveTab = newTabs[currentIndex - 1].path;
          newActiveId=newTabs[currentIndex-1].id;
        } 
        get().setActiveTab(newActiveTab);
        get().setActiveId(newActiveId);
      
        return {tabs:newTabs}; // Final update
      })

    },
    setActiveTab: (path) => set(
      
      (state)=>{

        return  { activeTab: path }
      }
     ),
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
  setCardData:(val)=>set(state=>({cardData:val}))
  
    }))
   
 