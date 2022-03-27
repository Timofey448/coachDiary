import students from './students.json'
export function login(data) {

  try {
    for (let student of students) {
      if (student.email == data.email) {       
        return student;        
      }
    }
  } catch(err) {
    return false;
  }
}
