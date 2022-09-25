import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasRoutes } from "./tarefas";

const routes: Routes = [
  // aqui vão ser craidas as rotas
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
