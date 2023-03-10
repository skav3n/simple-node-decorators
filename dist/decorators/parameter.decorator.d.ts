export declare const Param: (payload?: {
    key?: string;
    zod?: object;
}) => ParameterDecorator;
export declare const Query: (payload?: {
    key?: string;
    zod?: object;
}) => ParameterDecorator;
export declare const Req: (target: {
    [key: string]: any;
}, propertyKey: string | symbol, parameterIndex: number) => void;
export declare const Res: (target: {
    [key: string]: any;
}, propertyKey: string | symbol, parameterIndex: number) => void;
export declare const Body: (payload?: {
    key?: string;
    zod?: object;
}) => ParameterDecorator;
