import students from './students.json'
import axios from 'axios';

export function login(data) {
  try {
    for (let student of students) {
      if (student.email == data.email) {

        localStorage.setItem("currentUser", student.email);
        return student;
      }
    }
  } catch(err) {
    return false;
  }
}

export default function createUser(data) {
  axios.post('/api/auth/users', data = {
    name: data.name,
    email: data.email,
    password1: data.password,
    password2: data.confirmedPassword,
    role: data.role
  })
  .then(res => {console.log(res)})
  .catch(e => { console.log(e) })
}

