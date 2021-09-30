import React from 'react';

function ShowResult({result}) {
  const resultStyle = {
    color: 'red',
  };

  if (result == null) {
    return null;
  }

  if (result == 'IEP 🎉' || result == 'ICEP 🎉') {
    resultStyle.color = '#00fc43'; //green
  } else if (result == 'Check for SEP 😳') {
    resultStyle.color = '#eba836'; //yellow
  } else {
    resultStyle.color = '#f23400'; //red
  }
  return (
    <div className="result-container">
      <h1 style={resultStyle}>{result}</h1>
    </div>
  );
}

export default ShowResult;
