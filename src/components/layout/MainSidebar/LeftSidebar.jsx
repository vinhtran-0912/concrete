import React from 'react';

import '../../../asset/scss/components/leftSidebar.scss';

const LeftSidebar = () => (
  <div className="sidebar-menu">
    <ul>
      <li><a href="#0">Users</a></li>
      <li><a href="#0">Collectibles</a></li>
      <li className="active-side-bar"><a href="/categories">Categories</a></li>
      <li><a href="#0">Configurations</a></li>
    </ul>
  </div>
);

export default LeftSidebar;
