<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="form-group fs has-search d-flex align-items-center me-2 text-muted">
            <span class="material-symbols-outlined form-control-feedback">search</span>
            <input
                type="search"
                class="form-control"
                placeholder="Find user..."
                v-model="searchUser"
            />
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
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center">
                    <td colspan="10" v-if="filteredUsers.length === 0">User not found.</td>
                </tr>
                <tr v-for="(user, index) in filteredUsers" :key="users.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="`/detail-user/${user.id}`" class="btn btn-primary"
                            >Detail</router-link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { apiService } from "../api/apiService";

const users = ref([]);
const searchUser = ref("");

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

// computed
const filteredUsers = computed(() => {
    return users.value.filter(
        (user) =>
            user.name.toLowerCase().includes(searchUser.value.toLowerCase()) ||
            user.email.toLowerCase().includes(searchUser.value.toLowerCase())
    );
});
</script>
