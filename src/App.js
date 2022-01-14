import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
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
        </footer>
      </div>
    </div>
  );
}
