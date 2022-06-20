const getCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => countries(data));
};

const countries = (data) => {
  const allCountries = data.map((country) => singleCountry(country));
  console.log(allCountries)
  const showId = document.getElementById("single-country");
  showId.innerHTML = allCountries.join('');
};

const singleCountry = (country) => {
  return `
        <div>
            <h2>${country.name.common}</h2>
        </div>
    `;
};

getCountries();
