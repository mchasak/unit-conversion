export type TemperatureUnit = '°C' | '°F' | 'K';

export const temperatureUnits: TemperatureUnit[] = ['°C', '°F', 'K'];

export const convertTemperature = (value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): number => {
  if (fromUnit === toUnit) return value;

  let valueInCelsius = value;
  if (fromUnit === '°F') valueInCelsius = (value - 32) * (5 / 9);
  if (fromUnit === 'K') valueInCelsius = value - 273.15;

  let result = valueInCelsius;
  if (toUnit === '°F') result = valueInCelsius * (9 / 5) + 32;
  if (toUnit === 'K') result = valueInCelsius + 273.15;

  return result;
};
