import { useEffect, useState } from "react";

type RootResponse = { message?: string } & Record<string, unknown>;

const API_BASE = "http://localhost:5000";

const App: React.FC = () => {
    const [data, setData] = useState<RootResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`${API_BASE}/`)
          .then((res) => {
              if (!res.ok) throw new Error(`Request failed with ${res.status}`);
              return res.json();
          })
          .then((json: RootResponse) => setData(json))
          .catch((e) => setError(e instanceof Error ? e.message : String(e)))
          .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
            <h1>Jeffrey Hoelzel Jr</h1>
            <p>Response from FastAPI root</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </main>
    );
}

export default App;

