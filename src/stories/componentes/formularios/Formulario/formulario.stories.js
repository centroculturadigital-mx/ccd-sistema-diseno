import FormularioTester from '../../../../componentes/formularios/Formulario/FormularioTester.svelte';

export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}


let campos = [
    {
        tipo: 'texto',
        nombre: 'ccd-sd-texto',
        etiqueta: 'un texto sin caracteres especiales',
        valorInicial: '...',
        validacion: (valor)=>{
            let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo
    	
            return {
                valido: ! caracteresEspeciales.test(valor),
                error: caracteresEspeciales.test(valor) ?
                    new Error("No cars. espec.") : null
                ,
                status: caracteresEspeciales.test(valor)
                    ? "error" : ! valor ? "" : "ok"
            }
        }
    },
    {
        tipo: 'numero',
        nombre: 'ccd-sd-numero',
        etiqueta: 'el numero de la bestia',
        valorInicial: '...',
        validacion: (valor)=>{
            if( ! valor ) return {
                valido: true,
                status: ""
            }
            
            if( parseInt(valor) === 666 ) return {
                valido: true,
                status: "ok"
            }
            
            return {
                valido: false,
                status: "error",
                error: new Error("Anim sint aliquip voluptate culpa excepteur aliquip.")
            }
        }
    },
    {
        tipo: 'textarea',
        nombre: 'ccd-sd-textarea',
        etiqueta: 'un textarea menor a 10 caracteres',
        valorInicial: '...',
        validacion: (valor)=>{
            
            if( ! valor ) return {
                valido: true,
                status: ""
            }

            if( valor.length < 10 ) return {
                valido: true,
                status: "ok"
            }

            return {
                valido: false,
                error: new Error("Mayor a 10 caracteres"),
                status: "error"
            }

        }
    },
]


export const formularioDefault = () => ({
    Component: FormularioTester,
    props: {
        campos: campos,
    },
});

export const formularioValidacion = () => ({
    Component: FormularioTester,
    props: {
        campos: campos,
    },
});

export const formularioError = () => ({
    Component: FormularioTester,
    props: {
        campos: campos,
        error: "Formulario con error"
    },
});