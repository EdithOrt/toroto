import React from 'react'
import video from '../../assets/img/my-actions/video.png'
import art1 from '../../assets/img/my-actions/art1.png'
import art2 from '../../assets/img/my-actions/art2.png'
import art3 from '../../assets/img/my-actions/art3.png'
import art4 from '../../assets/img/my-actions/art4.png'
import share from '../../assets/img/my-actions/share.png'
import transition2 from '../../assets/img/my-actions/graphic2.png'

const MyActions = () => {
    return(
        <div className="container-myactions">
            <div className="container-transition">
                <img alt='trancisión2' className="transition-actions-img" src={transition2} />
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
                    <img alt='video' className="img-video" src={video}/>
                </div>
            </div>
            <div className="container-general-arts">
                <div className="container-arts">
                    <div className="container-art-individual">
                        <form action="https://www.toroto.mx/es/blog/como-hacer-que-tu-empresa-sea-carbono-neutra" method="get">
                            <button>
                                <img alt='articulo1' className="img-art" src={art1}/>
                            </button>
                        </form>
                        <div className="text-art">
                            <p>Cómo hacer que tu empresa sea carbono neutra,</p>
                            <p className="blue-letter">Santiago Espinosa</p>
                            <p className="blue-letter">17 Abril 2020</p>
                        </div>
                        <div className="container-share-button">
                                <a href="http://www.facebook.com/sharer.php?u=https%3a%2f%2fwww.toroto.mx%2fes%2fblog%2fcomo-hacer-que-tu-empresa-sea-carbono-neutra" className="button-share-actions">
                                    <img alt='compartir' src={share} />
                                </a>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <form action="https://www.toroto.mx/es/blog/mi-salud-y-la-salud-del-planeta" method="get">
                            <button>
                                <img alt='articulo2' className="img-art" src={art2}/>
                            </button>
                        </form>
                        <div className="text-art">
                            <p>Mi salud y la del planeta,</p>
                            <p className="blue-letter">María Harispuru</p>
                            <p className="blue-letter">14 Julio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img alt='compartir' src={share} />
                            </button>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <form action="https://www.toroto.mx/es/blog/nuestra-huella-de-carbono-digital" method="get">
                            <button>
                                <img alt='articulo2' className="img-art" src={art3}/>
                            </button>
                        </form>
                        <div className="text-art">
                            <p>Nuestra huella de carbono digital</p>
                            <p className="blue-letter">10 Junio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img alt='compartir' src={share} />
                            </button>
                        </div>
                    </div>
                    <div className="container-art-individual">
                        <form action="https://www.toroto.mx/es/blog/cuando-nos-dejamos-de-considerar-parte-de-la-naturaleza" method="get">
                            <button>
                                <img alt='artículo4' className="img-art" src={art4}/>
                            </button>
                        </form>
                        <div className="text-art">
                            <p>¿Cuándo nos dejamos de considerar parte de la naturaleza?</p>
                            <p className="blue-letter">María Harispuru</p>
                            <p className="blue-letter">14 Julio 2020</p>
                        </div>
                        <div className="container-share-button">
                            <button className="button-share-actions">
                                <img alt='compartir' src={share} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyActions