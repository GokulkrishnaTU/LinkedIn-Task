import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js/lib/core'; // Import Plotly.js this way

// Import additional required Plotly modules for specific chart types, if needed
import 'plotly.js/lib/bar';

function Newmain() {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartLayout, setChartLayout] = useState({});

  // Define company details data
  const companyDetails = {
    1: {
      name: 'Google',
      profit: '5 crores year',
      sales: '12 crores year',
      staff: '2000 employees',
      services: 'Search, Advertising, Cloud Computing',
    },
    2: {
      name: 'Accenture',
      profit: '3 crores year',
      sales: '8 crores year',
      staff: '1800 employees',
      services: 'Search, Advertising, Cloud Computing IT',
    },

    3: {
      name: 'Deloite',
      profit: '6 crores year',
      sales: '7 crores year',
      staff: '1500 employees',
      services: 'Search, Advertising, Cloud Computing IT',
    },

    4: {
      name: 'Microsoft',
      profit: '6 crores year',
      sales: '5 crores year',
      staff: '1400 employees',
      services: 'Search, Advertising, Cloud Computing IT',
    },

    5: {
      name: 'EY',
      profit: '6 crores year',
      sales: '8 crores year',
      staff: '2000 employees',
      services: 'Search, Advertising, Cloud Computing IT',
    },
    // Add details for other companies here
  };

  // Function to handle company name click and set the selected company
const handleCompanyClick = (companyId) => {
  const selectedCompanyDetails = companyDetails[companyId];
  const isCompanySelected = selectedCompanies.some(
    (company) => company.name === selectedCompanyDetails.name
  );

  if (isCompanySelected) {
    // If the company is already selected, remove it
    setSelectedCompanies(selectedCompanies.filter((company) => company.name !== selectedCompanyDetails.name));
  } else {
    // If the company is not selected, add it
    setSelectedCompanies([...selectedCompanies, selectedCompanyDetails]);
  }
};

  // Function to render the Plotly chart based on the selected companies
  const renderChart = () => {
    const data = selectedCompanies.map((companyDetails) => ({
      x: ['Profit', 'Sales'],
      y: [
        parseFloat(companyDetails.profit.replace(/[^\d.]/g, '')),
        parseFloat(companyDetails.sales.replace(/[^\d.]/g, '')),
      ],
      type: 'bar',
      name: companyDetails.name,
    }));

    const layout = {
      barmode: 'group', // Use 'group' for grouped bars or 'stack' for stacked bars
      title: 'Company Performance',
      xaxis: {
        title: 'Metrics',
      },
      yaxis: {
        title: 'Amount (in crores)',
      },
    };

    setChartData(data); // Set the accumulated chart data
    setChartLayout(layout); // Set the chart layout
  };

  useEffect(() => {
    renderChart();
  }, [selectedCompanies]);

  useEffect(() => {
    // Create a new chart when the chartData or chartLayout changes
    const chartDiv = document.getElementById('chart');
    chartDiv.innerHTML = ''; // Clear the previous chart

    Plotly.newPlot('chart', chartData, chartLayout);
  }, [chartData, chartLayout]);

  return (
    <div>
      {/* Your company name buttons */}
      <div className="company-buttons p-5 flex flex-row justify-center gap-10 border-2">
        {Object.keys(companyDetails).map((companyId) => (
          <button
            className="w-[100px] h-[40px] border-2 p-2 border-[#000000] rounded-full flex justify-center align-middle"
            key={companyId}
            onClick={() => handleCompanyClick(companyId)}
          >
            {companyDetails[companyId].name}
          </button>
        ))}
      </div>

      {/* Display the selected companies' details */}
      <div className="company-details flex flex-row gap-10 p-5">
        {selectedCompanies.map((companyDetails, index) => (
          <div key={index}>
            <h2>{companyDetails.name} Details:</h2>
            <p>Profit: {companyDetails.profit}</p>
            <p>Sales: {companyDetails.sales}</p>
            <p>Number of Staff: {companyDetails.staff}</p>
            <p>Services: {companyDetails.services}</p>
          </div>
        ))}
      </div>

      {/* Render the chart */}
      <div id="chart" className="mt-5 ml-8 flex flex-row gap-10 flex-wrap"></div>
    </div>
  );
}

export default Newmain;