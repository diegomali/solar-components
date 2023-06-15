/**
 * A method decorator that binds a method to it instance.
 */
export declare function Bind(target: any, name: string, descriptor: PropertyDescriptor): {
  get(): any;
};
