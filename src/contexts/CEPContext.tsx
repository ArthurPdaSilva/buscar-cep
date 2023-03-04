import React, { createContext, useState } from 'react';
import Cep from '../@types/CEPType';

interface CepContextInterface {
  cep: Cep;
  setCep: React.Dispatch<React.SetStateAction<Cep>>;
}

export const CEPContext = createContext<CepContextInterface>(
  {} as CepContextInterface,
);

export default function CepProvider({ children }: { children: JSX.Element }) {
  const [cep, setCep] = useState({} as Cep);

  return (
    <CEPContext.Provider
      value={{
        cep,
        setCep,
      }}
    >
      {children}
    </CEPContext.Provider>
  );
}
