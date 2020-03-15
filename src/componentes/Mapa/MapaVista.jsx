import React, {Component} from 'react';

// import { ReactComponent as MapaSVG } from '../../recursos/imagenes/vectores/mx.svg';
import mapa from '../../recursos/imagenes/vectores/mx.svg';

import { SvgLoader, SvgProxy } from 'react-svgmt';

import style from './MapaVista.scss'

const MapaVista = (props) => {
    
    const { estadoSeleccionado,seleccionarEstado, onSVGReady, regresar } = { ... props }

    return (
        <section className="Mapa">
            {
                !! estadoSeleccionado &&
                (
                    <header>
                        <button onClick={()=>regresar()}>
                            Regresar
                        </button>
                    </header>
                )
            }
            
            <SvgLoader path={mapa} onSVGReady={(svg)=>onSVGReady(svg)}>
                <SvgProxy selector="path" onClick={(e)=>seleccionarEstado(e)}/>
                <SvgProxy fill="#ddd" selector="path"/>
                <SvgProxy fill="#ccc" selector={`#${estadoSeleccionado}`}/>
            </SvgLoader>

        </section>
    )
}

export default MapaVista;