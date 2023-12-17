import { Todo } from '../types';

type TodosState = {
  results: Todo[];
  isLoading: boolean;
  error: null | string;
};
