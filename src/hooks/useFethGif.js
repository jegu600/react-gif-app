import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";


const  useFethGif  = (categoria) => {
          
    const [imagenes, setimagenes] = useState( [] );
    const [isLoading, setIsLoading] = useState(true);


    const getImagenes = async() => {
        const newImagen = await getGifs(categoria);
        setimagenes (newImagen);
        setIsLoading(false);
    }

    useEffect( () => {
        getImagenes();
        }, [] );

    return {
        imagenes,
        isLoading
    };

};

export default useFethGif;                      

    
        