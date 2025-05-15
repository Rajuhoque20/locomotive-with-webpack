import React, { lazy, Suspense, useContext } from 'react'
import { PnumaticContext } from '../Context';
const PNUCCB=lazy(()=> import ('./PNUCCB'));
const PNUE70=lazy(()=> import ('./PNUE70'))

export default function PNUMain() {
  const {pneumatic_panel_type}=useContext(PnumaticContext);

  // const pneumatic_panel_type="CCB";
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
          {pneumatic_panel_type==="E70"&&<PNUE70 />}
          {pneumatic_panel_type==="CCB"&& <PNUCCB/>}
    </Suspense>
    </>
  )
}

