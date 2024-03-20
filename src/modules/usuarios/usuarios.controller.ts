import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { UsuarioDTO } from './usuario.dto';
import { UsuarioEntity } from './usuario.entity';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  @Post()
  async criarUsuario(@Body() usuario: UsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = usuario.nome;
    usuarioEntity.email = usuario.email;
    usuarioEntity.senha = usuario.senha;

    this.usuariosRepository.salvarUsuario(usuarioEntity);

    return 'Usuário criado com sucesso';
  }

  @Get()
  async listarUsuarios() {
    return this.usuariosRepository.getAll();
  }
}
