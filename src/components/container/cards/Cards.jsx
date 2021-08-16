import React, {useState, useEffect, useCallback} from 'react'
import Card from './card/Card'
import Spinner from './spinner/Spinner';
import FormImg from './formimg/FormImg';

function Cards() {

    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(true)

    const [input, setInput] = useState("");

    const peticion = useCallback(async() => {
        
        const key = "client_id=Be6yJjbvPkMRPZ9v2B6EzeHmsiiOuZap4tW_kSVf2EI"
     
        let route = `https://api.unsplash.com/photos/?${key}`
        
        if(input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }

        setLoading(true)

        const res = await fetch(route);
        
        const data = await res.json();

        if(data.results){
            setImages(data.results)
        }else {
            setImages(data)
        }

        setLoading(false)

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
        <div className="text-center"> 

        <FormImg handleSubmit={handleSubmit}>
        <hr />
        { loading && <Spinner  /> }
        <div className="row">
        {
            images.map((img) => {
            return <div key={img.id} className="col">
                <Card img={img.urls.regular} />
            </div>
            })
        }
        </div>

     
        </div>
    );
}

export default Cards
