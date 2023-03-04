import React, { useCallback, useState } from 'react';
import icon from '../../assets/search.png';
import iconFocus from '../../assets/search-focus.png';
import './search.css';
import api from '../../services/api';
import useCEP from '../../hooks/useCEP';
import CEP from '../../@types/CEPType';

export default function Search() {
  const [iconOnFocus, setIconOnFocus] = useState(false);
  const [cepField, setCepField] = useState('01001-000');
  const { setCep } = useCEP();

  const searching = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (cepField.length <= 8) return;
      const response = await api.get(cepField.replace('/', '') + '/json');
      setCep(response.data as CEP);
      setCepField('');
    },
    [cepField, setCepField, setCep],
  );

  const formattingCep = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const notFormattedCep = e.target.value;
      const formattedCep = notFormattedCep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
      setCepField(formattedCep);
    },
    [setCepField],
  );

  return (
    <div className="components search">
      <h1>Buscar CEP </h1>
      <form onSubmit={searching}>
        <div className="inputWithIcon">
          <input
            type="text"
            placeholder="Digite o CEP"
            onFocus={() => setIconOnFocus(true)}
            onBlur={() => setIconOnFocus(false)}
            onChange={(e) => formattingCep(e)}
            value={cepField}
          />
          <img src={iconOnFocus ? iconFocus : icon} alt="Ícone de pesquisa" />
        </div>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
