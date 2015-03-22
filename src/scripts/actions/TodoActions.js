'use strict';

import biff from '../dispatcher/dispatcher';

const TodoActions = biff.createActions({
  addTodo(todo) {

    var self = this;

    this.dispatch({
      actionType: 'ADD_TODO_START'
    });

    // Simulate Async Call
    setTimeout(function() {

      if (todo !== '') {
        self.dispatch({
          actionType: 'ADD_TODO_SUCCESS',
          data: todo
        });
      } else {
        self.dispatch({
          actionType: 'ADD_TODO_ERROR'
        })
      }

    }, 600);

  },
  removeTodo(index) {
    this.dispatch({
      actionType: 'REMOVE_TODO',
      data: index
    })
  }
});

export default TodoActions;
