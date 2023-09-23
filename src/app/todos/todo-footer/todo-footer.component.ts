import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.action';

import { Todo } from '../models/todo.model';
import * as actionsTodo from '../todo.actions'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  
  filtroActual:actions.filtrosValidos = 'todos';
  filtros:actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes:number = 0;

  completados:number = 0;

  constructor(private store:Store<AppState>) { 
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      const todos = state.todos
      this.filtroActual = state.filtro;
      this.pendientes = todos.filter(todo => !todo.completado).length;
      this.completados = todos.filter(todo => todo.completado).length;
    });
  }

  seleccionarFiltro(filtro:actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  limpiarTodosCompletados(){
    this.store.dispatch(actionsTodo.borrarCompletados());
  }
}
