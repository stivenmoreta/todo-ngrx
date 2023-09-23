import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from '../../filtro/filtro.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  
  todos:Todo[] = [];
  filtroActual: filtrosValidos ='todos'

  constructor(private store:Store<AppState>){
    this.store.subscribe(({todos,filtro})=>{
      this.todos = todos
      this.filtroActual = filtro
    })

  }

}


//Opción alternativa
// this.store.select('todos').subscribe(todo=>this.todos=todo)
// this.store.select('filtro').subscribe(filtro=>{

//   this.store.select('todos').subscribe(todos => this.todos = todos.filter(todo=>{
//     switch (filtro) {
//       case 'todos':
//         return todo  
//       case 'completados':          
//         return todo.completado
//       case 'pendientes':
//         return !todo.completado
//     }

//   }))
  
// })