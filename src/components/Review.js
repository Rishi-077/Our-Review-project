import React, { useState } from 'react';
import people from './Data.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { TiChevronLeft,TiChevronRight } from 'react-icons/ti'
import { MdFormatQuote} from 'react-icons/md'
function Review ()
{
    const [ index, setIndex ] = useState( 0 );
    const { name, job, image, text } = people[ index ];
    
    const prevPerson = () =>
    {   
        setIndex( (index) =>
        {
            let newIndex = index - 1;
            return newIndex;
        } );
    }
    const nextPerson = () =>
    {
        setIndex( (index) =>
        {
            let newIndex = index + 1;
            return newIndex;
        } );
    }

    
    console.log(people);
    return (
        <article className="Review">
            <div className="container">
                <Card className="card">
                     <img src={image} alt=  {name} className="container-image img-fluid" /> 
                    <i><MdFormatQuote /></i>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="text">{text}</p>
                    <div className="button-container">
                        <button className="btn-prev" onClick={prevPerson} on><TiChevronLeft /></button>
                        <button className="btn-next" onClick={nextPerson}><TiChevronRight /></button>
                    </div>
                    <button className="btn-random">Surprise me</button>
                </Card>
            </div>
        </article>
     );
}

export default Review;