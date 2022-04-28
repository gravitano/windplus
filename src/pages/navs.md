# Navigation

<div class="card card-bordered mb-5" id="default">
  <div class="card-header">
    Default
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav">
      <button type="button" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="center">
  <div class="card-header">
    Center
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-center">
      <button type="button" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="right">
  <div class="card-header">
    Right Aligned
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-right">
      <button type="button" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id='vertical'>
  <div class="card-header">
    Vertical
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-vertical nav-left">
      <button type="button" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="tabs">
  <div class="card-header">
    Tabs
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-tabs">
      <button type="button" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="line">
  <div class="card-header">
    Line
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-tabs-alt">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="links">
  <div class="card-header">
    Links
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-links">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="pills">
  <div class="card-header">
    Pills
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-pills">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="rounded">
  <div class="card-header">
    Pills Rounded
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-pills nav-pills-rounded">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="bordered">
  <div class="card-header">
    Pills Rounded Bordered
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="flex gap-4">
      <button class="btn btn-default btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="nav nav-pills nav-pills-rounded nav-border flex-grow">
        <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
          :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
          Item {{ i }}
        </a>
      </div>
      <button class="btn btn-default btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="dropdown">
  <div class="card-header">
    Dropdown
  </div>
  <div class="card-body overflow-x-auto relative">
    <div class="nav nav-pills">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
      <div class="dropdown dropdown-hover group">
        <button class="nav-item dropdown-activator">Dropdown</button>
        <ul class="dropdown-menu dropdown-menu-right group-hover:block">
          <li><a href="javascript:void(0)" class="dropdown-item active">Active</a></li>
          <li><a href="javascript:void(0)" class="dropdown-item">Action 1</a></li>
          <li><a href="javascript:void(0)" class="dropdown-item">Action 2</a></li>
          <li><a href="javascript:void(0)" class="dropdown-item">Action 3</a></li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
          <li><a href="javascript:void(0)" class="dropdown-item">Action 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="fill">
  <div class="card-header">
    Fill
  </div>
  <div class="card-body overflow-x-auto relative gap-4">
    <div class="nav nav-tabs nav-fill">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
    <div class="nav nav-tabs-alt nav-fill">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
    <div class="nav nav-pills nav-fill">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
    <div class="nav nav-pills nav-pills-rounded nav-fill">
      <a href="javascript:void(0);" v-for="i in 4" :key="i" class="nav-item"
        :class="[i === 1 ? 'active' : '', {disabled: i === 4} ]" :disabled="i === 4">
        Item {{ i }}
      </a>
    </div>
  </div>
</div>
