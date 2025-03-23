<template>
  <div class="d-flex p-2">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
</script>