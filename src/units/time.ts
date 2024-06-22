export type TimeUnit = 'sec' | 'min' | 'h' | 'dny' | 'týdny' | 'měsíce' | 'roky';

export const timeUnits: TimeUnit[] = ['sec', 'min', 'h', 'dny', 'týdny', 'měsíce', 'roky'];

export const timeConversionRates: { [key in TimeUnit]: number } = {
  sec: 1,
  min: 1 / 60,
  h: 1 / 3600,
  dny: 1 / 86400,
  týdny: 1 / 604800,
  měsíce: 1 / 2628000,
  roky: 1 / 31536000
};

export const convertTime = (value: number, fromUnit: TimeUnit, toUnit: TimeUnit): number => {
  const valueInSeconds = value / timeConversionRates[fromUnit];
  return valueInSeconds * timeConversionRates[toUnit];
};
