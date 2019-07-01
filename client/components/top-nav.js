import React, { Component } from 'react';
import '../css/app/top-nav.css'

class TopNav extends Component {
    render() {
        return (
            <div class="topnav">
                <a class="active" href="./index.html">Home</a>
                <a href="#projects">Projects</a>
            </div>
        )
    }
}

export default TopNav;