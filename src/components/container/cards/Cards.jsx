import React, {useState, useEffect, useCallback} from 'react'
import Card from './card/Card'
import Spinner from './spinner/Spinner';
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

        <form onSubmit={handleSubmit}>
            <label> {" "}Buscar <input className="w-100" name="inputText" type="text" placeholder="Ingrese un texto"/> {" "}</label>
            <button className="btn-success m-2" type="submit">
                Buscar
            </button>
        </form>
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
