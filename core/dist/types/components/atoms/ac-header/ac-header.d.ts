/**
 * Accera's header web-component.
 */
export declare class AcHeader {
  private parentLayout;
  host: HTMLAcHeaderElement;
  theme: string;
  scrolled: boolean;
  hasNavdrawer: boolean;
  componentDidLoad(): void;
  handleLayoutContentScroll(ev: any): void;
  handleMenuClick(): void;
  render(): any;
}
