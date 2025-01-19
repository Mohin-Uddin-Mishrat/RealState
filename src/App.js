import logo from "./logo.svg";
import "./App.css";
import { FaAngleDoubleLeft, FaAngleLeft } from "react-icons/fa";
import Category from "./Components/Category";
import Service from "./Components/Service";
import Tutorials from "./Components/Tutorials";
import Property from "./Components/Property";
import Cities from "./Components/Cities";
import Agents from "./Components/Agents";
import Blogs from "./Components/Blogs";
import Subscribe from "./Components/Subscribe";
import Navar from "./Components/Navar";
import { About } from "./Components/About";

function App() {
  return (
    <div className="font-helvetica">
      <Navar></Navar>
      <section className="w-[100%] p-2 sm:w-[70.87%] mx-auto">
        <Service></Service>
        <About></About>
        <Category></Category>
      </section>
      <Tutorials></Tutorials>
      <section className="w-[100%] p-2 sm:w-[70.87%] mx-auto">
        <Property></Property>
        <Cities></Cities>
        <Agents></Agents>
        <Subscribe></Subscribe>
        <Blogs></Blogs>
      </section>
    </div>
  );
}

export default App;
