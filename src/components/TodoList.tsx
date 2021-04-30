import { useSelector } from 'react-redux';
import { State } from '../interfaces';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const list = useSelector((state: State) => state.todoList.list)

    return(
        <ul>
            {list.map((todo, i) => {
                    return <TodoItem index={todo.index} text={todo.text} isCompleted={todo.isCompleted} key = {i} /> 
                })
            }
        </ul>
    )
}