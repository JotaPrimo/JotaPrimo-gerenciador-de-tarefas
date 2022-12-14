import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TarefaService,
  TarefaConcluidaDirective
 } from "./shared";
 
import { ListaTarefaComponent } from './lista';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';




@NgModule({
  declarations: [
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    ListaTarefaComponent,
    TarefaConcluidaDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  // serviço deve ser add como provider
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
