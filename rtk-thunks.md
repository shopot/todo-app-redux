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
   - `npm run test:redux-toolkit`
* Линтер не выдает ошибок и предупреждений.

### Теория

* [📚 Знакомство с Redux (react-101)](https://github.com/shopot/react-101/tree/redux-base)
* [📚 Знакомство с Redux Toolkit (react-101)](https://github.com/shopot/react-101/tree/redux-toolkit-quick)
* [📚 Redux Toolkit Quick Start (redux.js.org)](https://redux-toolkit.js.org/tutorials/quick-start)
* [📚 createSlice (redux.js.org)](https://redux-toolkit.js.org/api/createSlice)
* [📚 createAsyncThunk (redux.js.org)](https://redux-toolkit.js.org/api/createAsyncThunk)
* [📺 Асинхронная работа с Redux Toolkit и createAsyncThunk (youtube.com)](https://www.youtube.com/watch?v=6RTbC8Acj1M)
* [📚 Mastering Async Actions within createAsyncThunk in Redux Toolkit](https://blog.stackademic.com/mastering-async-actions-within-createasyncthunk-in-redux-toolkit-382af0eaae57)

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
$ npm run test:redux-toolkit
```
