import { useNavigate } from 'react-router-dom';

function ErrorPage({ error }: { error: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-center max-w-md mb-4">
        Pagina niet gevonden:
        <br />
        {error}
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
      >
        Terug naar de startpagina
      </button>
    </div>
  );
}

export default ErrorPage;
