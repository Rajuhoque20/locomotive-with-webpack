import React, { useState } from 'react'
import classes from './dynamicContent.module.css';
import RelatedInfo from './relatedInfo/relatedInfo';
import Topics from './topics/topics';
export default function DynamicContent({inchingSpeed}) {
    const [topic, setTopic]=useState(1);
  return (
    <div className={classes.container}>
        <RelatedInfo topic={topic} inchingSpeed={inchingSpeed}/>
        <Topics setTopic={setTopic} topic={topic}/>
    </div>
  )
}
