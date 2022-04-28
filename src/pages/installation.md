# Installation

Install `windplus` and `@tailwindcss/forms`:

```bash
npm i windplus @tailwindcss/forms
```

Import `windplus/styles/main.css` into your main `css`. E.g. on your `src/index.css`:

```diff
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

+@import 'windplus/styles/main';
```

Set five new colors and extend tailwind config like so:

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
