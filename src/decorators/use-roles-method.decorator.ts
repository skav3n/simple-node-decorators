import 'reflect-metadata';
import { Operator } from '../types/role';

export const UseRoleMethod = (
  roles: Array<string> = [],
  operator: Operator.and | Operator.or = Operator.and
): MethodDecorator => {
  return (target: Object) => {
    Reflect.defineMetadata('use-role-method', {
      roles,
      operator,
    }, target.constructor);
  };
};
