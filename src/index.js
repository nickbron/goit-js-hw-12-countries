import './css/styles.css';
import API from './js/fetchCountries';
import Notiflix from "notiflix";
import countryCard from './templates/country.hbs';
import countriesList from './templates/countriesList.hbs';
import getRefs from './js/get-refs';
const debounce = require('lodash.debounce');


const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 300));

function onSearch(e){

  const countryName = e.target.value

  API.fetchCountries(countryName).then(value => {
    if (value.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'); 
    }
    if (value.length === 1) {
     // renderCountry(value[0]);
     renderCountry(countryCard(value[0]));
    }
    if (value.length >= 2 && value.length <= 10) {
      // renderCountriesList(value);
      renderCountry(countriesList(value));
     
    }
  })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    })
   .finally(clearResult());
}

function renderCountry(country) {
    refs.countryList.insertAdjacentHTML('beforeend', country);
  }


// function renderCountry(country) {
// //  const markup = countryCard(country);
//   // refs.countryInfo.insertAdjacentHTML('beforeend', markup);
//   refs.countryInfo.insertAdjacentHTML('beforeend', country);
// }
  
//   function renderCountriesList(Items) {
//     // const markup = countriesList(Items);
//     // refs.countryList.insertAdjacentHTML('beforeend', markup);
//     refs.countryList.insertAdjacentHTML('beforeend', Items);
//   }
  
  function clearResult() {
   // refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
  }