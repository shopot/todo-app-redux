import { FC } from 'react';

import todos from './data/todos.json';

import { TodosList } from '@/components';

const App: FC = () => {
  console.log(todos);

  return (
    <>
      <h1>Hello Redux!</h1>
      <TodosList />
    </>
  );
};

export default App;
