import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "my-toggle",
  styleUrl: "my-toggle.css",
  shadow: true
})
export class MyToggle {
  /** Disable Toggle */
  @Prop() disabled?: boolean = false;

  /** Set on state  */
  @Prop() on?: boolean = false;

  @State() toggle: boolean = false;

  render() {
    return (
      <span
        class={`${this.disabled ? "disabled" : ""} ${
          this.toggle || this.on ? "on" : ""
        }`}
        onClick={() => this.toggleClick()}
      />
    );
  }

  toggleClick() {
    this.toggle = !this.toggle;
  }
}
