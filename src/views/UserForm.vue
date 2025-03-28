<template>
    <div>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Name" v-model="user.name" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input type="text" class="form-control" placeholder="email" v-model="user.email" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Username</label>
            <input
                type="text"
                class="form-control"
                placeholder="username"
                v-model="user.username"
            />
        </div>
    </div>
    <button class="btn btn-primary" @click="saveUser">Save user</button>
</template>

<script setup>
import { reactive } from "vue";
import { apiService } from "../api/apiService";

const user = reactive({
    name: "",
    email: "",
    username: "",
});

const saveUser = async () => {
    try {
        const response = await apiService.post("users", user);
        console.log(user);
    } catch (err) {
        console.error(err);
    }
};
</script>
