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

    const checkNumber = ( number ) =>
    {
        if ( number > people.length - 1 )
        {
            return 0;
        }
        if ( number < 0 )
        {
            return people.length - 1;   
        }
        return number;
    }
    
    const prevPerson = () =>
    {   
        setIndex( (index) =>
        {
            let newIndex = index - 1;
            return checkNumber( newIndex );
        } );
    }
    const nextPerson = () =>
    {
        setIndex( (index) =>
        {
            let newIndex = index + 1;
            return checkNumber( newIndex );
            
        } );
    }

    const randomPerson = () =>
    {
        let randomNumber = Math.floor( Math.random() * people.length );
        if ( randomNumber === index )
        {
            randomNumber    = index + 1;
        }
        setIndex(checkNumber( randomNumber ));
    }    

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
                    <button className="btn-random" onClick={randomPerson}>Surprise me</button>
                </Card>
            </div>
        </article>
     );
}
    
export default Review;