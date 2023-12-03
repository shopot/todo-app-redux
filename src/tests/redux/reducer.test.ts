import { initialState, todosReducer as reducer } from '@/features/todos/store/reducer';
import * as actions from '@/features/todos/store/actions';
import * as constants from '@/features/todos/store/constants';

const uuidMock = 'cbac7c60-48f6-454b-804b-30761b5909c0';

const stateMock = [{ id: uuidMock, text: 'Run the tests', completed: false }];

jest.mock('uuid', () => ({ v4: () => uuidMock }));

type ActionTypes =
  | ReturnType<typeof actions.addTodo>
  | ReturnType<typeof actions.removeTodo>
  | ReturnType<typeof actions.toggleTodo>;

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const action = {} as ActionTypes;

    const result = reducer(undefined, action);

    expect(result).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const action: ActionTypes = {
      type: constants.ADD_TODO,
      payload: 'Run the tests',
    };

    const result = reducer([], action);

    expect(result).toEqual(stateMock);
  });

  test('should handle ADD_TODO to an existing list', () => {
    const action: ActionTypes = {
      type: constants.ADD_TODO,
      payload: 'Use Redux',
    };

    expect(reducer(stateMock, action)).toEqual([
      stateMock[0],
      { text: 'Use Redux', completed: false, id: uuidMock },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    const action: ActionTypes = {
      type: constants.TOGGLE_TODO,
      payload: uuidMock,
    };

    const result = reducer(stateMock, action);

    expect(result).toEqual([{ ...stateMock[0], completed: true }]);
  });

  it('should handle REMOVE_TODO', () => {
    const action: ActionTypes = {
      type: constants.REMOVE_TODO,
      payload: uuidMock,
    };

    const result = reducer(stateMock, action);

    expect(result).toEqual([]);
  });
});
