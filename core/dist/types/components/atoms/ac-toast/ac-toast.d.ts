import { EventEmitter } from '../../../stencil-public-runtime';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
export declare class AcToast implements TransitionComponent {
  transitionBehavior: any;
  type: 'alert' | 'success' | 'info' | 'warning';
  title: string;
  message: string;
  host: HTMLAcToastElement;
  closeEv: EventEmitter<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  close(): Promise<void>;
  render(): any;
}
