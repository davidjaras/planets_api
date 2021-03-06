import React, { useEffect, useState } from 'react';
import '../assets/styles/components/CreatePlanet.scss'

const CreatePlanet = () => {

  const [newPlanet, setNewPlanet] = useState({
    name: '',
    satellites: '',
    diameter: ''
  })

  const handleInputs = (event) => {
    setNewPlanet({
      ...newPlanet,
      [event.target.name] : event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log('Sending Data... ' + newPlanet.name + ' ' + newPlanet.satellites + ' ' + newPlanet.diameter)
    fetch('http://localhost:5555/planets/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlanet)
    })
    .then(() => alert('Insert successful')) // How to update states
  }

  return(
  
    <section className="">
        
      <form className="create_planet" onSubmit={sendData}>
        <h2 className="create_planet__title">Register a new planet</h2>

        <input 
          type="text" 
          className="input" 
          placeholder="Name" 
          onChange={handleInputs} 
          name="name" required />

        <input 
          type="number" 
          className="input" 
          placeholder="Number of satellites" 
          onChange={handleInputs} 
          name="satellites" required />

        <input 
          type="number" 
          className="input" 
          placeholder="Diameter in Km" 
          onChange={handleInputs} 
          name="diameter" required  />

        <button type="submit" className="button">Register planet</button>
      </form>
        
    </section>
  );
}

export default CreatePlanet;