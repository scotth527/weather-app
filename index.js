
const WEATHERAPI_BASE_ENDPOINT = 'http://api.weatherapi.com/v1/';
console.log('Hello Worlds');
const API_KEY = '';

let CurrentLocation;
let CurrentCloud;
let Condition;
let Temp_C;
let Temp_F;
let Weather_Img;

class WeatherApp {
    
    constructor() {
        console.log("This is working!!!");
        this.get_weather(CurrentLocation);
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
                CurrentLocation = "Location: " + response.location.name;
                CurrentCloud = "Cloud: " + response.current.cloud + "%";
                Condition= response.current.condition.text;
                Temp_C= response.current.temp_c + "°C";
                Temp_F= response.current.temp_f + "°F";
                Weather_Img = response.current.condition.icon;
                console.log(CurrentCloud);
                console.log(Condition);
                console.log(Temp_C);
                console.log(Temp_F);
                document.querySelector(".city").innerText = CurrentLocation;
                document.querySelector(".cloud").innerText = CurrentCloud;
                document.querySelector(".temp_C").innerText = Temp_C;
                document.querySelector(".temp_F").innerText = Temp_F;
                document.querySelector(".icon").src =
                "http:" + Weather_Img;
            })

            .catch(function(err) {
                // Error :(
                console.log("Error", err);
            })
            
    }

}

// document.addEventListener("DOMContentLoaded", function(event) { 
//     let weatherApp = new WeatherApp();
// });

document.querySelector(".search button").addEventListener("click", function () {
    CurrentLocation = document.querySelector(".search-bar").value;
    let weatherApp = new WeatherApp();
});