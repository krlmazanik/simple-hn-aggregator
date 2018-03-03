import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header>
                <h2><a href="#">HN</a></h2>
                <div className='select-input'>
                    <select onChange={this.props.handleSelectChange} value={this.props.category}>
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