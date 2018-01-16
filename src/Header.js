import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
                <h2><a href="#">HN</a></h2>
                <div className='search'>
                    <span className='fa fa-search' />
                    <input type="text" />
                </div>
            </header>
        )
    }
}

export default Header;