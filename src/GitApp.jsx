import { useState } from 'react';

// import { AddCategoria, GifGrid } from './components';

import AddCategoria from "./components/AddCategoria";
import GifGrid from "./components/GifGrid";





export default function GitApp() {
  
    const [categorias, setCategorias] = useState( [ 'One Puch' ] );
    
    const validar = (mensaje) => {
            alert (mensaje);
    };

    const onClickAgregar = ( newCategoria ) => {

        if (categorias.includes(newCategoria)){
            validar('no puede');
        }else{
            setCategorias([newCategoria, ...categorias]);
        }

    };

    return (
    <>

        { <h1>TITULO</h1> }


        { <h1>Bucar:</h1> }

        <AddCategoria
            onNewCategoria = { onClickAgregar }
        />


        { <h1> LISTADO DE TARJETAS</h1> }
        <ol>         
            {
                categorias.map( (categorias) => (
                    (
                        <GifGrid 
                            key={ categorias }
                            categoria={ categorias }
                        />
                    )
                ))
            }
        </ol>
            { <h3> Item git </h3>}

       
    </>
  )
}


// 3q9tOWU5ZtqHjNvVmrpKiDup16AXjBuG