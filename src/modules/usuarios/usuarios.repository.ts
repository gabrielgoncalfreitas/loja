import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from './usuario.dto';

@Injectable()
export class UsuariosRepository {
  private usuarios: UsuarioDTO[] = [];

  async salvarUsuario(usuario: UsuarioDTO) {
    this.usuarios.push(usuario);
  }

  async getAll(): Promise<UsuarioDTO[]> {
    return this.usuarios;
  }

  async getByEmail(email: string): Promise<boolean> {
    const emailAlreadyExists = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return emailAlreadyExists !== undefined;
  }
}
