import React from 'react'
import "../styles/Footer.css";

import {Icon} from '@iconify/react';

function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
            <Icon icon="ant-design:twitter-outlined"/>
            <Icon icon="il:instagram"/>
            <Icon icon='il:facebook'/>
            <Icon icon ='simple-icons:tiktok' />
                      
        </div>
        <p> &copy; 2021 Tedspizzeria.com</p>
    </div>
  );
};

export default footer;
