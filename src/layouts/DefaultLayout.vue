<template>
  <div class="d-flex">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
</script>