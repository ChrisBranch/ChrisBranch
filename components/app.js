import React, { Component } from 'react';
import TopNav from './top-nav.js';
import LeftView from './left-view.js';
import Image from './image.js'
import '../css/app/container.css';

class App extends Component {
    render() {
        return (
            <div id="container">
                <TopNav />
                <LeftView />
                <Image />
            </div>
        )
    }
}

export default App
