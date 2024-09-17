import React from 'react';
import Sidebar from './Sidebar';
import OrderList from './OrderList';
import TrackingMap from './TrackingMap';
import MainInfo from './MainInfo';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <OrderList />
        <div className="right-section">
          <TrackingMap />
          <MainInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
