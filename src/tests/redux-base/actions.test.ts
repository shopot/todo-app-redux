import * as actions from '@/features/todos/store/actions';
import * as constants from '@/features/todos/store/constants';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';

    const expectedAction = {
      type: constants.ADD_TODO,
      payload: text,
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
    const id = 'cbac7c60-48f6-454b-804b-30761b5909c0';

    const expectedAction = {
      type: constants.TOGGLE_TODO,
      payload: id,
    };

    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const id = 'cbac7c60-48f6-454b-804b-30761b5909c0';

    const expectedAction = {
      type: constants.REMOVE_TODO,
      payload: id,
    };

    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });
});
