# WindPlus

Reusable Tailwind component collection.

> 🚧 Work in progress

## Features

- Rich Components
- Framework Agnostic
- ⚡️ Develop Faster

## Installation

Install `windplus` and `@tailwindcss/forms`:

```
npm i windplus @tailwindcss/forms
```

Import `windplus/styles/main.css` into your tailwind main styles. E.g. on your `src/index.css`:

```diff
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

+@import 'tailwindcss/base';
+@import 'tailwindcss/components';

+@import 'windplus/styles/main';

+@import 'tailwindcss/utilities';
```

Extend tailwind config like so:

```js
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './*/index.html',
    './main.js',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
        info: colors.sky,
        warning: colors.amber,
        error: colors.red,
        success: colors.emerald,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
```

Start using the classes:

```html
<button class="btn btn-primary">Click Me</button>
```

## Development

**Install dependencies**:

```bash
pnpm i
```

**Run development server**:

```bash
pnpm dev
```

> Open http://localhost:3000.

**Build**:

```bash
pnpm dev
```

**Preview**:

```bash
pnpm preview
```

> Open preview at http://localhost

## License

MIT
