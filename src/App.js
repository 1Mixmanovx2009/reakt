import SiteLogo from "./assets/images/site-logo.svg"
import HeroImg from "./assets/images/681f5352616b96163a36e8163a40e2fb-removebg-preview.png"
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Rocket from "./assets/images/rocket.svg"
import crimenal from "./assets/images/crimenal.svg"
import like from "./assets/images/like.svg"
import './App.css';
import Services from "./components/WebServices/WebServices";

function App() {
  return (
    <>
      <header className='site-header'>
        <div className='container'>
          <div className='header'>
            <a href='/'>
              <img src={SiteLogo} alt="Site Logo" width={186} height={47} />
            </a>
            <ul className="header-list">
              <Navbar title={'Home'} path={"/"} />
              <Navbar title={'Service'} path={"/"} />
              <Navbar title={'Portfolio'} path={"/"} />
              <Navbar title={'Blog'} path={"/"} />
            </ul>
            <Button title={'Contact us'} />
          </div>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <div className="hero">
            <div className="title">
              <h1>
                Smart Web
                Design Agency
              </h1>
              <p className="hero-text">
                We will provide best web design and business devlopment
                service clients expectation and satisfaction guarantee.
              </p>
              <Button title={'Free consultation'} extraStyle={'extra-width'} />
            </div>
            <img src={HeroImg} alt="" width={550} height={380} />
          </div>
        </div>
        <div className="container">
          <div className="body">
            <h2>We Provide the Best Web services</h2>
            <div className="web-services-wrapper-cards">
              
                <Services className={'rocket'} img={Rocket} seans={'5200+'} servicesInfo={'Projects completed'} />
                <div className="border"></div>

                <Services className={'crimenal'} extraBg={'extra-bl'} img={crimenal} seans={'500+'} servicesInfo={'Active clients'} />
                <div className="border"></div>

                <Services className={'like'}  extraBg={'extra-br'} img={like} seans={'4500+'} servicesInfo={'Happy clients'} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
