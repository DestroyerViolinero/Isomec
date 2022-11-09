import React from 'react'
import ing from '../images/ing.jpg'
import imp from '../images/impacto.jpg'
import inn from '../images/innova.jpg'

export const Principal = () => {
  return (
    <>
        <div>
            <h2>Principal
                <p>Nuestro objetivo</p>
                <p>Prestar servicios de ingeniería con una base científica, tecnológica y humanística capaces de desarrollar, mantener e innovar sistemas, procesos y productos industriales y de servicios con un enfoque mecatrónico, manteniendo un sentido de responsabilidad en ámbito sociocultural y ecológico.</p> 
                <img src={imp} className="imagenpro" allowtransparency="true" frameBorder="0" scrolling="no"></img>
                <p>Nuestra misión</p>
                <p>Generar, fomentar, ejecutar y mejorar procesos tecnológicos, de conocimientos científicos y de innovación en sector industrial y residencial en las áreas de mecatrónica, mantenimiento y diseño software con criterios de sustentabilidad y responsabilidad.</p>
                <img src={inn} className="imagenpro" allowtransparency="true" frameBorder="0" scrolling="no"></img>
                <p>Nuestra visión</p>
                <p>Ser un referente para la prestación de servicios de ingenieria,  competentes, que den respuesta a la demanda del sector industrial y residencial en el área de mecátronica, automatización industrial y diseño de software a nivel regional y nacional.</p>
                <img src={ing} className="imagenpro" allowtransparency="true" frameBorder="0" scrolling="no"></img>           
            </h2>
        </div>
    </>
  )
}
