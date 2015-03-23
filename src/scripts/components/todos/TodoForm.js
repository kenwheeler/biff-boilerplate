'use strict';

import React from 'react/addons';

import TodoActions from '../../actions/TodoActions';

let TodoList = React.createClass({
  propTypes: {
    pending: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      pending: false
    }
  },

  componentWillReceiveProps() {
    React.findDOMNode(this.refs.todo).value = '';
  },

  addTodo(e) {
    e.preventDefault();
    TodoActions.addTodo(
      React.findDOMNode(this.refs.todo).value
    );
  },

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <div className='form-group'>
          <input type='text' ref='todo' className='form-control'/>
        </div>
        <div className='form-group'>
          <button type='submit'
            className={'btn btn-primary  has-spinner' + (this.props.pending === true ? ' active' : '')}>
            <span className='spinner'><i className='fa fa-refresh fa-spin'></i></span>
             Add Todo
          </button>
        </div>
      </form>
    )
  }
});

export default TodoList;
