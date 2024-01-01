import React from 'react';
import '../css/DetailPage.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
import { vehicleDocProcedureData, tripArrivel, primaryScan,Bagging,connection,tripDispatch,otherOperational } from './data';
import Details from './Details';

function DetailPage() {
  const location = useLocation();
  const path  = location.pathname;
  const extractedDigit = extractDigitFromPath(path);
  let ui;

  function extractDigitFromPath(path) {
    const match = path.match(/\/(\d+)$/);
   
    if (match) {
      return match[1];
    } else {
      return 0;
    }
  } 
    if (extractedDigit === '1') {
      ui = <Details array={vehicleDocProcedureData} ind={extractedDigit-1} />
    } else if (extractedDigit === '2') {
     ui = <Details array={tripArrivel} ind={extractedDigit-1} />
    } else if (extractedDigit === '3') {
      ui = <Details array={primaryScan} ind={extractedDigit-1} />
    } else if (extractedDigit === '4') {
      ui = <Details array={Bagging} ind={extractedDigit-1} />
    }else if (extractedDigit === '5') {
      ui = <Details array={connection} ind={extractedDigit-1} />
    }else if (extractedDigit === '6') {
      ui = <Details array={tripDispatch} ind={extractedDigit-1} />
    }else if (extractedDigit === '7') {
      ui = <Details array={otherOperational} ind={extractedDigit-1} />
    }

  return (
    <div>
       <Header />
       <main className="detailpage-container">
      <div>{ui}</div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailPage;
