import React from "react";
import sky from "../../assets/img/my-footprint/montagnas.png";
import capa1 from "../../assets/img/my-footprint/capa1.png";
import capa2 from "../../assets/img/my-footprint/capa2.png";
import capa3 from "../../assets/img/my-footprint/capa3.png";
import capa4 from "../../assets/img/my-footprint/capa4.png";
import capa5 from "../../assets/img/my-footprint/capa5.png";
import { Parallax } from "react-parallax";

const MyFootprint = () => {
  const inlineStyle = {
    background: "#fff",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
  };

  return (
    <div>
      {/* <Parallax bgImage={sky} strength={500}>
        <div style={{ height: "100vh" }}>
          <div style={inlineStyle}>Prueba de contenido</div>
        </div>
      </Parallax> */}

      <Parallax
        bgImage={sky}
        strength={500}
        renderLayer={(precentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: "red",
              /* backgroundImage: "url(${capa5})", */
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
      >
        <div style={{ height: "100vh" }}>
          <div style={inlineStyle}>Prueba de contenido</div>
        </div>
      </Parallax>
    </div>
  );
};

export default MyFootprint;
