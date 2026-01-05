// JSX - Javascript + XML (which is a funtion that allow you to retuns both javascript and html in a component then export by default)

  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer.";
  import Hero from "./components/Hero";


function App(){
 
  return(
   <div>
    <Navbar/>
     <Hero/>
    <Footer/>
  
   </div>
  )
}
export default App;