import React from "react";
import { LogInDiv, MainLandingDiv } from "./LandingStyle";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Formulario } from "../../components/Auth/Formulario";

function Landing() {

  const styles = {
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
  };

  return (
    <MainLandingDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <LogInDiv>
        <Formulario />
      </LogInDiv>

      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.1}
        containerStyle={styles}
      >
        <MouseParallaxChild factorX={0.3} factorY={0.5} containerStyle={styles}>
          <img src="https://germinar.org.ar/wp-content/uploads/2020/06/viveros-flora-nativa-proyecto.jpg" className="photo1" />
          <img src="https://germinar.org.ar/wp-content/uploads/2020/10/reforestadores-proyecto-2.jpg" className="photo2" />
          <img src="https://germinar.org.ar/wp-content/uploads/2020/06/charlas-ecosistemas-nativos-proyecto.jpg" className="photo5" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.7} factorY={0.8}>
          <img src="https://germinar.org.ar/wp-content/uploads/2020/06/guardianes-de-la-naturaleza-proyecto.jpg" className="photo6" />
          <img src="https://germinar.org.ar/wp-content/uploads/2020/06/techos-vivos-autoctonos-proyecto.jpg" className="photo8" />
        </MouseParallaxChild>

        <MouseParallaxChild factorX={0.5} factorY={0.3}>
          <img src="https://germinar.org.ar/wp-content/uploads/2022/10/juntos-somos-un-bosque-reserva-natural-maschwitz-germinar-ong-portada.jpg" className="photo3" />
          <img src="https://germinar.org.ar/wp-content/uploads/2022/05/dia-parques-reservas-bonaerenses-reserva-natural-ing-maschwitz-germinar-ong-2.jpg" className="photo7" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </MainLandingDiv>
  );
}
export default Landing;
