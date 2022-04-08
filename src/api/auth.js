// import students from './students.json'
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
  axios.post("http://51.250.105.185:8000/api/auth/users", {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
    data
  })
  .then(res => {console.log(res)})
  .catch(e => { console.log(e) })
}

