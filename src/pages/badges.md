# Badges

## Classes

| Class Name       | Description                                                               |
| :--------------- | :------------------------------------------------------------------------ |
| `badge`          | Badge Wrapper                                                             |
| `badge-${color}` | Badge [Color](/colors). e.g. `badge-primary`, `badge-secondary` and so on |
| `badge-rounded`  | Rounded Style                                                             |

## Heading

<docs>
<template #preview>
<h1 class="text-4xl font-semibold">Example heading <span class="badge badge-secondary text-4xl">New</span>
</h1>
<h2 class="text-3xl font-semibold">Example heading <span class="badge badge-secondary">New</span></h2>
<h3 class="text-2xl font-semibold">Example heading <span class="badge badge-secondary">New</span></h3>
<h4 class="text-xl font-semibold">Example heading <span class="badge badge-secondary">New</span></h4>
<h5 class="text-lg font-semibold">Example heading <span class="badge badge-secondary">New</span></h5>
<h6 class="text-base font-semibold">Example heading <span class="badge badge-secondary">New</span></h6>
</template>
<template #code>

```html
<h1 class="text-4xl font-semibold">
  Example heading <span class="badge badge-secondary text-4xl">New</span>
</h1>
<h2 class="text-3xl font-semibold">
  Example heading <span class="badge badge-secondary">New</span>
</h2>
<h3 class="text-2xl font-semibold">
  Example heading <span class="badge badge-secondary">New</span>
</h3>
<h4 class="text-xl font-semibold">
  Example heading <span class="badge badge-secondary">New</span>
</h4>
<h5 class="text-lg font-semibold">
  Example heading <span class="badge badge-secondary">New</span>
</h5>
<h6 class="text-base font-semibold">
  Example heading <span class="badge badge-secondary">New</span>
</h6>
```

</template>
</docs>

## Button

<docs>
<template #preview>
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-secondary">4</span>
</button>
</template>
<template #code>

```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-secondary">4</span>
</button>
```

</template>
</docs>

## Positioned

<docs>
<template #preview>
  <div class="space-x-6 my-4">
    <button type="button" class="btn btn-primary relative">
      Inbox
      <span class="absolute !px-2 -top-4 -right-4 badge badge-pill badge-error badge-rounded text-xs">
        99+
        <span class="sr-only">unread messages</span>
      </span>
    </button>
    <button type="button" class="btn btn-primary relative">
      Profile
      <span class="absolute -top-2 -right-2 badge badge-error badge-circle">
        <span class="sr-only">New alerts</span>
      </span>
    </button>
  </div>
</template>
<template #code>

```html
<button type="button" class="btn btn-primary relative">
  Inbox
  <span
    class="absolute !px-2 -top-4 -right-4 badge badge-pill badge-error badge-rounded text-xs"
  >
    99+
    <span class="sr-only">unread messages</span>
  </span>
</button>
<button type="button" class="btn btn-primary relative">
  Profile
  <span class="absolute -top-2 -right-2 badge badge-error badge-circle">
    <span class="sr-only">New alerts</span>
  </span>
</button>
```

</template>
</docs>

## Colors

<docs>
<template #preview>
<div class="space-x-1">
  <span class="badge badge-default">Default</span>
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-error">Error</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-dark">Dark</span>
</div>
</template>
<template #code>

```html
<div class="space-x-1">
  <span class="badge badge-default">Default</span>
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-error">Error</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-dark">Dark</span>
</div>
```

</template>
</docs>

## Rounded

<docs>
<template #preview>
  <div class="space-x-1">
    <span class="badge badge-rounded badge-default">Default</span>
    <span class="badge badge-rounded badge-primary">Primary</span>
    <span class="badge badge-rounded badge-secondary">Secondary</span>
    <span class="badge badge-rounded badge-success">Success</span>
    <span class="badge badge-rounded badge-error">Error</span>
    <span class="badge badge-rounded badge-warning">Warning</span>
    <span class="badge badge-rounded badge-info">Info</span>
    <span class="badge badge-rounded badge-dark">Dark</span>
  </div>
</template>
<template #code>

```html
<div class="space-x-1">
  <span class="badge badge-rounded badge-default">Default</span>
  <span class="badge badge-rounded badge-primary">Primary</span>
  <span class="badge badge-rounded badge-secondary">Secondary</span>
  <span class="badge badge-rounded badge-success">Success</span>
  <span class="badge badge-rounded badge-error">Error</span>
  <span class="badge badge-rounded badge-warning">Warning</span>
  <span class="badge badge-rounded badge-info">Info</span>
  <span class="badge badge-rounded badge-dark">Dark</span>
</div>
```

</template>
</docs>
