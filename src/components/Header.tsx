import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoList';

export function Header() {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
  
    const addNewTodo = useCallback(
    (event) => {
        event.preventDefault()
        dispatch(addTodo(inputRef.current?.value))
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }, [dispatch])

    return(
        <form onSubmit = {addNewTodo} >
          <input ref = {inputRef} type='text' placeholder='click Enter to add todo' className='input-field' autoFocus />
          <span className='bar'></span>
        </form>
    )
}