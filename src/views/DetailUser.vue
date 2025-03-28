<template>
    <router-link class="btn btn-secondary" to="/user">Back to list</router-link>
    <div>
        <h3>User id: {{ route.params.id }}</h3>
        <div v-if="user">
            <p>{{ user.name }}</p>
            <p>{{ user.username }}</p>
            <p>{{ user.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { apiService } from "../api/apiService";
import { useRoute } from "vue-router";
import { getUserById } from "../api/user";

const route = useRoute();
const user = ref(null);

onMounted(async () => {
    user.value = await getUserById(route.params.id);
});
</script>
