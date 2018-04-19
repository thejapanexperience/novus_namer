import React from 'react';

import MainButton from './MainButton';

const TabBar = () => {
  return (
    <div className="TabBar">
      <div className="tabBar">
        <MainButton to="/sprints/previous" text="Previous Sprints" />
        <MainButton to="/sprints/new" text="New Sprint" />
        <MainButton to="/about" text="About" />
      </div>
    </div>
  );
};

export default TabBar;
