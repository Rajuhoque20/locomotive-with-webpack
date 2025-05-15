import {BrowserRouter as Router} from 'react-router-dom';

import PTTRoutes from './PTT_route.js';
import { usePTTStore } from './PTT_store.js';

export default function PTTLayout() {
    const {activeTab,setActiveTab } = usePTTStore(state => state);
  return (
    <>
      <Router>
        <section className='section-full-screen'>
        <div className='full-screencontent-div'>
          <PTTRoutes/>
        </div>
        </section>
        </Router>
    </>
  )
}
