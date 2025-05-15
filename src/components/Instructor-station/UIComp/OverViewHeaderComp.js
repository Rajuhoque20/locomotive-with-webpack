import React, { useState } from 'react'; import './OverViewHeaderComp.css'
import ButtonComp from './ButtonComp';
import { Popover } from 'antd'
import { CustomCheckbox } from '../../../pages/instructor-station/panels/LiveSimulator/SimulatorPage/Simulation/AddFault';
import { Icons } from '#framework';
import { DropdownById } from './DropDownMenu';
import DatePicker from './DatePicker';
const OverViewHeaderComp = ({ title, filters }) => {
  const { filterIcon, filtersort, filterdate } = Icons.ISIcons
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(prev => (prev === newOpen ? false : newOpen));
  };
  return (
    <div className='overview-header-div'>
      <h2 className='header-title'>{title ? title : 'Recent'}</h2>
      <div className='header-input-div'>

        {
          filters &&
          <div style={{display:'flex',flexDirection:'row',gap:'1vh'}}>
            <Popover
              content={
                <div>
                  <FilterComponent />
                </div>
              }
              rootClassName="customheaderPopover"
              trigger="click"
              open={open === 'filter'}
              onOpenChange={() => handleOpenChange('filter')}
            >
              <ButtonComp prefixIcon={filterIcon} title={'Filter'} bntStyle={{
                height: '5vh', width: '12vh',
                color: 'white', 'backdrop-filter': 'blur(10vh)',
                background: 'rgba(204, 206, 208, 0.46)',
                'background-blend-mode': 'luminosity'
              }} />
            </Popover>


            <Popover
              content={
                <div>
                  <SortComponent />
                </div>
              }
              rootClassName="customheaderPopover"
              trigger="click"
              open={open === 'sort'}
              onOpenChange={() => handleOpenChange('sort')}
            >
              <ButtonComp prefixIcon={filtersort} title={'Sort'} bntStyle={{
                height: '5vh', width: '12vh',
                color: 'white', 'backdrop-filter': 'blur(10vh)',
                background: 'rgba(204, 206, 208, 0.46)',
                'background-blend-mode': 'luminosity'
              }} />
            </Popover>


            <Popover
              content={
                <div>
                  <DatePicker />
                </div>
              }
              rootClassName="customheaderPopover"
              trigger="click"
              open={open === 'date'}
              onOpenChange={() => handleOpenChange('date')}
            >
              <ButtonComp prefixIcon={filterdate} title={'Date'} bntStyle={{
                height: '5vh', width: '12vh',
                color: 'white', 'backdrop-filter': 'blur(10vh)',
                background: 'rgba(204, 206, 208, 0.46)',
                'background-blend-mode': 'luminosity'
              }} />
            </Popover>
          </div>
        }

        <input className='input-div' placeholder='Search'></input>
      </div>
    </div>
  )
}


const FilterComponent = () => {
  return (
    <div className='header-filter-container'>
      <div className='hfc-header'>
        <div style={{ fontSize: '1.8vh', color: 'white', fontWeight: '500' }}>
          Filter Report
        </div>
        <div style={{ fontSize: '1.6vh', color: 'rgba(255, 255, 255, 0.39)', fontWeight: '500', borderBottom: '0.1vh solid rgba(255, 255, 255, 0.39)' }}>
          Reset Filter
        </div>
      </div>
      <div className='hfc-actions'>
        <HCFActions title={'Trainee'} placeholder={'Enter Trainee'} />
        <HCFActions title={'Batch'} placeholder={'Enter Batch'} />
        <HCFActions title={'Excercise'} placeholder={'Enter Trainee'} input={'dropdown'} />
        <HCFActions title={'Division'} placeholder={'Enter Division'} />
        <HCFActions title={'Railway'} placeholder={'Enter Railway'} />

      </div>
      <div className='hfc-actions-buttons'>
        <ButtonComp title={'Apply'} bntStyle={{ height: '5vh', width: '24vw' }} />
      </div>
    </div>
  )
}


const HCFActions = ({ title, placeholder, input }) => {
  const excercisesoptions = [
    { id: 1, label: 'CNB2BPU_P_24_13TK02022024' },
    { id: 2, label: 'CNB2BPU_P_24_13TK02022024' },
    { id: 3, label: 'CNB2BPU_P_24_13TK02022024' }
  ];
  const [selectedExercise, setSelectedExercise] = useState()
  return (
    <div className='hfc-action-options'>
      <div style={{ height: '100%', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CustomCheckbox />
      </div>
      <div style={{ height: '100%', width: '25%', color: 'white', fontSize: '2vh', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {title}
      </div>
      <div style={{ height: '100%', width: '65%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {
          input === 'dropdown' &&
          <DropdownById
            options={excercisesoptions}
            selected={selectedExercise}
            onSelect={setSelectedExercise}
            defaultcontent="Select"
            style={{ width: '35vh', fontSize: '2.5vh' }}
            dropdownStyle={{ width: '35vh' }}
          />
        }
        {
          !input &&
          <SearchField placeholder={placeholder} />
        }

      </div>
    </div>
  )
}


const SearchField = ({ placeholder }) => {
  const { clearcrossIcon } = Icons.ISIcons
  const [searchValue, setSearchValue] = useState('Prasanna, Arundhat');

  const handleClear = () => {
    setSearchValue('');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ width: '35vh', position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} className='input-div'>
      <input
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ height: '100%', width: searchValue ? '80%' : '100%', background: 'none', border: 'none', fontSize: '2vh', color: 'rgba(255, 255, 255, 0.39)', outline: 'none' }} />

      {searchValue && (
        <div onClick={handleClear} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', height: '100%', width: '20%' }}>
          <img style={{ height: '3vh', width: '3vh' }} src={clearcrossIcon} />
        </div>
      )}

    </div>
  );
};


const SortComponent = () => {
  return (
    <div className='header-filter-container'>
      <div className='hfc-header'>
        <div style={{ fontSize: '1.8vh', color: 'white', fontWeight: '500' }}>
          Filter sort
        </div>
        <div style={{ fontSize: '1.6vh', color: 'rgba(255, 255, 255, 0.39)', fontWeight: '500', borderBottom: '0.1vh solid rgba(255, 255, 255, 0.39)' }}>
          Reset Sorting
        </div>
      </div>
      <div className='hfc-actions'>
        <SortDivisions title={'Date'} />
        <SortDivisions title={'Session Code'} />
        <SortDivisions title={'Trainee Name'} />
      </div>
      <div className='hfc-actions-buttons'>
        <ButtonComp title={'Apply'} bntStyle={{ height: '5vh', width: '24vw' }} />
      </div>
    </div>
  )
}

const SortDivisions = ({ title }) => {
  const { selected_radio_icon, unselected_radio_icon } = Icons.ISIcons
  const [order, setorder] = useState({
    asc: false,
    desc: false
  })
  const handleClick = (type) => {
    setorder((prevOrder) => {
      if (type === 'asc') {
        return { ...prevOrder, asc: !prevOrder.asc, desc: false };
      }
      if (type === 'desc') {
        return { ...prevOrder, desc: !prevOrder.desc, asc: false };
      }
      return prevOrder;
    });
  };

  return (
    <div className='sortContainer'>
      <div style={{ fontSize: '2vh', color: 'rgba(255, 255, 255, 0.39)' }} className='sortunicactions'>
        {title}
      </div>
      <div className='sortunicactions'>
        <ButtonComp onClick={() => handleClick('asc')} prefixIcon={order.asc ? selected_radio_icon : unselected_radio_icon} bntStyle={{ width: '3vh', height: '3vh', background: 'none' }} />
        Ascending
      </div>
      <div className='sortunicactions'>
        <ButtonComp onClick={() => handleClick('desc')} prefixIcon={order.desc ? selected_radio_icon : unselected_radio_icon} bntStyle={{ width: '3vh', height: '3vh', background: 'none' }} />
        Descending
      </div>
    </div>
  )
}



export default OverViewHeaderComp;
