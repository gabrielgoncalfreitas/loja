import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutosRepository } from './protutos.repository';
import { ProdutoDTO } from './produto.dto';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosRepository: ProdutosRepository) {}

  @Post()
  async criarProduto(@Body() produto: ProdutoDTO) {
    try {
      this.produtosRepository.salvarProduto(produto);

      return {
        mensagem: 'Produto cadastrado com sucesso',
      };
    } catch (error) {
      return {
        mensagem: error,
      };
    }
  }

  @Get()
  async listarProdutos() {
    return this.produtosRepository.getAll();
  }
}
