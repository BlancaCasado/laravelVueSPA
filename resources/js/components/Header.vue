<!-- Header.vue -->
<template>
  <nav class="sb-topnav navbar navbar-expand navbar-light" style="background-color: #9b9b9b;">
    <a class="navbar-brand font-italic" href="#">
      <router-link to="/home"><img src="storage\global_images\core-img\logo.png" width="175px" alt="" /></router-link>
      {{$store.state.profile.name}}
    </a>
    <button
      class="btn btn-link btn-sm order-1 order-lg-0"
      id="sidebarToggle"
      href="#"
    >
      <i class="fas fa-bars"></i>
    </button>
    <form
      class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
    >
      <div class="input-group">
        
      </div>
    </form>
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
        </a>
      </li>
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
        </div>
      </li>
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
        <i class="fas fa-user-circle fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <button class="dropdown-item" v-on:click="logout">Logout</button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
  import * as auth from '../services/auth_service';
  export default {
    methods: {
      logout: async function() {
        auth.logout();
        this.$router.push('/login');
      }
    }
  }
</script>