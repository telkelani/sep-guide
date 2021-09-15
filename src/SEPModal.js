import React from 'react';

import './sep.css';

function SEPModal({ SEP, showModal, closeModal }) {
  window.onclick = e => {
    console.log(e.target.closest('#modal-content'));
    if (e.target.className == 'sep-buttons') {
      return;
    }
    if (e.target.closest('#modal-content') == null) {
      closeModal(e);
    }
  };
  if (SEP === null) {
    return null;
  }

  if (!showModal) {
    return null;
  }
  const PlanEnroll = () => {
    var elem = null;
    var style = { display: 'flex', justifyContent: 'center' };
    if (SEP.enrollMA && SEP.enrollMAPD && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } else if (SEP.enrollMA && SEP.enrollMAPD) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    } else if (SEP.enrollMA && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ❌</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } else if (SEP.enrollMAPD && SEP.enrollPDP) {
      elem = (
        <div style={style}>
          <h1>MA ❌</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ✔️</h1>
        </div>
      );
    } else if (SEP.enrollMA) {
      elem = (
        <div style={style}>
          <h1>MA ✔️</h1>
          <h1>MAPD ❌</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    } else if (SEP.enrollMAPD) {
      elem = (
        <div style={style}>
          <h1>MA ❌</h1>
          <h1>MAPD ✔️</h1>
          <h1>PDP ❌</h1>
        </div>
      );
    } else if (SEP.enrollPDP) {
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
