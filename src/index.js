import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App
    autoplay
    preloadNext={3}
    slides={[
      {src: 'images/test2.jpg', duration: 2000},
      {src: 'images/test3.jpg', duration: 6000},
      {src: 'images/test4.jpg', duration: 6000},
      {src: 'images/test2.jpg', duration: 2000},
      {src: 'images/test3.jpg', duration: 6000},
      {src: 'images/test4.jpg', duration: 6000}
    ]}
  />,
  document.getElementById('root')
);
