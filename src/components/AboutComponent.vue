<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"><img src="../../logo.png"
                                   alt="png"
                                   width="25"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="MainPageComponent.vue">Work Page</a>
          <a class="nav-link" href="#">About Us</a>
          <a class="nav-link" href="ProfileComponent.vue">Profile</a>
          <a class="nav-link" href="../../index.html">EXIT</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="card bg-secondary mb-3 about-app-card">
      <div class="card-header bg-secondary text-white text-center"><h5>ABOUT US</h5></div>
      <div class="card-body bg-secondary">
        <div class="row">
          <div class="col text-white">
            <div class="logo"></div>
            <p> PHONE DIRECTORY - is an app that gives you access to a list of your phone numbers.</p>
            <p>The user can register on the site, he will have his own profile.</p>
            <p>The user can:</p>
            <ul>
              <li>add new phone numbers</li>
              <li>delete phone numbers</li>
              <li>sort numbers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.about-app-card {
  margin-top: 20px;
}

.logo {
  background-image: url('../../logo.png');
  width: 50px;
  height: 50px;
  background-size: cover;
}
</style>
