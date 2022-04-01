<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  mounted() {
    let currentUserEmail = localStorage.getItem("currentUser");

    if (currentUserEmail != null) {
      this.$store.dispatch("signIn", {email: currentUserEmail});
    };   
  },
})
</script>

<style></style>
