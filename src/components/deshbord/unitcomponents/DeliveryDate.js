import React from 'react'

function DeliveryDate() {
    var someDate = new Date();
    var numberOfDaysToAdd =10;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  return (
    <>
        <span style={{fontWeight:700,color:"#73566f",fontSize:"20px"}}>{new Date(result).toLocaleDateString(undefined,options)} </span>
    </>
  )
}

export default DeliveryDate