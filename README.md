# Cryptocons

![Cryptocons cover](cover.png)

## What is Cryptocons?

Cryptocons is a collection of named icon modules and utility functions making it easier to manage cryptocurrency icons in your project.

Each icon is placed on a 24x24 grid and available as two types:

1. **Logo**: Plain logomark icons
2. **Badge**: Logomark icons contained in a shape that can be configured with different border radiuses from square to circle.

## Design Assets

Check out the [Figma library](https://www.figma.com/community/file/1100964857221715143/Cryptocurrency-Logos-and-Icons) for component assets.

---

## Quick start

For a detailed guide on Cryptocon component usage, [check out the website](https://www.cryptocons.io/documentation/usage). To get started quickly and/or learn by inspecting, read on and check out the [CodeSandbox example](https://codesandbox.io/s/cryptocons-example-okpxc2?file=/src/App.tsx).

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

## Contributing

Coming soon...
