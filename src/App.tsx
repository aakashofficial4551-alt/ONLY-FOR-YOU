
import React from "react";

function App() {
  return (
    <main className="app">
      <div className="card">
        <div className="heart">♡</div>

        <h1>Only For You</h1>

        <p>
          A little place for our memories,
          moments and beautiful stories.
        </p>

        <button onClick={() => alert("Welcome to Only For You ❤️")}>
          Enter Our World
        </button>

        <footer>
          Made with love ♡
        </footer>
      </div>
    </main>
  );
}

export default App;
