import React from 'react';
import '../assets/styles/components/Planets.scss';

const Planets = ({ children }) => (
    <div className="planets">
        <h3 className="planets__title">My list</h3>
        {children}
    </div>
);

export default Planets;