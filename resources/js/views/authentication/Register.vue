<template>
  <div class="container">
    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Registrar una cuenta</div>
      <div class="card-body">
        <form >
          <div class="form-group mb-0">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-label-group">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter Full Name"
                    autofocus="autofocus"
                    />
                  <label for="name">Meter nombre completo</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email address"
                      />
                    <label for="email">Dirección de email</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-label-group">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    />
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-label-group">
                  <input
                    type="password"
                    id="password_confirmation"
                    class="form-control"
                    placeholder="Confirm password"
                    />
                  <label for="password_confirmation">Confirmar contraseña</label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Registrar</button>
        </form>
        <div class="text-center">
          <router-link class="d-block small mt-3" to="/login">Login</router-link>
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