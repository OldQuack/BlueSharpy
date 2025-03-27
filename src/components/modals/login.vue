<script>
import axios from "axios";

export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token); // Store token
        this.$emit("close"); // Close modal
      } catch (error) {
        this.errorMessage = "Invalid email or password";
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold text-center mb-4">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            class="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm mb-2">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      <button
        @click="closeModal"
        class="mt-4 w-full text-gray-600 hover:text-gray-900 text-sm"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styling if needed */
</style>
