import React from 'react'

function Alert(props) {
    const captitalize = (word)=>{
       const lowerwrd = word.toLowerCase();
        return lowerwrd.charAt(0).toUpperCase() + lowerwrd.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>  
    </div>}
    </div>
  )
}

export default Alert
