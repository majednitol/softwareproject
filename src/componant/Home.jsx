
import About from './About';



import Contact from './Contact';
import Services from './Services';
import Team from './Team';
import Testimonial from './Testimonial';
import NavBar from './NavBar';
import HeroSection from './HeroSection';




function Home() {
  return (
    <div className="App" id='heroSection'>

      
        <NavBar/>
<HeroSection/>
     <About/>

      <Services/>
     <Team/>

    <Testimonial/>
    
      <Contact />
      
      
    </div>
  );
}

export default Home;