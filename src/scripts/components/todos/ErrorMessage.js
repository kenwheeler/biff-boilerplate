'use strict';

import React from 'react/addons';

let ErrorMessage = React.createClass({
  propTypes: {
    errors: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      errors: []
    }
  },

  render() {
    return (
      <div className="errors">
        { this.props.errors.map((error, index) => {
          return (
            <div className='alert alert-danger' role='alert' key={index}>
              {error}
            </div>
          )
        })}
      </div>
    )
  }
});

export default ErrorMessage;
