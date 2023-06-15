/**
 * Creates a ElementRef function.
 */
export function createElementRef() {
  const refFunction = (elt) => {
    refFunction.nativeElement = elt;
  };
  return refFunction;
}
//# sourceMappingURL=create-element-ref.js.map
