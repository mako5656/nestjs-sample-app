import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { TodoService, Todo } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Todo[] {
    return this.todoService.getAll();
  }

  @Post()
  create(@Body('title') title: string): Todo {
    return this.todoService.create(title);
  }

  @Patch(':id')
  toggleComplete(@Param('id') id: string): Todo | undefined {
    return this.todoService.toggleComplete(Number(id));
  }
}
