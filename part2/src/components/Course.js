const Course = ({ course }) => {
    let total = course.parts.reduce((sum, part) => { // <== Note `sum` parameter
      return sum + part.exercises;            // <== Using `sum`
    }, 0);
      
    return (
      <div>
        <h2>{course.name}</h2>
        {course.parts.map(part => (
          <p key={part.id}>{part.name} {part.exercises}</p>
        ))}
        <p><b>total of {total} exercises.</b></p>
      </div>
)}

export default Course;