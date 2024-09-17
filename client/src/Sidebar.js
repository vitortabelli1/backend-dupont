import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/tracking">
            <i className="fas fa-map-marker-alt"></i> Tracking
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <i className="fas fa-file-alt"></i> Reports
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fas fa-cogs"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
