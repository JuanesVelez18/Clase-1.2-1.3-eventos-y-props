import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

import "./App.css";

function App() {
  const user = {
    name: "Juanito",
    age: 45,
    favoriteFood: "Posole",
  };

  return (
    <>
      <Header />
      <Home />
      <Detail
        detail="Esta pagina busca enseñar React a personas en la programación web"
        color="red"
        fontSize={20}
        user={user}
      />
      <Footer />
    </>
  );
}

export default App;
