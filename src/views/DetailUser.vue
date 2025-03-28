<template>
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

const route = useRoute();
const user = ref(null);

onMounted(() => {
    getUserById();
});

const getUserById = async () => {
    try {
        const data = await apiService.get(`users/${route.params.id}`);
        user.value = data;
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
</script>
