'use strict';

import React from 'react/addons';

import TodoActions from '../../actions/TodoActions';

import Immutable from 'immutable';

let TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      todos: new Immutable.List()
    }
  },

  removeTodo(index) {
    TodoActions.removeTodo(index);
  },

  render() {
    return (
      <ul className='list-group'>
        {this.props.todos.map((todo, index) => {
          return (
              <li className='list-group-item' key={index}>
                {todo}
                <button
                  type='button'
                  className='btn btn-xs btn-danger pull-right'
                  onClick={this.removeTodo.bind(this, index)}>
                  <i className='glyphicon glyphicon-remove'/>
                </button>
              </li>
          )
        })}
      </ul>
    )
  }
});

export default TodoList;
