import React from 'react';

const Switch = () => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="agon"
        id="agon"
      />
      <label className="toggle-switch-label" htmlFor="agon">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default Switch;
