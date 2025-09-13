import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchHomepage } from "../utils/api";
import { type HomeMetadata } from "../utils/types";

const Home: React.FC = () => {
  const [content, setContent] = useState<HomeMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setError(null);
    fetchHomepage()
      .then(setContent)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!content) return <p>No content availble...</p>;

  const {
    name, 
    headline, 
    summary, 
    avatar, 
    location, 
    contact, 
    socials = [], 
    actions = []
  } = content;

  const isInternal = (url: string) => url.startsWith("/");

  return (
    <main>
      <header>
        {avatar?.url && (
          <img
            src={avatar.url}
            alt={avatar?.alt ?? "profile photo"}
            width={160}
            height={160} 
          />
        )}
        <h1>{name}</h1>
        {headline && <h2>{headline}</h2>}
        {location && <p>{location}</p>}
      </header>

      {summary && (<section aria-label="About"><p>{summary}</p></section>)}

      <section aria-label="Contact & Socials">
        <ul>
          {contact?.url && (
            <li>
              <a href={contact.url}>{contact?.label ?? "Contact"}</a>
            </li>
          )}
          {socials.map((soc, i) => (
            <li key={`${soc.url}-${i}`}>
              <a href={soc.url} aria-label={soc.label} target="_blank">{soc.label}</a>
            </li>
          ))}
        </ul>
      </section>

      {actions.length > 0 && (
        <nav aria-label="Actions">
          <ul>
            {actions.map((act, i) => (
              <li key={`${act.url}-${i}`}>
                {isInternal(act.url) ? (
                  <Link to={act.url}>{act.label}</Link>
                ) : (
                  <a href={act.url}>{act.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}

export default Home;
