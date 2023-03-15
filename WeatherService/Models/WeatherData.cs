namespace WeatherService.Models;
public class WeatherData
{
    public string Date { get; set; }
    public string Location { get; set; }
    public string Condition { get; set; }
    public decimal Temperature { get; set; }
    public decimal Humidity { get; set; }
}
