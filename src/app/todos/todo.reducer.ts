import { Action, createReducer, on } from '@ngrx/store';

import { borrarTodo, crearTodo, editarTodo, toggleTodo,toggleAll, borrarCompletados } from './todo.actions';

import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

const _fnToggleTodo = (state: Todo[], id: string) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completado: !todo.completado,
      };
    } else {
      return todo;
    }
  });
};

const _fnEditarTodo = (state: Todo[], id: string, texto: string) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        texto: texto,
      };
    } else {
      return todo;
    }
  });
};

const _fnBorrarTodo = (state: Todo[], id: string) => {
  return state.filter((todo) => todo.id !== id);
};

const _fnBorrarCompletados = (state: Todo[]) => {
  return state.filter((todo) => !todo.completado);
};

const _fnToggleAll = (state: Todo[], completado: boolean) => {
  return state.map((todo) => {
    return {
      ...todo,
      completado: completado,
    };
  });
};



const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleTodo, (state, { id }) => _fnToggleTodo(state, id)),
  on(editarTodo, (state, { id, texto }) => _fnEditarTodo (state, id, texto)),
  on(borrarTodo, (state, { id }) => _fnBorrarTodo (state, id)),
  on(borrarCompletados, (state) => _fnBorrarCompletados (state)),
  on(toggleAll, (state, { completado }) => _fnToggleAll (state, completado)),
);

export function todoReducer(state: Todo[] | undefined , action: Action) {
  return _todoReducer(state, action);
}
