# 👋 Cryptocons

## What is Cryptocons?

Cryptocons is a collection of named icon modules and utility functions for your project making it easier to create and manage cryptocurreny logos and branding.

Each icon is designed on a 24x24 grid and available as two types.

| Type  | Description                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------------- |
| Logo  | Plain logomark icons                                                                                             |
| Badge | Logomark icons contained in a shape that can be configured with different border radiuses from square to circle. |

## Installation

To install the package in your project run:

```bash
$ yarn add cryptocons

# or

$ npm i cryptocons
```

---

## Usage

### Basic usage

TBD

### Creating custom icons

Two methods for creating your icons:

-   The `Icon` component
-   The `createIcon` convenience function

The Icon component renders an SVG element to create custom icons on the fly. The createIcon function is a convenience wrapper allowing you to achieve the same result with less effort. The default `viewBox` is `0 0 24 24` when using the createIcon function. The Icon component will need supplied a `viewBox`. Every example below creates the same icon.

```jsx
import { Icon, createIcon } from 'cryptocons'

const CircleIcon = () => (
    <Icon viewBox="0 0 24 24">
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
)

const CircleIcon = createIcon({
    dPath: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
})

const CircleIcon = createIcon({
    path: (
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    ),
})
```

```jsx
import { Icon } from 'cryptocons'

const SquareIcon = () => (
    <Icon fill="none" width="24" height="24">
        <rect
            x="4"
            y="4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    </Icon>
)
```

### Accessibility

Paraphrasing from [CSS Tricks on accessible SVG implementation](https://css-tricks.com/accessible-svgs/) and [other references](https://css-tricks.com/accessible-svg-icons/), an icon can be implemented in 2 main ways.

#### 1. Decorative

Cryptocon icons assume decorative intent. What this means is icons have `aria-hidden="true"` and `focusable="false"` set by default. It's favorable to let assistive technology instead of the icon recognize parent elements. SVG elements with an `aria-label` are more verbose because they are announced as a group, so it's favorable to go with `aria-label` on the primary interactive parent element.

```jsx
<button onClick={navigateHome}>
    <Home />
    Navigate home
</button>
```

```jsx
<button aria-label="Navigate home">
    <Home />
</button>
```

When icons are wrapped by an interactive element, what’s important is that the link has informative text. Therefore, if a component can be described by visible text, it is recommended to reference that text with an `aria-label` attribute rather than using the `title` property.

```jsx
<a href="/" aria-label="Navigate home">
    <Home />
</a>
```

```jsx
<a href="/">
    Navigate home
    <Home />
</a>
```

#### 2. Standalone

> This implementation is discouraged. It's best to use an IconButton instead as it contains accessible interaction states.

Suppose the icon is being used as a standalone interactive element and isn't accompanied by a visible text label. In that case, it's best to use a combination of `role`, `aria-label`, and ensuring the icon can be discovered by assistive technology by setting `aria-hidden` to `false`.

```jsx
<Home
    onClick={navigateHome}
    role="img"
    aria-label="Navigate home"
    aria-hidden={false}
/>
```

---

## Building locally

TBD
