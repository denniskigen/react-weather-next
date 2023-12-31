# React Weather (next)

[React Weather (next)](https://react-weather-next.denniskigen.com) is a beautiful weather app built on top of the [OpenWeatherMap API](https://openweathermap.org/api) and a follow-up to the popular [React Weather](https://react-weather.denniskigen.com) app.

## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org) and get an API key.
- Fork the project and clone it locally.
- Install dependencies using [pnpm](https://pnpm.io/installation):

  ```sh
  pnpm install
  ```

- Create a file at the root of the project called `.env.local` with the following contents:

  ```sh
  NEXT_PUBLIC_API_URL = 'https://api.openweathermap.org/data/2.5'
  NEXT_PUBLIC_API_KEY = The API key you obtained from openweathermap.org
  NEXT_PUBLIC_ICON_URL = 'https://openweathermap.org/img/w'
  ```

## Tech Stack

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)