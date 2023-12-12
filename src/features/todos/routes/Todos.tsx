import { JSX } from 'react';

import { TodosList } from '../components/TodosList';
import { TodoForm } from '../components/TodoForm';

export const Todos = (): JSX.Element => {
  return (
    <>
      <TodoForm />
      <TodosList />
    </>
  );
};
