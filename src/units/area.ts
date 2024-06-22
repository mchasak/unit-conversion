export type AreaUnit = 'm2' | 'km2' | 'ft2' | 'mi2' | 'akr' | 'ha';

export const areaUnits: AreaUnit[] = ['m2', 'km2', 'ft2', 'mi2', 'akr', 'ha'];

export const areaConversionRates: { [key in AreaUnit]: number } = {
  'm2': 1,
  'km2': 0.000001,
  'ft2': 10.7639,
  'mi2': 3.861e-7,
  'akr': 0.000247105,
  'ha': 0.0001,
};

export const convertArea = (value: number, fromUnit: AreaUnit, toUnit: AreaUnit): number => {
  const valueInSquareMeters = value / areaConversionRates[fromUnit];
  return valueInSquareMeters * areaConversionRates[toUnit];
};