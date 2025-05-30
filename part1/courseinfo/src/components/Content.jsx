const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return parts.map((item, index) => {
    return (
      <Part key={index} part={item.name} exercises={item.exercises} />
    )
  })
}

export default Content