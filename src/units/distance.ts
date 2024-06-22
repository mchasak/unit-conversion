export type DistanceUnit = 'cm' | 'dm' | 'm' | 'km' | 'ft' | 'mi';

export const distanceUnits: DistanceUnit[] = ['cm', 'dm', 'm', 'km', 'ft', 'mi'];

export const distanceConversionRates: { [key in DistanceUnit]: number } = {
  cm: 100,
  dm: 10,
  m: 1,
  km: 0.001,
  ft: 3.28084,
  mi: 0.000621371,
};

export const convertDistance = (value: number, fromUnit: DistanceUnit, toUnit: DistanceUnit): number => {
  const valueInMeters = value / distanceConversionRates[fromUnit];
  return valueInMeters * distanceConversionRates[toUnit];
};
