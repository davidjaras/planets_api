import React from 'react';
import '../assets/styles/components/CarouselPlanetItem.scss';

import editIcon from '../assets/static/edit-icon.png';
import deleteIcon from '../assets/static/delete-icon.png';


const deleteItem = (id, name) => {
    let confirmation = confirm("Are you sure to destroy "+name+" ?")
    if (confirmation) {
        fetch('http://localhost:5555/planets/'+id, { method: 'DELETE' })
            .then(() => alert('Delete successful'));
            // How to update state
    } else {
        alert("The planet was forgiven")
    }
}

const editItem = (id, name, satellites, diameter) => {
    let confirmation = confirm("Are you sure to release the kraken and change " + name + " ?")
    if (confirmation) {
        alert("The planet change because a pandemic")
        // How to update state
    } else {
        alert("The planet was forgiven")
    }
}


const CarouselPlanetItem = ({ id, name, satellites, diameter }) => (
    <div className="carousel-item col-3">
        
        <img className="carousel-item__img" src="https://picsum.photos/1260/750/?image=1032" />
        <div className="carousel-item__description">
            <h1>{name}</h1>
            <p className="">Satellites: {satellites} <br/> Diameter: {diameter} Km</p>   
        </div>
        <div className="carousel-item__details">
            <div>
                <img 
                    className="carousel-item__details--img" 
                    src={editIcon} 
                    onClick={() => editItem(id, name, satellites, diameter)} />
                <img 
                    className="carousel-item__details--img" 
                    src={deleteIcon} alt="Delete Icon" 
                    onClick={() => deleteItem(id, name)}/> 
            </div>
        </div>
    </div>
);

export default CarouselPlanetItem;