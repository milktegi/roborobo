import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import CardList from './CardList';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <CardList robots={robots} />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();