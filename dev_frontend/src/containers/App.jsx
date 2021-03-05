import React from 'react';

// Styles
import '../assets/styles/App.scss'

// Components
import Header from '../components/Header';
import CreatePlanet from '../components/CreatePlanet';
import Planets from '../components/Planets';
import Carousel from '../components/Carousel';
import CarouselPlanetItem from '../components/CarouselPlanetItem';
import Footer from '../components/Footer';

class App extends React.Component {

  render(){
    return(
      <div className="App">
        <Header />
        <CreatePlanet />

        <Planets>
          <Carousel>
            <CarouselPlanetItem />
            <CarouselPlanetItem />
            <CarouselPlanetItem />
            <CarouselPlanetItem />
          </Carousel>
        </Planets>

        <Footer />
      </div>
    )
  }
}

export default App;
