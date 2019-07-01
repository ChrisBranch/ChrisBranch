import React, { Component } from 'react';
import MyProfile  from '../indeximg2.jpg';
import '../css/app/main-img.css'

class Image extends Component{
    render() {
        return(
            <div id="image">
                <img id="main" src={MyProfile} />
            </div>
        )
    }
}

export default Image;