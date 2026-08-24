import { useEffect, useState } from "react";
import "./style.css";

const skills = ["HTML", "CSS", "JS", "REACT", "JAVA", "PYTHON"];

const projects = [
   {
    title: "Weather app",
    description: "Real-time Weather Dashboard",
    image: `${import.meta.env.BASE_URL}w.jpg`
  },
  {
    title: "Music app",
    description: "Music Generator Dashboard",
    image: `${import.meta.env.BASE_URL}music.jpg`
  }
 
];

function App() {
  const [isLightTheme, setIsLightTheme] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLightTheme);
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">AS</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
          <button className="theme-toggle" onClick={() => setIsLightTheme(v => !v)}>
            {isLightTheme ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <h1 className="hero-title">Hi I'm Avani</h1>
          <p className="tagline">I build cool and useful websites</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <figure className="profile-figure">
              <img src={`${import.meta.env.BASE_URL}911.jpg`} alt="Avani profile" />
              <figcaption>Avani Shetty (Web Developer)</figcaption>
            </figure>
            <div className="about-text">
              <p>I'm from the ISE department.</p>
              <p>Currently I have built two projects--</p>
              <p>Weather, and music websites which you can view below</p>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => <div className="skill-item" key={skill}>{skill}</div>)}
          </div>
        </section>

        <section className="project-section" id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">API</span>
                </div>
                <a href="#contact" className="buttons">Live Demo</a>
                <a href="https://github.com/avanishetty1407-eng" target="_blank" rel="noreferrer" className="buttons">Github</a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Get in Touch</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required rows="5" />
            </div>
            <button type="submit" id="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Avani Shetty Code</p>
        <nav id="footer">
          <a href="https://github.com/avanishetty1407-eng" target="_blank" rel="noreferrer">Github</a>
          <a href="#" onClick={e => e.preventDefault()}>LinkedIn</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
