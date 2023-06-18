
const WEATHERAPI_BASE_ENDPOINT = 'http://api.weatherapi.com/v1/';
console.log('Hello Worlds');
const API_KEY = '';

class WeatherApp {
    
    constructor() {
        console.log("This is working!!!");
        this.get_weather('Miami');
    }

    get_weather(location, key) {
        fetch(`${WEATHERAPI_BASE_ENDPOINT}forecast.json?key=${API_KEY}&q=${location}`, {
            mode: 'cors'
        })
            .then(function(response) {
                return response.json();
                // Successful response :)
            })
            .then(function(response) { 
                console.log("Response", response);
            })
            .catch(function(err) {
                // Error :(
                console.log("Error", err);
            });
    }




    

    


}

document.addEventListener("DOMContentLoaded", function(event) { 
    let weatherApp = new WeatherApp();
});
