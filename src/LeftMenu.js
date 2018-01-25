import React, { Component } from 'react';
import './LeftMenu.css';

import ireddit from './icons/reddit-icon.png';
import imedium from './icons/medium-icon.png';
import ited from './icons/ted-icon.png';
import iyoutube from './icons/youtube-icon.png';



const menuItems = [
    ['Reddit', 'https://www.reddit.com/', ireddit], 
    ['Medium', 'https://medium.com/', imedium],
    ['TED', 'https://www.ted.com/', ited],
    ["YouTube", 'https://www.youtube.com/', iyoutube]
];

class LeftMenu extends Component{
    
    render (){

        const menuList = menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item[1]} target='_blank'><img src={item[2]} />{item[0]}</a>
                </li>
                )
        });
        return (
            <div className="menu">
                <h2>Got some time?</h2>
                <ul>
                    { menuList }
                </ul>
            </div>
        );
    }
}

export default LeftMenu;