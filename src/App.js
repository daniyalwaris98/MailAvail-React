import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import FunctionClick from "./Components/EventHandler";
import ClassClick from "./Components/buttonCick";
import { ParentComponent } from "./Components/ParentComponent";
import { Practice } from "./Components/TerneryOpearator";
import { NameList } from "./Components/NameList";
import { Navbar } from "./Navbar/navbar";
import { Hero } from "./Hero/Hero";
import { Verification } from "./Verification/Verification";
import { Cards } from "./Cards/Cards";
import { Register } from "./Register/Register";
import { Credits } from "./Credits/Credits";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Verification />
      <Cards text="Benefits of using our Platform" type="benefits" />
      <Register />
      <Cards text="Email Verification Solutions Include" type="solutions" />
      <Credits />
      <Footer />

      {/* <Welcome />
      <FunctionClick />
      <ClassClick />
      <ParentComponent />
      <Practice />
      <NameList />
      <Greet Name="anything" />
      <Greet Name="anywhere" />
      <Greet Name="danny" /> */}
    </div>
  );
}

export default App;
