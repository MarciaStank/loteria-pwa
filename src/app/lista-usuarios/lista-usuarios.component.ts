import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model'; 

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  @Input() usuarios: User[] = [];
  @Output() editarUsuarioEvent = new EventEmitter<User>();
  @Output() excluirUsuarioEvent = new EventEmitter<User>();

  editarUsuario(usuario: User) {
    this.editarUsuarioEvent.emit(usuario);
  }

  excluirUsuario(usuario: User) {
    this.excluirUsuarioEvent.emit(usuario);
  }
}
