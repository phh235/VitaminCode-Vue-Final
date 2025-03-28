<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="form-group fs has-search d-flex align-items-center me-2 text-muted">
            <span class="material-symbols-outlined form-control-feedback">search</span>
            <input type="search" class="form-control" placeholder="Find user..." />
        </div>
        <button class="btn btn-primary d-flex align-items-center">
            <span class="material-symbols-outlined me-2">add</span>
            Add new
        </button>
    </div>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="users.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { apiService } from "../api/apiService";

const users = ref([]);

onMounted(() => {
    getAllUsers();
});

const getAllUsers = async () => {
    try {
        const data = await apiService.get("users");
        users.value = data;
        console.log(users.value);
    } catch (err) {
        console.error(err);
    }
};
</script>
