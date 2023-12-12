import React from 'react';

const Loading = ({ className = '' }) => {
  return (
    <div className={`${className} lds-ring`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
