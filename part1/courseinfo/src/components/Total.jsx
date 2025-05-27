const Total = ({exercises}) => {  
    return (
        <p>Number of exercises {exercises.reduce((sum, exercise) => sum + exercise, 0)}</p>
    )
  }

export default Total