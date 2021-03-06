import React, { useEffect, useState } from 'react';
import '../assets/styles/components/CreatePlanet.scss'

const CreatePlanet = (props) => {

  if (!props.show) {
    return null
  }

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

    <div className="modal-form" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        <div className="modal-header">
          <h4 className="modal-title">Register a new planet</h4>
        </div>

        <div className="modal-body container">
          <form className="input-group align-items-center " onSubmit={sendData}>

            <input 
              type="text" 
              className="form-control input"
              placeholder="Name" 
              onChange={handleInputs} 
              name="name" required />

            <input 
              type="number" 
              className="form-control input"
              placeholder="Number of satellites" 
              onChange={handleInputs} 
              name="satellites" required />

            <input 
              type="number" 
              className="form-control input"
              placeholder="Diameter in Km" 
              onChange={handleInputs} 
              name="diameter" required  />

            <button type="submit" className="button btn btn-success">Register planet</button>
          </form>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline-secondary" onClick={props.onClose} >Close</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlanet;