import React, { useState } from 'react';
import './style.css';
import SEPs from './SEPList';
import SEPModal from './SEPModal';

export default function App() {
  //state variables for Modal
  var [showModal, setShowModal] = useState(false);

  //State variable to indicate which SEP has been clicked
  var [selectedSEP, setselectedSEP] = useState(null);

  //On Click handler to open modal
  var openModal = () => {
    setShowModal(() => {
      showModal = true;
      return showModal;
    });
  };

  //OnClick handler to close modal
  var closeModal = (e) => {
    setShowModal(() => {
      showModal = false;
      return showModal;
    });
  };

  //OnClick handler to select the correct SEP
  const selectSEP = (e) => {
    openModal();
    SEPs.map((SEP) => {
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
        {SEPs.map((SEP) => (
          <button
            type="button"
            className="sep-buttons"
            onClick={(e) => selectSEP(e)}
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
