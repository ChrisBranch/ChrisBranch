import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/app';

const rootDiv = document.getElementById('app');


render(<AppComponent />, rootDiv);

// if (module.hot) {
//     module.hot.accept();
// }
