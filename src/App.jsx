import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";

function App() {
  const journals = data.map((item) => {
    return( <Content
      key = {item.id}
      {...item}
    />
    )
  });
  return (
    <div className="app">
      <Header />
      <section className="journal">
        {journals}
      </section>
    </div>
  );
}

export default App;
