import React, { useState, useRef, useEffect } from 'react';
import './dropDownStyles.css';
import dropdown_icon from '../../../assets/Instructor-station/Icons/dropdown_icon.svg';

const Dropdown = ({ options,selected,style,defaultcontent,dropdownStyle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(selected?[selected]:[]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleOptionClick = (option,e) => {
        e.stopPropagation()
        e.preventDefault()
        setSelectedOptions(prev => {
            if (prev.includes(option)) {
                return prev.filter(item => item !== option); // Unselect option
            } else {
                return [ option]; // Select option
            }
        });
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', closeDropdown);
        } else {
            document.removeEventListener('mousedown', closeDropdown);
        }
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [isOpen]);

    return (
        <div className="dropdown" ref={dropdownRef} style={style}>
            <div className="dropdown-button" onClick={toggleDropdown}>
                <div className="buttontitle">
                    {selectedOptions.length > 0 ? selectedOptions.join(', ') : defaultcontent?defaultcontent:'Select'}
                </div>
                <img className="dropimg" src={dropdown_icon} alt="Dropdown icon" />
            </div>
            {isOpen && (
                <div className="dropdown-menu" style={dropdownStyle}>
                    {options?.map((option, index) => (
                        <div
                            key={index}
                            className={`dropdown-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
                            onClick={(e) => handleOptionClick(option,e)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default Dropdown;

export const DropdownById = ({ options, selected, style, defaultcontent, dropdownStyle, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(selected);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        setSelectedId(selected); 
    }, [selected]);

    const handleOptionClick = (option, e) => {
        e.stopPropagation();
        e.preventDefault();

        setSelectedId(option.id); // Store only ID

        if (onSelect) {
            onSelect(option.id); // Notify parent with ID
        }

        setIsOpen(false); // Close dropdown on selection
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', closeDropdown);
        } else {
            document.removeEventListener('mousedown', closeDropdown);
        }
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [isOpen]);

    const selectedOption = options.find(option => option.id === selectedId);

    return (
        <div className="dropdown" ref={dropdownRef} style={style}>
            <div className="dropdown-button" onClick={toggleDropdown}>
                <div className="buttontitle">
                    {selectedOption ? selectedOption.label : defaultcontent || 'Select'}
                </div>
                <img className="dropimg" src={dropdown_icon} alt="Dropdown icon" />
            </div>
            {isOpen && (
                <div className="dropdown-menu" style={dropdownStyle}>
                    {options?.map((option) => (
                        <div
                            key={option.id}
                            className={`dropdown-item ${selectedId === option.id ? 'selected' : ''}`}
                            onClick={(e) => handleOptionClick(option, e)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


