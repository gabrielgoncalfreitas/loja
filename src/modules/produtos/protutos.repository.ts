import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './produto.dto';

@Injectable()
export class ProdutosRepository {
  private produtos: ProdutoDTO[] = [];

  async salvarProduto(produto: ProdutoDTO) {
    this.produtos.push(produto);
  }

  async getAll(): Promise<ProdutoDTO[]> {
    return this.produtos;
  }
}
