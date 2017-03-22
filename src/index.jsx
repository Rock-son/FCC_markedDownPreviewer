import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import MarkDownApp from './app/App';
import {starterText} from './app/starterText';


ReactDOM.render(<MarkDownApp value={starterText}/>, document.getElementById('root'));