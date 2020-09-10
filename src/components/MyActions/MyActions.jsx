import React from 'react'
import video from '../../assets/img/my-actions/video.png'
import art1 from '../../assets/img/my-actions/art1.png'
import art2 from '../../assets/img/my-actions/art2.png'
import art3 from '../../assets/img/my-actions/art3.png'
import art4 from '../../assets/img/my-actions/art4.png'
import share from '../../assets/img/my-actions/share.png'
import transition2 from '../../assets/img/my-actions/transition2.png'

const MyActions = () => {
    return(
        <div className="container-myactions">
            <div>
                <img className="transition-actions-img" src={transition2} />
                <div className="transition-actions-text">
                    <p>Tu huella de carbono es la totalidad
                        de gases de invernadero que va a la 
                        atmósfera como resultado de tus
                        actividades anuales.
                    </p>
                </div>
            </div>
            <div>
                <div className="container-text-video">
                    <p>¡Todos podemos. medir, reducir y neutralizar
                        nuestra huella de carbono!
                    </p>
                </div>
                <div className="container-video-img">
                    <img className="img-video" src={video}/>
                </div>
            </div>
            <div className="container-general-arts">
                <div className="container-arts">
                    <div className="container-art-individual">
                        <img className="img-art" src={art1}/>
                        <div className="text-art">
                            <p>Cómo hacer que tu empresa sea carbono neutra,</p>
                            <p>Santiago Espinosa</p>
                            <p>17 Abril 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img src={share} />
                            </button>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <img className="img-art"  src={art2}/>
                        <div className="text-art">
                            <p>Mi salud y la del planeta,</p>
                            <p>María Harispuru</p>
                            <p>14 Julio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img src={share} />
                            </button>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <img className="img-art"  src={art3}/>
                        <div className="text-art">
                            <p>Nuestra huella de carbono digital</p>
                            <p>10 Junio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img src={share} />
                            </button>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <img className="img-art"  src={art4}/>
                        <div className="text-art">
                            <p>¿Cuándo nos dejamos de considerar parte de la naturaleza?</p>
                            <p>María Harispuru</p>
                            <p>14 Julio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img src={share} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyActions