import React, { useState } from 'react';
import './style.css';
import $ from 'jquery';
import SEPs from './SEPList';
import SEPModal from './SEPModal';

export default function App() {
  var [showModal, setShowModal] = useState(false);
  var [selectedSEP, setselectedSEP] = useState(null);

  window.onclick = e => {
    console.log('CLICKED');
    if (e.target.className == 'sep-buttons') {
      $('.sep-buttons').click(e => {
        console.log(e.target.textContent);
        selectSEP(e);
      });
    }
    if ($(e.target).closest('.modal-content').length == 0) {
      closeModal();
    }
  };

  var openModal = () => {
    setShowModal(() => {
      showModal = true;
      return showModal;
    });
  };

  var closeModal = () => {
    setShowModal(() => {
      showModal = false;
      return showModal;
    });
  };
  const selectSEP = e => {
    openModal();
    SEPs.map(SEP => {
      if (SEP.code === e.target.textContent) {
        setselectedSEP(SEP);
        return;
      }
    });
  };
  return (
    <div>
      <div id="title-section">
        <h1 className="page-title">SEP GUIDE</h1>
      </div>
      <div className="sep-group">
        {SEPs.map(SEP => (
          <button
            type="button"
            className="sep-buttons"
            onClick={e => selectSEP(e)}
          >
            {SEP.code}
          </button>
        ))}

        <SEPModal
          SEP={selectedSEP}
          showModal={showModal}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}
