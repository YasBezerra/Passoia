import Header from "./components/Header"
import Banner from "./components/Banner"
import Lancamentos from "./components/Lancamentos"
import LooksEDicas from "./components/LooksEDicas"
import Novidades from "./components/Novidades"
import Footer from "./components/Footer"

// arquivo principal
// para escrita do nome do componente principal funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <LooksEDicas/>
    <Lancamentos/>
    <Novidades/>
    <Footer/>
    

    
    </>
  )
}
export default App