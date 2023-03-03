import 'reflect-metadata';
import { Operator } from '../types/role';

export const RequiredRoles = (
  roles: Array<string> = [],
  operator: Operator.and | Operator.or = Operator.and
): MethodDecorator => {
  return (target: Object) => {
    Reflect.defineMetadata('required-roles', {
      roles,
      operator,
    }, target.constructor);
  };
};
