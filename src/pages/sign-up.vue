<template>
  <div class="flex flex-col items-center bg-gray-100 min-h-screen">
    <img class="h-40 w-40 md:h-80 md:w-80" src="/src/assets/logo.svg" alt="">
    <div class="flex flex-col bg-white py-6 px-6 font-medium w-72 md:w-600">
      <div class="flex flex-col mb-4">
        <span class="mb-1 text-sky-600">Email</span>
        <input
          type="text"
          placeholder="Enter your email adress"
          class="border rounded-md p-2 text-sm">
      </div>
      <div class="flex flex-col mb-4">
        <span class="mb-1 text-sky-600">Password</span>
        <input
          type="text"
          placeholder="Enter your password"
          class="border rounded-md p-2 text-sm">
      </div>
      <div class="flex flex-col mb-4">
        <span class="mb-1 text-sky-600">Password confirm</span>
        <input
          type="text"
          placeholder="Confirm your password"
          class="border rounded-md p-2 text-sm">
      </div>
       <div class="flex flex-col">
      <button class="rounded-md border bg-green-400 text-white font-medium p-2">Start your work</button>
      </div>
    </div>
    <div class="mt-3">
      <p class="text-gray-400"><a class="text-sky-400 font-medium">Log in</a> (if you already have an account)</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: "sign-up"
}
</script>

<style scoped></style>
