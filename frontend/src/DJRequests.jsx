
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function DJRequests() {
  const [searchParams] = useSearchParams();
  const djName = searchParams.get('name') || '';
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`https://dj-request-app.onrender.com/requests?dj=${encodeURIComponent(djName)}`);
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error('Error al obtener solicitudes:', err);
      } finally {
        setLoading(false);
      }
    };

    if (djName) {
      fetchRequests();
    } else {
      setLoading(false);
    }
  }, [djName]);

  if (!djName) {
    return <div className="p-4 text-center">Por favor proporciona un DJ en la URL, por ejemplo: <code>?name=DJTavo</code></div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Solicitudes para {djName}</h1>
      {loading ? (
        <p>Cargando solicitudes...</p>
      ) : requests.length === 0 ? (
        <p>No hay solicitudes aún.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Canción</th>
              <th className="border border-gray-300 px-4 py-2">Dedicatoria</th>
              <th className="border border-gray-300 px-4 py-2">Pagado</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td className="border border-gray-300 px-4 py-2">{req.song}</td>
                <td className="border border-gray-300 px-4 py-2">{req.dedication}</td>
                <td className="border border-gray-300 px-4 py-2">{req.paid ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
