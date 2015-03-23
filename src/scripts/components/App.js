'use strict';

import React from 'react/addons';

import Flux from '../dispatcher/dispatcher';
import TodoStore from '../stores/TodoStore';

import ErrorMessage from './todos/ErrorMessage';
import TodoList from './todos/TodoList';
import TodoForm from './todos/TodoForm';

import Immutable from 'immutable';

const ReactTransitionGroup = React.addons.TransitionGroup;

require('../../styles/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('fontawesome/css/font-awesome.css');
require('../../styles/main.scss');

let App = React.createClass({
  propTypes: {
    todos: React.PropTypes.object,
    pending: React.PropTypes.bool,
    errors: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      todos: new Immutable.List()
    }
  },

  render() {
    return (
      <div className='main'>
        <ErrorMessage errors={this.props.errors} />
        <TodoList todos={this.props.todos} />
        <TodoForm pending={this.props.pending} />
      </div>
    )
  }
});

App = Flux.connect(App, [TodoStore], props => ({
  todos: TodoStore.getTodos(),
  pending: TodoStore.getPending(),
  errors: TodoStore.getErrors()
}));

export default App;
