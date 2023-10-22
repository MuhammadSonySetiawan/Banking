import React from 'react';

import Sidebar from '../components/Sidebar';
import AllExpenses from '../components/AllExpenses';
import QuickInvoice from "../components/QuickInvoice";
import Card from '../components/Card';

import '../styles/Home.css';

function Home() {
  return (
    <div style={{ backgroundColor: "#f7f9fa" }}>
      <div className="d-flex flex-wrap modeHp">
        {/* component Sidebar */}
        <Sidebar />

        <div>
          {/* component All Expenses Component */}
          <AllExpenses />

          {/* component Quick Invoice */}
          <QuickInvoice />
        </div>

        {/* component My Card Components */}
        <Card />
      </div>
    </div>
  );
}

export default Home