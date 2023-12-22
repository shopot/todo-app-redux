export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodosState = {
  results: Todo[];
  isLoading: boolean;
};
