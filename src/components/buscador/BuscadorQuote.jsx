import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchRandomQuote} from '../../redux/actions/buscadorAction';


const BuscadorQuote = () => {
    const dispatch = useDispatch(); 
    useEffect(()=> {
        dispatch(fetchRandomQuote())
      
        } ,[])   
    return (
        <div className="form-group">
            <button id="new-quote" className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchRandomQuote())
                }
            }>Give me more wisedom, please</button>

            <button className='btn btn-primary mt-3 ms-3'><a target="_blank" rel="noopener" id="tweet-quote" href="https://www.twitter.com/intent/tweet">Share wisdom on Twitter </a></button>
        </div>
    )
}

export default BuscadorQuote;