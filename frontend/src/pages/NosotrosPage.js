import React from 'react';
import '../styles/components/pages/NosotrosPage.css';
import '../App.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <h3>+50 Años de Experiencia.</h3>
                <p> En el año 1965 Hanshi Felix Garcia Ladrón de Guevara cinturón negro 9º dan se inicia en el Karate Goju
                    Ryu, logrando estar como Maestro en todas los proyectos importantes de las artes marciales en Chile...
                </p>
            </div>
            <div>
                <img src="/images/about.jpg" alt="Imagen 1 Nosotros" />
            </div>
            <div className="staff">
                <h2>Nuestro Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/images/shihangarcia1.jpg" alt="Profe1" />
                        <h5>Felix Garcia L. de Guevara</h5>
                        <h6>Hashin 9th Dan</h6>
                        <p>Fundador del Estilo en chile y con más de 50 años de trayectoria.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/germangarcia.JPG" alt="Profe2" />
                        <h5>German Garcia</h5>
                        <h6>Shihan 8th Dan</h6>
                        <p>Nuestro Hashin es la persona con más alto rango dentro de la organización en este momento.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/victorcorvalan.jpg" alt="Profe3" />
                        <h5>Victor Corvalan</h5>
                        <h6>Sensei 6th Dan</h6>
                        <p>Más de 40 años de trayectoria dentro del Dojo Central.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/jorgeguzman.jpg" alt="Profe4" />
                        <h5>Jorge Guzman</h5>
                        <h6>Sensei 5th Dan</h6>
                        <p>Más de 40 años de trayectoria dentro del Dojo Central, experto en Katas.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default NosotrosPage;