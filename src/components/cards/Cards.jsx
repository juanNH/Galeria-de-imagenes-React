import React, {useState, useEffect} from 'react'
import Card from './card/Card'

function Cards() {

    const [images, setImages] = useState({
        urls: {
            regular: "",
        }
    });

    const peticion = async() => {
        const res = await fetch("https://api.unsplash.com/photos/random/?client_id=Be6yJjbvPkMRPZ9v2B6EzeHmsiiOuZap4tW_kSVf2EI");
        const data = await res.json();

        setImages(data)
    };
 
    useEffect(() => {       
        peticion();
    }, []);

    return (
        <>
            <Card img={images.urls.regular} />
        </>
    );
}

export default Cards
