
//import Notiflix from "notiflix";

const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries (name) {
    return fetch(`${BASE_URL}/${name}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
 
export default {fetchCountries};



