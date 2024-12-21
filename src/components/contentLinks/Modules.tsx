import React from 'react';
import './modules.css'; // Import the CSS file

const Modules: React.FC = () => {
  return (
    <div className="modules-container">
      <h1 className="modules-heading">Course Modules</h1>
      <p className="modules-text">
        Here you can find detailed information about the course modules.
      </p>
      {/* Add more content related to course modules here */}
    </div>
  );
};

export default Modules;
