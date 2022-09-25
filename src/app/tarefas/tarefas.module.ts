import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from "./shared";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ],

    // serviço deve ser add como provider
    providers: [
      TarefaService
    ]
})
export class TarefasModule { }
