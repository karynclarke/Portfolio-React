import React from 'react';
import ReactDOM from "react-dom"
import './App.css';

//components
import Header from "./components/Header"
import Project from "./components/Project"
import Footer from "./components/Footer"



function App() {
  return (
<>
<Header />
<Project />
<Footer />
</> 

  );
}
    


// ReactDOM.render(<MainComponent />, document.querySelector("#app"));

export default App;
