import { JSX } from 'react';

import { TodosList } from '../components/TodosList';
import { TodoForm } from '../components/TodoForm';
import { Spinner } from '@/components/Spinner';

export const Todos = (): JSX.Element => {
  return (
    <>
      <Spinner />
      <TodoForm />
      <TodosList />
    </>
  );
};
