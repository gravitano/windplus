---
title: Button Group
meta:
  - name: description
content: Button Group Component
name: Button Group
---

# Button Group

## Classes

| Class Name              | Description                 |
| :---------------------- | :-------------------------- |
| `button-group`          | Button Group Wrapper        |
| `button-group-vertical` | Button Group Vertical Style |
| `button-toolbar`        | Button Toolbar              |

## Basic

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
</template>
<template #code>

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

</template>
</docs>

## Mixed Styles

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-error">Left</button>
    <button type="button" class="btn btn-warning">Middle</button>
    <button type="button" class="btn btn-success">Right</button>
  </div>
</template>
<template #code>

```html
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-error">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
```

</template>
</docs>

## Outlined

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outlined btn-primary">Left</button>
    <button type="button" class="btn btn-outlined btn-primary">Middle</button>
    <button type="button" class="btn btn-outlined btn-primary">Right</button>
  </div>
</template>
<template #code>

```html
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outlined btn-primary">Left</button>
  <button type="button" class="btn btn-outlined btn-primary">Middle</button>
  <button type="button" class="btn btn-outlined btn-primary">Right</button>
</div>
```

</template>
</docs>

## Checkbox

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
    <label class="btn btn-outlined btn-primary" for="btncheck1">Checkbox 1</label>
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
    <label class="btn btn-outlined btn-primary" for="btncheck2">Checkbox 2</label>
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
    <label class="btn btn-outlined btn-primary" for="btncheck3">Checkbox 3</label>
  </div>
</template>
<template #code>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Basic checkbox toggle button group"
>
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
  <label class="btn btn-outlined btn-primary" for="btncheck1">Checkbox 1</label>
  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
  <label class="btn btn-outlined btn-primary" for="btncheck2">Checkbox 2</label>
  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
  <label class="btn btn-outlined btn-primary" for="btncheck3">Checkbox 3</label>
</div>
```

</template>
</docs>

## Radio

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-outlined btn-primary" for="btnradio1">Radio 1</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label class="btn btn-outlined btn-primary" for="btnradio2">Radio 2</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
    <label class="btn btn-outlined btn-primary" for="btnradio3">Radio 3</label>
  </div>
</template>
<template #code>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio1"
    autocomplete="off"
    checked
  />
  <label class="btn btn-outlined btn-primary" for="btnradio1">Radio 1</label>
  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio2"
    autocomplete="off"
  />
  <label class="btn btn-outlined btn-primary" for="btnradio2">Radio 2</label>
  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio3"
    autocomplete="off"
  />
  <label class="btn btn-outlined btn-primary" for="btnradio3">Radio 3</label>
</div>
```

</template>
</docs>

## Toolbar

<docs>
<template #preview>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-primary">1</button>
      <button type="button" class="btn btn-primary">2</button>
      <button type="button" class="btn btn-primary">3</button>
      <button type="button" class="btn btn-primary">4</button>
    </div>
    <div class="btn-group me-2" role="group" aria-label="Second group">
      <button type="button" class="btn btn-secondary">5</button>
      <button type="button" class="btn btn-secondary">6</button>
      <button type="button" class="btn btn-secondary">7</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-info">8</button>
    </div>
  </div>
</template>
<template #code>

```html
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
```

</template>
</docs>

## Nesting

<docs>
<template #preview>
  <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
</template>
<template #code>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Button group with nested dropdown"
>
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>
  <div class="btn-group" role="group">
    <button
      id="btnGroupDrop1"
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
```

</template>
</docs>

## Vertical

<docs preview-class="space-y-2">
<template #preview>
    <div>
      <div class="btn-group btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-primary">1</button>
        <button type="button" class="btn btn-primary">2</button>
        <div class="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="btn-toolbar btn-group-vertical" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-vertical me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-primary">1</button>
          <button type="button" class="btn btn-primary">2</button>
          <button type="button" class="btn btn-primary">3</button>
          <button type="button" class="btn btn-primary">4</button>
        </div>
        <div class="btn-group btn-group-vertical me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-secondary">5</button>
          <button type="button" class="btn btn-secondary">6</button>
          <button type="button" class="btn btn-secondary">7</button>
        </div>
        <div class="btn-group btn-group-vertical" role="group" aria-label="Third group">
          <button type="button" class="btn btn-info">8</button>
        </div>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outlined btn-primary" for="btnradio1">Radio 1</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outlined btn-primary" for="btnradio2">Radio 2</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outlined btn-primary" for="btnradio3">Radio 3</label>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
        <label class="btn btn-outlined btn-primary" for="btncheck1">Checkbox 1</label>
        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
        <label class="btn btn-outlined btn-primary" for="btncheck2">Checkbox 2</label>
        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
        <label class="btn btn-outlined btn-primary" for="btncheck3">Checkbox 3</label>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-vertical" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outlined btn-primary">Left</button>
        <button type="button" class="btn btn-outlined btn-primary">Middle</button>
        <button type="button" class="btn btn-outlined btn-primary">Right</button>
      </div>
    </div>
    </template>
    <template #code>

```html
<div>
  <div
    class="btn-group btn-group-vertical"
    role="group"
    aria-label="Basic example"
  >
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
</div>
<div>
  <div
    class="btn-group btn-group-vertical"
    role="group"
    aria-label="Button group with nested dropdown"
  >
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <div class="btn-group" role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
</div>
<div>
  <div
    class="btn-toolbar btn-group-vertical"
    role="toolbar"
    aria-label="Toolbar with button groups"
  >
    <div
      class="btn-group btn-group-vertical me-2"
      role="group"
      aria-label="First group"
    >
      <button type="button" class="btn btn-primary">1</button>
      <button type="button" class="btn btn-primary">2</button>
      <button type="button" class="btn btn-primary">3</button>
      <button type="button" class="btn btn-primary">4</button>
    </div>
    <div
      class="btn-group btn-group-vertical me-2"
      role="group"
      aria-label="Second group"
    >
      <button type="button" class="btn btn-secondary">5</button>
      <button type="button" class="btn btn-secondary">6</button>
      <button type="button" class="btn btn-secondary">7</button>
    </div>
    <div
      class="btn-group btn-group-vertical"
      role="group"
      aria-label="Third group"
    >
      <button type="button" class="btn btn-info">8</button>
    </div>
  </div>
</div>
<div>
  <div
    class="btn-group btn-group-vertical"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      checked
    />
    <label class="btn btn-outlined btn-primary" for="btnradio1">Radio 1</label>
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio2"
      autocomplete="off"
    />
    <label class="btn btn-outlined btn-primary" for="btnradio2">Radio 2</label>
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio3"
      autocomplete="off"
    />
    <label class="btn btn-outlined btn-primary" for="btnradio3">Radio 3</label>
  </div>
</div>
<div>
  <div
    class="btn-group btn-group-vertical"
    role="group"
    aria-label="Basic checkbox toggle button group"
  >
    <input
      type="checkbox"
      class="btn-check"
      id="btncheck1"
      autocomplete="off"
    />
    <label class="btn btn-outlined btn-primary" for="btncheck1"
      >Checkbox 1</label
    >
    <input
      type="checkbox"
      class="btn-check"
      id="btncheck2"
      autocomplete="off"
    />
    <label class="btn btn-outlined btn-primary" for="btncheck2"
      >Checkbox 2</label
    >
    <input
      type="checkbox"
      class="btn-check"
      id="btncheck3"
      autocomplete="off"
    />
    <label class="btn btn-outlined btn-primary" for="btncheck3"
      >Checkbox 3</label
    >
  </div>
</div>
<div>
  <div
    class="btn-group btn-group-vertical"
    role="group"
    aria-label="Basic outlined example"
  >
    <button type="button" class="btn btn-outlined btn-primary">Left</button>
    <button type="button" class="btn btn-outlined btn-primary">Middle</button>
    <button type="button" class="btn btn-outlined btn-primary">Right</button>
  </div>
</div>
```

</template>
</docs>
