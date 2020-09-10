import React from 'react'
import GraphicBubbleIndividual from '../GraphicBubbleIndividual/GraphicBubbleIndividual'
import transition from '../../assets/img/my-Footprint2/textura.png'
import share from '../../assets/img/my-Footprint2/share_48px.png'
import {Slider} from '@material-ui/core'

const MyActions = () => {
    return(
        <div className="container-section-myfootprint2">
            <div className="blue-bar">
                <div className="mobile-transition">
                    <img src={transition} />
                </div>
                <div className="text-transition">
                    <p>Unidos neutralizaremos nuestra huella 
                    ambiental para revertir la emergencia climática</p>
                </div>
            </div>
            <div className="container-chart-individual">
                <div>
                    <p>El paso de tu huella CO2</p>
                </div>
                <GraphicBubbleIndividual />
                <div>
                <div className="slider">
                    <Slider />
                </div>
                </div>
                <div className="year-text">
                    <p>2020</p>
                </div>
            </div>
            <div className="congratulations-text">
                <p>Felicitaciones por tu compromiso</p>
                <p>¡Continúa así!</p>
                <button>
                    <img src={share}></img>
                </button>
            </div>
        </div>
    )
}

export default MyActions