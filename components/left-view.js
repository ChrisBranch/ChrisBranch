import React, { Component } from 'react';
import Header from './header.js';
import Image from './image.js';
import '../css/app/left-view.css';

class LeftView extends Component {
    render() {
        return(
            <div id="leftview">
                <Header />
                <Image />
            </div>
        )
    }
}

export default LeftView;