import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-tooltip",
  styleUrl: "my-tooltip.css",
  shadow: true
})
export class MyTooltip {
  /** Arrow position */
  @Prop() arrow?: "top" | "right" | "bottom" | "left" = "left";

  /** Set error state  */
  @Prop() error?: boolean = false;

  /** Set text */
  @Prop() text?: string = "Component";

  render() {
    return (
      <span
        class={`${this.error ? "error" : ""} ${this.arrow ? this.arrow : ""}`}
      >
        {this.text}
      </span>
    );
  }
}
