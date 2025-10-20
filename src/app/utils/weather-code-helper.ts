/**
 * Retrieve the icon name of the given weather code
 * See https://docs.tomorrow.io/reference/data-layers-weather-codes for more information about the weather codes
 * @param weatherCode The weather code for which you want to retrieve the icon
 * @returns The icon name of the icon that is associated with the given weather code. Note that this is without the '.svg' extension
 */
export function getWeatherIcon(weatherCode: string, isNight = false): string {
    const code = Number.parseInt(weatherCode);

    if (isNight && (code === 1000 || code === 1100)) return 'Moon';

    switch (code) {
        case 1000: // Clear, Sunny
            return 'Sun';
        case 1100: // Mostly Clear
            return 'Cloud-Sun';
        case 1101: // Partly Cloudy
        case 1102: // Mostly Cloudy
        case 1001: // Cloudy
            return 'Cloud';
        case 2000: // Fog
        case 2100: // Light Fog
            return 'Cloud-Fog';
        case 4000: // Drizzle
        case 4001: // Rain
        case 4200: // Light Rain
        case 4201: // Heavy Rain
        case 8000: // Thunderstorm
            return 'Cloud-Drizzle';
        case 5000: // Snow
        case 5001: // Flurries
        case 5100: // Light Snow
        case 5101: // Heavy Snow
            return 'Cloud-Snow-Alt';
        case 6000: // Freezing Drizzle
        case 6001: // Freezing Rain
        case 6200: // Light Freezing Rain
        case 6201: // Heavy Freezing Rain
        case 7000: // Ice Pellets
        case 7101: // Heavy Ice Pellets
        case 7102: // Light Ice Pellets
            return 'Cloud-Hail';
        default: // Unknown
            return 'Help';
    }
}

/**
 * Retrieve the name of the given weather code
 * See https://docs.tomorrow.io/reference/data-layers-weather-codes for more information about the weather codes
 * @param weatherCode The weather code for which you want to retrieve the name
 * @returns The name of the given weather code
 */
export function getWeatherName(weatherCode: string): string {
    const code = Number.parseInt(weatherCode);

    switch (code) {
        case 1000:
            return 'Clear';
        case 1100:
            return 'Mostly Clear';
        case 1101:
            return 'Partly Cloudy';
        case 1102:
            return 'Mostly Cloudy';
        case 1001:
            return 'Cloudy';
        case 2000:
            return 'Fog';
        case 2100:
            return 'Light Fog';
        case 4000:
            return 'Drizzle';
        case 4001:
            return 'Rain';
        case 4200:
            return 'Light Rain';
        case 4201:
            return 'Heavy Rain';
        case 8000:
            return 'Thunderstorm';
        case 5000:
            return 'Snow';
        case 5001:
            return 'Flurries';
        case 5100:
            return 'Light Snow';
        case 5101:
            return 'Heavy Snow';
        case 6000:
            return 'Freezing Drizzle';
        case 6001:
            return 'Freezing Rain';
        case 6200:
            return 'Light Freezing Rain';
        case 6201:
            return 'Heavy Freezing Rain';
        case 7000:
            return 'Ice Pellets';
        case 7101:
            return 'Heavy Ice Pellets';
        case 7102:
            return 'Light Ice Pellets';
        default:
            return 'Unknown';
    }
}
