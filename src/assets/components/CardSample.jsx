function CardSample(props) {
  const { firstName, lastName, grade } = props; //destructuring syntax

  let gradeEvaluation;
  if (grade < 75) {
      gradeEvaluation = <h4>You Failed!</h4>
  } else{ 
      gradeEvaluation = <h4>You Passed!</h4>
  }
  return(
  <>
  <div className="d-flex column card col-lg-2 m-5 shadow bg-warning ">  
      <div className="card-body">
      <p>First Name:<span className="fw-bold"> {firstName} </span> </p>
      <p>Last Name:<span className="fw-bold"> {lastName} </span> </p>
      <p>Grade:<span className="fw-bold"> {grade} </span> </p>
      {gradeEvaluation}

      </div>
  </div>
  </>
  )
}
      
  export default CardSample