import React, { useState } from 'react';
import { Card, Stack } from '@mui/material';
import Converter from './components/Converter';
import { NavbarLink } from './components/Navbar';

import { distanceUnits, convertDistance } from './units/distance';
import { timeUnits, convertTime } from './units/time';
import { temperatureUnits, convertTemperature } from './units/temperature';
import { areaUnits, convertArea } from './units/area';
import { volumeUnits, convertVolume } from './units/volume';

const tabLabels = ["Vzdálenost", "Čas", "Teplota", 'Plocha', 'Objem'];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  /**
   * Změna záložky
   */
  const handleTabChange = (newValue: number) => {
    setSelectedTab(newValue);
  };

  /**
   * Render záložek a jednotek
   */
  const renderConverter = () => {
    if(selectedTab === 0) {
      return <Converter key='distance' units={distanceUnits} convert={convertDistance} />;
    } else if (selectedTab === 1) {
      return <Converter key='time' units={timeUnits} convert={convertTime} />;
    } else if (selectedTab === 2) {
      return <Converter key='temperature' units={temperatureUnits} convert={convertTemperature} />;
    } else if (selectedTab === 3) {
      return <Converter key='area' units={areaUnits} convert={convertArea} />;
    } else if (selectedTab === 4) {
      return <Converter key='volume' units={volumeUnits} convert={convertVolume} />;
    } else return null;
  }

  return (
    <div className="App">
      <Card>
        <Stack alignItems={'center'} gap={5}>
          <NavbarLink links={tabLabels} selectedTab={selectedTab} handleTabChange={handleTabChange} />
          {renderConverter()}
        </Stack>
      </Card>
    </div>
  );
};

export default App;
