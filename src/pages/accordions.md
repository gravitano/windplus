# Accordion

<div class="card card-bordered mb-5" id="default">
  <div class="card-header">Default</div>
  <div class="card-body">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <div class="accordion-header">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
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
        <div
          id="collapseOne"
          class="accordion-body collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          quis unde voluptatum, exercitationem tempore, eligendi
          perspiciatis magnam nam atque asperiores esse perferendis porro
          molestias necessitatibus aperiam saepe mollitia eos sunt.
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            Item 2
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
        <div
          id="collapseTwo"
          class="accordion-body collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          quis unde voluptatum, exercitationem tempore, eligendi
          perspiciatis magnam nam atque asperiores esse perferendis porro
          molestias necessitatibus aperiam saepe mollitia eos sunt.
        </div>
      </div>
    </div>
  </div>
  
</div>

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <div class="accordion-header">
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
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
    <div
      id="collapseOne"
      class="accordion-body collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis unde
      voluptatum, exercitationem tempore, eligendi perspiciatis magnam nam atque
      asperiores esse perferendis porro molestias necessitatibus aperiam saepe
      mollitia eos sunt.
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        Item 2
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
    <div
      id="collapseTwo"
      class="accordion-body collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis unde
      voluptatum, exercitationem tempore, eligendi perspiciatis magnam nam atque
      asperiores esse perferendis porro molestias necessitatibus aperiam saepe
      mollitia eos sunt.
    </div>
  </div>
</div>
```

<div class="card card-bordered mb-5" id="flush">
  <div class="card-header">Flush</div>
  <div class="card-body">
    <div class="accordion accordion-flush" id="accordionExample2">
      <div class="accordion-item">
        <div class="accordion-header">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            Item 1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 accordion-header-icon"
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
        <div
          id="collapse1"
          class="accordion-body collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample2"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          quis unde voluptatum, exercitationem tempore, eligendi
          perspiciatis magnam nam atque asperiores esse perferendis porro
          molestias necessitatibus aperiam saepe mollitia eos sunt.
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="true"
            aria-controls="collapse2"
          >
            Item 2
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 accordion-header-icon"
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
        <div
          id="collapse2"
          class="accordion-body collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample2"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          quis unde voluptatum, exercitationem tempore, eligendi
          perspiciatis magnam nam atque asperiores esse perferendis porro
          molestias necessitatibus aperiam saepe mollitia eos sunt.
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion accordion-flush" id="accordionExample2">...</div>
```
