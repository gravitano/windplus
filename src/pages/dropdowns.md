# Dropdown

<div class="card card-bordered mb-5" id="default">
  <div class="card-header">
    Default
  </div>
  <div class="card-body">
    <div class="dropdown">
      <button class="btn btn-default" data-bs-toggle="dropdown" aria-expanded="false" id="dLabel">Dropdown
        Button</button>
      <ul class="dropdown-menu" aria-labelledby="dLabel">
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
<div class="card card-bordered mb-5" id="dense">
  <div class="card-header">
    Dense
  </div>
  <div class="card-body">
    <div class="dropdown dropdown-dense">
      <button class="btn btn-default" data-bs-toggle="dropdown" aria-expanded="false" id="dLabel2">Dropdown
        Button</button>
      <ul class="dropdown-menu" aria-labelledby="dLabel2">
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

<div class="card card-bordered mb-5" id="small">
  <div class="card-header">
    Small
  </div>
  <div class="card-body">
    <div class="dropdown dropdown-sm">
      <button class="btn btn-default" data-bs-toggle="dropdown" aria-expanded="false" id="dLabel3">Dropdown
        Button</button>
      <ul class="dropdown-menu" aria-labelledby="dLabel3">
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

<div class="card card-bordered mb-5" id="menu-right">
  <div class="card-header">
    Menu Right
  </div>
  <div class="card-body">
    <div>
      <div class="btn-group relative">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Right-aligned menu example
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="hover">
  <div class="card-header">
    Hover
  </div>
  <div class="card-body">
    <div>
      <div class="dropdown dropdown-hover group">
        <button class="btn btn-default dropdown-activator">Dropdown Button</button>
        <ul class="dropdown-menu group-hover:block">
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

<div class="card card-bordered mb-5" id="dark">
  <div class="card-header">
    Splits
  </div>
  <div class="card-body">
    <div>
      <!-- Example split danger button -->
      <div class="btn-group">
        <button type="button" class="btn btn-danger">Action</button>
        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card card-bordered mb-5" id="dark">
  <div class="card-header">
    Dark
  </div>
  <div class="card-body">
    <div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
          data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card card-bordered mb-40" id="direction">
  <div class="card-header">
    Direction
  </div>
  <div class="card-body">
    <div>
      <!-- Default dropup button -->
      <div class="btn-group dropup">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropup
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
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
      <!-- Split dropup button -->
      <div class="btn-group dropup">
        <button type="button" class="btn btn-secondary">
          Split dropup
        </button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
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
    <!-- right -->
    <div>
      <!-- Default dropend button -->
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropright
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
        </ul>
      </div>
      <!-- Split dropend button -->
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary">
          Split dropend
        </button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropright</span>
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
        </ul>
      </div>
    </div>
    <!-- left -->
    <div>
      <!-- Default dropstart button -->
      <div class="btn-group dropstart">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropstart
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
        </ul>
      </div>
      <!-- Split dropstart button -->
      <div class="btn-group">
        <div class="btn-group dropstart" role="group">
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropstart</span>
          </button>
          <ul class="dropdown-menu">
            <!-- Dropdown menu links -->
          </ul>
        </div>
        <button type="button" class="btn btn-secondary">
          Split dropstart
        </button>
      </div>
    </div>

  </div>
</div>
