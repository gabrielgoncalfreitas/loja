import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ProdutosModule } from './modules/produtos/produtos.module';

@Module({
  imports: [UsuariosModule, ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
