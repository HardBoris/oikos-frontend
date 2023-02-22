import { useEffect } from "react";
import "../styles.css";

export const Purchases = () => {
  return (
    <>
      {/* <div className="titulo">
        <h1>Compras</h1>
      </div> */}
      <div>
        <div className="data">
          <p>Data da compra</p>
          <p>22 de fevereiro de 2022</p>
        </div>
        {/* <div className="column__head">
          <p>ingrediente</p>
          <p>Unidade de medida</p>
          <p>Quantidade</p>
          <p>Valor do ingrediente</p>
        </div> */}
        <table>
          <thead>
            <tr>
              <th>ingrediente</th>
              <th>Unidade de medida</th>
              <th>Quantidade</th>
              <th>Valor do ingrediente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>trigo</td>
              <td>kg</td>
              <td>10</td>
              <td>56</td>
            </tr>
            <tr>
              <td>açúcar</td>
              <td>kg</td>
              <td>10</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </>
  );
};
