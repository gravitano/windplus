# WindPlus

Reusable Tailwind component collection.

> 🚧 Work in progress

## Features

- Rich Components
- Framework Agnostic
- ⚡️ Develop Faster

## Installation

Install the package as dev dependencies:

```
npm i windplus
```

Import `windplus/styles/main` into your tailwind styles:

```diff
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

+@import 'tailwindcss/base';
+@import 'tailwindcss/components';

+@import 'windplus/styles/main';

+@import 'tailwindcss/utilities';
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
