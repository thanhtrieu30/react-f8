import { useState } from "react";



const courses = [
  {
    id: 1,
    name: 'JS'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'CSS'
  },
]




function App() {
  const [checked , setChecked] = useState([])


console.log(checked);
const handleCheck = (id) => {
  setChecked(prev => {
    const isChecked = checked.includes(id)
    if (isChecked) {
      return checked.filter(item => item !== id)
    }else {
      return [...prev,id]
    }
  })
}

const handleSubmit = () => {
  console.log({id : checked});
  
}

  return (
    <div style={{ padding: 32}}>
       {courses.map(course => (
        <div key={course.id}>
          <input
           type="checkbox"
           checked={checked.includes(course.id)}
           onChange={() => handleCheck(course.id)}
           />
           {course.name}
        </div>
       )

       )}

        <button onClick={handleSubmit} >Register</button>
    </div>
  );
}

export default App;
