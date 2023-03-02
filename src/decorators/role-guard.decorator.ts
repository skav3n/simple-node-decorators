import 'reflect-metadata';
import { Operator } from '../types/role';

const hasAccess = (
  { roles, operator }: { roles: Array<string>, operator: Operator.and | Operator.or },
  userRoles: Array<string>
) => {
  if (operator === Operator.and) {
    return roles.every((item) => userRoles.includes(item));
  }
  return userRoles.some((item) => roles.includes(item));
};

export const RoleGuard = (roles: Array<string> | string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const [, response] = args;
      const userRoles = Array.isArray(roles) ? roles : [roles];
      const rolesClass = Reflect.getMetadata('use-role-class', target);
      const rolesMethod = Reflect.getMetadata('use-role-method', target.constructor);
      const hasAccessClass = hasAccess(rolesClass, userRoles);
      const hasAccessMethod = hasAccess(rolesMethod, userRoles);

      if (!hasAccessClass) {
        return response.status(403).json({ error: 'Forbidden' });
      }
      if (!hasAccessMethod) {
        return response.status(403).json({ error: 'Forbidden' });
      }
      return original.apply(this, args);
    }
  }
}
