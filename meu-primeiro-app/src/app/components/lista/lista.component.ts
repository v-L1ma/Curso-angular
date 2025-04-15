import { Component } from '@angular/core';
import { ListarService } from '../../services/listar.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  resposta: String = "";

  constructor(private listarService: ListarService){
    this.getResposta();
  }

  getResposta():void{
    this.listarService.getMessage().subscribe((mensagem)=>(this.resposta = mensagem.message));

  }

}
