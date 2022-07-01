const API_KEY = '520844d9e3acacbc7823f7a0f624b0f9';

const fetchData = position =>{
    const { latitude, longitude } = position.coords;

    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then( Response => Response.json())
        .then(data => setWeatherData(data))
    console.log(position);
}

const setWeatherData = data =>{
    console.log(data);

    const weatherData = {
        location: data.name,
        description: data.weather[0].description,
        humedad: "Humidity",
        humidity: data.main.humidity+"%",
        // pressure: "Pressure:"+data.main.pressure,
        temperature: data.main.temp + " °C",
    }
    
    Object.keys(weatherData).forEach( key=> {
        document.getElementById(key).textContent = weatherData[key];
    });

    switch(data.weather[0].main){
        case 'Clear': 
        animIcon.src = 'animated/day.svg'
        break;
    }
                                                 
}

const getDate=()=>{
    let date=new Date();
    return `${date.getDate()}-${('0'+(date.getMonth()+1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
}
