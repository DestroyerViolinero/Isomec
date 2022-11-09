import React from "react";
import './App.css'
import {Header } from "./component/Header";
import {Paginas} from "./component/Paginas";
import { HashRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
			    <Paginas/>
		    </main>
      </Router>
    </div>
  );
}

export default App;
