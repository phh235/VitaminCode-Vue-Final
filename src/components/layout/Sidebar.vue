<template>
  <a class="btn btn-primary d-flex align-items-center" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
    aria-controls="offcanvasExample" style="height: 39px !important;">
    <span class="material-symbols-outlined">
      dock_to_left
    </span>
  </a>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Admin</h5>
      <span class="material-symbols-outlined custom-close" data-bs-dismiss="offcanvas" aria-label="Close">close</span>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group">
        <li v-for="(item, index) in menuItems" :key="index" class="list-group-item"
          :class="{ active: $route.path === item.path }">
          <router-link :to="item.path">
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { label: 'Home', path: '/' },
  { label: 'Users', path: '/user' },
  { label: 'Orders', path: '/orders' },
  { label: 'Products', path: '/products' },
  { label: 'Reports', path: '/reports' },
  { label: 'Settings', path: '/settings' }
]);
</script>

<style scoped>
.list-group {
  border: none;
}

.list-group-item {
  border: none;
  text-decoration: none !important;
  border-radius: 10px !important;
  margin-bottom: 10px;
  background-color: #fff !important;
  color: #000;
  transition: all .2s;

  &:hover {
    background-color: var(--primary-color) !important;
    color: #fff !important;
    cursor: pointer;
  }
}

.list-group-item a {
  text-decoration: none !important;
  color: #000;
}

.list-group-item.active {
  border: none;
  color: #fff !important;
  background-color: var(--primary-color) !important;
}
</style>