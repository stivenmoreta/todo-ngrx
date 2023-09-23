import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Input } from '@angular/core';
import { FormControl, Validators as vl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  
  chkCompletado!:FormControl<Boolean | null>;
  txtInput!:FormControl<string|null>;
  
  editando:boolean = false;

  constructor(private store:Store<AppState>) { }



  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, vl.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {

      this.store.dispatch(actions.toggleTodo({id:this.todo.id}));

    });
  }

  editar(){

    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }
    , 1);

  }

  terminarEdicion(){
    this.editando = false;
    const {value} = this.txtInput;

    if(value === this.todo.texto){return;}
    if(this.txtInput.invalid){return;}
    if(value === null){return;}
    if(value === ''){return;}

    this.store.dispatch(actions.editarTodo({id:this.todo.id, texto:value}));
  }

  borrar(){
    this.store.dispatch(actions.borrarTodo({id:this.todo.id}));
  }

}
