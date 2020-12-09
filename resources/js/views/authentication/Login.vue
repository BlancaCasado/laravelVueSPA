<template>
  <div class="container">
  <div class="card card-login mx-auto mt-5">
    <div class="card-header">Login</div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <div class="form-label-group">
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Email address"
              autofocus="autofocus"
              />
            <label for="email">Dirección de email</label>
          </div>
        </div>
        <div class="form-group">
          <div class="form-label-group">
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              />
            <label for="password">Contraseña</label>
          </div>
        </div>
        <div class="form-group">
          <div class="checkbox">
            <label>
            <input type="checkbox" value="remember-me" />
            Recordar contraseña
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
      <div class="text-center">
        <router-link to="/register" class="d-block small mt-3">Registrar una cuenta</router-link>
        <router-link to="/reset-password" class="d-block small">¿Olvidaste tu contraseña?</router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    created() {
      document.querySelector('body').style.backgroundColor = '#BB002D';
    }
  };
</script>