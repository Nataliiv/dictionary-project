import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="island" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Nataliia Ivanchak and is{" "}
            <a href="https://github.com/Nataliiv/dictionary-project">
              open-sourced on GitHub
            </a>{" "}
            and <a href="https://graceful-rabanadas-d525e1.netlify.app/">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

 
