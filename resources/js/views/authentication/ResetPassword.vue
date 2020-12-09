<template>
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Cambiar contraseña</div>
      <div class="card-body">
        <div class="text-center mb-4">
          <h4>Cambiar tu contraseña</h4>
        </div>
        <form>
          <div class="form-group">
            <div class="form-label-group">
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Enter email address"
                required="required"
                />
              <label for="inputEmail">Añadir dirección email</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Enter new password"
                required="required"
                />
              <label for="password">Añadir nueva contraseña</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input
                type="password"
                id="passwordConfirmation"
                class="form-control"
                placeholder="Confirm password"
                required="required"
                />
              <label for="passwordConfirmation">Confirmar contraseña</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">Cambiar contraseña</button>
        </form>
        <div class="text-center">
          <router-link to="/reset-password-request" class="d-block small mt-3">Reenviar código de verificación</router-link>
          <router-link class="d-block small" to="/login">Login</router-link>
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
