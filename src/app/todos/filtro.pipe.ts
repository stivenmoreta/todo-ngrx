import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.action';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValidos): Todo[] {
    switch (filtro) {
      case 'todos':
        return  todos
      case 'completados':          
        return todos.filter(todo=>todo.completado)
      case 'pendientes':
        return todos.filter(todo=>!todo.completado)
    }
  }

}
