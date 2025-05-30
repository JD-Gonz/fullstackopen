const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ content }) => {
  console.log(content)
  return content.map((item, index) => {
    return (
      <Part key={index} part={item.name} exercises={item.exercises} />
    )
  })
}

export default Content