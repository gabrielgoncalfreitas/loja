import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuariosRepository } from '../usuarios.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async validate(value: any): Promise<boolean> {
    const doesItEmailAlreadyExists =
      await this.usuariosRepository.getByEmail(value);

    return !doesItEmailAlreadyExists;
  }
}

export const IsUniqueEmail = (validationOptions?: ValidationOptions) => {
  return (object: object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueEmailValidator,
    });
  };
};
