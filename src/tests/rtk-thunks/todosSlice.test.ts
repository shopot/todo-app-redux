import { describe } from 'vitest';

import { db } from '../server';

import { setupStore } from '@/store';
import {
  todosReducer as reducer,
  addTodo,
  removeTodo,
  toggleTodo,
  fetchAllTodos,
} from '@/features/todos';

type Todo = (typeof db.todos)[0];

const createStoreStateMock = (todos: Todo[] = []) => ({
  todos: {
    isLoading: false,
    results: structuredClone(todos),
  },
});

const setup = (prevTodos: Todo[], nextTodos: Todo[]) => {
  const store = setupStore(createStoreStateMock(prevTodos));

  const nextState = createStoreStateMock(nextTodos);

  return { store, nextState };
};

describe('todosReducer', () => {
  it('should return the initial state', () => {
    const initialStateMock = { isLoading: false, results: [] };

    const result = reducer(undefined, { type: 'undefined' });

    expect(result).toEqual(initialStateMock);
  });
});

describe('Redux Store', () => {
  it('should handle fetching todos list', async () => {
    const { store, nextState } = setup([], [...db.todos]);

    await store.dispatch(fetchAllTodos());

    console.log(nextState);

    console.log(store.getState());

    expect(store.getState()).toEqual(nextState);
  });

  it('should handle a todo being added to an empty list', async () => {
    const { store, nextState } = setup([], [db.todos[0]]);

    await store.dispatch(addTodo(db.todos[0]));

    expect(store.getState()).toEqual(nextState);
  });

  it('should handle a todo being added to an existing list', async () => {
    const { store, nextState } = setup([db.todos[0]], db.todos);

    await store.dispatch(addTodo(db.todos[1]));

    expect(store.getState()).toEqual(nextState);
  });

  it('should handle a todo being removed from an existing list', async () => {
    const { store, nextState } = setup([db.todos[0]], []);

    await store.dispatch(removeTodo(db.todos[0].id));

    expect(store.getState()).toEqual(nextState);
  });

  it('should handle a todo being toggled completed', async () => {
    const { store, nextState } = setup(
      [db.todos[0]],
      [{ ...db.todos[0], completed: !db.todos[0].completed }]
    );

    await store.dispatch(toggleTodo(db.todos[0].id));

    expect(store.getState()).toEqual(nextState);
  });
});
