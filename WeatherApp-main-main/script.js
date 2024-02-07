

    // const apiKey = "473af49159bf6c94cb96c38a368c4f99";
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

    // const searchBox = document.querySelector(".search-input");
    // const searchBtn = document.querySelector(".search button");
    // const weatherIcon = document.querySelector(".weather-icon");

    // async function checkWeather(city) {
    //     const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    //      if (response.status == 404) {

    //         document.querySelector(".error").style.display == "block";
    //         document.querySelector(".weather").style.display == "none";


    //      }else{

    //         const data = await response.json();
        
    //     document.querySelector(".city").innerHTML = data.name;
    //     document.querySelector(".temp").innerHTML = Math.floor(data.main.temp_max) + "°C";
    //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    //     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    // }

    //         if(data.weatherIcon[0].main == "Clouds"){
    //     weather.src = "images/clouds.png";

    //      }else if(data.weatherIcon[0].main == "Clear"){
    //        weather.src = "images/clear.png";

    //      }else if(data.weatherIcon[0].main == "Rain"){
    //        weather.src = "images/rain.png";

    //     }else if(data.weatherIcon[0].main == "Drizzle"){
    //     weather.src = "images/drizzle.png";

    //      }else if(data.weatherIcon[0].main == "Mist"){
    //     weather.src = "images/mist.png";

    //         } 
            
    //         document.querySelector(".weather").style.display = "block";
    //         document.querySelector(".error").style.display == "none";


         


      

    // searchBtn.addEventListener("click", () => {
    //     checkWeather(searchBox.value);
    // });

   



    // // Initial call to checkWeather with no specific city (you might want to change this)
    // checkWeather("");



    // }


    const apiKey = "473af49159bf6c94cb96c38a368c4f99";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const json = await response.json();

        document.querySelector(".city").innerHTML = json.name;
        document.querySelector(".temp").innerHTML = Math.floor(json.main.feels_like) + "°C";
        document.querySelector(".humidity").innerHTML = json.main.humidity + "%";
        document.querySelector(".wind").innerHTML = json.wind.speed + "km/h";

        if (json.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (json.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (json.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (json.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (json.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim(); // Get the value from the input and remove leading/trailing spaces
    if (city) {
        checkWeather(city);
    } else {
        // Handle the case when the city is empty
        alert("Please enter a valid city name");
    }
});

// Initial call to checkWeather with no specific city (you might want to change this)
checkWeather("");
