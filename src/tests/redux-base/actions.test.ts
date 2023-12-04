import * as actions from '@/features/todos/store/actions';
import * as constants from '@/features/todos/store/constants';

const todoMock = {
  id: 'c1a69b93-d3cb-49da-b736-87accbc7852f',
  text: 'Understand What React Is',
  completed: true,
};

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: constants.ADD_TODO,
      payload: todoMock,
    };

    expect(actions.addTodo(todoMock)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
    const expectedAction = {
      type: constants.TOGGLE_TODO,
      payload: todoMock.id,
    };

    expect(actions.toggleTodo(todoMock.id)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const expectedAction = {
      type: constants.REMOVE_TODO,
      payload: todoMock.id,
    };

    expect(actions.removeTodo(todoMock.id)).toEqual(expectedAction);
  });
});
