<template>
  <div class="flex flex-col items-center bg-gray-100 min-h-screen">
    <img class="h-40 w-40 md:h-60 md:w-80" src="../../src/assets/logo.svg" alt="">
    <form
      class="flex flex-col bg-white py-6 px-6 font-medium w-72 md:w-600"
      @submit.prevent="submitForm"
    >
      <div class="flex flex-col mb-4">
        <label class="mb-1 text-sky-600">Email</label>
        <input
          type="text"
          placeholder="Enter your email adress"
          class="border rounded-md p-2 text-sm"
          v-model="fields.email"
        >
        <span class="text-red-500">{{ fieldsErrors.email }}</span>
      </div>

      <div class="flex flex-col mb-4">
        <label class="mb-1 text-sky-600">Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          class="border rounded-md p-2 text-sm"
          v-model="fields.password"
        >        
        <span class="text-red-500">{{ fieldsErrors.password }}</span>
      </div>
      <div class="flex flex-col">
        <button
          class="rounded-md bg-green-400 text-white font-medium p-2"
        >Start your work
        </button>
      </div>
      <span class="text-red-500 mt-2">{{ fieldsErrors.message }}</span>
    </form>
  </div> 
</template>

<script>
import { login } from "../api/auth";

export default {
  name: "sign-in",
  data() {
    return {
      fields: {
        name: "",
        email: "",
        password: "",
      },
      fieldsErrors: {
        name: null,
        email: null,
        password: null,
        message: null,
      },
    }
  },
  methods: {
    submitForm() {
      this.fieldsErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldsErrors).length) return;
      this.$store.dispatch('signIn', this.fields);
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.email) errors.email = "Email required";
      if (!fields.password) errors.password = "Password required";
      if (fields.password &&       
        (fields.password.length < 8 || fields.password.length > 12)) {
        errors.password = "Please enter 8-12 characters";
      } 
      if (login(fields) === undefined) errors.message = "Authentication Error"
      return errors;
    },
  },
}
</script>

<style scoped></style>