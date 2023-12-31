import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
import { recommendations } from "@/components/recommendations";
import { weatherIcons } from "@/components/weather-icons";

export type CurrentWeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  dt_txt?: string;
  pop?: number;
};

type ForecastItem = Omit<CurrentWeatherData, "base" | "coord" | "id" | "rain">;

type ForecastWeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<ForecastItem>;
};

type MappedWeather = {
  location: string;
  condition: number;
  country: string;
  date: number;
  description: string;
  feels_like: number;
  humidity: number;
  icon_id: number;
  sunrise: string;
  sunset: string;
  temperature: number;
  timezone: number;
  wind_speed: number;
  [key: string]: unknown;
};

type OptionalProperties = {
  currentTime?: string;
  dt_txt?: string;
  forecastIcon?: string;
  isDay?: boolean;
  max?: number;
  min?: number;
  recommendation?: string;
  weatherIcon?: string;
};

export type MappedWeatherData = MappedWeather & OptionalProperties;

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const iconPrefix = `wi wi-`;

if (!BASE_URL || !API_KEY) {
  throw new Error("API URL or Key is not defined in environment variables");
}

async function fetchWeatherData(endpoint: string, location: string) {
  const url = `${BASE_URL}/${endpoint}?q=${location}&units=metric&APPID=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getCurrentWeatherData(location: string) {
  const data: CurrentWeatherData = await fetchWeatherData("weather", location);

  return data ? mapResponseProperties(data) : null;
}

async function getForecastData(location: string) {
  const data: ForecastWeatherData = await fetchWeatherData("forecast", location);
  const { list } = data || {};

  return list ? list.filter((f: ForecastItem) => f.dt_txt?.match(/09:00:00/)).map(mapResponseProperties) : null;
}

export function mapResponseProperties(data: CurrentWeatherData | ForecastItem) {
  const mapped: MappedWeatherData = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise ? dayjs.utc(dayjs.unix(data.sys.sunrise)).utcOffset(data.timezone).format() : "",
    sunset: data.sys.sunset ? dayjs.utc(dayjs.unix(data.sys.sunset)).utcOffset(data.timezone).format() : "",
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // convert from seconds to hours
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
    mapped.forecastIcon = iconPrefix + weatherIcons.day[mapped.icon_id]?.icon;
  }

  if (mapped.sunset || mapped.sunrise) {
    mapped.currentTime = dayjs.utc(dayjs.unix(mapped.date)).utcOffset(mapped.timezone).format();
    mapped.currentTime > mapped.sunrise && mapped.currentTime < mapped.sunset ? true : false;
    mapped.weatherIcon = iconPrefix + weatherIcons[mapped.isDay ? "day" : "night"][mapped.icon_id].icon;
    mapped.recommendation = recommendations[mapped.isDay ? "day" : "night"][mapped.icon_id].recommendation;
  }

  if (data.weather[0].description) {
    mapped.description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = Math.round(data.main.temp_max);
    mapped.min = Math.round(data.main.temp_min);
  }

  Object.entries(mapped).forEach(([key, value]) => {
    if (value === undefined) {
      delete mapped[key];
    }
  });

  return mapped;
}

export async function useWeather() {
  const location = "Eldoret";
  const weather = await getCurrentWeatherData(location);
  const forecast = await getForecastData(location);

  return {
    weather: weather,
    forecast: forecast,
  };
}
