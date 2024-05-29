const Header = ({course}) => {
  console.log('Header')
  return(
    <div>
    <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('Content')
  return(
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}

const Total = ({parts}) => {
  console.log('Total')
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const Part = ({part, exercise}) => {
  console.log('part')
  return(
    <div>
      <p>{part} {exercise}</p>
    </div>
  )
}


const App = () => {
  const course_name = 'Half Stack application development'
  const course_parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10

    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
   <div>
    <Header course={course_name} />
    <Content parts={course_parts}/>
    <Total parts={course_parts}/>
   </div>
  )
}

export default App