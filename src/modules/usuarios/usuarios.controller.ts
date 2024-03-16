import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { UsuarioDTO } from './usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  @Post()
  async criarUsuario(@Body() usuario: UsuarioDTO) {
    try {
      this.usuariosRepository.salvarUsuario(usuario);

      return {
        mensagem: 'Usuário criado com sucesso',
      };
    } catch (error) {
      return {
        mensagem: error,
      };
    }
  }

  @Get()
  async listarUsuarios() {
    return this.usuariosRepository.getAll();
  }
}
