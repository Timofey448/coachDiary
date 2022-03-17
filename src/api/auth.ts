import students from './students.json'
export function login(data) {

  try {
    for (let student of students) {
      if (student.email == data.email) {
        return student
      } else {
        continue
      }
    }
  } catch(err) {
    console.log("ERROR:" + err.message);
  }
}
