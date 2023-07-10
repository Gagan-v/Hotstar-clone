import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Movies from './components/movies';
import Celebs from './components/celebs';
import Footer from './components/footer';
import PageNotFound from './components/404';
import AddFav from './components/addFav';
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={ <Home/>}/>
              <Route path='/movies' element={<Movies/>} />
              <Route path='/addfav' element={<AddFav/>}/>
              <Route path='*' element={<PageNotFound/>}/>
            </Routes>
          <Footer/>
            </BrowserRouter>
    </div>
  );
}

export default App;

   
    
    <Celebs/>
    