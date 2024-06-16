<template>
  <div class="container wrapper">
    <div class="row">
      <div class="col">
        <div class="card bg-dark mb-3 log-in-card">
          <div class="card-header text-white" align="center">Log In</div>
          <div class="card-body">
            <form action="#">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email"  placeholder="Email">
                <label for="email">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password"  placeholder="Password">
                <label for="password">Password</label>
              </div>
              <div class="card-footer text-end">
                <a class="btn btn-primary" href="AboutComponent.vue">Log Up</a>
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
  name: 'LogIn'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.log-in-card {
  margin-top: 20px;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
