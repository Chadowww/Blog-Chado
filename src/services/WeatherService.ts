import axios from "axios";

class WeatherService {
  async getWeatherByCity(city: string) {
    const params = {
      appid: process.env.VUE_APP_API_KEY,
      q: city,
      units: "metric",
    };

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getWeatherForecastByCity(city: string) {
    const params = {
      appid: process.env.VUE_APP_API_KEY,
      q: city,
      units: "metric",
    };

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new WeatherService();
