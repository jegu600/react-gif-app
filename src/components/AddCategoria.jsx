import { useState } from "react";


const AddCategoria = ( { onNewCategoria } ) => {
   
    const [varlorInput, setVarlorInput] = useState('');
    
    const onInputChance = ( {target} ) =>{
        setVarlorInput( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();  
        if ( varlorInput.trim().length <= 1 ) return;
        
        // console.log(varlorInput);
        setVarlorInput('');
        onNewCategoria(varlorInput.trim());
    };
    
    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"  
                    placeholder="Buscar gifs"
                    value={ varlorInput}
                    onChange={onInputChance}
                />
            </form>

        </>
    );
}
export default AddCategoria;