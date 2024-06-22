export type VolumeUnit = 'l' | 'ml' | 'm3' | 'cm3' | 'gal' | 'ft3';

export const volumeUnits: VolumeUnit[] = ['l', 'ml', 'm3', 'cm3', 'gal', 'ft3'];

export const volumeConversionRates: { [key in VolumeUnit]: number } = {
  l: 1,
  ml: 1000,
  m3: 0.001,
  cm3: 1000,
  gal: 0.264172,
  ft3: 0.0353147,
};

export const convertVolume = (value: number, fromUnit: VolumeUnit, toUnit: VolumeUnit): number => {
  const valueInLiters = value / volumeConversionRates[fromUnit];
  return valueInLiters * volumeConversionRates[toUnit];
};