import React, { useEffect, useRef, useState } from 'react';
import './RangePicker.css'; // For styles

const RangePicker = ({
  minRange = 0,
  maxRange = 100,
  stepLength = 1,
  defaultValue = minRange,
  value, // Controlled value, if provided by the parent
  onChange=(val)=>{console.log(val)}, // Callback to send the updated value back to the parent
}) => {
  const trackRef = useRef(null);  // Reference to the track
  const thumbRef = useRef(null);  // Reference to the thumb
  const fillRef = useRef(null);   // Reference to the fill
  const isDragging = useRef(false); // Reference to track dragging state
  // const currentValueRef = useRef(value ?? defaultValue); // Uncontrolled state management
  const [currentValue,setCureentValue]=useState(0);

  useEffect(() => {
    // Initial thumb and fill position setup, use `value` if controlled, or `defaultValue`
    setCureentValue(value)
  }, [value]);

  useEffect(()=>{
    updateThumbPosition(currentValue)
  
  },[currentValue])

  const handleThumbDragStart = (event) => {
    isDragging.current = true;
    const trackRect = trackRef.current.getBoundingClientRect();
    
    // Start tracking mouse movements
    document.addEventListener('mousemove', (e) => handleThumbDrag(e, trackRect));
    document.addEventListener('mouseup', handleThumbDragEnd);
  };

  const handleThumbDragEnd = () => {
    isDragging.current = false;
    // Remove mousemove and mouseup event listeners after dragging ends
    document.removeEventListener('mousemove', handleThumbDrag);
    document.removeEventListener('mouseup', handleThumbDragEnd);
  };

  const handleThumbDrag = (event, trackRect) => {
    if (!isDragging.current) return;

    let newLeft = event.clientX - trackRect.left;

    // Ensure the thumb stays within bounds
    if (newLeft < 0) newLeft = 0;
    if (newLeft > trackRect.width) newLeft = trackRect.width;

    // Calculate the value in the range
    const rawValue = ((newLeft / trackRect.width) * (maxRange - minRange)) + minRange;

    // Snap the value to the nearest step
    const newValue = Math.round(rawValue / stepLength) * stepLength;

    // // If the component is controlled, call the onChange handler directly
    // if (value !== undefined) {
      onChange && onChange(newValue);
      setCureentValue(newValue)
    // } else {
    //   // Update the current value reference for uncontrolled components
    //   currentValueRef.current = newValue;
    //   // Trigger the onChange callback for uncontrolled components
    //   onChange && onChange(currentValueRef.current);
    //   // Update the thumb position and fill width
    //   updateThumbPosition(currentValueRef.current);
    // }
  };

  const updateThumbPosition = (val) => {
    const percentage = ((val - minRange) / (maxRange - minRange)) * 85;

    // Update thumb and fill DOM styles
    thumbRef.current.style.left = `${percentage}%`;
    fillRef.current.style.width = `${percentage+15}%`;
  };

  return (
    <div className="custom-range-container" ref={trackRef}>
      <div className="custom-range-fill" ref={fillRef}></div>
      <div
        className="custom-thumb"
        ref={thumbRef}
        onMouseDown={handleThumbDragStart}
      ></div>
    </div>
  );
};

export default RangePicker;
