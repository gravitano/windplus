# Forms

<div class="card card-bordered">
<div class="card-header">
  Forms
</div>
<form class="">
  <div class="card-body">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input id="name" type="text" placeholder="Name" class="form-input" />
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input id="email" type="email" placeholder="Email" class="form-input has-error" />
      <div class="text-error-500 text-sm">Some error message</div>
    </div>
    <div class="form-group">
      <label for="age" class="form-label">Age</label>
      <input id="age" type="number" placeholder="Age" class="form-input w-full sm:w-2/12" />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password</label>
      <input id="password" type="password" placeholder="Password" class="form-input" />
    </div>
    <div class="form-group">
      <label for="sex" class="form-label">Gender</label>
      <div class="w-full flex gap-4">
        <label class="flex gap-2 items-center">
          <input name="sex" value="male" type="radio" />
          Male
        </label>
        <label class="flex gap-2 items-center">
          <input name="sex" value="female" type="radio" />
          Female
        </label>
      </div>
    </div>
    <div class="form-group">
      <label for="hobbies" class="form-label">Hobbies</label>
      <div class="w-full flex gap-4">
        <label class="flex gap-2 items-center">
          <input name="hobbies" value="sport" type="checkbox" />
          Sport
        </label>
        <label class="flex gap-2 items-center">
          <input name="hobbies" value="programming" type="checkbox" />
          Programming
        </label>
      </div>
    </div>
    <div class="form-group">
      <label for="interest" class="form-label">Interest</label>
      <select id="interest" name="interest" class="form-input">
        <option value="">Select</option>
        <option>Backend</option>
        <option>Frontend</option>
      </select>
    </div>
    <div class="form-group">
      <label for="address" class="form-label">Address</label>
      <textarea id="address" class="form-input" placeholder="Your Address"></textarea>
    </div>
  </div>
  <div class="card-footer pt-3 bg-gray-100">
    <button class="btn btn-primary">Submit</button>
    <button class="btn btn-text btn-default">Cancel</button>
  </div>
</form>
</div>
