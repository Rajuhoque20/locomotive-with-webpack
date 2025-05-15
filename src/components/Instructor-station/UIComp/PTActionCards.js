import './PTActionCards.css'
export const PtCard = ({ title = "Part Trainer 1", status = "Empty", trainee = null ,onClick}) => {
    let style = {}
    if(status == 'Allocated'){
        style['color'] = 'white'
    }else if(status == 'Running'){
        style['color'] = 'rgba(16, 255, 151, 0.62)'
    }
    return (
      <div className="trainer-card">
        <h2 className="trainer-card-title">{title}</h2>
        
        <div className="trainer-card-status-container">
          <span className="trainer-card-label">Status</span>
          <span style={style} className="trainer-card-value">{status}</span>
        </div>
        
        <div className="trainer-card-trainee">
          <div style={{color:'white'}} className="trainer-card-label">{`Trainee : `}</div>
          <div className="trainer-card-trainee-value">{trainee ? trainee : "No Trainee Assigned"}</div>
        </div>
        
        <div className="trainer-card-button-container">
          <button onClick={onClick} className="trainer-card-button">Open</button>
        </div>
      </div>
    );
  };