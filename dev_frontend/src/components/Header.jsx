import React, { useState } from 'react';
import CreatePlanet from './CreatePlanet';
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-planets-api.png';
import addIcon from '../assets/static/plus-icon.png'

const Header = (props) => {

    const [showModalCreate, setShowModalCreate] = useState(false)

    return(
        <div>
            <header className="header">
                <img className="header__img" src={logo} alt="Planets API" />
                <button className="add-planet" onClick={() => setShowModalCreate(true)}>
                    <img src={addIcon} /> Add Planet
                </button>
            </header>

            <CreatePlanet onClose={() => setShowModalCreate(false)} show={showModalCreate} />

        </div>
        
    );
};

export default Header;