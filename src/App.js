import './App.css';
import { Card } from './components/Card';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'
import { Section } from './components/Section';



function App() {
  return (
    <div className="App">

      <div className='container-navbar'> {/* Hecho */}
        <Navbar />
      </div>

      <div className="hero"> {/* Hecho */}
        <h1>Vamos Argentina!</h1>
      </div>


      {/* En esta seccion va un div con cartas informativas */} {/* Hecho */}

      <div className='container-cards-square'>
        <h1 className='title-cards'>Ultimos 10 destacados</h1>
        <div className="container-cards">
          <Card image="messi" fullName='Lionel A. Messi' games={123} goals={123} lastClub='PSG'
          />
          <Card image="riquelme" fullName='Juan R. Riquelme' games={123} goals={123} lastClub='Argentinos Jr'
          />
          <Card image="maradona" fullName='Diego A. Maradona' games={123} goals={123} lastClub='Boca'
          />
        </div>
      </div>

      <hr />

      {/* Seccion de noticia img con info */} {/* Hecho */}
      <div className='container-info'>
        <Section position={1} image='copa-mundo' rivalsGroup={['Polonia', 'Mexico', 'Arabia Saudita']} candidates={['Brasil', 'Belgica', 'Francia']}/>
      </div>

      {/* En esta seccion van las cartas con border */} {/* Hecho */}

      <hr />


      <div className='container-cards-circle'>
        <h1 className='title-cards'>Goleadores Historicos</h1>
        <div className="container-cards">
          <Card type='circle' image="lionel-messi" fullName='Lionel A. Messi' games={123} goals={123} lastClub='PSG'
          />
          <Card type='circle' image="sergio-aguero" fullName='Sergio L. Aguero ' games={123} goals={123} lastClub='Argentinos Jr'
          />
          <Card type='circle' image="batistuta" fullName='Gabriel O. Batistuta' games={123} goals={123} lastClub='Boca'
          />
        </div>
      </div>

      <hr />


      {/* Seccion de noticia img con info */} {/* Hecho */}
      <div className='container-info'>
        <Section position={2} image='copa-mundo-2' rivalsGroup={['Islandia', 'Croacia', 'Nigeria']} candidates={['Francia', 'Alemania', 'Brasil']}/>
      </div>

      {/* Seccion de contacto */}

      <div className='container-contact'> {/* Hecho */}
        <Contact />
      </div>

      <div className='container-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
