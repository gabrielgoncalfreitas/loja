import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutosRepository } from './protutos.repository';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosRepository],
})
export class ProdutosModule {}
