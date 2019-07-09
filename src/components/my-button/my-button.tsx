import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true
})
export class MyButton {
  /**
   * Optional string that can be used to set the button value
   */
  @Prop() text?: string;

  /**
   * Make button grow to 100%
   */
  @Prop() fluid?: boolean;

  /**
   * Disable button
   */
  @Prop() disabled?: boolean;

  /**
   * Button kind
   */
  @Prop() kind?: "default" | "primary" | "danger";

  render() {
    return (
      <button
        class={`${this.fluid ? "fluid" : ""} ${
          this.disabled ? "disabled" : ""
        } ${this.kind ? this.kind : ""}`}
      >
        {this.text}
      </button>
    );
  }
}
