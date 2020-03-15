/*
import React from 'react';
import MapaVista from './MapaVista';


// import { ReactComponent as MapaSVG } from '../../recursos/imagenes/vectores/mx.svg';
class Mapa extends React.Component {
    
    state = {
        estadoSeleccionado: null
    }


    componentDidMount() {

        const svg = document.getElementsByTagName('svg')[0]

        this.setState({
            containerWidth: svg.parentNode.clientWidth,
            containerHeight: svg.parentNode.clientHeight
        })

    }

    seleccionarEstado = (e) => {
        
        const estadoSeleccionado = e.target.getAttribute('id');
        const estadoNombre = e.target.getAttribute('name');
        
        this.setState({ estadoSeleccionado })
        console.log(estadoNombre);
        

        let svg = e.target.parentNode;

        let x = e.target.getBBox().x
        let y = e.target.getBBox().y
        let w = e.target.getBBox().width * 1.618
        let h = e.target.getBBox().height * 1.618
        
        
        const containerWidth = svg.parentNode.clientWidth
        const containerHeight = svg.parentNode.clientHeight

            // const parentWidth = svg.getAttribute('width')
            // const parentHeight = svg.getAttribute('height')
            
            // const widthRatio = parentWidth / containerWidth
            // const heightRatio = parentHeight / containerHeight


            // let width = e.target.getBoundingClientRect().width * widthRatio
            // let height = e.target.getBoundingClientRect().height * heightRatio


            // let ptWH = svg.createSVGPoint();

            // ptWH.x = width;
            // ptWH.y = height;
                    
            // let svgPWH = ptWH.matrixTransform(svg.getScreenCTM().inverse());

            // width = svgPWH.x
            // height = svgPWH.y


            // let ptXY = svg.createSVGPoint();

            // ptXY.x = x + svg.style.width;
            // ptXY.y = y + svg.style.height;
                    
            // let svgPXY = ptXY.matrixTransform(svg.getScreenCTM().inverse());

            
            // console.log(e.target.clientWidth / 2, e.target.clientHeight / 2);


            x = x - e.target.getBBox().width / (1.618*2)
            y = y - e.target.getBBox().height / (1.618*2)
            
    
        const paths = document.getElementsByTagName('path')

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        e.target.setAttribute('active',true)
        
        e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${w} ${h}`)
        // e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${containerWidth} ${containerHeight}`)
    
                
        if( !! this.props.estadoSeleccionar ) {
            this.props.estadoSeleccionar( estadoNombre )
        }
        

    }


    onSVGReady = (svg) => {
        // svg.setAttribute('width',svg.clientWidth)
        let width = svg.getAttribute('width')
        let height = svg.getAttribute('height')
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
        svg.setAttribute('preserveAspectRatio',"xMidYMid meet")
    }


    regresar = () => {

        const paths = document.getElementsByTagName('path')

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        const svg = document.getElementsByTagName('svg')[0]
        const width = svg.getAttribute('width')
        const height = svg.getAttribute('height')
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)

        this.props.estadoSeleccionar()
    }

    render() {
        return (
            <MapaVista
                estadoSeleccionado={this.state.estadoSeleccionado}
                seleccionarEstado={this.seleccionarEstado}
                onSVGReady={this.onSVGReady}
                regresar={this.regresar}
            />
        )
    }
}

export default Mapa;

*/