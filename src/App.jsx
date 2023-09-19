import "./App.css";
import Info from "./components/Info";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
