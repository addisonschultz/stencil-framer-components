/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyButton {
    /**
    * Disable button
    */
    'disabled'?: boolean;
    /**
    * Make button grow to 100%
    */
    'fluid'?: boolean;
    /**
    * Button kind
    */
    'kind'?: "default" | "primary" | "danger";
    /**
    * Optional string that can be used to set the button value
    */
    'text'?: string;
  }
  interface MyInput {
    /**
    * Disable Input
    */
    'disabled'?: boolean;
    /**
    * Show error state
    */
    'error'?: boolean;
    /**
    * Placeholder text
    */
    'placeholder'?: string;
    /**
    * Input text
    */
    'value'?: string;
  }
  interface MyToggle {
    /**
    * Disable Toggle
    */
    'disabled'?: boolean;
    /**
    * Set on state
    */
    'on'?: boolean;
  }
  interface MyTooltip {
    /**
    * Arrow position
    */
    'arrow'?: "top" | "right" | "bottom" | "left";
    /**
    * Set error state
    */
    'error'?: boolean;
    /**
    * Set text
    */
    'text'?: string;
  }
}

declare global {


  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };

  interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {}
  var HTMLMyInputElement: {
    prototype: HTMLMyInputElement;
    new (): HTMLMyInputElement;
  };

  interface HTMLMyToggleElement extends Components.MyToggle, HTMLStencilElement {}
  var HTMLMyToggleElement: {
    prototype: HTMLMyToggleElement;
    new (): HTMLMyToggleElement;
  };

  interface HTMLMyTooltipElement extends Components.MyTooltip, HTMLStencilElement {}
  var HTMLMyTooltipElement: {
    prototype: HTMLMyTooltipElement;
    new (): HTMLMyTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement;
    'my-input': HTMLMyInputElement;
    'my-toggle': HTMLMyToggleElement;
    'my-tooltip': HTMLMyTooltipElement;
  }
}

declare namespace LocalJSX {
  interface MyButton extends JSXBase.HTMLAttributes<HTMLMyButtonElement> {
    /**
    * Disable button
    */
    'disabled'?: boolean;
    /**
    * Make button grow to 100%
    */
    'fluid'?: boolean;
    /**
    * Button kind
    */
    'kind'?: "default" | "primary" | "danger";
    /**
    * Optional string that can be used to set the button value
    */
    'text'?: string;
  }
  interface MyInput extends JSXBase.HTMLAttributes<HTMLMyInputElement> {
    /**
    * Disable Input
    */
    'disabled'?: boolean;
    /**
    * Show error state
    */
    'error'?: boolean;
    /**
    * Placeholder text
    */
    'placeholder'?: string;
    /**
    * Input text
    */
    'value'?: string;
  }
  interface MyToggle extends JSXBase.HTMLAttributes<HTMLMyToggleElement> {
    /**
    * Disable Toggle
    */
    'disabled'?: boolean;
    /**
    * Set on state
    */
    'on'?: boolean;
  }
  interface MyTooltip extends JSXBase.HTMLAttributes<HTMLMyTooltipElement> {
    /**
    * Arrow position
    */
    'arrow'?: "top" | "right" | "bottom" | "left";
    /**
    * Set error state
    */
    'error'?: boolean;
    /**
    * Set text
    */
    'text'?: string;
  }

  interface IntrinsicElements {
    'my-button': MyButton;
    'my-input': MyInput;
    'my-toggle': MyToggle;
    'my-tooltip': MyTooltip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


