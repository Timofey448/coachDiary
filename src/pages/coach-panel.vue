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
      <p class="text-sm font-medium text-gray-500 mb-4">list of students</p>

      <div>
        <table
          class="table-auto w-full mb-4"
          v-if="this.students.length !== 0">
          <thead
            class="text-xs font-semibold uppercase text-gray-400">
            <tr>
              <th class="p-2 text-left">email</th>
              <th class="p-2 text-left">firstname</th>
              <th class="p-2 text-left">lastname</th>
              <th class="p-2 text-left">status</th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            <tr v-for="student in students">
              <td class="p-2">{{ student.email }}</td>
              <td class="p-2">{{ student.firstName }}</td>
              <td class="p-2">{{ student.lastName }}</td>
              <td class="p-2">{{ student.status }}</td>
            </tr>
          </tbody>
        </table>
        <input
          type="text"
          placeholder="student email"
          class="text-sm border rounded-md p-2 mr-2 mb-2"
          v-model="inputEmail"
        >
        <button
          @click="addNewStudent"
          class="rounded-md bg-sky-400 text-white font-medium px-6 py-2 w-auto"
        >Add your student
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import jsonStudents from '../fixtures/coach/students.json';

export default {
  name: "coach-panel",
  data() {
    return {
      inputEmail: "",
      // firstName: "Timofey",
      // lastName: "Prolubnikov"
    }
  },
  computed: {
    email() {
      return this.$store.state.auth.email;
    },
    students() {
      return this.$store.state.students.students;
    },
    name() {
      return this.$store.state.auth.name;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut');
    },
    // addNewStudent() {
    //   const student = {};

    //   if (this.inputEmail) {
    //     // student.studentEmail = this.inputEmail;
    //     student.status = "invited";      
    //     this.students.push(student);
    //     this.inputEmail = "";
    //     student.firstName = this.firstName;
    //     student.lastName = this.lastName;
    //   }
    //   this.$store.dispatch('addStudent', this.students);  
    // },
  },
  mounted() {    
    this.students = jsonStudents;
    this.$store.dispatch('addStudent', jsonStudents);
  }
}
</script>

<style scoped></style>
