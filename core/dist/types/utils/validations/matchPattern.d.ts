/**
 * A Form field validation that check if the field match with desired pattern.
 * @param pattern The custom error message. Commonly used for i18n.
 * @param patternMessage The custom error message. Commonly used for i18n.
 */
export declare function matchPattern(pattern: any, patternMessage: any): (value: any) => string;
