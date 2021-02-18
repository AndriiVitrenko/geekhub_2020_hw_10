import { TodoList } from "./components/TodoList";
import React, {useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from './dataBase/todoList';


function App() {
  const inputRef = useRef()
  const todoList = useSelector(state => state.todoList.list)
  const dispatch = useDispatch()
  
  const addNewTodo = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(addTodo(inputRef.current.value))
      inputRef.current.value = ''
    }, [])

    return (
      <>
        <form onSubmit = {addNewTodo} >
          <input ref = {inputRef} type='text' placeholder='click Enter to add todo' className='input-field' />
          <span className='bar'></span>
        </form>

        <TodoList list = {todoList} />
      </>
    );
}

export default App;
