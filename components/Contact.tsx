import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fetchContactPage, postContactForm } from "../utils/api";
import { type ContactMetadata } from "../utils/types";

const Contact: React.FC = () => {
  const [content, setContent] = useState<ContactMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchContactPage()
      .then(setContent)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  const iconFor = (raw?: string) => {
    const key = (raw || "").toLowerCase();
    switch (key) {
      case "github": return <FaGithub />;
      case "linkedin": return <FaLinkedin />;
      default: return null;
    }
  }

  const submitContactForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form)
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const banner = document.getElementById("contactBanner");
    const setBanner = (text: string, cls: "ok" | "error") => {
      if (!banner) return;
      banner.textContent = text;
      banner.className = `inlineBanner ${cls}`;
      setTimeout(() => {
        banner.className = "inlineBanner";
        banner.textContent = "";
      }, 1600);
    }
    
    if (!name || !email || !message) {
      setBanner("Please complete all fields before submitting", "error");
      return;
    }

    try {
      await postContactForm(name, email, message);
      setBanner("Message sent", "ok");
      form.reset();
    } catch (error: any) {
      setBanner(error?.message || "Something went wrong", "error");
    }
  }

  if (loading) return <main className="sectionPad"><div className="wrap">Loading...</div></main>;
  if (error) return <main className="sectionPad"><div className="wrap">Error: {error}</div></main>;
  if (!content) return <main className="sectionPad"><div className="wrap">No content availble...</div></main>;

  return (
    <main>
      <section className="sectionPad">
        <div className="wrap">
          <h1 className="pageTitle">"Contact"</h1>
          {content.blurb && <p className="subtitle">{content.blurb}</p>}

          <div className="contactGrid">
            <aside className="contactCard" aria-label="Contact methods">
              <div className="links">
                {content.socials?.map((m, i) => (
                  <a key={`${m.url}-${i}`} className="btn" href={m.url} target="_blank" rel="noreferrer">
                    {iconFor(m.icon)}
                    <span className="btnLabel">{m.label}</span>
                  </a>
                ))}
              </div>
            </aside>

            <div className="formCard">
              <div id="contactBanner" className="inlineBanner" aria-live="polite" />

              <form onSubmit={submitContactForm} noValidate>
                <div className="formCard">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="messsage" rows={6} placeholder="Your message" />
                  </div>
                  <div className="ctaRow">
                    <button type="submit" className="btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
