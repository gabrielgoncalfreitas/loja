import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from './usuario.dto';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuariosRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvarUsuario(usuario: UsuarioEntity) {
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
