![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Framer X / StencilJS Components

This repository is an example of a few components based on the [framer-bridge-starter-kit](https://github.com/framer/framer-bridge-starter-kit) component library, but built entirely in StencilJS Web Components.

These components can be used within any Web Framework, but were designed to illustrate the workflow between maintaining a Web Component based Design System in [Framer X](https://www.framer.com/).

---

## Components

This package contains 4 main components:

### `<my-button />`

A flexible button with multiple props to change the appearance.

| Property | Type      | Description           | Default        |
| -------- | --------- | --------------------- | -------------- |
| text     | `string`  | Button text           | `Download App` |
| fluid    | `boolean` | Width of button       | `true`         |
| disabled | `boolean` | Button disabled state | `false`        |
| kind     | `enum`    | Button Kind           | `default`      |

---

### `<my-input />`

An input field with props to change the appearance.

| Property    | Type      | Description          | Default |
| ----------- | --------- | -------------------- | ------- |
| value       | `string`  | Input value          |         |
| placeholder | `string`  | Input placeholder    | `Email` |
| disabled    | `boolean` | Input disabled state | `false` |
| error       | `boolean` | Input error state    | `false` |

---

### `<my-toggle />`

A usable toggle with props to change it's state.

| Property | Type      | Description           | Default |
| -------- | --------- | --------------------- | ------- |
| disabled | `boolean` | Toggle disabled state | `false` |
| on       | `boolean` | Toggle on state       | `false` |

---

### `<my-tooltip />`

A tooltip with props to change the appearance.

| Property | Type      | Description         | Default     |
| -------- | --------- | ------------------- | ----------- |
| arrow    | `enum`    | Arrow direction     | `left`      |
| text     | `string`  | Tooltip text        | `Component` |
| error    | `boolean` | Tooltip error state | `false`     |

---

## Using Components

Follow the steps below to use them in your project.

### **Script Tag in HTML**

1. Put this tag `<script src='https://unpkg.com/stencil-framer-components/dist/framerxcomponents.js'></script>` in the head of your index.html. You can use a different version by specifiying the verion following [this doc](https://unpkg.com/).
1. Use the custom elements listed above anywhere in your template, JSX, HTML, etc.

### **Framer X**

Check out this [starter kit](https://github.com/addisonschultz/yarn-monorepo) to learn more about how these components are maintained in Framer X, and see a working example of these living in a Framer X project.

Framer X uses React under the hood, but that doesn't mean you can't use you custom Web Components. The easiest way to include your components in Framer X is to add the script tag thorugh a custom React Hook. If you're new to React, a good place to start is [here](https://reactjs.org/docs/getting-started.html).

1. Add this [Gist](https://gist.github.com/addisonschultz/1811e75b498311211a7f6b8634fb27cd) to the `code` folder of your Framer X Project.
1. Add the custom hook + script URL to your component file. The script URL for these components is `"https://unpkg.com/stencil-framer-components/dist/framerxcomponents.js"`.
1. Use the custom elements in the render body of the Component.

### **Node_Modules**

1. Run `npm install stencil-framer-components --save`
1. Import the StencilJS component into the file you wish to use it in by adding `import my-button from "stencil-framer-components"` at the top.
1. Use the custom elements listed above anywhere in your template, JSX, HTML, etc.
