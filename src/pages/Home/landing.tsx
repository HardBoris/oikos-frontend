import logo from "../../logo.svg";

export const Landing = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <a href="/login">LogIn</a>
      </p>
      <p>
        <a href="/signup">Cadastro</a>
      </p>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};
