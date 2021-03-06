<div>
  <div
    class="py-10 sm:py-32 bg-gradient-to-tr from-secondary-500 to-primary-500 text-center text-white"
  >
    <div class="font-bold text-3xl mb-2">WindPlus</div>
    <div class="mb-4">Tailwind Component Collection</div>
    <router-link to="/accordions/" class="btn btn-secondary btn-lg hover:no-underline"
      > Get Started </router-link>
  </div>

  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-3 container mx-auto my-5 px-4 sm:px-0"
  >
  <!-- item -->
  <div class="card card-bordered">
    <div class="card-header">Alerts</div>
    <div class="card-body space-y-2">
      <div class="alert alert-primary">
        Alert Component
        <div class="flex-grow"></div>
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="alert alert-secondary">
        Alert Component
        <div class="flex-grow"></div>
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- ./alert -->
      <!-- alert -->
      <div class="alert alert-default">
        Alert Component
        <div class="flex-grow"></div>
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- ./alert -->
    </div>
    <div class="card-footer">
      <router-link to="/alerts/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- end item -->
  <!-- item -->
  <div class="card card-bordered">
    <div class="card-header">Buttons</div>
    <div class="card-body">
      <div class="flex gap-2 flex-wrap">
        <button class="btn btn-default">default</button>
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-info">info</button>
        <button class="btn btn-warning">warning</button>
        <button class="btn btn-success">success</button>
        <button class="btn btn-error">error</button>
      </div>
    </div>
    <div class="card-footer">
      <router-link to="/buttons/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- end item -->
  <!-- item -->
  <div class="card card-bordered">
    <div class="card-header">Cards</div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">Header</div>
        <div class="card-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          consectetur quidem non facilis assumenda dolorem.
        </div>
        <div class="card-footer">Footer</div>
      </div>
    </div>
    <div class="card-footer">
      <router-link to="/cards/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- end item -->
  <!-- item -->
  <div class="card card-bordered">
    <div class="card-header">Lists</div>
    <div class="card-body">
      <div class="list-group list-bordered list-hover">
        <div class="list-group-item">List Active</div>
        <div class="list-group-item">List Disabled</div>
        <div class="list-group-item">List Item</div>
        <div class="list-group-item">List Item</div>
        <div class="list-group-item disabled">List Item</div>
      </div>
    </div>
    <div class="card-footer">
      <router-link to="/list-group/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- end item -->
  <!-- item -->
  <div class="card card-bordered">
    <div class="card-header">Forms</div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-input" id="name" />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-input" id="email" />
        </div>
        <div class="flex gap-2">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-default">Cancel</button>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <router-link to="/forms/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- end item -->
  <!-- item -->
  <div class="card card-bordered mb-5">
    <div class="card-header">Accordion</div>
    <div class="card-body">
      <div class="accordion">
        <div
          v-for="i in 3"
          :key="i"
          class="accordion-item"
          :class="[i === 1 ? 'open' : '']"
        >
          <div class="accordion-header">
            <button type="button">
              Item 1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div class="accordion-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quis unde voluptatum, exercitationem tempore, eligendi
            perspiciatis magnam nam atque asperiores esse perferendis porro
            molestias necessitatibus aperiam saepe mollitia eos sunt.
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <router-link to="/accordions/" class="btn btn-block btn-outlined btn-primary"
        > View </router-link>
    </div>
  </div>
  <!-- ./item -->
</div>
</div>
