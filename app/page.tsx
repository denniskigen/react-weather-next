import * as React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
import { WeatherCard } from "@/components/weather-card";
import { useWeather } from "@/hooks/use-weather";

export default async function Page() {
  const { weather, forecast } = await useWeather();

  if (weather && forecast) {
    return (
      <main className="relative sm:container">
        <WeatherCard forecast={forecast} weather={weather} />
      </main>
    );
  }
}
