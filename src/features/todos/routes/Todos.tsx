import { FC } from 'react';

import { TodosList } from '../components/TodosList';
import { TodoForm } from '../components/TodoForm';
import { Spinner } from '@/components/Spinner';

export const Todos: FC = () => {
  return (
    <>
      <Spinner />
      <TodoForm />
      <TodosList />
    </>
  );
};
