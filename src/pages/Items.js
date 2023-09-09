import React, { useState } from 'react';
import Network from '../components/Network';
import Sidebar from '../components/Sidebar';
import NetworkSection from '../components/NetworkSection';

function Items() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    // Update the state based on the button clicked
    setSelectedButton(buttonId);
  };

  console.log(selectedButton);

  return (
    <div>
      {/* Content for the "Items" page */}
      <Network handleButtonClick={handleButtonClick} />

      <div className="flex bg-gray-100 pt-12 w-[580px] 2xl:ml-[200px] sm:w-[740px] md:w-[580p] lg:w-[1350px] xl:w-[1345px]">
        <Sidebar />
        <NetworkSection dataId={selectedButton} selectedButton={selectedButton} />
      </div>

      {/* Add any other content you need */}
    </div>
  );
}

export default Items;
