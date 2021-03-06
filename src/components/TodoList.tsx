import { TodoItem } from "./TodoItem"
import { useSelector } from 'react-redux';

type TodoListState = {
    todoList: {
        list: [{
            text: string,
            index: number,
            isCompleted: boolean,
        }]
    }
}

export function TodoList() {
    const list = useSelector((state: TodoListState) => state.todoList.list)

    return(
        <ul>
            {list.map((todo, i) => {
                    return <TodoItem todo = {todo} key = {i} /> 
                })
            }
        </ul>
    )
}