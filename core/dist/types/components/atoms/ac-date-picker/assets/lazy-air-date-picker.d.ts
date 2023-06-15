export declare class LazyAirDatePicker {
  private statusPicker;
  private commands;
  private _picker;
  constructor(baseInput: HTMLAcInputBaseElement, config: any);
  selectDate(date: Date): void;
  show(): void;
  hide(): void;
  destroy(): void;
  next(): void;
  prev(): void;
  removeDate(date: Date): void;
  clear(): void;
  update(field: string, value: any): void;
  setView(view: string): void;
  setDate(date: Date): void;
  getElement(): Promise<HTMLElement>;
  getSelectedDates(): Promise<Date[]>;
  private wrapperCommand;
  private addEnglishTranslation;
  /**
   * I dynamically load jQuery into application if it's not yet defined inside global
   * scope. This eliminates an extra step if you don't have jQuery already and if you
   * do we will just use yours.
   */
  private loadjQuery;
}
