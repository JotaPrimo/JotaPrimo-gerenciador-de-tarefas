import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarComponent } from './editar';

import { ListaTarefaComponent } from "./lista";

export const TarefasRoutes: Routes = [

  {
		path: 'tarefas',
		redirectTo: 'tarefas/listar'
	},
	{
		path: 'tarefas/listar',
		component: ListaTarefaComponent
	},

  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },

  {
    path: 'tarefas/editar/:id',
    component: EditarComponent
  }


]
