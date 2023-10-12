import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lottery-app';
  usuarios: User[] = []; // Inicialize a lista de usuários

  adicionarUsuario(usuario: User): void {
    // Adicione o novo usuário à lista de usuários
    this.usuarios.push(usuario);
  }

}




