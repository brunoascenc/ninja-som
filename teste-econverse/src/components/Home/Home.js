import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import Instrumentos from "../Instrumentos/Instrumentos";
import Novidades from "../Novidades/Novidades";
import Vitrine from "../Vitrine/Vitrine";
import Marcas from "../Marcas/Marcas";
import About from "../About/About";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <Instrumentos />
      <Novidades />
      <Vitrine />
      <Marcas />
      <About />
    </main>
  );
};

export default Home;
