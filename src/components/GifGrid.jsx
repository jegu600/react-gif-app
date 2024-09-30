import { useEffect, useState } from "react";
// import getGifs from "../helpers/getGifs";
import useFethGif from "../hooks/useFethGif";
import GifVista from "./GifVista";




const GifGrid = ( { categoria } ) => {

    const { imagenes, setIsLoading} = useFethGif(categoria);
    
    return (
        <>
            <h3> {categoria} </h3>
            
            <div className="card-grid">
                {
                 imagenes.map( (img) =>(
                    <GifVista
                      key={img.id}
                      {...img}
                    />
                 ))   
                }
            </div>            
          
        </>
    );
}

export default GifGrid;