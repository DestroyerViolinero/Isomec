import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header >
        <div className="nav">Isomec
            <div className="nav-header">
                <div className="nav-title">
                    ISOMEC
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check"></label>
            </div>

            <div className="nav-links">
                <Link to="/">Principal</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contactenos">Contáctenos</Link>
                <Link to="/ayuda">Ayuda</Link>
            </div>
        </div>
        <h1>Integración y Soluciones Mecatrónicas Colombia</h1>
    </header>
 
  )
}
