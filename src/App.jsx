
import './App.css';



import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './componant/Home';
import Team from './componant/Team';
import Services from './componant/Services';
import Testimonial from './componant/Testimonial';
import Contact from './componant/Contact';




function App() {
  return (
    // <BrowserRouter>

      
    // <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path='/contact' element={<Contact/>}></Route>
    //   <Route path='/services' element={<Services/>}></Route>
    //   <Route path='/team' element={<Team/>}></Route>
    //   <Route path='/testmonial' element={<Testimonial/>}></Route>
      
    // </Routes>
      
      
    // </BrowserRouter>
    <div>
      <Home />
      
</div>

  );
}

export default App;
