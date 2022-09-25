import { Routes } from '@angular/router';

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


]
