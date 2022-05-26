import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchRandomQuote } from '../../redux/actions/buscadorAction';
import BuscadorQuote from './BuscadorQuote';

const ResultadoQuote = () => {
    const buscador = useSelector((state) => state.buscador);   

    return (
        <div id="quote-box">
            <h3 className="text-blue title">A wise person once said... </h3>
            {buscador.loading && <div className="text-warning">Searching...</div>}
             {buscador.quote.length >= 1 &&
              <div className="text-success">
                    <p className="quotation" id="text" style={{width:400, height:'auto'}}>
                    "{buscador.quote[0].quote}"</p>
                    {buscador.quote.length === 1 && <span className=" text-danger authorQuote" id="author">{buscador.quote[0].author}</span>}
            </div>}
            {buscador.error !== '' && <span className="text-danger">Error</span>}

            <BuscadorQuote />
        </div>


    )
}

export default ResultadoQuote;