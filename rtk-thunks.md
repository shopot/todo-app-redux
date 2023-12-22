# Redux Toolkit and Thunks

Бэкенд (json-server) для этого задания запускается командой `npm run backend`, после запуска доступен по адресу `http://localhost:3000/todos`.

Официальная документация по работе с json-server: https://github.com/typicode/json-server

Шпаргалка по JSON Server: [JSON Server](https://my-js.org/docs/cheatsheet/json-server/)

## Что должно быть сделано:

1. Задание выполняется на основе ветки `redux-toolkit`, создать отдельную ветку `redux-toolkit-thunks` для этого задания.
2. Реализовать thunks-функции (асинхронные экшены) `fetchAllTodos`, `addTodo`, `removeTodo`, `toggleTodo` для работы с бэкендом для CRUD операций, для реализации использовать `axios` и `createAsyncThunk`.
2. Реализовать `todosSlice` с использованием `createSlice` и `extraReducers` с синтаксисом `builder.addCase` для thunk-функций `fetchAllTodos`, `addTodo`, `removeTodo`, `toggleTodo`.
3. Сконфигурировать store, и добавить `todosSlice`.
4. Реализовать вызов thunk-функций для компонентов
    * `<TodosList />` - получение данных через `useEffect` с использованием `fetchAllTodos`.
    * `<TodoForm />` - вызов `addTodo`.
    * `<TodosListItem />` - вызов `removeTodo`, `toggleTodo`.

### Версии пакетов

Для этого задания используются следующие версии пакетов:

```json
"dependencies": {
    "@reduxjs/toolkit": "^2.0.1",
    "axios": "^1.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.0.4",
    "uuid": "^9.0.1"
  },
  ```

### Условия выполнения

* Приложение работает.
* Все тесты проходят:
   - `npm run test:rtk-thunks`
* Линтер не выдает ошибок и предупреждений.

### Теория

* [Знакомство с Redux](https://github.com/shopot/react-101/tree/redux-base)
* [Redux Thunk (handsonreact.com)](https://handsonreact.com/docs/redux-thunk)
* [React Redux Thunk (handsonreact.com)](https://handsonreact.com/docs/react-redux-thunk)
* [Thunk middleware for Redux (redux-thunk)](https://github.com/reduxjs/redux-thunk)
* [Redux Thunk Explained with Examples (freecodecamp.org)](https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/)
* [Redux: Writing Logic with Thunks (redux.js.org)](https://redux.js.org/usage/writing-logic-thunks)


## Установка и запуск

- Использовать `node 18.x` или выше.

```shell
# Create new branch for this task
$ git checkout redux-toolkit
$ git checkout -b redux-toolkit-thunks

# Install the dependencies
$ npm install

# Start Vite development server
$ npm run dev

# Build production
$ npm run build

# Preview production after build production
$ npm run preview

# Start linting
$ npm run lint

# Start tests
$ npm run test:rtk-thunks
```
