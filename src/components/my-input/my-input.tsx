import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-input",
  styleUrl: "my-input.css",
  shadow: true
})
export class MyInput {
  /** Input text */
  @Prop() value?: string;

  /** Placeholder text */
  @Prop() placeholder?: string;

  /** Disable Input */
  @Prop() disabled?: boolean;

  /** Show error state */
  @Prop() error?: boolean;

  render() {
    return (
      <input
        value={this.value}
        placeholder={this.placeholder}
        // Todo: add support for different inputs through props
        type="text"
        class={`${this.error ? "error" : ""} ${
          this.disabled ? "disabled" : ""
        }`}
      />
    );
  }
}
