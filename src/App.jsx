import React, { useState } from "react";
import data from "../data.js";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);

  const nextItem = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleSidebarClick = (index) => {
    setCurrentIndex(index);
    setResetFlag(true);
  };
  const resetStates = () => {
    setResetFlag(false);
  };

  const currentItem = data[currentIndex];
  const dataLength = data.length;

  return (
    <div className="container">
      <Sidebar
        data={data}
        currentIndex={currentIndex}
        onClick={handleSidebarClick}
      />

      <Card
        dataLength={dataLength}
        currentItem={currentItem}
        nextItem={nextItem}
        prevItem={prevItem}
        resetFlag={resetFlag}
        resetStates={resetStates}
      />
    </div>
  );
};

export default App;
