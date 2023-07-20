const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'adbaa6deedmshb578309689565eep100290jsncd6b5aee51f9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}


submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

