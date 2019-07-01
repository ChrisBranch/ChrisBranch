import React, { Component } from 'react';
import Header from './header';
import '../css/app/left-view.css';

class LeftView extends Component {
    render() {
        return(
            <div id="leftview">
                <Header />
            </div>
        )
    }
}

export default LeftView;