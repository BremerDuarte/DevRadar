import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-contect" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
