'use strict';

import React from 'react/addons';
import Flux from '../dispatcher/dispatcher';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';
import Immutable from 'immutable';

const ReactTransitionGroup = React.addons.TransitionGroup;

require('../../styles/normalize.css');
require('../../styles/main.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('fontawesome/css/font-awesome.css');

let App = React.createClass({
  propTypes: {
    users: React.PropTypes.object,
    pending: React.PropTypes.bool,
    errors: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      users: new Immutable.List()
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
  removeTodo(index) {
    TodoActions.removeTodo(index);
  },
  render() {
    var self = this;

    return (
      <div className='main'>
        { this.props.errors.map(function(error, index) {
          return (
            <div className='alert alert-danger' role='alert' key={index}>
              {error}
            </div>
          )
        })}
        <ul className='list-group'>
          {this.props.todos.map(function(todo, index) {
            return (
                <li className='list-group-item' key={index}>
                  {todo}
                  <button
                    type='button'
                    className='btn btn-xs btn-danger pull-right'
                    onClick={self.removeTodo.bind(self, index)}>
                    <i className='glyphicon glyphicon-remove'/>
                  </button>
                </li>
            )
          })}
        </ul>
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
