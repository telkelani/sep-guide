import React, { useState } from 'react';
import './style.css';
import SEPs from './SEPList';
import SEPModal from './SEPModal';

import 'animate.css';

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

  const MainPage = () => {
    return (
      <div>
        <a href="/"><button className="sep-buttons" id="iep-calculator-link">Hello</button></a>
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

        <h1 id="hierarchy-title">SEP Hierarchy</h1>
        <div className="hierarchy">
          <div
            className="animate__animated animate__swing hierarchy-box"
            id="box1"
          >
            1. IEP
          </div>
          <div
            className="animate__animated animate__swing hierarchy-box"
            id="box2"
          >
            2. (MA)OEP/OEP-New
          </div>
          <div
            className="animate__animated animate__swing hierarchy-box"
            id="box3"
          >
            3. SEP
          </div>
          <div
            className="animate__animated animate__swing hierarchy-box"
            id="box4"
          >
            4. AEP
          </div>
          <div
            className="animate__animated animate__swing hierarchy-box"
            id="box5"
          >
            5. OEP-I
          </div>
        </div>
      </div>
    );
  };
  return <MainPage />;
}
