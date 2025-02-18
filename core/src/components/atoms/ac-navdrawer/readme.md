# ac-navdrawer



























































































































































<!-- Auto Generated Below -->


## Overview

Accera's Sidebar webcomponent.

## Properties

| Property     | Attribute     | Description                                   | Type               | Default     |
| ------------ | ------------- | --------------------------------------------- | ------------------ | ----------- |
| `compact`    | `compact`     | Compact mode.                                 | `boolean`          | `undefined` |
| `mode`       | `mode`        | Control the mode of the navedrawer.           | `"over" \| "push"` | `'push'`    |
| `options`    | --            | List of option to be show on the header.      | `AcDropOption[]`   | `undefined` |
| `showToggle` | `show-toggle` | Show or hide toggle button                    | `boolean`          | `true`      |
| `theme`      | `theme`       | The color theme.                              | `string`           | `undefined` |
| `title`      | `title`       | Show title in the navdrawer and toggle header | `string`           | `undefined` |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `close` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [ac-drop-down-menu](../../molecules/ac-drop-down-menu)
- [ac-button](../ac-button)

### Graph
```mermaid
graph TD;
  ac-navdrawer --> ac-drop-down-menu
  ac-navdrawer --> ac-button
  ac-drop-down-menu --> ac-button
  ac-drop-down-menu --> ac-drop-option
  style ac-navdrawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
