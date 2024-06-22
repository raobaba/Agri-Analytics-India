import React from 'react';
import { MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <MantineProvider >
      <HomePage />
    </MantineProvider>
  );
};

export default App;

