using Microsoft.AspNetCore.Mvc;
using WeatherService.Services;
using WeatherService.Models;

namespace WeatherService.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly WeatherForecastService _weatherService;

    public WeatherForecastController(WeatherForecastService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public async Task<IEnumerable<WeatherData>> Get()
    {
        return await _weatherService.GetWeatherDataForCities();
    }
}
