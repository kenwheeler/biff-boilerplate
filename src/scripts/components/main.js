'use strict';

import App from './App';
import React from 'react';
import Router from 'react-router';
let Route = Router.Route;

// React dev tools
if (typeof window !== 'undefined') {
  window.react = React;
}

let content = document.getElementById('content');

let Routes = (
  <Route handler={App}>
    <Route name="/" handler={App}/>
  </Route>
);

Router.run(Routes, function(Handler) {
  React.render(<Handler/>, content);
});
