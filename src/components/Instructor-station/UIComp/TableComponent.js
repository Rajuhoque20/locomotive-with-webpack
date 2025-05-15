import React from 'react';
import PropTypes from 'prop-types';
import './tableStyles.css';
import TextViewComp from './TextViewComp';
import Dropdown from './DropDownMenu';

const DynamicTable = ({ columns, data }) => {
  if (!columns || columns.length === 0) {
    return <div>No columns available</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="table-container">
      <table className="dynamic-table">
        <thead className='tablehead'>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.title}</th> 
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => 
        
          {
            // {console.log('row',row)}
            return           ( 
              
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  if(['description','name'].includes(col.key)){
                   return (
                    <td key={colIndex}>
                     {
                      row[col.key]? row[col.key]:'N/A'
                     }
                    </td>
                   )
                  }else if(['gradientangle','curveangle'].includes(col.key)){
                   return (
                    <td key={colIndex}>
                    {
                      <Dropdown options={['Top','Down']} selected={row[col.key]} /> 
                    }
                  </td>
                   )
                  }else{
                    return (
                    
                      <td key={colIndex}>
                        {
                          
                          row.hasOwnProperty(col.key) ? (
                            <TextViewComp text={row[col.key]} />
                          ) : (
                            <TextViewComp text="N/A" /> /* Fallback if key not found */
                          )
                        }
                      </td>
                    )
                  }

                }
                )}
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

DynamicTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DynamicTable;
