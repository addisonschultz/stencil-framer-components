import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true
})
export class MyButton {
  /**
   * The text property for MyButton
   */
  @Prop() text: string;

  render() {
    return <button>{this.text}</button>;
  }
}
