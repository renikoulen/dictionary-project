import logo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid " alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was coded by Reni Koulen, is
          <a
            href="https://github.com/renikoulen/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
          {" and is "}
          <a
            href="https://relaxed-franklin-d45c08.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
          <br />
          Images are from
          <a
            href="https://api.pexels.com/v1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels.com.
          </a>
        </footer>
      </div>
    </div>
  );
}
