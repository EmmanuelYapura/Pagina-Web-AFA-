import './App.css';
import { Card } from './components/Card';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'
import { Section } from './components/Section';
import { SectionInv } from './components/SectionInv';



function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="hero">
        {/* Dentro de este div va una img y 'x' informacion*/}
      </div>
      {/* En esta seccion va un div con cartas informativas */}

      <h1 className='title-cards'>Ultimos 10 destacados</h1>
      <div className="container-cards">
        <Card image="messi" fullName='Lionel A. Messi' games={123} goals={123} lastClub='PSG'
        />
        <Card image="riquelme" fullName='Juan R. Riquelme' games={123} goals={123} lastClub='Argentinos Jr'
        />
        <Card image="maradona" fullName='Diego A. Maradona' games={123} goals={123} lastClub='Boca'
        />
      </div>

      {/* Seccion de noticia img con info */}
      <div className='container-info'>
        <Section image='copa-mundo' />
      </div>

      {/* En esta seccion van las cartas con border */}

      <h1 className='title-cards'>Goleadores Historicos</h1>
      <div className="container-cards-circle">
      <Card type='circle' image="lionel-messi" fullName='Lionel A. Messi' games={123} goals={123} lastClub='PSG'
        />
        <Card type='circle' image="sergio-aguero" fullName='Sergio L. Aguero ' games={123} goals={123} lastClub='Argentinos Jr'
        />
        <Card type='circle' image="batistuta" fullName='Gabriel O. Batistuta' games={123} goals={123} lastClub='Boca'
        />
      </div>

      {/* Seccion de noticia img con info */}
      <div className='container-info'>
        <SectionInv image='copa-mundo' />
      </div>

      {/* Seccion de contacto */}

      <div className='container-contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
