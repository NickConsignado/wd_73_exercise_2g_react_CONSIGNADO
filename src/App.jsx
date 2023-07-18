import Navbar from "./assets/components/Navbar"
import CardSample from "./assets/components/CardSample"
import Footer from "./assets/components/Footer"

function App() {
  const songs = [
    {
      id: 1,
      title: 'Pasilyo',
      artistName: 'SunKissed Lola',
      release: 2022,
      album:  <img src="https://s.yimg.com/fz/api/res/1.2/IorzCIk1Hz6hO7PX4d.Z4Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTMw/https://s.yimg.com/zb/imgv1/a9ddd4cb-67d9-309e-af14-09d3420e6fc1/t_500x300" alt="Pasilyo" className="col-12"  />
    },
    {
      id: 2,
      title: 'Ilaw Sa Daan',
      artistName: 'IV of Spades',
      release: 2016,
      album:  <img src="https://tse4.mm.bing.net/th?id=OIP.XIEm2RZgS7kJxsX_BQEYFgHaHa&pid=Api&P=0&h=180" alt="Ilaw sa Daan" className="col-12"  />
    },
    {
      id: 3,
      title: 'Mahika',
      artistName: '	Adie and Janine Berdin',
      release: 2022,
      album:  <img src=" https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/e9/99/da/e999da24-a3ad-f1bc-d6b2-4146b8983a84/cover.jpg/1200x1200bf-60.jpg" alt="Mahika" className="col-12"  />
    },
    {
      id: 4,
      title: 'Babalik Sayo',
      artistName: 'Moira',
      release: 2022,
      album:  <img src="https://www.guitartabsexplorer.com/images/tabs/moira-dela-torre_babalik_sayo.jpg" alt="Babalik Sayo" className="col-12" />
    },
  ]
  const songCardList = songs.map(
    (song) => <CardSample key={song.id} 
                          title={song.title} 
                          artistName={song.artistName} 
                          release={song.release}
                          album={song.album} />
                            
  );
  console.log(songCardList);

  

  //students.forEach(student => {});
  
  return (
    <>
      <div>
      <Navbar />    
      <div className="m-3">
      <div className="bg-primary m-auto d-flex justify-content-center row">            
      { songCardList } 
      <h1 className="text-center">Main Container</h1>
     
      </div>
      </div>

      <Footer />
      </div>
    </>
  )
}

export default App
