import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DatePicker.css';
import ButtonComp from './ButtonComp';


const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025
  const [selectedStartDate, setSelectedStartDate] = useState(new Date(2025, 5, 13)); // June 13, 2025
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectionMode, setSelectionMode] = useState('start'); // 'start' or 'end'

  // Generate days for the current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  
  // Format dates
  const formatDate = (date) => {
    if (!date) return '';
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`;
  };
  
  // Navigate to previous or next month
  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };
  
  // Handle date selection
  const handleDateSelect = (date) => {
    if (!date) return;
    
    if (selectionMode === 'start' || !selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      setSelectionMode('end');
    } else {
      // Ensure end date is after start date
      if (date < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(date);
      } else {
        setSelectedEndDate(date);
      }
      setSelectionMode('start');
    }
  };
  
  // Reset date selection
  const resetDate = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setSelectionMode('start');
  };
  
  // Apply selection
  const applySelection = () => {
    console.log('Date range selected:', { 
      start: selectedStartDate, 
      end: selectedEndDate || 'to date' 
    });
    // Here you would typically pass these values to a parent component or perform an action
  };
  
  // Check if a date is selected (either start or end)
  const isDateSelected = (date) => {
    if (!date) return false;
    return (
      selectedStartDate && 
      date.getDate() === selectedStartDate.getDate() && 
      date.getMonth() === selectedStartDate.getMonth() &&
      date.getFullYear() === selectedStartDate.getFullYear()
    ) || (
      selectedEndDate && 
      date.getDate() === selectedEndDate.getDate() && 
      date.getMonth() === selectedEndDate.getMonth() &&
      date.getFullYear() === selectedEndDate.getFullYear()
    );
  };
  
  // Check if a date is in the range between start and end
  const isInRange = (date) => {
    if (!date || !selectedStartDate || !selectedEndDate) return false;
    return date > selectedStartDate && date < selectedEndDate;
  };

  return (
    <div className="date-picker-container">
      {/* Header */}
      <div className="date-picker-header">
        <div className="date-label">Date</div>
        <button 
          onClick={resetDate}
          className="reset-button"
        >
          Reset Date
        </button>
      </div>
      
      {/* Month Navigation */}
      <div className="month-navigation">
        <button 
          onClick={() => navigateMonth(-1)} 
          className="nav-button"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="current-month">
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </div>
        <button 
          onClick={() => navigateMonth(1)} 
          className="nav-button"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Calendar Grid */}
      <div className="calendar-container">
        {/* Day headers */}
        <div className="weekday-header">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="calendar-grid">
          {days.map((date, index) => (
            <div key={index} className="day-cell">
              {date && (
                <button
                  onClick={() => handleDateSelect(date)}
                  className={`day-button ${
                    isDateSelected(date) 
                      ? 'selected' 
                      : isInRange(date)
                        ? 'in-range'
                        : ''
                  }`}
                >
                  {date.getDate()}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Selection Info */}
      <div className="date-selection-footer">
        <div className="date-display">
          {selectedStartDate ? formatDate(selectedStartDate) : 'Select start date'}
        </div>
        <div className="date-display">
          {selectedEndDate ? formatDate(selectedEndDate) : 'To date'}
        </div>
      </div>
      
      {/* Apply Button */}
      {/* <button
        onClick={applySelection}
        className="apply-button"
      >
        Apply
      </button> */}
      <ButtonComp onClick={applySelection} title={'Apply'} bntStyle={{height:'4.5vh',width:'24vw'}}/>
    </div>
  );
};

export default DatePicker;