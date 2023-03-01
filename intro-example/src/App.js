import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/Navbar';
import PartnerBox from './components/PartnerBox';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <h1>Our Partners</h1>
      <h6 className="margin-bottom">Below are some of our trusted partners who we have worked with</h6>

      <div className='partner-box-container'>
        <PartnerBox company="Chase Bank" image="chaseLogo.png" blurb="We have worked with chase bank many times over the years to consult on their cybersecurity and audit the strenght of their systems" />
        <PartnerBox company="Cartoon Network" image="cnlogo.png" blurb="Cartoon Network has been a valued client of ours for over 9 years" />
        <PartnerBox company="Publix" image="publixlogo.png" blurb="Publix Supermarkets rely on intuitive, up to date, secure software to run their inventories and they trust us to help them with that" />
        <PartnerBox company="State Farm" image="statefarmlogo.png" blurb="State Farm uses computer obviously.  And we do computer.  Boom!" />
        <PartnerBox company="Maple Hill Creamery" image="mhlogo.jpeg" blurb="Don't know why a dairy company needed our help, but we helped them" />
        <PartnerBox company="Nascar" image="nascarlogo.png" blurb="nascar employees have no idea how to use a computer so we have consulted with them for year" />
      </div>
 

    </div>
  );
}

export default App;
