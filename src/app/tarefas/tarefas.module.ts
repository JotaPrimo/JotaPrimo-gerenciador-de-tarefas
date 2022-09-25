import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TarefaService } from "./shared";
import { ListaTarefaComponent } from './lista';
import { CadastrarTarefaComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListaTarefaComponent,
    CadastrarTarefaComponent
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
