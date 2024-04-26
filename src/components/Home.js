import Header from './header';
import Carditerator from './Carditerator';
import Sidebar from './Sidebar';

function Home() { 
     
  return ( 
    <div className="Home"> 
      <Header />
<<<<<<< HEAD
      &nbsp;
      <div className="container">
=======
     
      <div >
>>>>>>> ebb866d (commit)
      <div className="row">
        <div className="col-md-3">
        <Sidebar />
         
        </div>
        <div className="col-md-9">
        <Carditerator />
        </div>
      </div>
    </div>
    </div> 
    
  ); 

} 


export default Home;
