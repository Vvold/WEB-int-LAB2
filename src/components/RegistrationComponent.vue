<template>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col">
        <div class="card bg-dark mb-3 sign-up-card">
          <div class="card-header text-white" align="center">Registration</div>
          <div class="card-body">
            <form action="#">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
                <label for="firstName">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
                <label for="lastName">Last Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email">
                <label for="email">Email</label>
              </div>

              <div class="form-floating mb-3">
                <select class="form-select" id="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label for="sex">Sex</label>
              </div>

              <div class="form-floating mb-3">
                <input type="date" class="form-control" id="birth_date">
                <label for="birth_date">Your Birth Date</label>
              </div>

              <div class="card-footer text-end">
                <a class="btn btn-primary" href="AboutComponent.vue">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.sign-up-card {
  margin-top: 20px;
}
</style>
