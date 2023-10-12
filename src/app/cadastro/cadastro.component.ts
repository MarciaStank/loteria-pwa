import { Component, Output, EventEmitter} from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  @Output() usuarioAdicionado = new EventEmitter<User>(); // Evento para enviar um novo usuário
  user: User = new User();
  usuariosCadastrados: User[] = [];
  usuarioEmEdicao: User | null = null;

  constructor(private route: ActivatedRoute) {}
  
     onSubmit() {
    if (this.user.nome && this.user.email) {
      
      this.usuariosCadastrados.push({ ...this.user }); 
      this.usuarioAdicionado.emit(this.user);
      this.user = new User();
      
  }
}

editarUsuario(usuario: User) {
  // Preencha o formulário com os dados do usuário para edição
  this.user = { ...usuario };
}

excluirUsuario(usuario: User) {
  // Encontre o índice do usuário na lista
  const index = this.usuariosCadastrados.findIndex(u => u === usuario);

  // Remova o usuário da lista
  if (index !== -1) {
    this.usuariosCadastrados.splice(index, 1);
  }

}









}





 

