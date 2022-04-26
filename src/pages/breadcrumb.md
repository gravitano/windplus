# Breadcrumb

## Classes

| Class Name               | Description                |
| :----------------------- | :------------------------- |
| `breadcrumb`             | Breadcrumb Wrapper         |
| `breadcrumb-underline`   | Breadcrumb Underline Style |
| `breadcrumb-item`        | Breadcrumb Item            |
| `breadcrumb-item active` | Active Breadcrumb Item     |
| `breadcrumb-divider`     | Breadcrumb Divider         |

## Default

<div class="card card-bordered mb-5" id="underline">
  <div class="card-body">
    <div class="breadcrumb">
      <template v-for="i in 5" :key="i">
        <a class="breadcrumb-item" :class="i === 5 ? 'active' : ''" href="javascript:void(0);">
          Link {{ i }}
        </a>
        <span v-if="i !== 5" class="breadcrumb-divider">
          /
        </span>
      </template>
    </div>
  </div>
  <!-- code-block -->
  <div class="code-block">
<!-- details -->
<details>
<summary>View Code</summary>

```html
<div class="breadcrumb">
  <template v-for="i in 5" :key="i">
    <a
      class="breadcrumb-item"
      :class="i === 5 ? 'active' : ''"
      href="javascript:void(0);"
    >
      Link {{ i }}
    </a>
    <span v-if="i !== 5" class="breadcrumb-divider"> / </span>
  </template>
</div>
```

</details>
<!-- ./details -->
  </div>
  <!-- ./code-block -->
</div>

## Underline

<div class="card card-bordered mb-5" id="underline">
  <div class="card-body">
    <div class="breadcrumb breadcrumb-underline">
      <template v-for="i in 5" :key="i">
        <a class="breadcrumb-item" :class="i === 5 ? 'active' : ''" href="javascript:void(0);">
          Link {{ i }}
        </a>
        <span v-if="i !== 5" class="breadcrumb-divider">/</span>
      </template>
    </div>
  </div>
  <!-- code-block -->
  <div class="code-block">
<!-- details -->
<details>
<summary>View Code</summary>

```html
<div class="breadcrumb breadcrumb-underline">
  <template v-for="i in 5" :key="i">
    <a
      class="breadcrumb-item"
      :class="i === 5 ? 'active' : ''"
      href="javascript:void(0);"
    >
      Link {{ i }}
    </a>
    <span v-if="i !== 5" class="breadcrumb-divider">/</span>
  </template>
</div>
```

</details>
<!-- ./details -->
  </div>
  <!-- ./code-block -->
</div>

## Arrow Icon

<div class="card card-bordered mb-5" id="arrow">
  <div class="card-body">
    <div class="breadcrumb">
      <template v-for="i in 5" :key="i">
        <a class="breadcrumb-item" :class="i === 5 ? 'active' : ''" href="javascript:void(0);">
          Link {{ i }}
        </a>
        <span v-if="i !== 5" class="breadcrumb-divider">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </template>
    </div>
    </div>
  <!-- code-block -->
  <div class="code-block">
<!-- details -->
<details>
<summary>View Code</summary>

```html
<div class="breadcrumb">
  <template v-for="i in 5" :key="i">
    <a
      class="breadcrumb-item"
      :class="i === 5 ? 'active' : ''"
      href="javascript:void(0);"
    >
      Link {{ i }}
    </a>
    <span v-if="i !== 5" class="breadcrumb-divider">
      <!-- arrow icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </template>
</div>
```

</details>
<!-- ./details -->
  </div>
  <!-- ./code-block -->
</div>
