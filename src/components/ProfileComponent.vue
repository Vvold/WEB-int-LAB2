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
          <a class="nav-link" href="AboutComponent.vue">About Us</a>
          <a class="nav-link" href="#">Profile</a>
          <a class="nav-link" href="../../index.html">EXIT</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card bg-secondary mb-3 about-me-card">
          <div class="card-header bg-secondary text-white" align="center"><h5>PROFILE</h5></div>
          <div class="card-body bg-secondary">
            <div class="row mb-3">
              <span class="col-4 text-white">Name :</span>
              <p class="col-7">No information available</p>
            </div>
            <div class="row mb-3">
              <span class="col-4 text-white">Email :</span>
              <p class="col-7">No information available</p>
            </div>
            <div class="row mb-3">
              <span class="col-4 text-white">Sex :</span>
              <p class="col-7">No information available</p>
            </div>
            <div class="row mb-3">
              <span class="col-4 text-white">Birth date :</span>
              <p class="col-4">No information available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="btn btn-primary" href="AboutComponent.vue">Back</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      user: {
        name: '',
        email: '',
        sex: '',
        birth: ''
      }
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  },
  methods: {
    logout() {
      console.log('logout');
      localStorage.clear();
      this.$router.push('/login');
    }
  }
});
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.about-me-card {
  margin-top: 20px;
}
</style>
