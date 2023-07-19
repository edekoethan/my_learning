//exercises
/*
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//Exercises: Level 1

fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
})

.catch(error => console.error(error)) */
/*
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
.then(response => response.json() )
.then(data => {
    console.log(data)
})
.catch(console.error(error))
*/
//using async and await 
/*
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI);
      const catsData = await response.json();
      return catsData;
    } catch (error) {
      console.error(error);
    }
  };
  
  const catsAPI = 'https://api.thecatapi.com/v1/breeds';
  
  (async () => {
    const catsData = await fetchData();
  
    const calculateAverageWeight = (catsData) => {
      const weights = catsData.map((cat) => {
        const weight = cat.weight.metric;
        const weightInGrams = parseFloat(weight.split(' ')[0].replace(',', ''));
        return weightInGrams;
      });
  
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      const averageWeight = totalWeight / catsData.length;
  
      return averageWeight;
    };
  
    const averageWeight = calculateAverageWeight(catsData);
    console.log(`Average Weight: ${averageWeight} grams`);
  })();
  */
/*
  const fetchData = async () => {
    try {
      const response = await fetch(catsAPI);
      const catsData = await response.json();
      return catsData;
    } catch (error) {
      console.error(error);
    }
  };
  
  const catsAPI = 'https://api.thecatapi.com/v1/breeds';
  
  (async () => {
    const catsData = await fetchData();
  
    const calculateAverageWeight = (catsData) => {
      const totalWeight = catsData.reduce((sum, cat) => {
        const weight = cat.weight.metric;
        const weightInGrams = parseFloat(weight.split(' ')[0].replace(',', ''));
        return sum + weightInGrams;
      }, 0);
  
      const averageWeight = totalWeight / catsData.length;
  
      return averageWeight;
    };
  
    const averageWeight = calculateAverageWeight(catsData);
    console.log(`Average Weight: ${averageWeight} grams`);
  })();
  
*/
/*
const countriesAPI = 'https://restcountries.com/v2/all';

const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countryData = await response.json();
    return countryData;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  const countryData = await fetchData();

  const sortByPopulation = (countries) => {
    return countries.sort((a, b) => b.population - a.population);
  };

  const getMostPopulatedCountries = (countries, limit) => {
    const sortedCountries = sortByPopulation(countries);
    return sortedCountries.slice(0, limit);
  };

  const mostPopulatedCountries = getMostPopulatedCountries(countryData, 10);
  console.log(mostPopulatedCountries);
})();

*/
/*
In this code, the fetchData function retrieves the country data from the specified API. Then, the getMostPopulatedCountries function sorts the country data based on population in descending order and returns the top limit number of countries.

By passing countryData and 10 as arguments to getMostPopulatedCountries, you will get an array of the 10 most populated countries. This array is then logged to the console using console.log(mostPopulatedCountries).

Please note that the country data retrieved from the API should be in the correct format with the population information for this code to work properly. */

