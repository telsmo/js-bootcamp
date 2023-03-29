import React from 'react';
import './Home.css';
import img1 from '../../assets/img/max_power.jpg';

const Home = () => {
    return (
        <div className="credential">
        <div className="credential-content">
            <div className="credential-img">
            <img src={img1} alt="credencial" />
            </div>
            <div className="credential-info">
            <h2>Max Power</h2>
            <p>Web Developer</p>
            <ul>
                <li>Correo: max@power.com</li>
                <li>Teléfono: 555-1234</li>
                <li>Dirección: Calle Falsa 123</li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Home;
