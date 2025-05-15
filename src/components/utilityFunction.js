export  function getAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  }

  export const deepEqual=(newData, currentData)=>{
    if(JSON.stringify(newData) === JSON.stringify(currentData))
    {
      return true;
    }
    return false;
  }