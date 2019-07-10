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
  @Prop() text?: string = "Download App";

  /**
   * Make button grow to 100%
   */
  @Prop() fluid?: boolean = true;

  /**
   * Disable button
   */
  @Prop() disabled?: boolean = false;

  /**
   * Button kind
   */
  @Prop() kind?: "default" | "primary" | "danger" = "default";

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
