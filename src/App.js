import './App.css';
import Build from './build1';
import DetailsPage from './details';
import Footer from './footer';
import Home from './Home';
import Navbar from './nav';
import {
  Route,BrowserRouter,Routes
} from "react-router-dom";

function App() {
  return (
    <div>

<BrowserRouter>
       
<Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route> 
    <Route path="/build" element={<Build />}></Route> 
    <Route path="/details/:id" element={<DetailsPage />} />
   </Routes>
   <Footer />
   </BrowserRouter>
    </div>
  );
}

export default App;
