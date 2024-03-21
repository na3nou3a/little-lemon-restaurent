import { Header, Nav, Main, Footer, HeroSection } from './components';
import './App.css';

function App() {
  return (
    <>
      <div className="page-wrapper grid">
        <div className="top-wrapper grid max-width">
          <Header />
          <Nav />
        </div>
        <Main>
          <HeroSection />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
