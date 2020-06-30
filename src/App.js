import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const techs = localStorage.getItem('techs');
    setTech(JSON.parse(techs));
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong> Você adicionou {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="submit" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
