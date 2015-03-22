'use strict';

import React from 'react';
import shallowEqual from 'react/lib/shallowEqual';

export default function FluxComponent(Component, stores, storeDidChange) {
  const FluxComponent = React.createClass({
    getState(props) {
      return storeDidChange(props);
    },

    getInitialState() {
      return storeDidChange(this.props);
    },

    componentDidMount() {
      stores.forEach(store =>
        store.addChangeListener(this.handleStoreChange)
      );

      this.setState(this.getState(this.props));
    },

    componentWillReceiveProps(nextProps) {
      if (!shallowEqual(nextProps, this.props)) {
        this.setState(this.getState(nextProps));
      }
    },

    componentWillUnmount() {
      stores.forEach(store =>
        store.removeChangeListener(this.handleStoreChange)
      );
    },

    handleStoreChange() {
      if (this.isMounted()) {
        this.setState(this.getState(this.props));
      }
    },
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  });
  return FluxComponent;
};
