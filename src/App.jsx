import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div>
      <Header />
      <Home/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
