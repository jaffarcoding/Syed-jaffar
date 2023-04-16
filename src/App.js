import { Fragment } from "react";
import "./App.css";
import Header from "./component/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Projects from "./component/projects/Projects";
import Contacts from "./component/contacts/Contacts";
import Footer from "./component/footer/Footer";
import ScrollUp from "./scrolls/ScrollUp";
function App() {
  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault();
  // });
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </Router>
    </Fragment>
  );
}

export default App;
