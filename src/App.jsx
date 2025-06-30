import React, { useState, useEffect } from 'react';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (Array.isArray(data)) {
        setCountries(data);
        setError(false);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 👇 Optional delay for demo effect, remove for real apps
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <div className='w-full overflow-x-hidden px-4 py-6'>
      <h1 className="text-2xl font-bold mb-4">Country List</h1>

      {loading && <h1 className="text-blue-500">Loading...</h1>}
      {error && <h1 className="text-red-600">Fetching problem</h1>}

      {!loading && !error && countries.map((country) => (
        <div key={country.cca3} className="mb-4 border-b pb-2">
          <h2 className="text-lg font-medium">{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
