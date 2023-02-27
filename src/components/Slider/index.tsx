import { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// import { Data } from "../../assets";
import "./slider.style.css";

const Slider = () => {
  const data = [
    "Lleva el registro de todas tus compras",
    "Guarda todas tus recetas",
    "Controla tu producción",
    "Calcula el costo de tus productos",
    "Controla tu inventario",
  ];
  const [indice, setIndice] = useState(0);

  const handleLeftClick = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      setIndice(data.length - 1);
    }
  };

  const handleRightClick = () => {
    if (indice < data.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };

  /* const pasa = setInterval(() => {
      handleRightClick();
    }, 3000);
  }; */

  useEffect(() => {
    const pasa = setInterval(() => {
      handleRightClick();
    }, 3000);
    return () => clearInterval(pasa);
  });

  return (
    <div className="box">
      <div className="box-image">
        <h1>{data[indice]}</h1>
        {/* <img src={data[indice].image} alt="" /> */}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <FaChevronCircleLeft />
        </button>
        <button onClick={handleRightClick}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
