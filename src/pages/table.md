# Table

<div class="not-prose">
<div class="card card-bordered mb-5" id='default'>
  <div class="card-header">
    Default
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="outside">
  <div class="card-header">
    Outside Card Body
  </div>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="dense">
  <div class="card-header">
    Dense
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table table-dense">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="hover">
  <div class="card-header">
    Hover
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="stripped">
  <div class="card-header">
    Stripped
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table table-stripped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="small">
  <div class="card-header">
    Small Text
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="bordered">
  <div class="card-header">
    Bordered
  </div>
  <div class="card-body overflow-x-auto">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td>John Doe</td>
          <td>Frontend Developer</td>
          <td>johndoe@example.com</td>
          <td>Member</td>
          <td class="text-center">
            <button class="btn btn-icon btn-text btn-sm btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button class="btn btn-icon btn-text btn-sm btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card card-bordered mb-5" id="mixed-styles">
  <div class="card-header">
    Mixed Styles
  </div>
  <div class="card-body overflow-x-auto flex-col">
    <div
      class="inline-block min-w-full overflow-x-auto align-middle border-b border-gray-200 shadow sm:rounded-lg">
      <table class="table table-sm table-rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>John Doe</td>
            <td>Frontend Developer</td>
            <td>johndoe@example.com</td>
            <td>Member</td>
            <td class="text-center">
              <button class="btn btn-icon btn-text btn-sm btn-default">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button class="btn btn-icon btn-text btn-sm btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
