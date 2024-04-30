// App.js
import React, { useEffect, useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import './index.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
  };



  return (
    <div className="app">
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
    </div>
  );
};

export default App;
