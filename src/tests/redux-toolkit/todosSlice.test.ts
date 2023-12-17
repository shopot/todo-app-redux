import { describe } from 'vitest';

import { db } from '../server';

import {
  addTodo,
  default as reducer,
  removeTodo,
  toggleTodo,
} from '@/features/todos/store/todoSlice';
import { setupStore } from '@/store';

describe('todosReducer', () => {
  it('should return the initial state', () => {
    const initialStateMock = {
      error: null,
      isLoading: false,
      results: [],
    };

    const result = reducer(undefined, { type: 'undefined' });

    expect(result).toEqual(initialStateMock);
  });

  it('should handle a todo being added to an empty list', async () => {
    const previousStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [],
      },
    };

    const nextStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [db.todos[0]],
      },
    };

    const store = setupStore(previousStateMock);

    await store.dispatch(addTodo(db.todos[0]));

    expect(store.getState()).toEqual(nextStateMock);
  });

  it('should handle a todo being added to an existing list', async () => {
    const previousStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [db.todos[0]],
      },
    };

    const nextStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [db.todos[0], db.todos[1]],
      },
    };

    const store = setupStore(previousStateMock);

    await store.dispatch(addTodo(db.todos[1]));

    expect(store.getState()).toEqual(nextStateMock);
  });

  it('should handle a todo being removed from an existing list', async () => {
    const previousStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [db.todos[0]],
      },
    };

    const nextStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [],
      },
    };

    const store = setupStore(previousStateMock);

    await store.dispatch(removeTodo(db.todos[0]));

    expect(store.getState()).toEqual(nextStateMock);
  });

  it('should handle a todo being toggled completed', async () => {
    const previousStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [db.todos[0]],
      },
    };

    const nextStateMock = {
      todos: {
        error: null,
        isLoading: false,
        results: [{ ...db.todos[0], completed: !db.todos[0].completed }],
      },
    };

    const store = setupStore(previousStateMock);

    await store.dispatch(toggleTodo(db.todos[0]));

    expect(store.getState()).toEqual(nextStateMock);
  });
});
