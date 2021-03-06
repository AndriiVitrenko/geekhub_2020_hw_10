import { TodoList } from "./components/TodoList";
import React from 'react';
import { Header } from "./components/Header";

function App() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
}

export default App;