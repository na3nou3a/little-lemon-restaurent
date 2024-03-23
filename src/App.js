import { Header, Nav, Main, Footer, HeroSection, Highlights, CustomersSay } from './components';
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
          <Highlights />
          <CustomersSay />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
