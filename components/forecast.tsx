"use client";

import * as React from "react";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { MappedWeatherData } from "@/hooks/use-weather";

type ForecastProps = {
  forecast: Array<MappedWeatherData>;
};

export function Forecast({ forecast }: ForecastProps) {
  return (
    <>
      <div className="m-4">
        <div className="">
          {forecast.map((value) => {
            return (
              <ul className="mt-4" key={value.date}>
                <li className="flex flex-row p-1 ">
                  <span className="flex-1 text-left">{dayjs(value.dt_txt).format("dddd")}</span>
                  <span className="text-2xl ">
                    <span className={cn(value.forecastIcon, "text-primary")}></span>
                  </span>
                  <span className="flex-1 text-right">
                    {value.min}&deg; / {value.max}&deg;
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
