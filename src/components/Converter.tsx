import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Button, Container, List, ListItem, Stack, Typography } from '@mui/material';

interface ConverterProps<U> {
  units: U[];
  convert: (value: number, fromUnit: U, toUnit: U) => number;
}

const Converter = <U extends string>({ units, convert }: ConverterProps<U>) => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [inputUnit, setInputUnit] = useState<U>(units[0]);
  const [conversionResults, setConversionResults] = useState<{ unit: U, value: number }[]>([]);

  /**
   * Funkce pro konvertování jednotky
   */
  const handleConvert = () => {
    const value = parseFloat(inputValue) || 0;
    const results = units.map(unit => ({
      unit,
      value: convert(value, inputUnit, unit),
    }));
    setConversionResults(results);
  };

  /**
  * Po přepnutí záložky se vybere první jednotka ze seznamu a msažou se předchozí hondoty
  */
  useEffect(() => {
    setInputUnit(units[0]);
    setConversionResults([]);
  }, [units]);

  return (
    <Container>
      <Stack direction={'row'} gap={2}>
        <TextField
          type="number"
          label="Hodnota"
          variant="standard"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextField
          select
          label="Jednotka"
          value={inputUnit}
          variant="standard"
          onChange={(e) => setInputUnit(e.target.value as U)}

        >
          {units.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" color="primary" onClick={handleConvert}>
          Převést
        </Button>
      </Stack>
      <List>
        {conversionResults.map((result) => (
          <ListItem key={result.unit}>
            <Typography>
              {result.unit}
            </Typography>
            <Typography>
              {result.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Converter;
