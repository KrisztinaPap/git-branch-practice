import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>
    <h1>My Git Test</h1>
    <HelloStudent name="Eboka" />
    <HelloStudent name="Atinder" />
    <HelloStudent name="Birm" />
  </React.StrictMode>,
  document.getElementById('root')
);