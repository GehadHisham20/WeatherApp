## What I Used

1. [Vite](https://vitejs.dev/)
2. [MUI](https://mui.com/)
3. [Axios](https://www.axios.com/)
4. [pnpm](https://pnpm.io/installation)
5. [WeatherAPI](https://www.weatherapi.com/)
6. Typescript

## Steps:

### Install Dependencies

Use the package manager [pnpm](https://pnpm.io/installation) to install dependencies.

```bash
pnpm install
```

### Get Key

Sign up in [WeatherAPI](https://www.weatherapi.com/) , Get your key to use in the project

### Setup .env file

put variables (provided in .env.example) in your .env file

```bash
VITE_WEATHER_API_BASE_URL="http://api.weatherapi.com/v1" //from documentation
VITE_WEATHER_API_KEY="your_key" //from the previous step
```

### Open Project

```bash
pnpm run dev
```
