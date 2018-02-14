import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
                <h2><a href="#">HN</a></h2>
                <div className='search'>
                    <select value={this.props.value}>
                        <option value="topstories">Top Stories</option>
                        <option value="newstories">New Stories</option>
                        <option value="beststories">Best Stories</option>
                    </select>
                </div>
            </header>
        )
    }
}

export default Header;