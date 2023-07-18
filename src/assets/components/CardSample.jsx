function CardSample(props) {
  const { title, artistName, release, album } = props; //destructuring syntax

  return(
  <>
  <div className="d-flex column card col-lg-2 m-5 shadow bg-warning ">  
      <div className="card-body">
      <p>Title:<span className="fw-bold"> {title} </span> </p>
      <p>Artist:<span className="fw-bold"> {artistName} </span> </p>
      <p>Release:<span className="fw-bold"> {release} </span> </p>
      <p>Album:<span > {album} </span></p>


      </div>
  </div>
  </>
  )
}
      
  export default CardSample