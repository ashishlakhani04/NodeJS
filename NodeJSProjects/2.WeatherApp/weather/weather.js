const request = require('request');

var getWeather = (latitude,longitude,callback) => {

	request({
		url: `https://api.darksky.net/forecast/37cbc419ae741cb89cafe50ac2ca4ca3/${latitude},${longitude}`,
		json: true
	},(error,response,body)=>{
		if(error){
			callback('Unable to connect to Forecast.io servers!');
		}else if(response.statusCode === 400){
			callback('The given location is invalid.');
		}else if(response.statusCode === 200){
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
		
	});


};

module.exports = {
	getWeather
};

