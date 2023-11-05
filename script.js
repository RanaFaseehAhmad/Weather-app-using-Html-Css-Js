let apiKey = "1a2e7d6f7878d6fabf9331011d31d058";
let apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inputfield = document.querySelector(".first input")
let inputbtn = document.querySelector(".first button")
let weatherimg = document.querySelector(".weatherimg")

async function weather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    /* This line no-7 uses the fetch function to make an HTTP GET request to the specified URL.
     The URL is constructed by combining the apiUrl, city, and apiKey variables.
     It includes the API endpoint for retrieving weather data for the specified city. */
    let data = await response.json();
    /*  on line-11   After making the HTTP request, the response is received and stored in the response variable.
     The await keyword is used to wait for the response to be resolved before proceeding */
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${data.main.temp} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".wcondition").innerHTML = `${data.weather[0].main}`;

    if (data.weather[0].main == "Clouds") {
        weatherimg.src = "images/clouds.png"
    } else if (data.weather[0].main == "Rain") {
        weatherimg.src = "images/rain.png"

    } else if (data.weather[0].main == "Clear") {
        weatherimg.src = "images/clear.png"

    }
    else if (data.weather[0].main == "Mist") {
        weatherimg.src = "images/mist.png" 

    }
    else if (data.weather[0].main == "Drizzle") {
        weatherimg.src = "images/drizzle.png"

    }

}
    inputbtn.addEventListener("click", () => {
        
        weather(inputfield.value);

    })




