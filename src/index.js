import './css/styles.css';
import fetchCountries from "./js/fetchCountries";
import getRefs from './js/get-refs';
//import API from './api-service';
const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.searchForm.addEventListener('input', onSearch);
 
function onSearch(e){
    e.preventDefault();
    const form = e.currentTarget;
  //const searchQuery = form.elements.query.value;
  console.log(form)
  //console.log(searchQuery)
}