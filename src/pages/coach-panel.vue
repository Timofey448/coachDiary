<template>
  <div class="flex flex-col bg-gray-100 min-h-screen px-2 py-3">
    <div class="flex items-center justify-between bg-white rounded-sm py-2 px-2 font-medium mb-4 shadow-sm">
      <!-- <img class="h-20 w-20 md:h-20 md:w-20" src="/src/assets/logo.svg" alt=""> -->
      <p class="text-sky-600 font-bold">LOGO</p>
      <div class="flex">
        <p class="text-gray-500 mr-4">email</p>
        <p>Logout</p>
      </div>      
    </div>

    <div class="flex flex-col container mx-auto items-start bg-white rounded-sm py-6 px-6 font-bold shadow-lg w-3/4">
      <p class="text-2xl mb-4 text-gray-700">Welcome to CoachDiary, Timofey!</p>
      <button
        class="rounded-md border bg-sky-400 text-white font-medium px-6 py-2 w-auto"
      >
        Add your student
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "coach-panel"
}

</script>

<style scoped></style>