import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top_tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom_tags'>&lt;/body&gt;
          <br />
          <span className='bottom_tag_html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout;