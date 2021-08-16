import { useFetchImages } from '../../../hooks/useFetchImages';
import Card from './card/Card'
import Spinner from './spinner/Spinner';
import FormImg from './formimg/FormImg';

const Cards = () => {

    const [images, loading, handleSubmit] = useFetchImages();

    return (
        <div className="text-center"> 

            <FormImg handleSubmit={handleSubmit}  />
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
