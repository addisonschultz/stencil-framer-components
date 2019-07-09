import { Component, h } from "@stencil/core";

@Component({
  tag: "my-input",
  styleUrl: "my-input.css",
  shadow: true
})
export class MyInput {
  render() {
    return <input />;
  }
}
