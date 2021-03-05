import React from 'react';
import '../assets/styles/components/CreatePlanet.scss'

const CreatePlanet = () => (
    <section className="create_planet">
        <h2 className="create_planet__title">Register a new planet</h2>
        <input type="text" className="input" placeholder="Name" />
        <input type="text" className="input" placeholder="Satellites amount" />
        <input type="text" className="input" placeholder="Diameter (kms)" />
  </section>
);

export default CreatePlanet;