import React from 'react';
import './ppts.css';

const PPTs: React.FC = () => {
  return (
    <div className='ppts-container'>
      <h1 className='ppts-heading'>Lecture Presentations</h1>
      <p className='ppts-text'>Here you can find the available PowerPoint presentations for your courses.</p>
      {/* Add a list or grid of PPT files here */}
    </div>
  );
};

export default PPTs;