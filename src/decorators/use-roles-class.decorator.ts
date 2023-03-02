import 'reflect-metadata';
import { Operator } from '../types/role';

export const UseRoleClass = (
  roles: Array<string> = [],
  operator: Operator.and | Operator.or = Operator.and
): ClassDecorator => {
  return (target: Object) => {
    Reflect.defineMetadata('use-role-class', {
      roles,
      operator,
    }, target);
  };
};
