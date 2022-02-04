import React, { useState } from 'react';
import people from './Data.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {  } from 'react-icons/ti'
import { MdFormatQuote} from 'react-icons/md'
function Review ()
{
    const [ index, useIndex ] = useState( 0 );
    const {name, job, image, text} = people[ index ];
    
    console.log(people);
    return (
        <article className="Review">
            <div className="container">
                <Card>
                     <img src={image} alt=  {name} className="container-image img-fluid" /> 
                    <i><MdFormatQuote /></i>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="text">{text}</p>
                </Card>
            </div>
        </article>
     );
}

export default Review;