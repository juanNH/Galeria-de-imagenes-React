import React, {useState, useEffect, useCallback} from 'react'
import Card from './card/Card'

function Cards() {

    const [images, setImages] = useState([]);

    const [input, setInput] = useState("");

    const peticion = useCallback(async() => {
        
        const key = "client_id=Be6yJjbvPkMRPZ9v2B6EzeHmsiiOuZap4tW_kSVf2EI"
     
        let route = `https://api.unsplash.com/photos/?${key}`
        
        if(input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }
        const res = await fetch(route);
        
        const data = await res.json();

        if(data.results){
            setImages(data.results)
        }else {
            setImages(data)
        }
    },[input]);

    useEffect(() => {       
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text);
    }

    return (
        <>

        <form onSubmit={handleSubmit}>
            <label> {" "}Buscar <input name="inputText" type="text" placeholder="Ingrese un texto"/> {" "}</label>
        </form>
        <hr />

        {
            images.map((img) => {
            return <Card key={img.id} img={img.urls.regular} />
            })
        }
        </>
    );
}

export default Cards
