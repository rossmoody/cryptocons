# Cryptocons

## What is Cryptocons?

Cryptocons is a collection of named icon modules and utility functions making it easier to manage cryptocurreny icons in your project.

Each icon is placed on a 24x24 grid and available as two types:

1. **Logo**: Plain logomark icons
2. **Badge**: Logomark icons contained in a shape that can be configured with different border radiuses from square to circle.

---

## Quick start

For a detailed guide on Cryptocon component usage, [check out the website](https://www.cryptocons.io/how-to-use). To get started quickly and/or learn by inspecting, read on and check out the [CodeSandbox example](https://codesandbox.io/s/cryptocons-example-okpxc2?file=/src/App.tsx).

### 1. Install the package in your project

```bash
yarn add cryptocons

or

npm install cryptocons
```

### 2. Import icons

```jsx
import { Binance, BinanceBadge } from 'cryptocons'
```

### 3. Render the icons

```jsx
<Binance />
<BinanceBadge />
```

---

## Develop locally

If you want to tinker or contribute to Cryptocons, you will need to build the repo locally.

The content within the `scripts` directory is what automatically transforms XML into React components from within the `svg` directory. Most of the functions within are refactored and updated from the [svg2jsx](https://github.com/balajmarius/svg2jsx) library.

### Build

#### 1. Install the dependencies

```bash
yarn
```

#### 2. Run the scripts

```bash
yarn build
```

This will use `ts-node` to run all the functions in the `scripts` directory. These scripts will optimize, transform, and reformat the content within the `svg` directory into React components in the `components` directory.

#### 3. Run Storybook to view changes

```bash
yarn storybook
```

This will build the components within the `components` directory to `localhost:8000`. Any changes made to components will automatically rerender. Hack away.

### Accessibility

Implementing icons accessibly can be tricky but it's important. Especially if you plan on putting 400+ cryptocurrency icons on a page. Paraphrasing from [CSS Tricks on accessible SVG implementation](https://css-tricks.com/accessible-svgs/) and [other references](https://css-tricks.com/accessible-svg-icons/), an icon can be implemented in 2 main ways.

#### 1. Decorative

Cryptocon icons assume decorative intent. What this means is icons have `aria-hidden="true"` and `focusable="false"` set by default. It's favorable to let assistive technology instead of the icon recognize parent elements. SVG elements with an `aria-label` are more verbose because they are announced as a group, so it's favorable to go with `aria-label` on the primary interactive parent element.

```jsx
<button onClick={navigateHome}>
    <BinanceBadge />
    Navigate home
</button>
```

```jsx
<button aria-label="Do Binance action">
    <BinanceBadge />
</button>
```

When icons are wrapped by an interactive element, what’s important is that the link has informative text. Therefore, if a component can be described by visible text, it is recommended to reference that text with an `aria-label` attribute rather than using the `title` property.

```jsx
<a href="/" aria-label="Navigate home">
    <Coinbase />
</a>
```

```jsx
<a href="/">
    Navigate home
    <Coinbase />
</a>
```

#### 2. Standalone

> This implementation is discouraged. It's best to use an IconButton instead as it contains accessible interaction states. But if you're gonna do it, do it in the following way.

Suppose the icon is being used as a standalone interactive element and isn't accompanied by a visible text label. In that case, it's best to use a combination of `role`, `aria-label`, and ensuring the icon can be discovered by assistive technology by setting `aria-hidden` to `false`.

```jsx
<Home
    onClick={navigateHome}
    role="img"
    aria-label="Navigate home"
    aria-hidden={false}
/>
```
