import { useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Data } from "../../assets";
import "./carousel.style.css";

const Carousel = () => {
  const data = Data;
  const carousel = useRef(null);
  // const [intervalo, setIntervalo] = useState(0);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  /* const pasa = () => {
    let slide = data[intervalo];

    setInterval(() => {
      slide[intervalo].style.display = "none";
      setIntervalo(intervalo + 1);
      if (intervalo > data.length) {
        setIntervalo(0);
      }
      slide[intervalo].style.display = "block";
    }, 3000);
  }; */

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">U$ {oldPrice}</span>
                <span className="price">U$ {price}</span>
              </div>
            </div>
          );
        })}
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

export default Carousel;
