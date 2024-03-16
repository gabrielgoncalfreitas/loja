import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsString()
  @IsUrl()
  url: string;

  @IsString()
  descricao: string;
}

export class ProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsNumber()
  @IsNotEmpty()
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsDate()
  createdAt: Date = new Date();

  @IsDate()
  updatedAt: Date = new Date();
}
