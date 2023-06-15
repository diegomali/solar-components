import { EventEmitter } from '../../../stencil-public-runtime';
export declare class AcCollapse {
  private collapseContent;
  host: HTMLElement;
  expanded: boolean;
  toggle: EventEmitter<{
    expanded: boolean;
  }>;
  handleToggle(): Promise<void>;
  render(): any;
}
