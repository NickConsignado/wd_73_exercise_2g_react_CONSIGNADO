import Navbar from "./assets/components/Navbar"
import CardSample from "./assets/components/CardSample"
import Footer from "./assets/components/Footer"

function App() {
  const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      grade: 74
    },
    {
      id: 2,
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      grade: 72
    },
    {
      id: 3,
      firstName: 'Wanda',
      lastName: 'Malt',
      grade: 99
    },
    {
      id: 4,
      firstName: 'Lebron',
      lastName: 'James',
      grade: 101
    }
  ]
  const studentCardList = students.map(
    (student) => <CardSample key={student.id} 
                              firstName={student.firstName} 
                              lastName={student.lastName} 
                              grade={student.grade}/>
                            
  );
  console.log(studentCardList);

  

  //students.forEach(student => {});
  
  return (
    <>
      <div>
      <Navbar />    
      <div className="m-3">
      <div className="bg-primary m-auto d-flex justify-content-center row">            
      { studentCardList } 
      <h1 className="text-center">Main Container</h1>
     
      </div>
      </div>

      <Footer />
      </div>
    </>
  )
}

export default App
