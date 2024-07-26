import './App.css';
import Navbar from './components/Navbar';
import HeaderSeaction from './components/HeaderSeaction';
import MoviesSection from './components/MoviesSection';
import Footer from './components/Footer.jsx';

function App() {


  return (
    <div className='flex flex-col gap-4'>
     <Navbar />
     <HeaderSeaction />
     <h1 className='flex text-[35px] md:text-[60px] font-bold justify-center py-[20px]'>Latest Movies</h1>
     <MoviesSection />
     <Footer />
    </div>
  )
}

export default App
