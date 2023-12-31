"use client";

import * as React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Forecast } from "./forecast";
import { MappedWeatherData } from "@/hooks/use-weather";

type WeatherCardProps = {
  weather: MappedWeatherData;
  forecast: Array<MappedWeatherData>;
};

export function WeatherCard({ weather, forecast }: WeatherCardProps) {
  return (
    <Card className="md:w-[500px] mx-auto my-10 border-0 sm:border sm:rounded-xl sm:border-slate-200 sm:dark:border-slate-800">
      <CardHeader>
        <CardTitle className="text-xl text-balance">
          {weather.location}, {weather.country}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-balance">
          {dayjs(weather.date).format("dddd")}, {dayjs.utc(weather.date).utcOffset(weather.timezone).format("h:mm A")}.{" "}
          {weather.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between my-3">
          <div className="flex flex-col">
            <span className="text-6xl text-primary">{weather.temperature}&deg;</span>
            <span className="text-sm text-muted-foreground">Feels like {weather.feels_like}&deg;</span>
          </div>
          <span className={cn(weather.weatherIcon, "text-7xl sm:text-9xl text-primary")}></span>
        </div>
        <div className="items-center mx-auto my-6 text-xs text-center text-muted-foreground">
          <span className="mr-1 text-sm wi wi-strong-wind text-primary"></span>
          <span className="ml-1 mr-2 tracking-wide">
            {weather.wind_speed}
            m/s winds
          </span>
          <span className="mx-0.5" />
          <span className="mr-1 text-sm wi wi-humidity text-primary"></span>
          <span className="ml-1 tracking-wide">{weather.humidity}% humidity</span>
        </div>
        <span className="justify-center block mx-auto my-6 text-2xl text-center text-balance text-muted-foreground">
          {weather.recommendation}
        </span>
        <Separator />
        <Forecast forecast={forecast} />
      </CardContent>
    </Card>
  );
}
