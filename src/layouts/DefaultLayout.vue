<template>
  <div class="d-flex p-2">
    <Sidebar />
    <div class="container p-3 box-shadow ms-2 ms-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--background-color);
  border-radius: 1rem !important;
  border: 1px solid var(--border-main-color);
}
</style>