import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosRepository } from './usuarios.repository';
import { IsUniqueEmailValidator } from './validations/is_unique_email.validator';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosRepository, IsUniqueEmailValidator],
})
export class UsuariosModule {}
