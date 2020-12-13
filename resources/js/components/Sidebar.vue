<!-- Sidebar.vue -->
<template>
  <ul class="sidebar navbar-nav">
    <li class="nav-item">
      <router-link to="/home" class="nav-link" exact>
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/home/categories" class="nav-link" exact>
        <i class="fas fa-fw fa-chart-area"></i>
        <span> Categoría</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/home/histories" class="nav-link" exact>
        <i class="fas fa-fw fa-chart-area"></i>
        <span> Historia</span>
      </router-link>
    </li>
  </ul>
</template>
