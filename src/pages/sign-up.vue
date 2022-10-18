<template>
  <div class="flex flex-col items-center bg-gray-100 min-h-screen">
    <img class="h-40 w-40 md:h-60 md:w-80" src="../assets/logo.svg" alt="">
    <form
      class="flex flex-col bg-white py-6 px-6 font-medium w-72 md:w-600"
      @submit.prevent="submitForm"
    >      
      <div class="flex flex-col mb-4">
        <label class="mb-1 text-sky-600">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          class="border rounded-md p-2 text-sm"
          v-model="fields.name"
        >
        <span class="text-red-500">{{ fieldsErrors.name }}</span>      
      </div>
      
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

      <div class="flex flex-col mb-4">
        <label class="mb-1 text-sky-600">Password confirm</label>
        <input
          type="text"
          placeholder="Confirm your password"
          class="border rounded-md p-2 text-sm"
          v-model="fields.confirmedPassword"
        >
        <span class="text-red-500">{{ fieldsErrors.confirmedPassword }}</span>    
      </div>

      <div class="flex items-center text-gray-400 text-sm mb-2">
        <div class="mr-4">
          <input
            type="radio"
            value="coach"
            id="coach"
            name="radio"
            v-model="fields.role"
            class="mr-1"                     
          >
          <label for="coach">Coach</label>
        </div>
        
        <div>
          <input
            type="radio"
            value="student"
            id="mentee"
            name="radio"
            v-model="fields.role"
            class="mr-1"          
          >
          <label for="mentee">Mentee</label>
        </div>        
      </div>
      <span class="text-red-500">{{ fieldsErrors.role }}</span>

      <div class="flex flex-col">
        <button
          class="rounded-md bg-green-400 text-white font-medium p-2"
        >        
          Create your account
        </button>
      </div>

      
    </form>

    <div class="mt-3 flex">
      <router-link class="text-sky-400 font-medium" to="/sign-in">Log in</router-link>
      <p class="text-gray-400">(if you already have an account)</p> 
    </div>
  </div> 
</template>

<script>

export default {
  name: "sign-up",
  data() {
    return {
      fields: {
        name: "",
        email: "",
        password: "",
        confirmedPassword: "",
        role: "",
      },
      fieldsErrors: {
        name: null,
        email: null,
        password: null,
        confirmedPassword: null,
        role: null,
      },
    }
  },
  methods: {
    submitForm() {
      this.fieldsErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldsErrors).length) return;      
      
      this.$store.dispatch('signUp', this.fields);
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.name) errors.name = "New name required";
      if (!fields.email) errors.email = "New email required";
      if (!fields.password) errors.password = "New password required";
      if (fields.password && !fields.confirmedPassword) {
        errors.confirmedPassword = "Repeat password please";
      }
      if (!fields.password && !fields.confirmedPassword) {
        errors.confirmedPassword = "New password required";
      }
      if (fields.email && !this.isEmail(fields.email)) {
        errors.email = "Invalid Email";
      }
      if (fields.password && !this.isPassword(fields.password)) {
        errors.password = "Invalid Password";
      }
      if (fields.password && 
        this.isPassword(fields.password) &&
        (fields.password.length < 8 || fields.password.length > 12) ) {
        errors.password = "Please enter 8-12 characters";
      }
      if (fields.confirmedPassword && 
        fields.confirmedPassword !== fields.password) {
          errors.confirmedPassword = "Passwords mismath";
      }
      if (!fields.role) errors.role = "Please select your role";
      return errors;
    },
    isEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
    isPassword(password) {
      const passwordRegex = /[a-zA-Z0-9]/;
      return passwordRegex.test(password);      
    },    
  },
}
</script>

<style scoped></style>
