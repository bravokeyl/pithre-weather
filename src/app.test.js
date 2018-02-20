import React from 'react';
import ReactDOM from 'react-dom';
import PithreWeather from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PithreWeather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
