<template>
  <div class="flex flex-col bg-gray-100 min-h-screen px-2 py-3">
    <div class="flex items-center justify-between bg-white rounded-sm py-2 px-2 font-medium mb-4 shadow-sm">
      <!-- <img class="h-20 w-20 md:h-20 md:w-20" src="/src/assets/logo.svg" alt=""> -->
      <p class="text-sky-600 font-bold">LOGO</p>
      <div class="flex">
        <p class="text-gray-500 mr-4">{{ email }}</p>
        <router-link
          to="/sign-in"
          @click="logout"
        >Logout</router-link>
      </div>      
    </div>

    <div class="flex flex-col container mx-auto items-start bg-white rounded-sm py-6 px-6 shadow-lg w-3/4">
      <p class="text-2xl text-gray-700 font-bold mb-6">Welcome to CoachDiary, {{ name }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mentee-panel",
  data() {
    return {
      inputEmail: "",
      firstName: "",
      lastName: ""
    }
  },
  computed: {
    email() {
      return this.$store.state.auth.email;
    },
    name() {
      return this.$store.state.auth.name;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut');
    }
  },
}

</script>

<style scoped></style>
