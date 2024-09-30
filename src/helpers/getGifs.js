const getGifs = async(categoria) => {
    const llave = 'qVmqvlzcXSGe0ZXbOuzUu8NWz8vLq7eD';
    const limit = 5;
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=${llave}&q=${categoria}&limit=${limit}`; 
    
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    ))
    // console.log(gifs);
    return gifs;
};

export default getGifs;
