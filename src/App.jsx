import UndoRedo_1 from './30react/1.UndoRedo'
import './App.css'
import Apple from './lecture1/Apple'
import Child from './lecture1/Child'
import Header from './lecture1/Header'
import Lecture from './lecture1/Lecture'

function App() {
  const people = [
  {
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com"
  },
  {
    name: "Brian Smith",
    age: 34,
    email: "brian.smith@example.com"
  },
  {
    name: "Catherine Lee",
    age: 25,
    email: "catherine.lee@example.com"
  },
  {
    name: "David Kim",
    age: 42,
    email: "david.kim@example.com"
  },
  {
    name: "Eva Martinez",
    age: 30,
    email: "eva.martinez@example.com"
  }
];


  return (
    <>
      {/* {people.map((person, index) => (
    <Child 
      key={index}
      name={person.name} 
      age={person.age} 
      email={person.email} 
    />
  ))} */}
    <UndoRedo_1/>
    </>
  )
}

export default App
