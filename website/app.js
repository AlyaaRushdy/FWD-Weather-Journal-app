/* Global Variables */

// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'bf1a156b7f4d7babe3ad789adc4c1edc';
const units = 'metric';

//selectors
const generateButton = document.getElementById('generate');
const date = document.getElementById('date');
const temperature = document.getElementById('temp');
const content = document.getElementById('content');

//an object to save the retrieved data globally
let allData = {};



// Create a new date instance dynamically with JS
let todaysDate = new Date();
let detailedDate = todaysDate.getDate() + '/' + 
        `${todaysDate.getMonth() + 1 }`+ '/' + todaysDate.getFullYear();


// Event listener to add function to existing HTML DOM element
generateButton.addEventListener('click', getZipInput);


/* Function called by event listener */
function getZipInput() {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    //Function to fetch Web API Data
    fetch(baseURL + 'zip=' + zip + '&appid=' + apiKey + '&units=' + units)

    //transfering the response into json format
    .then(response => response.json())

    //storing the data and updating the UI
    .then(data => {
        allData = data;

        date.innerText = `Date : ${detailedDate}`;
        temperature.innerText = 'Temperature : ' 
            + Math.round(allData.main.temp) + ' degrees';
        content.innerText = `and you're feeling ${feelings}`;
    })

    .catch(error => alert('there is something wrong'));
}

