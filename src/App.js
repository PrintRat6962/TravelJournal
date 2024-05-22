import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card'
import Fuji from './images/Fuji.png'
import OperaHouse from './images/OperaHouse.png'
import Fjord from './images/fjord.png'

function App() {
  return (
    <div>
      <Navbar/>
      <Card 
        img = {Fuji}
        country = "J A P A N"
        location = "Mount Fuji"
        timespan = "12 Jan, 2021 - 24 Jan, 2021"
        desc = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <div className='line'></div>

      <Card 
        img = {OperaHouse}
        country = "A U S T R A L I A"
        location = "Sydney Opera House"
        timespan = "27 May, 2021 - 8 Jun, 2021"
        desc = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />

      <div className='line'></div>

      <Card 
        img = {Fjord}
        country = "N O R W A Y"
        location = "Gierangerfjord"
        timespan = "01 Oct, 2021 - 18 Nov, 2021"
        desc = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </div>
  );
}

export default App;
