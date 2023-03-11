import { Blurhash } from "react-blurhash";

import './App.css';

function App() {
  console.log(window.screen.width);
  return (
    <div className="App">
      <Blurhash
        hash="LeG+grRiXAxt?wM{t7oyW@ofM{WB"
        width={window.screen.width}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    </div>
  );
}

export default App;
