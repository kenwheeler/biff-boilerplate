'use strict';

describe('App', function () {

  var React = require('react/addons');

  var App, container, component;

  beforeEach(function() {
    App = require('components/App.js');
    container = document.createElement('div');
    component = React.render(
        React.createElement(App),
        container
    );
  });

  afterEach(function() {
    React.unmountComponentAtNode(container);
  });

  it('should render into the document', function() {
      expect(component.isMounted()).to.be.true;
  });

});


