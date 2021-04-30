export interface Todo {
  text: string;
  index: number;
  isCompleted: boolean;
}

export interface State {
  todoList: {
    list: Todo[];
  }
}