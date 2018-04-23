const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}

	})
	.help()
	.alias('help','h')
	.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results) =>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		// console.log(JSON.stringify(results,undefined,3));
		console.log(results.address);
		weather.getWeather(results.latitude,results.longitude,(errorMessage, finalResult)=>{
			if(errorMessage){
				console.log(errorMessage);
			}else{
				console.log(`It's currently ${finalResult.temperature} ,it feels like ${finalResult.apparentTemperature}.`);
			}

		});

	}
});

// 37cbc419ae741cb89cafe50ac2ca4ca3



