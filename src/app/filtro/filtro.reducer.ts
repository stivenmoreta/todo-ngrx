import { Action, createReducer, on } from "@ngrx/store";
import { setFiltro, filtrosValidos } from './filtro.action';


export const initialState:filtrosValidos = "todos";


const _filtroReducer = createReducer(
    initialState as filtrosValidos,
    on(setFiltro, (state, {filtro}) => filtro ),

);
export function filtroReducer(state:filtrosValidos | undefined, action:Action){
    return _filtroReducer(state, action);
}