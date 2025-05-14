import { Injectable } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }

  create(title: string): Todo {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  toggleComplete(id: number): Todo | undefined {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }
}
