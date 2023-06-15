import { EventEmitter } from '../../../stencil-public-runtime';
export declare class AcUpload {
  private nativeInput;
  /**
   * The theme color defined in the color palette. The default is primary.
   */
  theme: string;
  /**
   * The name to native input.
   */
  name: string;
  /**
   * Text introduced in Button upload.
   */
  uploadButtonText: string;
  value: FileList;
  /**
   *  Disabled upload files.
   */
  disabled: boolean;
  /**
   * State of focus, to control entries and exits of dragged files.
   */
  focus: boolean;
  /**
   * Event when a file is dropped.
   */
  change: EventEmitter<FileList>;
  onHighLight(e: any): void;
  onDrop(e: DragEvent): void;
  onLeave(): void;
  handleClick(): Promise<void>;
  removeFiles(): Promise<void>;
  handleChange(): Promise<void>;
  render(): any;
}
