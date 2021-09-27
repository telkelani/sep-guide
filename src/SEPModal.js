import React from 'react';

import './sep.css';

function SEPModal({ SEP, showModal, closeModal }) {

  //Close Modal when clicking outside the box

  //Make an onclick event on the window
  window.onclick = e => {
    console.log(e.target.closest('#modal-content')); 
    if (e.target.className == 'sep-buttons') {
      return;
    }
    if (e.target.closest('#modal-content') == null) { //Closest indicates the how closely the element that the mouse had clicked relates to #modal-content. If it is not part of the modal it will be null
      closeModal(e);
    }
  };
  
  //When page first loads SEP will be null
  if (SEP === null) {
    return null;
  }

  //If showModal is false do not return anything
  if (!showModal) {
    return null;
  }

  //Check and crosses to see which SEP code can be used to enroll in which type of plan
  const PlanEnroll = () => {
    var elem = null;
    var style = { display: 'flex', justifyContent: 'center' };

    //If can enroll in all 3
    if (SEP.enrollMA && SEP.enrollMAPD && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } 
    //If can enroll in MA and MAPD but not PDP
    else if (SEP.enrollMA && SEP.enrollMAPD) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    } 
    //If can enroll in MA and PDP but not MAPD
    else if (SEP.enrollMA && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ❌</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } 
    //If can enroll in MAPD and PDP but not MA
    else if (SEP.enrollMAPD && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ❌</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } 
    //Just MA
    else if (SEP.enrollMA) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ❌</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    }
    //Just MAPD
    else if (SEP.enrollMAPD) {
      elem = (
        <div style={style}>
          <h1>MA ❌</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    } 
    //Just PDP
    else if (SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ❌</h1>
          <h1>MAPD ❌</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    }
    return elem;
  };

  return (
    <div id="modal">
      <div id="modal-content">
        <div className="modal-header">
          <h1>{SEP.code}</h1>
          <h2>{SEP.name}</h2>
          <button className="modal-close-button" onClick={closeModal}>
            Close
          </button>
        </div>

        <div className="modal-body">
          <p className="description-title">Description</p>
          {SEP.description.map(line => (
            <p>{line}</p>
          ))}
        </div>

        <div className="modal-footer">
          <p>Enrollment Period</p>
          {SEP.timePeriod.map(line => {
            return <p>{line}</p>;
          })}

          <h3>Can enroll in</h3>
          <PlanEnroll />
        </div>
      </div>
    </div>
  );
}

export default SEPModal;
