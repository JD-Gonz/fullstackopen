const Content = ({ content }) => {
  return content.map((item, index) => {
    return (
      <p key={index}>
        {item.part} {item.exercises}
      </p>
    )
  })
}

export default Content