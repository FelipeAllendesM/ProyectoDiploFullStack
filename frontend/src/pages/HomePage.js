import React from 'react';
import '../styles/components/pages/HomePage.css';
import '../App.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>¡Bienvenidos a nuestro sitio web oficial!</h2>
                    <p>En nuestro espacio, cada entrenamiento es una oportunidad para fortalecer el cuerpo, agudizar la mente y enriquecer el espíritu. Creemos que el verdadero aprendizaje del Karate no solo se refleja en la destreza física, sino también en la formación de individuos íntegros y comprometidos con su desarrollo personal.
                        Te invitamos a conocer nuestras clases, programas y actividades diseñadas para todas las edades y niveles. Ya sea que busques mejorar tu condición física, aprender técnicas de defensa personal o simplemente encontrar un espacio de crecimiento personal, estamos aquí para acompañarte en cada paso de tu viaje marcial.
                        ¡Prepárate para descubrir todo lo que el Karate puede ofrecerte!
                        ¡OSU!
                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Muy Buenas Clases</span>
                        <span className="autor">Erwin Carrasco</span>
                    </div>
                </div>
            </div>
            <div className="homeimg">
                <img src="/images/Home.jpg" alt='imagen principal' />
            </div>
        </main>
    );
}

export default HomePage;