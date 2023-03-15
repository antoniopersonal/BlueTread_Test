using WeatherService.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace WeatherService.Services;

public class WeatherForecastService
{
    private readonly string _apiKey;

    public WeatherForecastService(IOptions<WeatherServiceSettings> weatherServiceSettings)
    {
        _apiKey = weatherServiceSettings.Value.ApiKey;
    }

    public async Task<IEnumerable<WeatherData>> GetWeatherDataForCities()
    {
        var httpClient = new HttpClient();
        var results = new List<WeatherData>();

        foreach (var city in new[] { "Reno,NV", "Austin,TX", "Tampa,FL" })
        {
            var response = await httpClient.GetAsync($"https://api.weatherapi.com/v1/forecast.json?key={_apiKey}&q={city}&days=14");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var data = JsonConvert.DeserializeObject<dynamic>(content);

                for (int i = 0; i < 14; i++)
                {
                    results.Add(new WeatherData
                    {
                        Date = data.forecast.forecastday[i].date,
                        Location = city,
                        Condition = data.forecast.forecastday[i].day.condition.text,
                        Temperature = data.forecast.forecastday[i].day.avgtemp_f,
                        Humidity = data.forecast.forecastday[i].day.avghumidity
                    });
                }
            }
        }

        return results;
    }
}
