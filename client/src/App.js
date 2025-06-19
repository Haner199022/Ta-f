import React, { useEffect, useState } from 'react';

function App() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/suppliers')
      .then(res => res.json())
      .then(data => setSuppliers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Suppliers</h1>
      <ul>
        {suppliers.map(s => (
          <li key={s.id}>{s.name} - {s.contact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
