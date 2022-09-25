import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.css']
})
export class ListaTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  // sempre devo ter um emtodo para pegar todos os registros
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja deletar "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa) {
    if (confirm('Deseja alterar "' +tarefa.nome+ '" ?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
