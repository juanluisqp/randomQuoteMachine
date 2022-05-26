import axios from "axios";


export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// Actions

export const fetchQuoteRequest = () => {
    return {
        type: FETCH_QUOTE_REQUEST
    }
}

export const fetchQuoteSuccess = (quote) => {
    return {
        type: FETCH_QUOTE_SUCCESS,
        payload: quote
    }
}

export const fetchQuoteFailure = (error) => {
    return {
        type: FETCH_QUOTE_FAILURE,
        payload: error
    }
};


export const  fetchRandomQuote = () => {
    const randomNumber = Math.floor((Math.random() * 100) + 1)
    return (dispatch) => {
        dispatch(fetchQuoteRequest());
        axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
            .then(response => {               
                dispatch(fetchQuoteSuccess([response.data.quotes[randomNumber]]))                       
            })
            .catch(error => {
                console.error(error)
            })     
    
    }
};
