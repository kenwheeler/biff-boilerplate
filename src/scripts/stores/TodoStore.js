'use strict';

import biff from '../dispatcher/dispatcher';
import Immutable from 'immutable';

let todos = Immutable.List.of(
  'Pick up milk',
  'Clean the garage'
);

const TodoStore = biff.createStore({
  getTodos() {
    return todos;
  }
}, (payload) => {

  switch (payload.actionType) {
    case 'ADD_TODO_START': {
      TodoStore._clearErrors();
      TodoStore._setPending(true);
      TodoStore.emitChange();
      break;
    }
    case 'ADD_TODO_SUCCESS': {
      todos = todos.push(payload.data);
      TodoStore._setPending(false);
      TodoStore.emitChange();
      break;
    }
    case 'ADD_TODO_ERROR': {
      TodoStore._setPending(false);
      TodoStore._setError('Todo must have data');
      TodoStore.emitChange();
      break;
    }
    case 'REMOVE_TODO': {
      TodoStore._setPending(false);
      TodoStore._clearErrors();
      todos = todos.delete(payload.data);
      TodoStore.emitChange();
      break;
    }
  }

});

export default TodoStore;
