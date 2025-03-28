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
        <router-link class="btn btn-primary d-flex align-items-center" to="user/new">
            <span class="material-symbols-outlined me-2">add</span>
            Add new
        </router-link>
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
                <tr v-for="(user, index) in filteredUsers" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="`/detail-user/${user.id}`" class="btn btn-primary"
                            >Detail</router-link
                        >
                        <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getAllUsers } from "../api/user";

const users = ref([]);
const searchUser = ref("");

onMounted(async () => {
    users.value = await getAllUsers();
});

const deleteUser = async (id) => {
    try {
        const response = await apiService.delete(`users/${id}`);
        console.log(response);
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
