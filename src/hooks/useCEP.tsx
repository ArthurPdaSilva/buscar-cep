import { useContext } from 'react';
import { CEPContext } from '../contexts/CEPContext';

export default function useCEP() {
  return useContext(CEPContext);
}
