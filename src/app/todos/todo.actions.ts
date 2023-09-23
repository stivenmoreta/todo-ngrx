import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crea todo',
  props<{ texto: string }>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle todo',
  props<{ id: string }>()
);

export const editarTodo = createAction(
  '[TODO] Editar todo',
  props<{ id: string; texto: string }>()
);

export const borrarTodo = createAction(
  '[TODO] Borrar todo',
  props<{ id: string }>()
);

export const borrarCompletados = createAction('[TODO] Borrar completados');


export const toggleAll = createAction(
  '[TODO] ToggleAll todo',
  props<{ completado: boolean }>()
);
