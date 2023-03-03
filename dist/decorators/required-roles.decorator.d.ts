import { Operator } from '../types/role';
export declare const RequiredRoles: (roles?: Array<string>, operator?: Operator.and | Operator.or) => MethodDecorator;
