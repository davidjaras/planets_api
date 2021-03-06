import React, { useEffect, useState } from 'react';

// Styles
import '../assets/styles/App.scss'

// Components
import Header from '../components/Header';
import Planets from '../components/Planets';
import Carousel from '../components/Carousel';
import CarouselPlanetItem from '../components/CarouselPlanetItem';
import Footer from '../components/Footer';

const App = () => {

  // function or logic inside the component 
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data));
  }, []);

  //console.log(planets)
  const addNewData = (data) => {
    setPlanets([data, ...planets].sort(function (a, b) {
      var planetA = a.name;
      var planetB = b.name;
      return (planetA < planetB) ? -1 : (planetA > planetB) ? 1 : 0;
    }));
  }
  

  return (
    <div className="App">
      <Header onAddNewData={(data) => addNewData(data)}/>

      {
        planets.length > 0 &&
        <Planets title='Planets list'>
          <Carousel>
            {planets.map(item =>
              <CarouselPlanetItem key={item.id} {...item} />
            )}
          </Carousel>
        </Planets>
      }

      <Footer />
    </div>
  )
}

export default App;