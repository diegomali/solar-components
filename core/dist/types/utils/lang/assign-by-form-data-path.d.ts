/**
 * Used to assign into a object field, accessing it by it Form Data Path,
 * commonly used in PHP's form data parsing engine.
 * @param target The target Object that will be assigned.
 * @param path The Form Data Path to assign the value. Ex: `user[name]`.
 * @param value The value of the field.
 */
export declare function assignByFormDataPath(target: any, path: any, value: any): any;
