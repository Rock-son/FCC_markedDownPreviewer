import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import MarkedDownApp from './app/App';
import {starterText} from './app/starterText';


ReactDOM.render(<MarkedDownApp value={starterText}/>, document.getElementById('root'));