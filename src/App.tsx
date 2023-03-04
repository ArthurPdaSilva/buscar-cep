import React from 'react';
import Search from './components/Search';
import Result from './components/Result';
import CepProvider from './contexts/CEPContext';

export default function App(): JSX.Element {
  return (
    <CepProvider>
      <div className="app">
        <Search />
        <Result />
      </div>
    </CepProvider>
  );
}
